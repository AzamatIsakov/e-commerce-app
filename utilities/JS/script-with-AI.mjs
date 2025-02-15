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
  const prompt = getDescriptionPrompt(title)

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = await response.text() // Добавляем await, чтобы получить результат

  return text
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
      console.log(`Генерация характеристик для ${item.title}`)

      // Генерация описания
      item.features = await generateFeatures(item.title, item.description)

      // Пауза перед следующим запросом (например, 2 секунды)
      await delay(2000)
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
      if (!item.variations.length) {
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

// await updateJSONWithDescriptions(
//   './data/electronics/phones/feature-phones/4/transformedData.json',
//   './data/electronics/phones/feature-phones/4/transformedWithDescriptionData.json'
// )

// console.log('Пауза <||>')
// await delay(10000)

// !================================================================================

// await updateJSONWithFeatures(
//   './data/electronics/phones/landline-phones/1/transformedWithDescriptionData.json',
//   './data/electronics/phones/landline-phones/1/dataWithFeatures.json'
// )

// console.log('Пауза <||>')
// await delay(10000)

// await updateJSONWithFeatures(
//   './data/electronics/phones/landline-phones/2/transformedWithDescriptionData.json',
//   './data/electronics/phones/landline-phones/2/dataWithFeatures.json'
// )

// !================================================================================

// await updateJSONWithVariations(
//   './data/electronics/phones/landline-phones/1/dataWithFeatures.json',
//   './data/electronics/phones/landline-phones/1/data.json'
// )

// console.log()
// console.log('Пауза <||>')
// await delay(10000)
// console.log()

// await updateJSONWithVariations(
//   './data/electronics/phones/landline-phones/2/dataWithFeatures.json',
//   './data/electronics/phones/landline-phones/2/data.json'
// )

// !================================================================================

// await updateJSONWithTags(
//   './data/electronics/phones/landline-phones/1/data.json',
//   './data/electronics/phones/landline-phones/1/products.json'
// )

// console.log()
// console.log('Пауза <||>')
// await delay(10000)
// console.log()

// await updateJSONWithTags(
//   './data/electronics/phones/landline-phones/2/data.json',
//   './data/electronics/phones/landline-phones/2/products.json'
// )

// console.log()
// console.log('Пауза <||>')
// await delay(10000)
// console.log()

// await updateJSONWithTags(
//   './data/electronics/phones/smartphone-accessories/3/data.json',
//   './data/electronics/phones/smartphone-accessories/3/products.json'
// )

// console.log()
// console.log('Пауза <||>')
// await delay(10000)
// console.log()

// await updateJSONWithTags(
//   './data/electronics/phones/smartphone-accessories/4/data.json',
//   './data/electronics/phones/smartphone-accessories/4/products.json'
// )

// console.log()
// console.log('Пауза <||>')
// await delay(10000)
// console.log()

// await updateJSONWithTags(
//   './data/electronics/phones/smartphone-accessories/5/data.json',
//   './data/electronics/phones/smartphone-accessories/5/products.json'
// )
