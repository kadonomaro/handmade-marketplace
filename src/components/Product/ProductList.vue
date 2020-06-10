<template>
  <div class="product-list">
    <div class="product-list__item" v-for="product in products" :key="product.id">
      <product-item :product="product" />
    </div>
  </div>
</template>

<script>
import productItem from '@/components/Product/ProductItem.vue'

export default {
  name: 'product-list',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    productItem
  }
}
</script>

<style lang="scss">
  .product-list {
    display: flex;
    flex-wrap: wrap;
    &__item {
      flex-basis: 25%;
      max-width: 25%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
