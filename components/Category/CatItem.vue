<template>
  <nuxt-link
    class="cat-item"
    :to="'/category/' + category.name.toLowerCase()"
  >
    <h2 class="cat-item__title">
      {{ category.display_name }}
    </h2>
    <div class="cat-item__image">
      <img src="https://via.placeholder.com/250" :alt="category.name">
    </div>
  </nuxt-link>
</template>

<script>
import { settings } from '@/server.settings'

export default {
  name: 'CatItem',
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
    display: flex;
    align-items: center;
    padding: 10px;
    color: #303030;
    text-decoration: none;
    background-color: #ffffff;
    border: 1px solid $color-border;
    border-radius: 5px;
    box-shadow: 0 3px 8px 0 rgba(#74818d, 0.1);
    transition: color 0.1s ease-in, border-color 0.1s ease-in;
    &:hover {
      color: $color-accent;
      border-color: $color-accent;
      box-shadow: 0 3px 8px 0 rgba(#74818d, 0.1);
    }
    &__title,
    &__image {
      flex-basis: 50%;
      max-width: 50%;
    }
    &__title {
      margin: 0;
      font-size: 26px;
      text-align: center;
    }
    &__image {
      margin-bottom: 10px;
    }
  }
</style>
