<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__search">
        <search-bar />
      </div>
    </div>
  </header>
</template>

<script>
import SearchBar from '@/components/partial/SearchBar.vue'

export default {
  name: 'AppHeader',
  components: {
    SearchBar
  }
}
</script>

<style lang="scss">
  .header {
    &__inner {
      display: flex;
    }
    &__search {
      flex-grow: 1;
    }
  }
</style>
