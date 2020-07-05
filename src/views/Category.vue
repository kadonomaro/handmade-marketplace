<template>
  <div class="category">
    <search-bar />
    <cat-list />
  </div>
</template>

<script>

import CatList from '@/components/Category/CatList.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'category',
  components: {
    CatList,
    SearchBar
  }
}
</script>
