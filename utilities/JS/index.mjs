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

tranform('watch-straps/1')
tranform('watch-straps/2')
tranform('watch-straps/3')
tranform('watch-straps/4')
tranform('watch-straps/5')

//!| electronics
//*| phones
// |_smartphone-accessories
// |_smartphones
// |_feature-phones
// |_landline-phones
