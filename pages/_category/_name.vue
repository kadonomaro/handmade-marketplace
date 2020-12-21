<template>
  <div class="category">
    <div class="container">
      <h1 class="category__title">
        {{ category.display_name }}
      </h1>
      <div class="category__breadcrumbs">
        <app-breadcrumbs />
      </div>
      <div class="category__inner">
        <aside class="category__filter">
<!--          <product-filter :products="category.products" @on-filter="onFilter" />-->
        </aside>
        <main class="category__main">
          <product-list :products="products" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/Product/ProductList'
import AppBreadcrumbs from '@/components/partial/AppBreadcrumbs'
import { categoriesApi } from '@/api/categories.api'

export default {
  components: {
    AppBreadcrumbs,
    ProductList
  },
  async asyncData ({ $axios, params }) {
    const category = await categoriesApi($axios).getByName(params.name)
    return { category }
  },
  data () {
    return {
      category: [],
      products: []
    }
  },
  mounted () {
    this.products = this.category.products
  },
  methods: {
    // onFilter (payload) {
    //   this.updateProducts(payload)
    // },

    // updateProducts (filters) {
    //   const isEmptyFilter = !Object.values(filters).some(filter => filter.values.length)
    //   const products = []
    //   if (isEmptyFilter) {
    //     this.products = this.category.products
    //   } else {
    //     this.category.products.forEach((product) => {
    //       product.spec.forEach((spec) => {
    //         if (filters[spec.name].values.includes(spec.value)) {
    //           const productsNames = products.map(product => product.title)
    //           if (!productsNames.includes(product.title)) {
    //             products.push(product)
    //           }
    //         }
    //       })
    //     })
    //     this.products = products
    //   }
    // }
  },
  head () {
    return {
      title: this.category.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.seo.description
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .category {
    &__title {
      margin: 0 0 20px;
    }
    &__breadcrumbs {
      margin-bottom: 20px;
    }
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
