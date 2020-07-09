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
      <ul v-if="matchedProducts.length" class="search-bar__list">
        <li v-for="product in matchedProducts" :key="product.id" class="search-bar__item">
          <nuxt-link
            :to="{ name: 'ProductDetail', params: { id: product.id, name: product.category.name.toLowerCase() }}"
            class="search-bar__link"
          >
            {{ product.title }}
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'CatItemDetail', params: { name: product.category.name.toLowerCase() } }"
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

export default {
  data () {
    return {
      productsNames: [],
      value: '',
      matchedProducts: []
    }
  },
  async mounted () {
    const products = await this.$axios.$get('http://localhost:1337/products')
    this.productsNames = products.map((product) => {
      return {
        id: product.id,
        title: product.title,
        category: {
          name: product.category.name,
          displayName: product.category.display_name
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
      if (this.value.length) {
        this.matchedProducts = this.productsNames.filter((product) => {
          return product.title.toLowerCase().includes(this.value.toLowerCase())
        })
      } else {
        this.matchedProducts.length = 0
      }
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
    border: 1px solid #e6ecf1;
    border-radius: 5px;
    transition: border-color 0.2s ease-in;
    outline: none;
    box-sizing: border-box;
    &:hover,
    &:focus {
      border-color: #48c4c8;
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
    box-shadow: 0 2px 8px 0 rgba($color: #48c4c8, $alpha: 0.2);
    border-radius: 0 0 5px 5px;
    overflow-y: auto;
  }
  &__item {
    display: flex;
    padding: 0 8px;
    transition: background-color 0.1s ease-in;
    &:hover {
      background-color: lighten($color: #48c4c8, $amount: 10%);
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
    color: #48c4c8;
    transition: color 0.1s ease-in;
  }
}
</style>
