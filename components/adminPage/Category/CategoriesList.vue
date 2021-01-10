<template>
  <div class="a-categories-list">
    <button class="button button--accent" title="Добавить">Добавить</button>
    <ul class="a-categories-list__list">
      <li v-for="category in list" :key="category.id" class="a-categories-list__item">
        <div class="a-category-item">
          <span class="a-category-item__title">{{ category.display_name }}</span>
          <div class="a-category-item__controls">
            <nuxt-link class="button button--accent" :to="'admin/category/' + category.slug">Открыть</nuxt-link>
            <button class="button button--danger" title="Удалить">Удалить</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .a-categories-list {
    &__list {
      margin: 0;
      padding: 10px 0;
      list-style: none;
    }
    &__item {
      &:not(:last-of-type) {
        margin-bottom: 5px;
      }
    }
  }

  .a-category-item {
    display: flex;
    align-items: center;
    padding: 6px;
    background-color: #ececec;
    border-radius: 3px;
    transition: background-color 0.2s ease-in;
    &__controls {
      margin-left: auto;
    }
    &__title {
      font-size: 18px;
      font-weight: bold;
    }
  }
</style>
