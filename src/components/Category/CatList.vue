<template>
  <div class="categories-list">
    <div class="categories-list__item" v-for="cat in getCategories" :key="cat.id">
        <div>
          <img :src="url + cat.preview_image.url" :alt="cat.name">
          <span>{{ cat.name }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { settings } from '@/server.settings'
import { mapGetters } from 'vuex'

export default {
  name: 'cat-list',
  data () {
    return {
      url: settings.url
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
  },
  computed: {
    ...mapGetters([
      'getCategories'
    ])
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
