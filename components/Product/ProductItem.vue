<template>
  <div class="product-card">
    <nuxt-link
      :to="`/category/${$route.params.name || $route.params.product}/${product._id}`"
      class="product-card__link"
    >
      <img
        :src="image"
        :alt="product.title"
      >
    </nuxt-link>
    <span class="product-card__title">{{ product.title }}</span>
    <div v-if="expanded && description" class="product-card__desc">
      <p>{{ description }}</p>
    </div>
    <div class="product-card__info">
      <span class="product-card__price">{{ product.price | currency('rub') }}</span>
      <button class="button product-card__button">
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
import { settings } from '@/server.settings'

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    },
    expanded: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      url: settings.url
    }
  },
  computed: {
    image () {
      return this.product.image.preview_image || this.product.image.detail_image
    },
    description () {
      if (this.product.description) {
        return this.product.description.split('.')[0] + '.'
      }
      return false
    }
  }
}
</script>

<style lang="scss">
  .product-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
    border: 1px solid $color-border;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(1,14,40,.05);
    transition: box-shadow 0.2s ease-in;
    box-sizing: border-box;
    &:hover {
      box-shadow: 0 10px 20px rgba(3,27,78,.1);
    }
    &__link {
      display: block;
      color: inherit;
      text-decoration: none;
    }
    &__title {
      display: block;
      padding: 5px 0;
      font-size: 18px;
    }
    &__desc {
      flex-grow: 1;
      p {
        margin: 0 0 10px;
      }
    }
    &__info {
      display: flex;
      justify-content: space-between;
    }
    &__price {
      display: block;
      font-size: 24px;
      font-weight: bold;
    }

  }
</style>
