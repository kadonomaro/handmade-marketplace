<template>
  <div class="logo">
    <template v-if="isHomePage">
      <img :src="logo" alt="Handmade Marketplace">
    </template>
    <template v-else>
      <router-link :to="'/'">
        <img :src="logo" alt="Handmade Marketplace">
      </router-link>
    </template>
  </div>
</template>

<script>
import logo from '@/assets/logo.svg'

export default {
  name: 'AppLogo',
  data () {
    return {
      logo
    }
  },
  computed: {
    isHomePage () {
      return this.$route.name === 'index'
    }
  }
}
</script>

<style lang="scss">
  .logo {
    max-width: 150px;
  }
</style>
