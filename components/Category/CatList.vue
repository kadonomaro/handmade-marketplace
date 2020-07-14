<template>
  <div class="cat-list">
    <div class="container">
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
    padding: 60px 0;
    background-color: #f3f5f9;
    &__inner {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }
    &__item {
      flex-basis: 33.3333%;
      max-width: 33.3333%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
