<template>
  <main class="index-page">
    <cat-list :categories="categories" />
  </main>
</template>

<script>
import { categoriesApi } from '@/api/categories.api'
import CatList from '@/components/Category/CatList.vue'

export default {
  name: 'IndexPage',
  components: {
    CatList
  },
  async asyncData ({ $axios }) {
    const response = await categoriesApi($axios).getAll()
    const categories = response.filter(category => category.show_on_main)
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
