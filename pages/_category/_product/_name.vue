<template>
  <div class="product">
    <div class="container">
      <div class="product__inner">
        <div class="product__side">
          <div class="product__image">
            <img :src="image" alt="">
          </div>
        </div>
        <div class="product__main">
          <div class="product__info">
            <h1 class="product__title">
              {{ product.title }}
            </h1>

            <div v-if="description" class="product__desc">
              <span class="product__caption">Описание</span>
              <p>
                {{ product.description }}
              </p>
            </div>

            <!--            <div v-if="product.spec.length" class="product__spec product-spec">-->
            <!--              <span class="product__caption">Характеристики</span>-->
            <!--              <div v-for="spec in product.spec" :key="spec.id" class="product-spec__item">-->
            <!--                <span class="product-spec__name">-->
            <!--                  {{ spec.name | translate }}-->
            <!--                </span>-->
            <!--                <span class="product-spec__value">-->
            <!--                  {{ spec.value }}-->
            <!--                </span>-->
            <!--              </div>-->
            <!--            </div>-->

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
      <related-products :products="related" />
    </div>
  </div>
</template>

<script>
import { categoriesApi } from '@/api/categories.api'
import { productsApi } from '@/api/products.api'
import RelatedProducts from '@/components/Product/RelatedProducts'
import noPhoto from '~/assets/images/no-photo.jpg'

export default {
  name: 'ProductPage',
  components: {
    RelatedProducts
  },
  async asyncData ({ $axios, params }) {
    const product = await productsApi($axios).getByName(params.name)
    const category = await categoriesApi($axios).getById(product.categories[0].id)
    const categoryProducts = category.products
    return { product, categoryProducts }
  },
  // validate ({ params }) {
  //   return /^\d+$/.test(params.id)
  // },
  data () {
    return {
      product: {},
      categoryProducts: []
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
    },
    related () {
      return this.categoryProducts.filter(product => product.title !== this.product.title)
    }
  }
}
</script>

<style lang="scss">
  .product {
    &__inner {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 0;
      margin-bottom: 10px;
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
        border-bottom: 1px dotted $color-border;
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
