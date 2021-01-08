import { settings } from '@/server.settings'

export function categoriesApi ($api) {
  return {
    async getAll () {
      return await $api.$get(settings.url + 'categories')
    },
    async getById (id) {
      return await $api.$get(settings.url + 'categories/' + id)
    },
    async getByName (name) {
      const response = await $api.$get(settings.url + 'categories')
      return response.find(category => category.name === name)
    }
  }
}
