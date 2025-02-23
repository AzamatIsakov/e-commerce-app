import fs from 'fs'

export const getDataFromJSON = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    const jsonData = JSON.parse(data)

    // console.log(jsonData); // Данные из JSON

    return jsonData
  } catch (error) {
    console.error('Error reading the JSON file:', error)
  }
}

export const createJSONFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
    console.log('JSON файл создан!')
  } catch (error) {
    console.error('Ошибка при создании файла:', error)
  }
}

export const transformToMyProductData = (product) => {
  const newProduct = {}

  newProduct.id = product.catalogCard.id
  newProduct.title = product.catalogCard.title
  newProduct.price = {
    min: product.catalogCard.minSellPrice,
    max: product.catalogCard.minFullPrice
  }
  newProduct.favorite = false
  newProduct.rating = product.catalogCard.rating
  newProduct.photos = product.catalogCard.photos.map(transformToMyPhotoData)
  newProduct.discount = Number(
    product?.catalogCard?.discountInfo?.text.replace('%', '')
  )

  newProduct.categories = ['electronics', 'laptops-tablets-ereaders', 'laptops']

  newProduct.description = ''
  newProduct.tags = []
  newProduct.stock = 0
  newProduct.features = []

  newProduct.variations = []

  return newProduct
}

export const transformToMyPhotoData = (photoObj) => {
  return {
    id: photoObj.key,
    link: photoObj.link.high
  }
}

export const getItems = (data) => {
  return data.data.makeSearch.items
}

export const extractAndParseJSON = (text) => {
  // Ищем содержимое между ```json и ```
  const match = text.match(/```json\s*([\s\S]*?)\s*```/)
  let temp = ''
  if (match) {
    const jsonString = match[1].trim() // Убираем лишние пробелы
    try {
      temp = text
      const result = JSON.parse(jsonString)

      return result // Возвращаем распарсенный объект
    } catch (error) {
      console.log(temp)

      console.error('Ошибка разбора JSON:', error.message)
      return null
    }
  } else {
    console.error('JSON не найден в тексте!')
    return null
  }
}
