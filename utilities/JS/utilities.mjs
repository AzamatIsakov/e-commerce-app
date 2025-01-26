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

  newProduct.categories = ['electronics', 'phones', 'smartphones']

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
