<template>
  <div class="category">
    <div>
      <span>{{ category.name }}</span>
      <product-list :products="category.products"/>
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
  },
  computed: {
    ...mapGetters([
      'getCategoryById'
    ]),
    category () {
      return this.getCategoryById(this.$route.params.id)
    }
  }
}
</script>

<style>

</style>
