<template>
  <div class="category">
    <div>
      <img :src="url + category.preview_image.url" :alt="category.name">
      <span>{{ category.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { settings } from '@/server.settings'

export default {
  name: 'cat-item-detail',
  data () {
    return {
      url: settings.url
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryById'
    ]),
    category () {
      return this.getCategoryById(this.$route.params.id)
    }
  }

}
</script>

<style>

</style>
