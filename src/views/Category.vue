<template>
  <div class="category">
    <product-list />
  </div>
</template>

<script>

import ProductList from '@/components/Product/ProductList.vue'

export default {
  name: 'category',
  components: {
    ProductList
  }
}
</script>
