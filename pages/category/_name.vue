<template>
  <div class="category">
    <h1 class="category__title">
      {{ category.display_name }}
    </h1>
    <div class="category__inner">
      <aside class="category__filter">
      <!-- <product-filter :products="category.products" @on-filter="onFilter" /> -->
      </aside>
      <main class="category__main">
        <product-list :products="category.products" />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const data = await $axios.$get('http://localhost:1337/categories')
    const category = data.find(category => category.name.toLowerCase() === params.name)
    return { category }
  },
  data () {
    return {
      category: {}
    }
  }
}
</script>

<style lang="scss">
  .category {
    &__title {
      margin: 0 0 20px;
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
