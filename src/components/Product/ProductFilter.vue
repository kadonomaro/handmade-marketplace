<template>
  <div class="product-filter" v-if="getFilters.length">
    <form class="product-filter__form" @submit.prevent="onSubmit">
      <div class="product-filter__item" v-for="(filter, index) in computedFilters" :key="index">
        <div class="filter-item" v-if="filter.values.length">
          <div class="filter-item__name">{{ filter.name | translate }}</div>
          <div class="filter-item__values" v-show="filters[filter.name].isOpen">
            <div class="filter-item__value" v-for="(value, index) in filter.values" :key="index">
              <label>
                <input type="checkbox" :value="value" v-model="filters[filter.name].values">
                <span>{{ value }}</span>
              </label>
            </div>
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
        this.filters = Object.fromEntries(this.getFilters.map(key => [key, { name: key, values: [], isOpen: true }]))
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
    &__item {
      margin-bottom: 10px;
    }
  }

  .filter-item {
    &__name {
      width: 100%;
      margin-bottom: 5px;
      padding: 2px 8px;
      font-weight: bold;
      background-color: #e6ecf1;
      border: 1px solid #e6ecf1;
      border-radius: 5px;
    }
    &__value {

    }
  }
</style>
