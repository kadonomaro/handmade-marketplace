import { dictionary } from './translate.dictionary'

export default function translateFilter (value) {
  const result = dictionary[value] || value
  return result.charAt(0).toUpperCase() + result.slice(1)
}
