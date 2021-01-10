import Vue from 'vue'
import currencyFilter from '@/filters/currency.filter'
import shortDescriptionFilter from '@/filters/shortDescription.filter'
import dateFilter from '@/filters/date.filter'

Vue.filter('currency', currencyFilter)
Vue.filter('description', shortDescriptionFilter)
Vue.filter('date', dateFilter)
