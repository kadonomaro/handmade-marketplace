<template>
  <div class="cat-list">
    <div class="cat-list__item" v-for="cat in getCategories" :key="cat.id">
      <cat-item :category="cat" />
    </div>
  </div>
</template>

<script>
import CatItem from '@/components/Category/CatItem.vue'
import { settings } from '@/server.settings'
import { mapGetters } from 'vuex'

export default {
  name: 'cat-list',
  components: {
    CatItem
  },
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
  .cat-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    &__item {
      flex-basis: 33.3333%;
      max-width: 33.3333%;
      padding: 0 10px;
      box-sizing: border-box;
    }
  }
</style>
