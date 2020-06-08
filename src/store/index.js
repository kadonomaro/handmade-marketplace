import Vue from 'vue'
import Vuex from 'vuex'
import { settings } from '@/server.settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    }
  },
  actions: {
    async fetchProducts ({ commit }) {
      const response = await fetch(settings.url + '/products')
      const products = await response.json()
      commit('SET_PRODUCTS', products)
    }
  },
  getters: {
    getProducts (state) {
      return state.products
    }
  },
  modules: {
  }
})
