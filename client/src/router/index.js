import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // Home
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // Register endpoint
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
