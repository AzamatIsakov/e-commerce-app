import {
  createJSONFile,
  getDataFromJSON,
  getItems,
  transformToMyProductData
} from './utilities.mjs'

const tranform = (page) => {
  const categoryLevel_2 = 'gaming-products'

  const data = getDataFromJSON(
    `./data/electronics/${categoryLevel_2}/${page}/default.json`
  )
  const items = getItems(data)

  const newData = items.map(transformToMyProductData)

  createJSONFile(
    `./data/electronics/${categoryLevel_2}/${page}/transformedData.json`,
    {
      items: newData
    }
  )
}
// Надо генерировать
// cables-and-chargers
// screen-protectors-and-cases

// laptops-tablets-ereaders/laptops

tranform('gaming-mice/1')
tranform('gaming-mice/2')
tranform('gaming-mice/3')
tranform('gaming-mice/4')
tranform('gaming-mice/5')

//!| electronics
//*| phones
// |_smartphone-accessories
// |_smartphones
// |_feature-phones
// |_landline-phones
