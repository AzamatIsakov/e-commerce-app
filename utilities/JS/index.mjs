import {
  createJSONFile,
  getDataFromJSON,
  getItems,
  transformToMyProductData
} from './utilities.mjs'

const tranform = (page) => {
  const data = getDataFromJSON(
    `./data/electronics/smart-wearables/${page}/default.json`
  )
  const items = getItems(data)

  const newData = items.map(transformToMyProductData)

  createJSONFile(
    `./data/electronics/smart-wearables/${page}/transformedData.json`,
    {
      items: newData
    }
  )
}

tranform('smart-watches/1')
tranform('smart-watches/2')
tranform('smart-watches/3')
tranform('smart-watches/4')
tranform('smart-watches/5')

//!| electronics
//*| phones
// |_smartphone-accessories
// |_smartphones
// |_feature-phones
// |_landline-phones
