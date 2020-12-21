<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item">
        <nuxt-link class="breadcrumbs__link" :to="{ name: 'index' }">Главная</nuxt-link>
      </li>
      <li class="breadcrumbs__item">
        {{ $route.params.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppBreadcrumbs'
}
</script>

<style lang="scss">
  .breadcrumbs {
    padding: 10px 0;
    &__list {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__item {
      &:not(:last-child) {
        margin-right: 10px;
        &::after {
          content: '/';
          display: inline-block;
          margin-left: 10px;
        }
      }
    }

  }
</style>
<!--TODO - Repair component-->
