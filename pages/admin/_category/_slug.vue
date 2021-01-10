<template>
  <div class="admin-category-page">
    <div class="container">
      <button class="button button--accent" @click="$router.go(-1)">
        Назад
      </button>
      <h1>{{ category.display_name }}</h1>
      <div class="admin-category-page__table">
        <app-tabs>
          <app-tab name="Каталог" :selected="true">
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
                      <input v-model="options.active" class="checkbox visually-hidden" type="checkbox">
                      <span class="checkbox-custom" />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Показывать на главной: </td>
                  <td>
                    <label>
                      <input v-model="options.show_on_main" class="checkbox visually-hidden" type="checkbox">
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
          </app-tab>
          <app-tab name="SEO">
            <table class="table admin-table">
              <tbody>
                <tr>
                  <td>Заголовок: </td>
                  <td>
                    <label>
                      <input v-model="options.display_name" class="input input--filled" type="text">
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Meta title: </td>
                  <td>
                    <label>
                      <input v-model="options.seo_title" class="input input--filled" type="text">
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Meta description: </td>
                  <td>
                    <label>
                      <input v-model="options.seo_description" class="input input--filled" type="text">
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </app-tab>
        </app-tabs>
      </div>
      <div class="controls">
        <button class="button button--accent" title="Сохранить" @click="submitHandler">
          Сохранить
        </button>
        <button class="button button--danger" title="Удалить" @click="removeHandler">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { categoriesApi } from '@/api/categories.api'
import AppTabs from '@/components/partial/Tabs/AppTabs'

export default {
  name: 'AdminCategoryPage',
  components: {
    AppTabs
  },
  layout: 'admin',
  async asyncData ({ $axios, params }) {
    const category = await categoriesApi($axios).getByName(params.slug)
    return { category }
  },
  data () {
    return {
      category: {},
      options: {
        active: null,
        sort: null,
        slug: null,
        show_on_main: null,
        display_name: null,
        seo_title: null,
        seo_description: null
      }
    }
  },
  mounted () {
    this.options.active = this.category.active
    this.options.display_name = this.category.display_name
    this.options.seo_title = this.category.seo_title
    this.options.seo_description = this.category.seo_description
    this.options.sort = this.category.sort
    this.options.slug = this.category.slug
    this.options.show_on_main = this.category.show_on_main
  },
  methods: {
    submitHandler () {
      categoriesApi(this.$axios).update(this.category.id, this.options)
    },
    removeHandler () {
      // categoriesApi(this.$axios).remove(this.category.id)
    }
  }
}
</script>

<style lang="scss">
  .admin-category-page {
    padding: 20px 0;
    &__table {
      margin-bottom: 10px;
    }
  }
</style>
