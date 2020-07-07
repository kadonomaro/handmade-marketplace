<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  components: {
    MainLayout
  },
  computed: {
    layout () {
      return this.$route.meta.layout || 'main-layout'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303030;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
