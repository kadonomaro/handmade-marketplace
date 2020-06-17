<template>
  <div class="category">
    <div>
      <span>{{ category.name }}</span>
      <product-list :products="category.products"/>

      <div class="product-filters">
        <div class="product-filters__item" v-for="(filter, index) in filters" :key="index">
          <div class="name">{{ filter.name | translate }}</div>
          <div class="values" v-for="(value, index) in filter.values" :key="index">
            <label>
              <input type="checkbox" :value="value">
              <span>{{ value }}</span>
            </label>
          </div>
        </div>
      </div>

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
    this.$store.dispatch('fetchFilters')
  },
  computed: {
    ...mapGetters([
      'getCategoryByName',
      'getFilters'
    ]),
    category () {
      return this.getCategoryByName(this.$route.params.name)
    },
    filters () {
      return this.getFilters
    }
  }
}
</script>

<style>

</style>
