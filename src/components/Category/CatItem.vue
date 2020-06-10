<template>
  <div class="category-item">
    <router-link :to="{ name: 'CatItemDetail', params: { id: category.id }}">
      <div>
        <img :src="url + category.preview_image.url" :alt="category.name">
        <span>{{ category.name }}{{ category.id }}</span>
      </div>
    </router-link>
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

</style>
