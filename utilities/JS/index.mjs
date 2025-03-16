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

// tranform('gaming-monitors/1')
// tranform('gaming-laptops/2')
// tranform('gaming-laptops/3')
// tranform('gaming-laptops/4')
// tranform('gaming-laptops/5')

//!| electronics
//*| phones
// |_smartphone-accessories
// |_smartphones
// |_feature-phones
// |_landline-phones

// function generateNumericId() {
//   const array = new Uint32Array(2)
//   crypto.getRandomValues(array)
//   return array[0] * 2 ** 21 + (array[1] >>> 11) // 53-битное число
// }

// console.log(generateNumericId())
