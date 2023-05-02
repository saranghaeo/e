import { createRouter, createWebHistory } from 'vue-router'

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
    {
      path: '/auth/steam',
      name: 'auth-steam',
      component: () => import('../views/AuthSteam.vue')
    },
    {
      path: '/training',
      name: 'training',
      component: () => import('../views/TrainingPage.vue')
    },
    {
      path: '/human',
      name: 'human',
      component: () => import('../views/HumanBench.vue')
    },
  ]
})

export default router
