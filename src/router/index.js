import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:name',
    name: 'CatItemDetail',
    component: () => import('../components/Category/CatItemDetail.vue')
  },
  {
    path: '/category/:name/:id',
    name: 'ProductDetail',
    component: () => import('../components/Product/ProductDetail.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
