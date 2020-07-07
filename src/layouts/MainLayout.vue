<template>
  <div class="main-layout">
    <div class="container">
      <app-header />
      <cat-list />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/partial/AppHeader.vue'
import CatList from '@/components/Category/CatList.vue'

export default {
  name: 'main-layout',
  components: {
    AppHeader,
    CatList
  }
}
</script>

<style>

</style>
