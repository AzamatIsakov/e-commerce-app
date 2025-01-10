import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
// import Product from '@/models/Product';

export async function GET(request: Request) {
  await dbConnect();
  const url = new URL(request.url);
  const search = url.searchParams.get('search');
  const category = url.searchParams.get('category');
  const priceMin = url.searchParams.get('priceMin');
  const priceMax = url.searchParams.get('priceMax');

  const query: any = {};
  if (search) query.name = { $regex: search, $options: 'i' };
  if (category) query.category = category;
  if (priceMin || priceMax)
    query.price = {
      ...(priceMin && { $gte: +priceMin }),
      ...(priceMax && { $lte: +priceMax }),
    };

  // const products = await Product.find(query);
  // return NextResponse.json({ products });
}
