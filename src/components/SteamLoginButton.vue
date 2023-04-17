<template>
    <button @click="login">Sign in with Steam</button>
  </template>
  
  <script>
  import AuthService from '@/services/auth.service';
  
  export default {
    methods: {
      login() {
        AuthService.login().then(response => {
          window.location.href = response.data.redirectUrl;
        });
      },
    },
  };
  </script>