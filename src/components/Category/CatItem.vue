<template>
    <router-link
      class="cat-item"
      :to="{ name: 'CatItemDetail', params: { id: category.id }}"
    >
      <div class="cat-item__image">
        <img class="cat-item__image-img" :src="url + category.preview_image.url" :alt="category.name">
      </div>
      <h2 class="cat-item__title">{{ category.display_name }}</h2>
    </router-link>
</template>

<script>
import { settings } from '@/server.settings'

export default {
  name: 'cat-item',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      url: settings.url
    }
  }

}
</script>

<style lang="scss">
  .cat-item {
    display: block;
    padding: 10px;
    color: #303030;
    text-decoration: none;
    border: 1px solid #e6ecf1;
    border-radius: 5px;
    box-shadow: 0 3px 8px 0 rgba(#74818d, 0.1);
    transition: color 0.1s ease-in, border-color 0.1s ease-in;
    &:hover {
      color: #48c4c8;
      border-color: #48c4c8;
      box-shadow: 0 3px 8px 0 rgba(#74818d, 0.1);
    }
    &__title {
      margin: 0;
      font-size: 20px;
    }
    &__image {
      margin-bottom: 10px;
    }
    &__image-img {
      display: block;
      max-width: 100%;
      width: 100%;
    }
  }
</style>
