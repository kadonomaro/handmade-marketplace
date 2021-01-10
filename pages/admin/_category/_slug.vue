<template>
  <div class="admin-category-page">
    <div class="container">
      <button class="button button--accent" @click="$router.go(-1)">
        Назад
      </button>
      <h1>{{ category.display_name }}</h1>
      <table class="table admin-table">
        <tbody>
          <tr>
            <td>ID: </td>
            <td>{{ category.id }}</td>
          </tr>
          <tr>
            <td>Создан: </td>
            <td>{{ category.created_at | date }}</td>
          </tr>
          <tr>
            <td>Изменен: </td>
            <td>{{ category.updated_at | date }}</td>
          </tr>
          <tr>
            <td>Раздел активен: </td>
            <td>
              <label>
                <input v-model="options.isActive" class="checkbox visually-hidden" type="checkbox">
                <span class="checkbox-custom" />
              </label>
            </td>
          </tr>
          <tr>
            <td>Показывать на главной: </td>
            <td>
              <label>
                <input v-model="options.showOnMain" class="checkbox visually-hidden" type="checkbox">
                <span class="checkbox-custom" />
              </label>
            </td>
          </tr>
          <tr>
            <td>Сортировка: </td>
            <td>
              <label>
                <input v-model="options.sort" class="input" type="number" min="0">
              </label>
            </td>
          </tr>
          <tr>
            <td>Символьный код: </td>
            <td>
              <label>
                <input v-model="options.slug" class="input" type="text">
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="controls">
        <button class="button button--accent" title="Сохранить" @click="submitHandler">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { categoriesApi } from '@/api/categories.api'

export default {
  name: 'AdminCategoryPage',
  async asyncData ({ $axios, params }) {
    const category = await categoriesApi($axios).getByName(params.slug)
    return { category }
  },
  data () {
    return {
      category: {},
      options: {
        isActive: null,
        sort: null,
        slug: null,
        showOnMain: null
      }
    }
  },
  mounted () {
    this.options.isActive = this.category.active
    this.options.sort = this.category.sort
    this.options.slug = this.category.slug
    this.options.showOnMain = this.category.show_on_main
  },
  methods: {
    submitHandler () {
      console.log(this.options)
    }
  }
}
</script>

<style lang="scss">

</style>
