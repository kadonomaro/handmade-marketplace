<template>
  <div class="product">
    {{ product }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'product-detail',
  computed: {
    ...mapGetters([
      'getProductById'
    ]),
    product () {
      return this.getProductById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">

</style>
