import Vue from 'vue'
import currencyFilter from '@/filters/currency.filter'
import translateFilter from '@/filters/translate.filter'

Vue.filter('currency', currencyFilter)
Vue.filter('translate', translateFilter)
