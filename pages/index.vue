<template>
  <main class="index-page">
    <cat-list :categories="categories" />
  </main>
</template>

<script>
import CatList from '@/components/Category/CatList.vue'

export default {
  components: {
    CatList
  },
  async asyncData ({ $axios }) {
    const categories = await $axios.$get('http://localhost:1337/categories')
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
