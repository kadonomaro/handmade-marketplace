import Vue from 'vue'
import currencyFilter from '@/filters/currency.filter'
import shortDescriptionFilter from '@/filters/shortDescription.filter'

Vue.filter('currency', currencyFilter)
Vue.filter('description', shortDescriptionFilter)
