<template>
  <header class="header">

    <nav class="navigation start">
      <router-link class="nav-link" to="/players">Игроки</router-link>
      <router-link class="nav-link" to="/Training">Тренировки</router-link>
      <router-link class="nav-link" to="/">Генератор</router-link>
      <router-link class="nav-link" to="/news">Новости</router-link>
      <router-link class="nav-link" to="/guides">Гайды</router-link>
    </nav>

    <nav class="logo">
      <router-link class="logo-link" to="/">Exec</router-link>
    </nav>

    <div v-if="Authstore.user" class="user-auth">
      <img :src="Authstore.user.avatarfull" :alt="Authstore.user.avatarfull">

      <div class="logout_nickname">
        <h3 class="nickname-auth">{{ Authstore.user.personaname }}</h3>
        <button @click="Authstore.logout()" class="logout-btn">Выйти</button>
      </div>

    </div>

    <div v-else>
      <button @click="Authstore.login()" class="sign-steam">Login with Steam</button>
    </div>

  </header>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <footer>

    <div class="container-footer">

      <h1 class="logo-footer">Exec</h1>

      <div class="content-footer">

        <div class="navigation-footer">
          <p class="title-link">Настройки</p>
          <nav class="nav-footer">
            <router-link class="link-footer" to="/players">Игроки</router-link>
            <router-link class="link-footer" to="/">Генератор прицела</router-link>
          </nav>
        </div>

        <div class="navigation-footer">
          <p class="title-link">Тренировки и гайды</p>
          <nav class="nav-footer">
            <router-link class="link-footer" to="/">Игроки</router-link>
            <router-link class="link-footer" to="/">Игроки</router-link>
          </nav>
        </div>

        <div class="navigation-footer">
          <p class="title-link">Новости</p>
          <nav class="nav-footer">
            <router-link class="link-footer" to="/">Игроки</router-link>
            <router-link class="link-footer" to="/">Игроки</router-link>
          </nav>
        </div>

      </div>

      <div class="social-media">
        <img src="@/assets/img/social/footer/discord.png" alt="discord">
        <img src="@/assets/img/social/footer/vkontakte.png" alt="vkontakte">
        <img src="@/assets/img/social/footer/steam.png" alt="steam">
        <img src="@/assets/img/social/footer/github.png" alt="github">
      </div>
    </div>

    <p class="copyright">Copyright© 2023</p>

  </footer>
</template>

<script setup>
import { useAuthStore } from '@/store/auth.js';

const Authstore = useAuthStore();
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

body {
  background: #000000;
  margin: 0;
  padding: 0;
}

.header {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
}

.logo {
  position: absolute;
  width: 160px;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.nav-link {
  font-size: 16px;
  color: #fff;
  text-decoration: none;
}

.logo-link {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
}

.sign-steam {
  color: #fff;
  background: none;
  font-size: 16px;
  margin-right: 20px;
  font-family: 'Montserrat', sans-serif;
}

.sign-steam:hover {
  text-decoration: underline;
}

.user-auth {
  display: flex;
  align-items: center;
}

.user-auth img {
  width: 40px;
  height: 40px;
  border-radius: 999999px;
}

.nickname-auth {
  font-size: 16px;
  font-weight: 500;
  padding: 0 10px;
}

.logout_nickname {
  display: flex;
  flex-direction: column;
}

.logout-btn {
  border: none;
  background: none;
  color: #b2b2b2;
  font-family: 'Montserrat', sans-serif;
}

nav a {
  font-weight: 400;
  margin: 0 20px;
}

footer {
  padding: 30px 20px;
}

.logo-footer {
  font-size: 48px;
}

.container-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
}

.content-footer {
  display: flex;
}

.navigation-footer {
  text-align: center;
}

.nav-footer {
  display: flex;
  flex-direction: column;
}

.title-link {
  font-size: 16px;
  font-weight: 600;
  padding: 10px 0;
}

.link-footer {
  font-size: 15px;
  color: #fff;
  text-decoration: none;
  margin: 0px 80px;
}

.social-media img {
  padding: 0 5px;
}

.copyright {
  font-size: 15px;
  font-weight: 500px;
  text-align: center;
  padding-right: 30px;
}
</style>
