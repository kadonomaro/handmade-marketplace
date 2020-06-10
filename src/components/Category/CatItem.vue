<template>
  <div class="category">
    <div>
      <img :src="url + category.preview_image.url" :alt="category.name">
      <span>{{ category.name }}{{ category.id }}</span>
    </div>
  </div>
</template>

<script>
import { settings } from '@/server.settings'

export default {
  name: 'cat-item',
  props: {
    category: {
      type: Object,
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
  .categories-list {
    display: flex;
    flex-wrap: wrap;
    &__item {
      flex-basis: 33.3333%;
      max-width: 33.3333%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
