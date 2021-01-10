<template>
  <div class="container">
    <button class="button button--accent" @click="$router.go(-1)">Назад</button>
    <h1>{{ category.display_name }}</h1>
    <div>ID: {{ category.id }}</div>
    <div>Создан: {{ category.created_at | date }}</div>
    <div>Изменен: {{ category.updated_at | date }}</div>
  </div>
</template>

<script>
import { categoriesApi } from '@/api/categories.api'

export default {
  name: 'AdminCategoryPage',
  async asyncData ({ $axios, params }) {
    const category = await categoriesApi($axios).getByName(params.slug)
    return { category }
  },
  data () {
    return {
      category: []
    }
  }
}
</script>

<style lang="scss">

</style>
