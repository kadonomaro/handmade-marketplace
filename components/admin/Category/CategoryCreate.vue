<template>
  <form class="a-create-form" action="" @submit.prevent="submitHandler">
    <label class="a-create-form__label">
      <span class="a-create-form__title">Название</span>
      <input v-model="options.display_name" type="text" class="input input--filled">
    </label>
    <label class="a-create-form__label">
      <span class="a-create-form__title">Символьный код</span>
      <input v-model="options.slug" type="text" class="input input--filled">
    </label>
    <label class="a-create-form__label">
      <span class="a-create-form__title">Сортировка</span>
      <input v-model="options.sort" type="text" class="input input--filled">
    </label>
    <label class="a-create-form__label">
      <span class="a-create-form__title">Описание</span>
      <textarea v-model="options.description" class="input input--filled" />
    </label>
    <label class="a-create-form__label">
      <span class="a-create-form__title">Meta title</span>
      <input v-model="options.seo_title" type="text" class="input input--filled">
    </label>
    <label class="a-create-form__label">
      <span class="a-create-form__title">Meta description</span>
      <input v-model="options.seo_description" type="text" class="input input--filled">
    </label>
    <button class="button button--accent">Создать</button>
  </form>
</template>

<script>
import { categoriesApi } from '@/api/categories.api'

export default {
  name: 'CategoryCreate',
  data () {
    return {
      options: {
        active: true,
        sort: 100,
        slug: null,
        display_name: '',
        description: '',
        preview_image: '',
        detail_image: '',
        seo_title: '',
        seo_description: ''
      }
    }
  },
  methods: {
    submitHandler () {
      categoriesApi(this.$axios).create(this.options)
    }
  }
}
</script>

<style lang="scss">
  .a-create-form {
    max-width: 450px;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid $color-border;
    border-radius: 3px;
    &__label {
      display: block;
      margin-bottom: 10px;
    }
    &__title {
      display: block;
      font-size: 14px;
    }
  }
</style>
