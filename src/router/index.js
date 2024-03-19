import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Analyze from '../views/Analyze.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/analyze',
    name: 'analyze',
    component: Analyze,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
