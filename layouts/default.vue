<template>
  <div class="all-wrapper">
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
