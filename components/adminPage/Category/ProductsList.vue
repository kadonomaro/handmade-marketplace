<template>
  <div class="a-products-list">
    <ul>
      <li v-for="product in list" :key="product.id">
        <div>{{ product }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .a-products-list {}
</style>
