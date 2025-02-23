import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'
import fs from 'fs/promises' // Используем модуль fs/promises
import { extractAndParseJSON } from './utilities.mjs'
import {
  getDescriptionPrompt,
  getFeaturesPrompt,
  getTagsPrompt,
  getVariationPrompt
} from './prompts.mjs'

dotenv.config()

// Access your API key as an environment variable
// eslint-disable-next-line no-undef
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const generateDescription = async (title) => {
  try {
    const prompt = getDescriptionPrompt(title)

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = await response.text() // Добавляем await, чтобы получить результат

    return text
  } catch (e) {
    console.log()
    console.log('Ошибка:', e)
    console.log()
    console.log('Передышка')
    await delay(10000)

    return ''
  }
}

const generateFeatures = async (title, description) => {
  try {
    const prompt = getFeaturesPrompt(title, description)

    const result = await model.generateContent(prompt)
    const response = await result.response
    const total = extractAndParseJSON(await response.text()) // Добавляем await, чтобы получить результат

    return total
  } catch (e) {
    console.log()
    console.log('Ошибка:', e)
    console.log()
    console.log('Передышка')
    await delay(10000)

    return []
  }
}

const generateVariation = async (title, description, price, features) => {
  try {
    const prompt = getVariationPrompt(
      title,
      description,
      price,
      JSON.stringify(features)
    )

    const result = await model.generateContent(prompt)
    const response = await result.response
    const total = extractAndParseJSON(await response.text()) // Добавляем await, чтобы получить результат

    return total
  } catch (e) {
    console.log()
    console.log('Ошибка:', e)
    console.log()
    console.log('Передышка')
    await delay(10000)

    return []
  }
}

const generateTags = async (
  title,
  description,
  features,
  variations,
  categories
) => {
  try {
    const prompt = getTagsPrompt(
      title,
      description,
      JSON.stringify(categories),
      JSON.stringify(features),
      JSON.stringify(variations)
    )

    const result = await model.generateContent(prompt)
    const response = await result.response
    const total = extractAndParseJSON(await response.text()) // Добавляем await, чтобы получить результат

    return total
  } catch (e) {
    console.log()
    console.log('Ошибка:', e)
    console.log()
    console.log('Передышка')
    await delay(10000)

    return []
  }
}

