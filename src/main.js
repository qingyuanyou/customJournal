// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style/index.scss'
import store from './store'
import ElementUI from 'element-ui' // import UI frame
import 'element-ui/lib/theme-chalk/index.css' // import the css of element-ui

Vue.config.productionTip = false
Vue.use(ElementUI) // use the elementUI
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render (h) {
    return h(App)
  }
}).$mount('#app')
