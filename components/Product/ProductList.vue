<template>
  <div class="product-list">
    <div
      v-for="product in products"
      :key="product.id"
      class="product-list__item"
    >
      <product-item :product="product" :expanded="true" />
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/Product/ProductItem.vue'

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .product-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    &__item {
      flex-basis: 25%;
      max-width: 25%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
