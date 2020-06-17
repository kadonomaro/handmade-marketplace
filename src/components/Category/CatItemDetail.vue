<template>
  <div class="category">
    <div>
      <span>{{ category.name }}</span>
      <product-list :products="category.products"/>

      <pre>{{ getFilters }}</pre>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { settings } from '@/server.settings'
import ProductList from '@/components/Product/ProductList.vue'

export default {
  name: 'cat-item-detail',
  components: {
    ProductList
  },
  data () {
    return {
      url: settings.url
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchFilters')
  },
  computed: {
    ...mapGetters([
      'getCategoryByName',
      'getFilters'
    ]),
    category () {
      return this.getCategoryByName(this.$route.params.name)
    }
  }
}
</script>

<style>

</style>
