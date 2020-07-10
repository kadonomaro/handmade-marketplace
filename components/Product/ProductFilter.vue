<template>
  <div class="product-filter">
    <form class="product-filter__form" @submit.prevent="onSubmit">
      <div v-for="(filter, index) in filtersView" :key="index" class="product-filter__item">
        <div v-if="filter.values.length" class="filter-item">
          <div class="filter-item__name">
            {{ filter.name | translate }}
          </div>
          <div v-if="filters" class="filter-item__values">
            <div v-for="(value, idx) in filter.values" :key="idx" class="filter-item__value">
              <label>
                <input v-model="filters[filter.name].values" :value="value" class="checkbox visually-hidden" type="checkbox">
                <span class="checkbox-custom"></span>
                <span class="filter-item__value-text">{{ value }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <button class="button product-filter__button">
        Применить
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductFilter',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      filters: {},
      filtersView: {}
    }
  },
  async mounted () {
    const response = await this.$axios.$get('http://localhost:1337/content-manager/components/product.spec')
    const filters = response.data.component.schema.attributes.name.enum
    this.filters = Object.fromEntries(filters.map(key => [key, { name: key, values: [], isOpen: true }]))
    this.filtersView = this.computeFilters(filters)
  },
  methods: {
    onSubmit () {
      this.$emit('on-filter', this.filters)
    },
    computeFilters (filters) {
      const obj = Object.fromEntries(filters.map(key => [key, { name: key, values: [] }]))
      this.products.forEach((product) => {
        product.spec.forEach((spec) => {
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
  @import '@/assets/css/blocks/checkbox.scss';

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
      margin-bottom: 5px;
    }
    &__value-text {
      vertical-align: middle;
    }
  }
</style>
