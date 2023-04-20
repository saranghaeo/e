import { defineStore } from 'pinia'
import SteamWebAPI from 'steam-webapi'
import axios from 'axios'

const steam = new SteamWebAPI({
  apiKey: 'F2E22614EED990662441106A6300A403',
  format: 'json'
})

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    async login() {
      // Define the return URL for the Steam login flow
      const returnUrl = window.location.origin + '/auth/steam'

      // Construct the Steam login URL
      const steamLoginUrl = `https://steamcommunity.com/openid/login?` +
        `openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&` +
        `openid.identity=http://specs.openid.net/auth/2.0/identifier_select&` +
        `openid.mode=checkid_setup&` +
        `openid.ns=http://specs.openid.net/auth/2.0&` +
        `openid.realm=${window.location.origin}&` +
        `openid.return_to=${encodeURIComponent(returnUrl)}`

      // Redirect the user to the Steam login page
      window.location.href = steamLoginUrl
    },

    async handleLoginCallback() {
      console.log('called')
      // Parse the query parameters from the URL
      const queryParams = new URLSearchParams(window.location.search)
      
      // Extract the SteamID and session ID from the query parameters
      const steamid = queryParams.get('openid.identity').replace(/^.*\//, '')
      const sessionID = queryParams.get('openid.assoc_handle')
      
      // Exchange the session ID for a Steam login session
      const { data } = await axios.post('/api/auth/steam', { sessionID })
      
      // Use the Steam Web API to get the user's profile information
      const { response } = await steam.getPlayerSummaries({
        steamids: steamid
      })
      
      const user = response.players[0]

      // Store the user object in state
      this.user = user
    },

    logout() {
      // Clear the user object from state
      this.user = null
    }
  }
})