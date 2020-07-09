<template>
  <div>
    <cat-list :categories="categories" />
  </div>
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
