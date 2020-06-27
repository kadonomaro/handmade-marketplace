<template>
  <div class="product-card">
    <router-link
      :to="{ name: 'ProductDetail', params: { id: product.id }}"
      class="product-card__link"
    >
      <img
        :src="url + (product.media[0].formats.small.url || product.media[0].url)"
        :alt="product.title">
    </router-link>
    <span class="product-card__title">{{ product.title }}</span>
    <div v-if="expanded" class="product-card__desc">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, nesciunt.</p>
    </div>
    <div class="product-card__info">
      <span class="product-card__price">{{ product.price | currency('rub') }}</span>
      <button class="button product-card__button">В корзину</button>
    </div>
  </div>

</template>

<script>
import { settings } from '@/server.settings'

export default {
  name: 'product-item',
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
  }
}
</script>

<style lang="scss">
@import '@/css/blocks/button.scss';

  .product-card {
    padding: 10px;
    border: 1px solid #e6ecf1;
    border-radius: 5px;
    box-shadow: 0 3px 8px 0 rgba(#74818d, 0.1);
    transition: color 0.1s ease-in, border-color 0.1s ease-in;
    &:hover {
      border-color: #48c4c8;
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
