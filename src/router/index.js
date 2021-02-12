import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Dashboard from '@/components/Dashboard.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
          guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
          guest: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
          requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } 
      else{
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.user)) {
            next({ name: 'Dashboard'})
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()
      }
      else{
          next({ name: 'Dashboard'})
      }
  }else {
      next()
  }
})

export default router