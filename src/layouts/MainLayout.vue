<template>
  <div class="main-layout">
    <div class="container">
      <search-bar />
      <cat-list />
    </div>
  </div>
</template>

<script>
import CatList from '@/components/Category/CatList.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'main-layout',
  components: {
    CatList,
    SearchBar
  }
}
</script>

<style>

</style>
