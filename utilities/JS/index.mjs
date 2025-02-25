import {
  createJSONFile,
  getDataFromJSON,
  getItems,
  transformToMyProductData
} from './utilities.mjs'

const tranform = (page) => {
  const categoryLevel_2 = 'laptops-tablets-ereaders'

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

// tranform('tablets-ereaders/1')
// tranform('tablets-ereaders/2')
// tranform('tablets-ereaders/3')
// tranform('tablets-ereaders/4')
// tranform('tablets-ereaders/5')

//!| electronics
//*| phones
// |_smartphone-accessories
// |_smartphones
// |_feature-phones
// |_landline-phones
