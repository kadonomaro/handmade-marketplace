<template>
  <div class="search-bar">
    <form class="search-bar__form">
      <label class="search-bar__label">
        <input type="text" class="search-bar__field" placeholder="Поиск" v-model.trim="value" />
      </label>
      <button class="search-bar__button" aria-label="close" v-if="value" @click.prevent="clear"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss">
</style>
