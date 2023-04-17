import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue';
import UserProfile from '@/components/UserProfile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainPage.vue')
    },
    {
      path: '/players',
      name: 'players',
      component: () => import('../views/PlayersPage.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsPage.vue')
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import('../views/GuidesPage.vue')
    },
    { path: '/', redirect: '/user' },
    { path: '/login', component: Login },
    { path: '/user', component: UserProfile, meta: { requiresAuth: true } }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !window.user) {
    next('/login');
  } else {
    next();
  }
});

export default router;
