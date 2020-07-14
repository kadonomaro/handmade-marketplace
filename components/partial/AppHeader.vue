<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <app-logo />
        </div>
        <div class="header__search">
          <search-bar />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBar from '@/components/partial/SearchBar.vue'
import AppLogo from '@/components/partial/AppLogo.vue'

export default {
  name: 'AppHeader',
  components: {
    SearchBar,
    AppLogo
  }
}
</script>

<style lang="scss">
  .header {
    padding: 10px 0;
    &__inner {
      display: flex;
      align-items: center;
    }
    &__logo {
      margin-right: 20px;
    }
    &__search {
      flex-grow: 1;
    }
  }
</style>
