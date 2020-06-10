<template>
  <div class="product">
    <div>{{ product.title }}</div>
    <div class="product__image">
      <img :src="url + (product.media[0].formats.large.url || product.media[0].url)" alt="">
    </div>
    <div class="product__info">
      <span class="product__price">{{ product.price }}</span>
      <button>Купить</button>
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
  .product {
    &__image {
      img {
        max-width: 100%;
        width: 100%;
      }
    }
    &__price {
      display: block;
      font-size: 20px;
      font-weight: bold;
    }

  }
</style>
