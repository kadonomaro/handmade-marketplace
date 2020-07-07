<template>
  <div class="main-layout">
    <div class="container">
      <app-header />
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/partial/AppHeader.vue'

export default {
  name: 'main-layout',
  components: {
    AppHeader
  }
}
</script>

<style>

</style>
