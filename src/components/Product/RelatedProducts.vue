<template>
  <div class="related-products">
    <div class="related-products__list">
      <div class="related-products__item" v-for="product in products" :key="product.id">
        <product-item :product="product"/>
      </div>
    </div>

  </div>
</template>

<script>
import { settings } from '@/server.settings'
import ProductItem from '@/components/Product/ProductItem.vue'

export default {
  name: 'related-products',
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      url: settings.url
    }
  }
}
</script>

<style lang="scss">
  .related-products {
    &__list {
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      flex-basis: 20%;
      max-width: 20%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
