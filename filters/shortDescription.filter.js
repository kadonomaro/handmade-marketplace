export default function shortDescriptionFilter (description) {
  if (description) {
    return description.split('.')[0] + '.'
  }
  return ''
}
