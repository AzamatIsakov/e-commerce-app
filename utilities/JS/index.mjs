import {
  createJSONFile,
  getDataFromJSON,
  getItems,
  transformToMyProductData
} from './utilities.mjs'

const data = getDataFromJSON('./data/huseholdAappliances/6/default.json')

const items = getItems(data)

const newData = items.map(transformToMyProductData)

createJSONFile('./data/huseholdAappliances/6/transformedData.json', {
  items: newData
})
