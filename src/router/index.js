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
  ]
})

export default router
