<template>
  <div class="product-list">
    <div class="product-list__item" v-for="product in getProducts" :key="product.id">
      <product-item :product="product" />
    </div>
  </div>
</template>

<script>
import productItem from '@/components/Product/ProductItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'product-list',
  components: {
    productItem
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    ...mapGetters([
      'getProducts'
    ])
  }
}
</script>

<style lang="scss">
  .product-list {
    display: flex;
    flex-wrap: wrap;
    &__item {
      flex-basis: 33.3333%;
      max-width: 33.3333%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
