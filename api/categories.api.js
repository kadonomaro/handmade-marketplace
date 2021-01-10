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
      return response.find(category => category.slug === name)
    },
    async create (data) {
      await $api.$post(settings.url + 'categories', data)
    },
    async update (id, data) {
      await $api.$put(`${settings.url}categories/${id}`, data)
    },
    async remove (id) {
      await $api.$delete(`${settings.url}categories/${id}`)
    }
  }
}
