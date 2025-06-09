import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import CartView from '../view/CartView.vue'
import StoreView from '@/view/StoreView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
  {
    path: '/store/:type',
    name: 'StoreView',
    component: StoreView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
