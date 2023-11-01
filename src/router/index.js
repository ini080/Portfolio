import { createRouter, createWebHistory } from 'vue-router'
import LockPage from '../views/LockPage.vue'
import HomePage from '../views/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Lock',
      component: LockPage
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomePage
    }
  ]
})

export default router
