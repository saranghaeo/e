import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router';
import passport from 'passport';

require('./passport');

passport.deserializeUser((user, done) => {
    window.user = user;
    done(null, user);
  });
  

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).mount('#app')
