import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import VueResource from 'vue-resource'
import  { ToastPlugin, ConfirmPlugin } from 'vux'

Vue.use(VueResource)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
