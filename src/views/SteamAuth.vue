<template>
  <div>
    <button @click="login">Login with Steam</button>
    <div v-if="user">
      <p>Welcome {{ user.displayName }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import passportSteam from 'passport-steam';
import SteamStrategy from 'passport-steam';

export default {
  data() {
    return {
      user: null,
      apiKey: ''
    };
  },
  mounted() {
    axios.get('/api/user').then(res => {
      this.user = res.data;
    }).catch(err => {
      console.log(err);
    });
  },
  methods: {
    login() {
      window.location.href = '/api/auth/steam';
    },
    logout() {
      axios.get('/api/logout').then (() => {
        this.user = null;
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>
<style lang="">
  
</style>