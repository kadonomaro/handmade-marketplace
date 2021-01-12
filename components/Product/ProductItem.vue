<template>
  <div class="product-card">
    <nuxt-link
      :to="`/category/${$route.params.products || $route.params.name}/${product.slug}`"
      class="product-card__link"
    >
      <img
        :src="image"
        :alt="product.title"
      >
    </nuxt-link>
    <nuxt-link
      :to="`/category/${$route.params.products || $route.params.name}/${product.slug}`"
      class="product-card__link"
    >
      <span class="product-card__title">{{ product.title }}</span>
    </nuxt-link>
    <div v-if="expanded && product.description" class="product-card__desc">
      <p>{{ product.description | description }}</p>
    </div>
    <div class="product-card__info">
      <span class="product-card__price">{{ product.price | currency('rub') }}</span>
      <button v-if="product.amount > 0" class="button product-price__button">
        В корзину
      </button>
      <span v-else class="product-price__empty">
        Нет в наличии
      </span>
    </div>
  </div>
</template>

<script>
import noPhoto from '@/assets/images/no-photo.jpg'

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
      noPhoto
    }
  },
  computed: {
    image () {
      return this.product.preview_image || this.product.detail_image || noPhoto
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
    border: 1px solid rgba(#000000, 0.05);
    border-radius: 10px;
    transition: box-shadow 0.2s ease-in;
    box-sizing: border-box;
    &:hover {
      box-shadow: 0 0 20px 0 rgba(#000000, 0.1);
    }
    &__link {
      color: inherit;
      text-decoration: none;
    }
    &__title {
      display: block;
      padding: 5px 0;
      font-size: 20px;
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
      margin-top: auto;
    }
    &__price {
      display: block;
      color: $color-text;
      font-size: 24px;
      font-weight: bold;
    }
  }
</style>
