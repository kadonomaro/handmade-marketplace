<template>
  <div>
    <h1>Handmade Marketplace</h1>
    {{ products }}
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const products = await $axios.$get('http://localhost:1337/products')
    return { products }
  },
  data () {
    return {
      products: []
    }
  }
}
</script>

<style lang="scss">

</style>
