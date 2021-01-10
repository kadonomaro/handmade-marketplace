<template>
  <div class="admin-page">
    <div class="admin-page__inner">
      <aside class="admin-page__side">
        <button class="button" :class="{ 'button--active': component.name === 'CategoriesList' }" @click="setActiveComponent('CategoriesList', 'categories')">
          Категории
        </button>
        <button class="button" :class="{ 'button--active' : component.name === 'ProductsList' }" @click="setActiveComponent('ProductsList', 'products')">
          Товары
        </button>
      </aside>
      <main class="admin-page__main">
        <component :is="component.name" :list="component.props"/>
      </main>
    </div>
  </div>
</template>

<script>
import { categoriesApi } from '@/api/categories.api'
import { productsApi } from '@/api/products.api'
import CategoriesList from '@/components/admin/Category/CategoriesList'
import ProductsList from '@/components/admin/Category/ProductsList'

export default {
  name: 'AdminPage',
  components: {
    CategoriesList,
    ProductsList
  },
  layout: 'admin',
  async asyncData ({ $axios }) {
    const categories = await categoriesApi($axios).getAll()
    const products = await productsApi($axios).getAll()
    return { categories, products }
  },
  data () {
    return {
      component: {
        name: 'CategoriesList',
        props: []
      },
      categories: [],
      products: []
    }
  },
  mounted () {
    this.initActiveComponent()
  },
  methods: {
    initActiveComponent () {
      this.component = { name: 'CategoriesList', props: this.categories }
    },
    setActiveComponent (name, props) {
      this.component.name = name
      this.component.props = this[props]
    }
  }
}
</script>

<style lang="scss">
.admin-page {
  &__title {
    margin-bottom: 10px;
    padding: 10px;
    text-align: center;
    background-color: #f8f8f8;
  }
  &__inner {
    display: flex;
  }
  &__side {
    flex-basis: 200px;
    max-width: 200px;
    flex-shrink: 0;
    margin-right: 10px;
    padding: 10px;
    background-color: #f8f8f8;
  }
  &__main {
    flex-grow: 1;
    padding: 10px;
    background-color: #f8f8f8;
  }
}
</style>
