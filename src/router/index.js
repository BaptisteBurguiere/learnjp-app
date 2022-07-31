import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KanjiView from '../views/KanjiView.vue'
import ExpressionView from '../views/ExpressionView.vue'
import RandomView from '../views/RandomView.vue'
import 'animate.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        enterClass: 'animate__animated animate__slideInLeft animate__faster',
        leaveClass: 'animate__animated animate__slideOutRight animate__slow',
        mode: 'default'
      }
    },
    {
      path: '/kanji',
      name: 'kanji',
      component: KanjiView,
      meta: {
        enterClass: 'animate__animated animate__slideInRight animate__faster',
        leaveClass: 'animate__animated animate__slideOutLeft animate__slow',
        mode: 'default'
      }
    },
    {
      path: '/expression',
      name: 'expression',
      component: ExpressionView,
      meta: {
        enterClass: 'animate__animated animate__slideInRight animate__faster',
        leaveClass: 'animate__animated animate__slideOutLeft animate__slow',
        mode: 'default'
      }
    },
    {
      path: '/random',
      name: 'random',
      component: RandomView,
      meta: {
        enterClass: 'animate__animated animate__slideInRight animate__faster',
        leaveClass: 'animate__animated animate__slideOutLeft animate__slow',
        mode: 'default'
      }
    },
  ]
})

export default router
