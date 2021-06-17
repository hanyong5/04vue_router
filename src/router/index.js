import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import product from '../components/product.vue'
import board from '../components/board.vue'
import view404 from '../components/404.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: view404
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/board',
    name: 'board',
    component: board
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
