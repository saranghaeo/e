<template>
    <div v-if="user">
      <h2>Привет, {{ user.username }}!</h2>
      <p>Ваш ID: {{ user.id }}</p>
    </div>
    <div v-else>
      <h2>Вы не авторизованы</h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: null
      }
    },
    created() {
      this.fetchUser();
    },
    methods: {
      async fetchUser() {
        try {
          const response = await fetch('/api/user');
          const data = await response.json();
          if (data.error) {
            this.user = null;
          } else {
            this.user = data;
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  </script>
  