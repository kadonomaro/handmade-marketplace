import Vue from 'vue'
import Vuex from 'vuex'
import { settings } from '@/server.settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: []
  },
  mutations: {
    SET_CATEGORIES (state, categories) {
      state.categories = categories
    },

    SET_PRODUCTS (state, products) {
      state.products = products
    }
  },
  actions: {
    async fetchCategories ({ commit }) {
      const response = await fetch(settings.url + '/categories')
      const categories = await response.json()
      commit('SET_CATEGORIES', categories)
    },

    async fetchProducts ({ commit }) {
      const response = await fetch(settings.url + '/products')
      const products = await response.json()
      commit('SET_PRODUCTS', products)
    }
  },
  getters: {
    getCategories (state) {
      return state.categories
    },

    getCategoryById (state) {
      return (id) => state.categories.find(cat => cat.id === id)
    },

    getProducts (state) {
      return state.products
    }
  },
  modules: {
  }
})
