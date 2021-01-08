<template>
  <div class="a-categories-list">
    <ul class="a-categories-list__list">
      <li class="a-categories-list__item" v-for="category in list" :key="category.id">
        <div class="a-category-item">
          <span class="a-category-item__title">{{ category.display_name }}</span>
          <div class="a-category-item__controls">
            <button class="button" title="Открыть">Открыть</button>
            <button class="button" title="Удалить">Удалить</button>
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
      padding: 0;
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
