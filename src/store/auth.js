import { defineStore } from 'pinia'
import axios from 'axios'
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient('https://eqtgcskjmwukbdbzmzgf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdGdjc2tqbXd1a2JkYnptemdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NzUyNTIsImV4cCI6MTk5OTU1MTI1Mn0.CfbPB8I0XFIsvbVL18u7aI68ExOMrBC_f7MdqYcIM7s')

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    settings_id: null
  }),
  actions: {
    async login() {
      // Define the return URL for the Steam login flow

      /**
       * I think, this could be moved to / or /profile,
       * I see no reason to use auth/steam
       */
      const returnUrl = window.location.origin + '/players/'

      // Redirect the user to the Steam login page
      window.location.href = `https://steamcommunity.com/openid/login?` +
        `openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&` +
        `openid.identity=http://specs.openid.net/auth/2.0/identifier_select&` +
        `openid.mode=checkid_setup&` +
        `openid.ns=http://specs.openid.net/auth/2.0&` +
        `openid.realm=${window.location.origin}&` +
        `openid.return_to=${encodeURIComponent(returnUrl)}`
    },

    async handleLoginCallback() {
      console.log('called')
      // Parse the query parameters from the URL
      const queryParams = new URLSearchParams(window.location.search)

      // Steam Web API Key
      const key = "3C8BC55894A1626EE197FA366150D8B0";

      // Params to auth request to Steam
      const ns = "http://specs.openid.net/auth/2.0"
      const mode = "check_authentication"
      const endpoint = queryParams.get('openid.op_endpoint')
      const claimedId = queryParams.get('openid.claimed_id')
      const steamid = queryParams.get('openid.claimed_id').replace(/^.*\//, '')
      const identity = queryParams.get('openid.identity')
      const returnTo = queryParams.get('openid.return_to')
      const responseNonce = queryParams.get('openid.response_nonce')
      const assocHandle = queryParams.get('openid.assoc_handle')
      const signed = queryParams.get('openid.signed')
      const signature = queryParams.get('openid.sig')

      const token = uuidv4()

      const response = axios.get("https://steamcommunity.com/openid/login?", {
        params: {
          'openid.ns': decodeURIComponent(ns),
          'openid.mode': mode,
          'openid.op_endpoint': endpoint,
          'openid.claimed_id': claimedId,
          'openid.identity': identity,
          'openid.return_to': returnTo,
          'openid.response_nonce': responseNonce,
          'openid.assoc_handle': assocHandle,
          'openid.signed': signed,
          'openid.sig': signature,
        },
        headers: {
          'Content-Type': 'text/plain'
        }
      }).then(() => {
        /**
         * This should happen only if user is authed, is_valid == true in response
         */
        return axios.get("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=" + key + '&steamids=' + steamid)
      })

      const user = (await response).data.response.players[0]

      console.log(user)

      // Store the user object in state
      user.profileurl = 'https://steamcommunity.com/profiles/' + user.steamid
      this.user = user
      this.token = token

      await this.saveUserDataToSupabase(user, token)
    },
    logout() {
      // Clear the user object from state
      this.user = null
      this.token = null
    },

    async saveUserDataToSupabase(user, token) {
      const { data, error } = await supabase
        .from('users')
        .upsert([
          {
            steam_id: user.steamid,
            personaname: user.personaname,
            profileurl: user.profileurl,
            avatarfull: user.avatarfull,
            suid: token
          }
        ])

      if (error) {
        console.error(error)
      } else {
        console.log(data)
      }
    }
  }
})
