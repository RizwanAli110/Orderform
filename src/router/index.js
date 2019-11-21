import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OrderForm from '../views/OrderForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/orderform',
    name: 'orderform',
    component: OrderForm
  
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
