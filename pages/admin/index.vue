<template>
  <div class="admin-page">
    <div class="admin-page__inner">
      <aside class="admin-page__sidebar">
        <button class="button">
          Категории
        </button>
        <button class="button">
          Товары
        </button>
        <button class="button">
          Баннеры
        </button>
      </aside>
      <div>{{ categories }}</div>
    </div>
  </div>
</template>

<script>

import { categoriesApi } from '@/api/categories.api'

export default {
  components: {},
  layout: 'admin',
  async asyncData ({ $axios }) {
    const response = await categoriesApi($axios).getAll()
    const categories = response.splice(0, 4)
    return { categories }
  },
  data () {
    return {
      categories: []
    }
  }
}
</script>

<style lang="scss">
.admin-page {
  &__inner {
    display: flex;
  }
  &__sidebar {
    padding: 20px 10px;
    background-color: #f8f8f8;
  }
}
</style>
