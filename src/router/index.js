import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'

import store from '../store' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inicio',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    meta:{
      autenticado:true
    }
  },
  {
    path: '/ordenes',
    name: 'orders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Orders.vue'),
    meta:{
      autenticado:true
    }
  },
  {
    path: '/orden/:id',
    name: 'Order',
    component: Order,
    props: true,
    meta:{
      autenticado:true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let user = store.state.token;
  console.log(to)
  let private_rute = to.matched.some(record=> record.meta.autenticado)

  if(private_rute && !user){
    next('/')
  }
  else if(!private_rute && user){
    next('/inicio')
  }
  else{
    next();
  }
})

export default router