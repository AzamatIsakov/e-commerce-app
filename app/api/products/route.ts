import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const request = req.clone()

    await dbConnect()

    const { searchParams } = new URL(request.url)

    const category = searchParams.get('category')
    const tags = searchParams.getAll('tag')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const rating = searchParams.get('rating')
    const limit = Number(searchParams.get('limit')) || 20

    // Фильтр для match
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const match: any = {}

    if (rating) match.rating = Number(rating)

    if (category) match.categories = { $in: [category] }
    if (tags.length > 0) match.tags = { $in: tags }

    if (minPrice || maxPrice) {
      match.price = {}
      if (minPrice) match.price.$gte = Number(minPrice)
      if (maxPrice) match.price.$lte = Number(maxPrice)
    }

    const products = await Product.aggregate([
      { $match: match },
      { $sample: { size: limit } }
    ])

    return NextResponse.json({ products }, { status: 200 })
  } catch (error) {
    console.error('Ошибка при получении товаров:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
