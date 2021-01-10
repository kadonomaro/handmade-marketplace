<template>
  <div v-show="isActive" class="app-tab">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppTab',
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
    this.isActive = this.selected
  }
}
</script>

<style lang="scss">

</style>
