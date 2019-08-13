import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Start from './views/Start.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path:'/Home',
      name:'Home',
      component: Home
    }

  ]
})
