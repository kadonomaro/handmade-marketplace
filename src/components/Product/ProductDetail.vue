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
          <h1 class="product__title">{{ product.title }}</h1>

          <div class="product__desc" v-if="product.description.length">
            <span class="product__caption">Описание</span>
            <p>{{ product.description }}</p>
          </div>

          <div class="product__spec product-spec" v-if="product.spec.length">
            <span class="product__caption">Характеристики</span>
            <div class="product-spec__item" v-for="spec in product.spec" :key="spec.id">
              <span class="product-spec__name">{{ spec.name | translate }}</span>
              <span class="product-spec__value">{{ spec.value }}</span>
            </div>
          </div>

          <div class="product__price product-price">
            <span class="product-price__amount">{{ product.price | currency('rub') }}</span>
            <button class="button product-price__button" v-if="product.amount > 0">В корзину</button>
            <span class="product-price__empty" v-else>Нет в наличии</span>
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
    },
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
