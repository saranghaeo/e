import { defineStore } from 'pinia'
import axios from 'axios'
import { supabase } from '@/supabase.js'
import { v4 as uuidv4 } from 'uuid'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null
  }),
  actions: {
    loadUserFromLocalStorage() {
      const user = JSON.parse(localStorage.getItem('user'))
      const token = localStorage.getItem('token')

      if (user && token) {
        this.user = user
        this.token = token
      }
    },
    async login() {
      const returnUrl = `${window.location.origin}/players/`
      const loginUrl = `https://steamcommunity.com/openid/login?openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.mode=checkid_setup&openid.ns=http://specs.openid.net/auth/2.0&openid.realm=${window.location.origin}&openid.return_to=${encodeURIComponent(returnUrl)}`
      window.location.href = loginUrl
    },

    async handleLoginCallback() {
      const queryParams = new URLSearchParams(window.location.search)

      const key = "3C8BC55894A1626EE197FA366150D8B0"
      const ns = "http://specs.openid.net/auth/2.0"
      const mode = "check_authentication"
      const endpoint = queryParams.get('openid.op_endpoint')
      const claimedId = queryParams.get('openid.claimed_id')
      const steamid = claimedId ? claimedId.replace(/^.*\//, '') : ''
      const identity = queryParams.get('openid.identity')
      const returnTo = queryParams.get('openid.return_to')
      const responseNonce = queryParams.get('openid.response_nonce')
      const assocHandle = queryParams.get('openid.assoc_handle')
      const signed = queryParams.get('openid.signed')
      const signature = queryParams.get('openid.sig')

      const token = uuidv4()

      try {
        await axios.get("https://steamcommunity.com/openid/login", {
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
        })

        const response = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&steamids=${steamid}`)
        const user = response.data.response.players[0]

        user.profileurl = `https://steamcommunity.com/profiles/${user.steamid}`
        this.user = user
        this.token = token

        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)

        await this.saveUserDataToSupabase(user, token)

      } catch (error) {
        console.error(error)
      }
    },

    logout() {
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
