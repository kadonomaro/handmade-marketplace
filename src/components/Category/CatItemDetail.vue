<template>
  <div class="category">
    <div>
      <h1>{{ category.display_name }}</h1>

      <div class="category__inner">
        <aside class="category__filter">
          <product-filter :values="getFilters" :products="category.products" />
        </aside>

        <main class="category__main">
          <product-list :products="category.products"/>
        </main>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { settings } from '@/server.settings'
import ProductList from '@/components/Product/ProductList.vue'
import ProductFilter from '@/components/Product/ProductFilter.vue'

export default {
  name: 'cat-item-detail',
  components: {
    ProductList,
    ProductFilter
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
    }
  }
}
</script>

<style lang="scss">
  .category {
    &__inner {
      display: flex;
    }
    &__filter {
      flex-basis: 250px;
      flex-shrink: 0;
      padding-right: 20px;
    }
    &__main {
      flex-grow: 1;
    }
  }
</style>
