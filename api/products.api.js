import { settings } from '~/server.settings'

export function productsApi ($api) {
  return {
    async getAll () {
      return await $api.$get(settings.url + 'products')
    },
    async getById (id) {
      const response = await $api.$get(settings.url + 'products' + id)
      return response.find(products => products._id === id)
    }
  }
}
