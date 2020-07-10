<template>
  <div class="related-products">
    <h2 class="related-products__title">
      Похожие товары
    </h2>
    <div class="related-products__list">
      <div v-for="product in products" :key="product.id" class="related-products__item">
        <product-item :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/Product/ProductItem.vue'

export default {
  name: 'RelatedProducts',
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
  .related-products {
    padding: 20px 0;
    &__title {
      margin: 0 0 10px;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    &__item {
      flex-basis: 20%;
      max-width: 20%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
