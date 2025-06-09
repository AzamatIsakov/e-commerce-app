import { auth } from '@/auth'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import { Tag } from '@/types/product'
import { NextRequest, NextResponse } from 'next/server'

declare module 'next-auth' {
  interface User {
    tags?: Tag[]
  }
}

export const GET = async (req: NextRequest) => {
  try {
    const request = req.clone()

    const session = await auth()

    if (!session?.user)
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

    await dbConnect()

    const { searchParams } = new URL(request.url)
    const limit = Number(searchParams.get('limit')) || 20

    const userTags = session.user.tags as { name: string }[]

    // if (!userTags || userTags.length === 0) {
    //   const fallbackProducts = await Product.aggregate([
    //     { $sample: { size: limit } }
    //   ])
    //   return NextResponse.json({ products: fallbackProducts }, { status: 200 })
    // }

    const tagNames = userTags.map((tag) => tag.name)

    const matchedProducts = await Product.aggregate([
      { $match: { tags: { $in: tagNames } } },
      { $sample: { size: limit } }
    ])

    return NextResponse.json({ products: matchedProducts }, { status: 200 })
  } catch (error) {
    console.error('Ошибка при получении рекомендованных товаров:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
