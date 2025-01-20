import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'
import fs from 'fs/promises' // Используем модуль fs/promises

dotenv.config()

// Access your API key as an environment variable
// eslint-disable-next-line no-undef
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

// The Gemini 1.5 models are versatile and work with most use cases
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const generateDescription = async (title) => {
  const prompt = `Привет, напиши описание для товара с названием "${title}". Укажи преимущества и особенности. Просто дай самый технический ответ. Придумай характеристики сам исходя из названия. Дай готовый результат, если у тебя есть сомнения, где надо уточнить, допустим материал, то придумай сам.`

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = await response.text() // Добавляем await, чтобы получить результат

  return text
}

const generateFeatures = async (title, description) => {
  try {
    const prompt = `Сгенерируй массив из 7-15 объектов для характеристики товара. Товар: "${title}". Описание: "${description}". Каждый объект должен содержать свойства 'name' и 'value'. Характеристики должны быть логически связаны с названием и описанием товара. Примеры характеристик: ёмкость батареи, размер экрана, вес, материал корпуса, особенности камеры, производительность процессора. Отформатируй результат в виде JSON строку. Укажи все значения сам, цену не добавляй`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = await response.text() // Добавляем await, чтобы получить результат

    const startSliced = text.slice(8)
    const endSliced = startSliced.slice(0, startSliced.length - 4)

    const total = JSON.parse(endSliced)

    return total
  } catch (e) {
    console.log()
    console.log('Ошибка:', e)
    console.log()
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
        await delay(1200)
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

      // Пауза перед следующим запросом (например, 1 секунда)
      await delay(2000)
    }

    // Записываем результат
    await fs.writeFile(writeFilePath, JSON.stringify({ items }, null, 2))
    console.log('JSON-файл успешно обновлен!')
  } catch (error) {
    console.error('Ошибка:', error)
  }
}

// await updateJSONWithDescriptions(
//   './data/electronics/phones/smartphone-accessories/3/transformedData.json',
//   './data/electronics/phones/smartphone-accessories/3/newTransformedData.json'
// )

await updateJSONWithFeatures(
  './data/electronics/phones/smartphone-accessories/2/newTransformedData.json',
  './data/electronics/phones/smartphone-accessories/2/transformedData.json'
)

console.log('Пауза <||>')
await delay(10000)

await updateJSONWithFeatures(
  './data/electronics/phones/smartphone-accessories/3/newTransformedData.json',
  './data/electronics/phones/smartphone-accessories/3/transformedData.json'
)

console.log('Пауза <||>')
await delay(10000)

await updateJSONWithFeatures(
  './data/electronics/phones/smartphone-accessories/4/newTransformedData.json',
  './data/electronics/phones/smartphone-accessories/4/transformedData.json'
)

console.log('Пауза <||>')
await delay(10000)

await updateJSONWithFeatures(
  './data/electronics/phones/smartphone-accessories/5/newTransformedData.json',
  './data/electronics/phones/smartphone-accessories/5/transformedData.json'
)
