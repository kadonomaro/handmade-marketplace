<template>
  <div class="product-filter" v-if="getFilters.length">
    <form class="product-filter__form" @submit.prevent="onSubmit">
      <div class="product-filter__item" v-for="(filter, index) in computedFilters" :key="index">
        <div class="filter-item" v-if="filter.values.length">
          <div class="name">{{ filter.name | translate }}</div>
          <div class="values" v-for="(value, index) in filter.values" :key="index">
            <label>
              <input type="checkbox" :value="value" v-model="filters[filter.name].values">
              <span>{{ value }}</span>
            </label>
          </div>
        </div>
      </div>

      <button class="button product-filter__button">Применить</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'product-filter',
  props: {
    products: {
      required: true
    }
  },
  data () {
    return {
      filters: {}
    }
  },
  mounted () {
    this.updateFilters()
  },
  methods: {
    onSubmit () {
      this.$emit('on-filter', this.filters)
    },

    updateFilters () {
      if (this.getFilters.length) {
        this.filters = Object.fromEntries(this.getFilters.map(key => [key, { name: key, values: [] }]))
      }
    }
  },
  computed: {
    ...mapGetters([
      'getFilters'
    ]),
    computedFilters () {
      const obj = Object.fromEntries(this.getFilters.map(key => [key, { name: key, values: [] }]))
      this.products.forEach(product => {
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
  .product-filter {
    &__button {
      margin-top: 10px;
    }
  }
</style>
