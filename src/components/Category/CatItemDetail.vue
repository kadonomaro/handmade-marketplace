<template>
  <div class="category">
    <div>
      <h1>{{ category.display_name }}</h1>

      <div class="category__inner">
        <aside class="category__filter">
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
      const obj = Object.fromEntries(this.getFilters.map(key => [key, { name: key, values: [] }]))
      this.category.products.forEach(product => {
        product.spec.forEach(spec => {
          const values = obj[spec.name].values
          if (values && !values.includes(spec.value)) {
            values.push(spec.value)
          }
        })
      })
      return obj
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
    }
    &__main {
      flex-grow: 1;
    }
  }
</style>
