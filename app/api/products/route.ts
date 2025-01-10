import { getDataFromJSON } from '@/utilities';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const products = getDataFromJSON(
    'data/huseholdAppliances/1/transformedData.json'
  );

  if (!products || products.length === 0) {
    return NextResponse.json({ error: 'Products not found' }, { status: 404 });
  }

  return NextResponse.json({ products });
}
