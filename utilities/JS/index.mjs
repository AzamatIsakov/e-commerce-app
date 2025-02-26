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

// tranform('computer-peripherals/1')
// tranform('computer-peripherals/2')
// tranform('computer-peripherals/3')
// tranform('computer-peripherals/4')
// tranform('computer-peripherals/5')

//!| electronics
//*| phones
// |_smartphone-accessories
// |_smartphones
// |_feature-phones
// |_landline-phones
