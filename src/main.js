import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './css/common.scss'

import currencyFilter from '@/filters/currency.filter'
import translateFilter from '@/filters/translate.filter'

Vue.filter('currency', currencyFilter)
Vue.filter('translate', translateFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
