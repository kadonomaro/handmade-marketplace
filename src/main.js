import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './css/common.scss'

import currencyFilter from '@/filters/currency.filter'

Vue.filter('currency', currencyFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
