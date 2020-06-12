<template>
  <div class="product">
    <div class="product__inner">
      <div class="product__side">
        <div class="product__image">
          <img :src="url + (product.media[0].formats.large.url || product.media[0].url)" alt="">
        </div>
      </div>
      <div class="product__main">
        <div class="product__info">
          <h1 class="product__title">{{ product.title }}</h1>

          <div class="product__desc">
            <h2>Описание</h2>
            <p>{{ product.description }}</p>
          </div>

          <div class="product__price product-price">
            <span class="product-price__amount">{{ product.price | currency('rub') }}</span>
            <button class="button product-price__button">В корзину</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { settings } from '@/server.settings'

export default {
  name: 'product-detail',
  data () {
    return {
      url: settings.url
    }
  },
  computed: {
    ...mapGetters([
      'getProductById'
    ]),
    product () {
      return this.getProductById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">
  .product {
    &__inner {
      display: flex;
      flex-wrap: wrap;
    }
    &__main {
      flex-basis: 60%;
      max-width: 60%;
    }
    &__side {
      flex-basis: 40%;
      max-width: 40%;
    }
    &__image {
      img {
        display: grid;
        max-width: 100%;
        width: 100%;
      }
    }
    &__info {
      padding: 20px 40px;
    }
    &__title {
      margin: 0 0 10px;
    }
    &__desc {

    }
    &__price {
      max-width: 400px;
    }
  }

  .product-price {
    display: flex;
    justify-content: space-between;
    &__amount {
      display: block;
      font-size: 28px;
      font-weight: bold;
    }
    &__button {

    }
  }
</style>
