<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item">Первый</li>
      <li class="breadcrumbs__item">Второй</li>
      <li class="breadcrumbs__item">Третий</li>
      <li class="breadcrumbs__item">Четвертый</li>
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
          display: inline-block;
          margin-left: 10px;
          content: '/';
        }
      }
    }

  }
</style>
