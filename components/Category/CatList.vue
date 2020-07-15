<template>
  <div class="cat-list">
    <div class="container">
      <h2 class="cat-list__title">
        Основные категории товаров
      </h2>
      <div class="cat-list__inner">
        <div
          v-for="cat in categories"
          :key="cat.id"
          class="cat-list__item"
        >
          <cat-item :category="cat" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatItem from '@/components/Category/CatItem.vue'
import { settings } from '@/server.settings'

export default {
  name: 'CatList',
  components: {
    CatItem
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      url: settings.url
    }
  }
}
</script>

<style lang="scss">
  .cat-list {
    padding: 40px 0 60px;
    background-color: #f3f5f9;
    &__title {
      margin: 0 0 10px;
      color: $color-text-dark;
      font-size: 24px;
      text-align: center;
    }
    &__inner {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    &__item {
      flex-basis: 25%;
      max-width: 25%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
