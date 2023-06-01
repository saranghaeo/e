<template>
  <header class="header">

    <nav class="navigation start">
      <router-link class="nav-link" to="/players">Игроки</router-link>
      <router-link class="nav-link" to="/Training">Тренировки</router-link>
      <router-link class="nav-link" to="/generator">Генератор</router-link>
      <router-link class="nav-link" to="/blog">Блог</router-link>
    </nav>

    <nav class="logo">
      <router-link class="logo-link" to="/">Exec</router-link>
    </nav>

    <div v-if="Authstore.user" class="user-auth">
      <router-link to="/profile">
        <img :src="Authstore.user.avatarfull" :alt="Authstore.user.avatarfull">
      </router-link>
    
      <div class="logout_nickname">
        <router-link to="/profile" class="nav-link">
          <h3 class="nickname-auth">{{ Authstore.user.personaname }}</h3>
        </router-link>
        <button @click="Authstore.logout()" class="logout-btn">Выйти</button>
      </div>

    </div>

    <div v-else>
      <button @click="Authstore.login()" class="sign-steam">Войти через Steam</button>
    </div>

  </header>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <footer>
    <div class="content-footer">

      <div class="block-footer">

        <h1 class="logo-footer">Exec</h1>

        <div class="social-media">

          <a href="https://discord.gg/9ZbU3HwNNR">
            <img src="@/assets/img/social/footer/discord.png" alt="discord">
          </a>
          <a href="https://vk.com/desuyoyo">
            <img src="@/assets/img/social/footer/vkontakte.png" alt="vkontakte">
          </a>
          <a href="https://steamcommunity.com/id/saranghaeo/">
            <img src="@/assets/img/social/footer/steam.png" alt="steam">
          </a>

          <a href="https://github.com/saranghaeo">
            <img src="@/assets/img/social/footer/github.png" alt="github">
          </a>

        </div>

      </div>

      <div class="block-nav">

        <div class="section">
          <p class="title-link">Настройки</p>
          <nav class="nav-footer">
            <router-link class="link-footer" to="/players">Игроки</router-link>
            <router-link class="link-footer" to="/generator">Генератор прицела</router-link>
          </nav>
        </div>

        <div class="section">
          <p class="title-link">Тренировки и новости</p>
          <nav class="nav-footer">
            <router-link class="link-footer" to="/Training">Тренировки</router-link>
            <router-link class="link-footer" to="/blog">Блог</router-link>
          </nav>
        </div>

      </div>

    </div>

    <p class="copyright">Copyright© 2023</p>

  </footer>
</template>

<script setup>
import { useAuthStore } from '@/store/auth.js';

const Authstore = useAuthStore();

Authstore.loadUserFromLocalStorage();
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');

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
  background: conic-gradient(from -66.6deg at 100% 0%, #414042 0deg, #060515 360deg);
  margin: 0;
  padding: 0;
}

.header {
  position: relative;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 120px;
  background: #000000;
}

.logo {
  position: absolute;
  width: 160px;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.nav-link {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}

.logo-link {
  color: #fff;
  text-decoration: none;
  font-family: 'Orbitron';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 50px;
}

.sign-steam {
  color: #fff;
  background: none;
  font-size: 18px;
  margin-right: 20px;
  font-family: 'Montserrat', sans-serif;
}

.sign-steam:hover {
  transform: scale(1.1);
}

.user-auth {
  display: flex;
  align-items: center;
}

.user-auth img {
  width: 40px;
  height: 40px;
  border-radius: 999999px;
  margin-right: 8px;
}

.nickname-auth {
  font-size: 18px;
  font-weight: 500;
  padding: 0 10px;
  margin-bottom: 5px;
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
  transition: 0.1s;
}

.logout-btn:hover {
  color: #fff;
}

nav a {
  font-weight: 400;
  margin: 0 20px;
}

footer {
  margin: 0 auto;
  padding: 30px 120px;
  background: #000000;
}

.content-footer {
  display: flex;
  justify-content: space-between;
}

.block-footer {
  display: flex;
  flex-direction: column;
}

.block-nav {
  display: flex;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-footer {
  font-family: 'Orbitron';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 60px;
  padding-bottom: 25px;
}

.title-link {
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0;
}

.link-footer {
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  margin: 0px 80px;
  padding-bottom: 5px;
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
