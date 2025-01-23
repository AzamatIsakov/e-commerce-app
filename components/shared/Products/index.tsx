'use client'

import { getAllProducts } from '@/services/Products.service'
import { ProductCard } from '../ProductCard'
import { useQuery } from '@tanstack/react-query'
import { ProductsSkeleton } from '../Skeleton'

export const Products = () => {
  // const products = await getAllProducts()
  const {
    data: products,
    isLoading,
    isError,
    error,
    isSuccess
  } = useQuery({ queryKey: ['products'], queryFn: getAllProducts })

  if (isLoading) return <ProductsSkeleton />

  if (isError)
    return <div className="my-5 text-center text-2xl">{error.message}</div>

  if (isSuccess)
    return (
      <div className="grid grid-cols-5 gap-5">
        {products.items.map((product) => (
          <ProductCard
            key={product.title}
            photos={product.photos}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    )
}
