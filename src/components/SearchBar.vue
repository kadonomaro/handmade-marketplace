<template>
  <div class="search-bar">
    <form class="search-bar__form">
      <label class="search-bar__label">
        <input
          type="text"
          class="search-bar__field"
          placeholder="Поиск"
          v-model.trim="value"
          @input="onInput"
        />
      </label>
      <pre v-if="search.length" style="position: absolute;">{{ search }}</pre>
      <button
        class="search-bar__button"
        aria-label="clear"
        v-if="value"
        @click.prevent="clear"
      ></button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'search-bar',
  data () {
    return {
      value: '',
      search: []
    }
  },
  methods: {
    clear () {
      this.value = ''
    },
    onInput () {
      if (this.value.length) {
        this.search = this.getProductsNamesList.filter(product => {
          return product.title.toLowerCase().includes(this.value.toLowerCase())
        })
      } else {
        this.search.length = 0
      }
    }
  },
  mounted () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    ...mapGetters([
      'getProductsNamesList'
    ])
  }
}
</script>

<style lang="scss">
.search-bar {
  position: relative;
  max-width: 600px;
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
}
</style>
