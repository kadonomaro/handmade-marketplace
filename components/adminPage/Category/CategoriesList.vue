<template>
  <div class="a-categories-list">
    <ul>
      <li v-for="category in categories" :key="category.id">
        <div><b>{{ category.display_name }}</b></div>
        <div>{{ category.name }}</div>
        <div>{{ category.seo }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoriesListVue',
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .a-categories-list {}
</style>
