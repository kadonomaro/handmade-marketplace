<template>
  <div class="container">
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '@/components/partial/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style>
html {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
