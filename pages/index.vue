<template>
  <main class="index-page">
    <cat-list :categories="categories" />
  </main>
</template>

<script>
import { categoriesApi } from '@/api/categories.api'
import CatList from '@/components/Category/CatList.vue'

export default {
  components: {
    CatList
  },
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

</style>
