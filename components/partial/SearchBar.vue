<template>
  <div class="search-bar">
    <form class="search-bar__form">
      <label class="search-bar__label">
        <input
          v-model="value"
          type="text"
          class="search-bar__field"
          placeholder="Поиск"
          @input="onInput"
        >
      </label>
      <ul v-if="matchedProducts.length && !isExpanded" class="search-bar__list">
        <li v-for="product in matchedProducts" :key="product.id" class="search-bar__item" @click="onClick">
          <nuxt-link
            :to="'/category/' + product.category.name.toLowerCase() + '/' + product.id"
            class="search-bar__link"
          >
            {{ product.title }}
          </nuxt-link>
          <nuxt-link
            :to="'/category/' + product.category.name.toLowerCase()"
            class="search-bar__link search-bar__link--highlighted"
          >
            в категории {{ product.category.displayName }}
          </nuxt-link>
        </li>
      </ul>
      <button
        v-if="value"
        class="search-bar__button"
        aria-label="clear"
        @click.prevent="clear"
      />
    </form>
  </div>
</template>

<script>
import { productsApi } from '@/api/products.api'

export default {
  data () {
    return {
      productsNames: [],
      matchedProducts: [],
      value: '',
      isExpanded: false
    }
  },
  async mounted () {
    const products = await productsApi(this.$axios).getAll()
    this.productsNames = products.map((product) => {
      return {
        id: product._id,
        title: product.title,
        category: {
          name: product.category_ids[0].name,
          displayName: product.category_ids[0].display_name
        }
      }
    })
  },
  methods: {
    clear () {
      this.value = ''
      this.matchedProducts.length = 0
    },
    onInput () {
      this.isExpanded = false
      if (this.value.length) {
        this.matchedProducts = this.productsNames.filter((product) => {
          return product.title.toLowerCase().includes(this.value.toLowerCase())
        })
      } else {
        this.matchedProducts.length = 0
      }
    },
    onClick () {
      this.isExpanded = !this.isExpanded
      this.clear()
    }
  }
}
</script>

<style lang="scss">
.search-bar {
  position: relative;
  max-width: 600px;
  padding: 10px 0;
  &__label {
    position: relative;
  }
  &__field {
    width: 100%;
    padding: 10px 25px 10px 10px;
    font-size: 16px;
    border: 1px solid $color-border;
    border-radius: 5px;
    transition: border-color 0.2s ease-in;
    outline: none;
    box-sizing: border-box;
    &:hover,
    &:focus {
      border-color: $color-accent;
    }
  }
  &__button {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 25px;
    height: 25px;
    padding: 0;
    background-color: transparent;
    background-image: url("~@/assets/icons/close.svg");
    background-position: center;
    background-size: 13px;
    background-repeat: no-repeat;
    border: none;
    transform: translate(0, -50%);
    transition: opacity 0.2s ease-in;
    opacity: 0.5;
    cursor: pointer;
    outline: none;
    &:hover,
    &:focus {
      opacity: 1;
    }
  }
  &__list {
    position: absolute;
    width: 100%;
    max-height: 600px;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba($color: $color-accent, $alpha: 0.2);
    border-radius: 0 0 5px 5px;
    overflow-y: auto;
  }
  &__item {
    display: flex;
    padding: 0 8px;
    transition: background-color 0.1s ease-in;
    &:hover {
      background-color: lighten($color: $color-accent, $amount: 10%);
    }
    &:hover .search-bar__link--highlighted {
      color: #ffffff;
    }
  }
  &__link {
    display: block;
    margin-right: 5px;
    padding: 8px 0;
    color: inherit;
    text-decoration: none;
  }
  &__link--highlighted {
    color: $color-accent;
    transition: color 0.1s ease-in;
  }
}
</style>
