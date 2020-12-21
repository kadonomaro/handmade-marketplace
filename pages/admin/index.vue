<template>
  <div class="admin-page">
    <h1 class="admin-page__title">
      Панель управления сайтом
    </h1>
    <div class="admin-page__inner">
      <aside class="admin-page__sidebar">
        <button class="button" @click="setActiveComponent('categories')">
          Категории
        </button>
        <button class="button" @click="setActiveComponent('products')">
          Товары
        </button>
        <button class="button" @click="setActiveComponent('banners')">
          Баннеры
        </button>
      </aside>
      <main class="admin-page__main">
        <categories-list :categories="categories" />
      </main>
    </div>
  </div>
</template>

<script>
import { categoriesApi } from '@/api/categories.api'
import CategoriesList from '@/components/adminPage/Category/CategoriesList'

export default {
  components: {
    CategoriesList
  },
  layout: 'admin',
  async asyncData ({ $axios }) {
    const categories = await categoriesApi($axios).getAll()
    return { categories }
  },
  data () {
    return {
      component: 'categories',
      categories: []
    }
  },
  methods: {
    setActiveComponent (component) {
      this.component = component
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
  &__sidebar {
    margin-right: 10px;
    padding: 10px;
    background-color: #f8f8f8;
  }
  &__main {
    padding: 10px;
    background-color: #f8f8f8;
  }
}
</style>
