<template>
  <header class="header">

    <nav class="navigation start">
      <router-link class="nav-link" to="/players">Игроки</router-link>
      <router-link class="nav-link" to="/">Тренировки</router-link>
      <router-link class="nav-link" to="/">Генератор</router-link>
      <router-link class="nav-link" to="/">Новости</router-link>
      <router-link class="nav-link" to="/">Гайды</router-link>
    </nav>

    <nav class="logo">
      <router-link class="logo-link" to="/">Exec</router-link>
    </nav>

    <nav class="navigation end">
      <router-link class="nav-link" to="/">Войти</router-link>
      <router-link class="nav-link" to="/">Регистрация</router-link>
    </nav>

  </header>

  <router-view></router-view>

  <footer>

    <div class="container">

      <h1 class="logo-footer">Exec</h1>

      <div class="content">

        <div class="navigation-footer">
          <p class="title-link">Настройки</p>
          <nav class="nav-footer">
            <router-link class="link-footer" to="/">Игроки</router-link>
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

nav a {
  font-weight: 400;
  margin: 0 20px;
}

nav a.router-link-exact-active {}

footer {
  padding: 30px 20px;
}

.logo-footer {
  font-size: 48px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px;
}

.content {
  display: flex;
}

.navigation-footer{
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
