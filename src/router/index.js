import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category.vue')
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
