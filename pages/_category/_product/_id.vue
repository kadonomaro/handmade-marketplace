<template>
  <div class="product">
    <div class="product__inner">
      <div class="product__side">
        <div class="product__image">
          <img :src="media" alt="">
        </div>
      </div>
      <div class="product__main">
        <div class="product__info">
          <h1 class="product__title">
            {{ product.title }}
          </h1>

          <div v-if="product.description.length" class="product__desc">
            <span class="product__caption">Описание</span>
            <p>
              {{ product.description }}
            </p>
          </div>

          <div v-if="product.spec.length" class="product__spec product-spec">
            <span class="product__caption">Характеристики</span>
            <div v-for="spec in product.spec" :key="spec.id" class="product-spec__item">
              <span class="product-spec__name">
                {{ spec.name | translate }}
              </span>
              <span class="product-spec__value">
                {{ spec.value }}
              </span>
            </div>
          </div>

          <div class="product__price product-price">
            <span class="product-price__amount">
              {{ product.price | currency('rub') }}
            </span>
            <button v-if="product.amount > 0" class="button product-price__button">
              В корзину
            </button>
            <span v-else class="product-price__empty">
              Нет в наличии
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- <related-products v-if="relatedProducts.length" :products="relatedProducts"/> -->
  </div>
</template>

<script>
import { settings } from '@/server.settings'

export default {
  async asyncData ({ $axios, params }) {
    const product = await $axios.$get('http://localhost:1337/products/' + params.id)
    return { product }
  },
  data () {
    return {
      product: {},
      url: settings.url
    }
  },
  computed: {
    media () {
      return this.url + (this.product.media[0].formats.large.url || this.product.media[0].url)
    }
  }
}
</script>

<style lang="scss">
  .product {
    &__inner {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }
    &__main {
      flex-basis: 65%;
      max-width: 65%;
    }
    &__side {
      flex-basis: 35%;
      max-width: 35%;
    }
    &__info {
      padding: 20px 40px;
    }
    &__title {
      margin: 0 0 10px;
    }
    &__caption {
      display: block;
      margin-bottom: 10px;
      color: #606060;
      font-size: 18px;
      line-height: 1;
      font-weight: bold;
    }
    &__desc {
      margin-bottom: 20px;
      p {
        margin: 0;
      }
    }
    &__spec {
      max-width: 400px;
      margin-bottom: 20px;
    }
    &__price {
      max-width: 400px;
    }
  }

  .product-spec {
    line-height: 1;
    &__item {
      display: flex;
      margin-bottom: 10px;
    }
    &__name,
    &__value {
      display: block;
    }
    &__name {
      display: flex;
      flex-grow: 1;
      &::after {
        content: '';
        flex-grow: 1;
        border-bottom: 1px dotted #e6ecf1;
      }
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
    &__empty {
      display: block;
      font-size: 18px;
      align-self: center;
    }
  }
</style>
