import {
  createJSONFile,
  getDataFromJSON,
  getItems,
  transformToMyProductData
} from './utilities.mjs'

const tranform = (page) => {
  const data = getDataFromJSON(`./data/electronics/phones/${page}/default.json`)
  const items = getItems(data)

  const newData = items.map(transformToMyProductData)

  createJSONFile(`./data/electronics/phones/${page}/transformedData.json`, {
    items: newData
  })
}

tranform('feature-phones/1')
tranform('feature-phones/2')
tranform('feature-phones/3')
tranform('feature-phones/4')
tranform('feature-phones/5')

//!| electronics
//*| phones
// |_smartphone-accessories
// |_smartphones
// |_feature-phones
// |_landline-phones
