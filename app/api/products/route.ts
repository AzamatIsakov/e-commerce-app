import { ProductDTO } from '@/services/Products.dto'
import { fetchProduct } from '@/utilities/file'
import { NextResponse } from 'next/server'

export async function GET() {
  const products: ProductDTO = await fetchProduct()

  if (!products || !products.items || products.items.length === 0)
    return NextResponse.json({ error: 'Products not found' }, { status: 404 })

  return NextResponse.json({ items: products.items })
}
