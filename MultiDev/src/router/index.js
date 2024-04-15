import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/pages/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/pages/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: () => import('../views/pages/ContactPage.vue')
    },
  ]
})

export default router
