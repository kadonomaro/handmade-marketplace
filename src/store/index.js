import Vue from 'vue'
import Vuex from 'vuex'

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
      const response = await fetch('http://localhost:1337/products')
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
