import {
  createJSONFile,
  getDataFromJSON,
  getItems,
  transformToMyProductData
} from './utilities.mjs'

const tranform = (page) => {
  const categoryLevel_2 = 'large-appliances'

  const data = getDataFromJSON(
    `./data/home-appliances/${categoryLevel_2}/${page}/default.json`
  )
  const items = getItems(data)

  const newData = items.map(transformToMyProductData)

  createJSONFile(
    `./data/home-appliances/${categoryLevel_2}/${page}/transformedData.json`,
    {
      items: newData
    }
  )
}
// Надо генерировать
// cables-and-chargers
// screen-protectors-and-cases

// laptops-tablets-ereaders/laptops

tranform('washing-machines/1')
tranform('washing-machines/2')
tranform('washing-machines/3')
tranform('washing-machines/4')
tranform('washing-machines/5')

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
