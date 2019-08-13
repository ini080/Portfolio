import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Start from './views/Start.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
  ]
})
