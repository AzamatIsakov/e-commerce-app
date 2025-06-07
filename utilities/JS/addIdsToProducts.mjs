import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { v4 as uuidv4 } from 'uuid'

const baseDir = './data' // корневая директория

function walkAndProcess(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      walkAndProcess(fullPath) // рекурсия по папкам
    } else if (entry.isFile() && entry.name === 'products.json') {
      processProductsFile(fullPath)
    }
  }
}

function processProductsFile(filePath) {
  try {
    const raw = readFileSync(filePath, 'utf-8')
    const products = JSON.parse(raw).items

    const updated = products.map((product) => ({
      ...product,
      id: uuidv4(), // создаём UUID
      stock:
        product.variations?.reduce((acc, variant) => acc + variant.stock, 0) ||
        0,
      variations:
        product.variations?.map((variant) => ({ ...variant, id: uuidv4() })) ||
        null
    }))

    writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf-8')
    console.log(`Updated: ${filePath}`)
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message)
  }
}

walkAndProcess(baseDir)
