export default function dateFilter (date) {
  return new Date(date).toLocaleDateString('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
