import { ProductDTO } from '@/services/Products.dto'
import { fetchProduct } from '@/utilities/file'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = Number(params.id)

  if (isNaN(id))
    return NextResponse.json(
      { message: 'Некорректный ID продукта' },
      { status: 400 }
    )

  const products: ProductDTO = await fetchProduct()

  const product = products.items.find((item) => Number(item.id) === id)

  if (!product)
    return NextResponse.json({ message: 'Продукт не найден' }, { status: 404 })

  return NextResponse.json({
    message: 'Продукт успешно получен',
    data: product
  })
}
