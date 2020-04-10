import Vue from 'vue'
import VueRouter from 'vue-router'
import Sweethome from '../views/Sweethome.vue'
// import Login from '../views/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'sweethome',
    component: Sweethome,

  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products')
  }


]

const router = new VueRouter({
  routes
})

export default router
