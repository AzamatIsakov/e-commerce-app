export const formatNumberWithSpace = (number: number) =>
  new Intl.NumberFormat('ru-RU').format(number)
