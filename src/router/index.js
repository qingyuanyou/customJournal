import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.js'
Vue.use(Router)

export default new Router({
  base: '/custom/',
  mode: 'history',
  routes
})
