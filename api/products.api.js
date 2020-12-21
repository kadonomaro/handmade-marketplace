import { settings } from '~/server.settings'

export function productsApi ($api) {
  return {
    async getAll () {
      return await $api.$get(settings.url + 'products')
    },
    async getById (id) {
      return await $api.$get(settings.url + 'products/' + id)
    }
  }
}
