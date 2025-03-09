import {
  createJSONFile,
  getDataFromJSON,
  getItems,
  transformToMyProductData
} from './utilities.mjs'

const tranform = (page) => {
  const categoryLevel_2 = 'computer-hardware'

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

tranform('data-storage/1')
tranform('data-storage/2')
tranform('data-storage/3')
tranform('data-storage/4')
tranform('data-storage/5')

//!| electronics
//*| phones
// |_smartphone-accessories
// |_smartphones
// |_feature-phones
// |_landline-phones
