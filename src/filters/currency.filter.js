export default function currencyFilter (value, currency) {
  let sign = ''
  switch (currency) {
    case 'rub':
      sign = String.fromCharCode('8381')
      break
    case 'usd':
      sign = String.fromCharCode('36')
      break
    case 'eur':
      sign = String.fromCharCode('8364')
      break
    default:
      break
  }
  return `${value} ${sign}`
}
