<template>
    <div>
      <button @click="login">Войти через Steam</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        window.location.href = '/auth/steam'; // перенаправление на страницу аутентификации Steam
      }
    }
  }
  </script>
  