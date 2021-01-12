<template>
  <div class="a-categories-list">
    <button class="button button--accent" title="Добавить">Добавить</button>
    <category-create />
    <ul class="a-categories-list__list">
      <li v-for="category in list" :key="category.id" class="a-categories-list__item">
        <div class="a-category-item">
          <span class="a-category-item__title">{{ category.display_name }}</span>
          <div class="a-category-item__controls">
            <nuxt-link class="button button--accent" :to="'/admin/category/' + category.slug">Открыть</nuxt-link>
            <button class="button button--danger" title="Удалить" @click="removeHandler(category.id)">Удалить</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CategoryCreate from '@/components/admin/Category/CategoryCreate'
import { categoriesApi } from '~/api/categories.api'

export default {
  name: 'CategoryList',
  components: {
    CategoryCreate
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeHandler (id) {
      categoriesApi(this.$axios).remove(id)
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
    }
  }
</style>
