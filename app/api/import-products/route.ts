// /app/api/import-products/route.ts
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import fs from 'fs/promises'
import path from 'path'
import ProductModel, { Product } from '@/models/Product'

// const MONGO_DB_URI = process.env.MONGO_DB_URI!

async function findProductFiles(dir: string): Promise<string[]> {
  const productFiles: string[] = []
  const entries = await fs.readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nestedFiles = await findProductFiles(fullPath)
      productFiles.push(...nestedFiles)
    } else if (entry.isFile() && entry.name === 'products.json')
      productFiles.push(fullPath)
  }
  return productFiles
}

interface ProductsJson {
  items: Product[]
}

export async function POST() {
  const ROOT_DIRECTORY = path.resolve(process.cwd(), 'utilities', 'JS', 'data')

  const MONGO_DB_URI = ''

  try {
    if (!mongoose.connection.readyState) await mongoose.connect(MONGO_DB_URI)

    const productFiles = await findProductFiles(ROOT_DIRECTORY)

    for (const file of productFiles) {
      const rawData = await fs.readFile(file, 'utf-8')
      const jsonData: ProductsJson = JSON.parse(rawData)

      if (!Array.isArray(jsonData)) {
        console.warn(`JSON in ${file} is not an array`)
        continue
      }

      await ProductModel.insertMany(jsonData, { ordered: false })
    }

    return NextResponse.json({
      status: 'ok',
      importedFilesCount: productFiles.length
    })
  } catch (error) {
    console.error('Import error:', error)
    return NextResponse.json(
      { status: 'error', message: (error as Error).message },
      { status: 500 }
    )
  }
}