// Функция для паузы
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const updateJSONWithDescriptions = async (readFilePath, writeFilePath) => {
  try {
    // Читаем файл
    const data = await fs.readFile(readFilePath, 'utf-8') // Используем fs/promises
    const { items } = JSON.parse(data)

    // Обрабатываем каждый элемент
    for (const item of items) {
      if (!item.description) {
        console.log(`Генерация описания для ${item.title}`)

        // Генерация описания
        item.description = await generateDescription(item.title)

        // Пауза перед следующим запросом (например, 1 секунда)
        await delay(1500)
      }
    }

    // Записываем результат
    await fs.writeFile(writeFilePath, JSON.stringify({ items }, null, 2))
    console.log('JSON-файл успешно обновлен!')
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

const updateJSONWithFeatures = async (readFilePath, writeFilePath) => {
  try {
    // Читаем файл
    const data = await fs.readFile(readFilePath, 'utf-8') // Используем fs/promises
    const { items } = JSON.parse(data)

    // Обрабатываем каждый элемент
    for (const item of items) {
      if (!item?.features?.length) {
        console.log(`Генерация характеристик для ${item.title}`)

        // Генерация описания
        item.features = await generateFeatures(item.title, item.description)

        // Пауза перед следующим запросом (например, 2 секунды)
        await delay(2000)
      }
    }

    // Записываем результат
    await fs.writeFile(writeFilePath, JSON.stringify({ items }, null, 2))
    console.log('JSON-файл успешно обновлен!')
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

const updateJSONWithVariations = async (readFilePath, writeFilePath) => {
  try {
    // Читаем файл
    const data = await fs.readFile(readFilePath, 'utf-8') // Используем fs/promises
    const { items } = JSON.parse(data)

    // Обрабатываем каждый элемент
    for (const item of items) {
      console.log(item.variations.length)

      item.categories = ['electronics', 'smart-wearables', 'watch-straps']
      if (!item?.variations?.length) {
        console.log(`Генерация вариаций для ${item.title}`)
        // Генерация описания
        item.variations = await generateVariation(
          item.title,
          item.description,
          item.price.min,
          item.features
        )
        // Пауза перед следующим запросом (например, 1 секунда)
        await delay(2000)
      }
    }

    // Записываем результат
    await fs.writeFile(writeFilePath, JSON.stringify({ items }, null, 2))
    console.log('JSON-файл успешно обновлен!')
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

const updateJSONWithTags = async (readFilePath, writeFilePath) => {
  try {
    // Читаем файл
    const data = await fs.readFile(readFilePath, 'utf-8') // Используем fs/promises
    const { items } = JSON.parse(data)

    // Обрабатываем каждый элемент
    for (const item of items) {
      console.log(`Генерация тегов для ${item.title}`)

      // Генерация описания
      const generatedTags = await generateTags(
        item.title,
        item.description,
        JSON.stringify(item.features),
        JSON.stringify(item.variations),
        JSON.stringify(item.categories)
      )

      item.tags = generatedTags.tags

      // Пауза перед следующим запросом (например, 4 секунд)
      await delay(4000)
    }

    // Записываем результат
    await fs.writeFile(writeFilePath, JSON.stringify({ items }, null, 2))
    console.log('JSON-файл успешно обновлен!')
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

//! Надо будеть проверять подстроки между собой и выявлять схожие как a.includes(b) || b.includes(a) и при этом можно разделить это всё на подстроки распарсить и проверять каждое слово на существование в подстроках
//! как проверка "A16" на моделях "Samsung Galaxy A16"

// !================================================================================
const categoryLevel_1 = 'electronics'
const categoryLevel_2 = 'smart-wearables'
const categoryLevel_3 = 'watch-straps'

const generatePath = (page, fileName) => {
  return `./data/${categoryLevel_1}/${categoryLevel_2}/${categoryLevel_3}/${page}/${fileName}`
}
// ?================================================================================

// await updateJSONWithDescriptions(
//   generatePath(1, 'transformedData.json'),
//   generatePath(1, 'dataWithDescription.json')
// )

// console.log('Пауза <||>')
// await delay(10000)

// await updateJSONWithDescriptions(
//   generatePath(2, 'transformedData.json'),
//   generatePath(2, 'dataWithDescription.json')
// )

// console.log('Пауза <||>')
// await delay(10000)

// await updateJSONWithDescriptions(
//   generatePath(3, 'transformedData.json'),
//   generatePath(3, 'dataWithDescription.json')
// )

// console.log('Пауза <||>')
// await delay(10000)

// await updateJSONWithDescriptions(
//   generatePath(4, 'transformedData.json'),
//   generatePath(4, 'dataWithDescription.json')
// )

// console.log('Пауза <||>')
// await delay(10000)

// await updateJSONWithDescriptions(
//   generatePath(5, 'transformedData.json'),
//   generatePath(5, 'dataWithDescription.json')
// )

// !================================================================================

// await updateJSONWithFeatures(
//   generatePath(1, 'dataWithDescription.json'),
//   generatePath(1, 'dataWithFeatures.json')
// )

// console.log('Пауза <||>')
// await delay(10000)

// await updateJSONWithFeatures(
//   generatePath(2, 'dataWithDescription.json'),
//   generatePath(2, 'dataWithFeatures.json')
// )
// updateJSONWithVariations
// console.log('Пауза <||>')
// await delay(10000)

// await updateJSONWithFeatures(
//   generatePath(3, 'dataWithDescription.json'),
//   generatePath(3, 'dataWithFeatures.json')
// )

// console.log('Пауза <||>')
// await delay(10000)

// await updateJSONWithFeatures(
//   generatePath(4, 'dataWithDescription.json'),
//   generatePath(4, 'dataWithFeatures.json')
// )

// console.log('Пауза <||>')
// await delay(10000)

// await updateJSONWithFeatures(
//   generatePath(5, 'dataWithDescription.json'),
//   generatePath(5, 'dataWithFeatures.json')
// )
// !================================================================================

await updateJSONWithVariations(
  generatePath(1, 'data.json'),
  generatePath(1, 'data.json')
)

console.log()
console.log('Пауза <||>')
await delay(10000)
console.log()

await updateJSONWithVariations(
  generatePath(2, 'data.json'),
  generatePath(2, 'data.json')
)

console.log()
console.log('Пауза <||>')
await delay(10000)
console.log()

await updateJSONWithVariations(
  generatePath(3, 'data.json'),
  generatePath(3, 'data.json')
)

console.log()
console.log('Пауза <||>')
await delay(10000)
console.log()

await updateJSONWithVariations(
  generatePath(4, 'data.json'),
  generatePath(4, 'data.json')
)

console.log()
console.log('Пауза <||>')
await delay(10000)
console.log()

await updateJSONWithVariations(
  generatePath(5, 'data.json'),
  generatePath(5, 'data.json')
)

// !================================================================================

// await updateJSONWithTags(
//   './data/electronics/smart-wearables/smart-watches/1/data.json',
//   './data/electronics/smart-wearables/smart-watches/1/products.json'
// )

// console.log()
// console.log('Пауза <||>')
// await delay(10000)
// console.log()

// await updateJSONWithTags(
//   './data/electronics/smart-wearables/smart-watches/2/data.json',
//   './data/electronics/smart-wearables/smart-watches/2/products.json'
// )

// console.log()
// console.log('Пауза <||>')
// await delay(10000)
// console.log()

// await updateJSONWithTags(
//   './data/electronics/smart-wearables/smart-watches/3/data.json',
//   './data/electronics/smart-wearables/smart-watches/3/products.json'
// )

// console.log()
// console.log('Пауза <||>')
// await delay(10000)
// console.log()

// await updateJSONWithTags(
//   './data/electronics/smart-wearables/smart-watches/4/data.json',
//   './data/electronics/smart-wearables/smart-watches/4/products.json'
// )

// console.log()
// console.log('Пауза <||>')
// await delay(10000)
// console.log()

// await updateJSONWithTags(
//   './data/electronics/smart-wearables/smart-watches/5/data.json',
//   './data/electronics/smart-wearables/smart-watches/5/products.json'
// )
