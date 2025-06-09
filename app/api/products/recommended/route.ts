import { auth } from '@/auth'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import { User } from '@/models/User'
import { UserType } from '@/types/user'
import { getUniqueValues } from '@/utilities'
import { NextRequest, NextResponse } from 'next/server'

declare module 'next-auth' {
  interface User {
    avatar: string
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

    const fullUser = await User.findById(session.user.id)
      .select('tags')
      .lean<UserType>()

    const userTags = fullUser?.tags || []

    // const userTags = session.user.tags as string[]

    // if (!userTags || userTags.length === 0) {
    //   const fallbackProducts = await Product.aggregate([
    //     { $sample: { size: limit } }
    //   ])
    //   return NextResponse.json({ products: fallbackProducts }, { status: 200 })
    // }

    const tags = userTags.map((userTag) => userTag.name)
    const categories = getUniqueValues(
      userTags.map((userTag) => userTag.category)
    )

    const matchedProducts = await Product.aggregate([
      {
        $match: { 'tags.name': { $in: tags }, categories: { $in: categories } }
      },
      { $sample: { size: limit } }
    ])

    return NextResponse.json({ products: matchedProducts }, { status: 200 })
  } catch (error) {
    console.error('Ошибка при получении рекомендованных товаров:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
