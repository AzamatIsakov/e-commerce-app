import {
  createJSONFile,
  getDataFromJSON,
  getItems,
  transformToMyProductData
} from './utilities.mjs'

const data = getDataFromJSON(
  './data/electronics/phones/smartphone-accessories/5/default.json'
)
const items = getItems(data)

const newData = items.map(transformToMyProductData)

createJSONFile(
  './data/electronics/phones/smartphone-accessories/5/transformedData.json',
  {
    items: newData
  }
)

//!| electronics
//*| phones
// |_smartphone-accessories
// |_smartphones
// |_feature-phones
// |_landline-phones
