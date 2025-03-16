import { getDataFromJSON } from '@/utilities/file'
import { NextResponse } from 'next/server'

export async function GET() {
  const products = getDataFromJSON(
    '/data/electronics/phones/smartphones/1/products.json'
  )

  if (!products || products.length === 0)
    return NextResponse.json({ error: 'Products not found' }, { status: 404 })

  return NextResponse.json({ items: products.items })
}
