import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import 'animate.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        enterClass: 'animate__animated animate__slideInRight animate__faster',
        leaveClass: '',
        mode: 'in-out'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
      meta: {
        enterClass: 'animate__animated animate__slideInUp animate__faster',
        leaveClass: '',
        mode: 'in-out'
      }
    },
  ]
})

export default router
