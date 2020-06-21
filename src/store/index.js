import Vue from 'vue'
import Vuex from 'vuex'
import { settings } from '@/server.settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    filters: []
  },
  mutations: {
    SET_CATEGORIES (state, categories) {
      state.categories = categories
    },

    SET_PRODUCTS (state, products) {
      state.products = products
    },

    SET_FILTERS (state, filters) {
      state.filters = filters
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
    },

    async fetchFilters ({ commit }) {
      const response = await fetch(settings.url + '/content-manager/components/product.spec')
      const filters = await response.json()
      const data = filters.data.component.schema.attributes.name.enum
      commit('SET_FILTERS', data)
    }
  },
  getters: {
    getCategories (state) {
      return state.categories
    },

    getCategoryByName (state) {
      return (name) => state.categories.find(cat => cat.name.toLowerCase() === name.toLowerCase())
    },

    getProductById (state) {
      return (id) => state.products.find(product => product.id === id)
    },

    getFilters (state) {
      return state.filters
    }
  }
})
