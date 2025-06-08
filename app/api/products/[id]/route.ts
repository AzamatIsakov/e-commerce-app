import dbConnect from '@/lib/dbConnect'
import Product from '@/models/Product'
import { NextRequest, NextResponse } from 'next/server'
import { isValidObjectId } from 'mongoose'

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id

  // Проверка на валидный ObjectId
  if (!isValidObjectId(id))
    return NextResponse.json(
      { message: 'Некорректный ID продукта' },
      { status: 400 }
    )

  try {
    await dbConnect()

    const product = await Product.findById(id)

    if (!product)
      return NextResponse.json(
        { message: 'Продукт не найден' },
        { status: 404 }
      )

    return NextResponse.json({
      message: 'Продукт успешно получен',
      data: product
    })
  } catch (error) {
    console.error('Ошибка при получении продукта:', error)
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 })
  }
}
