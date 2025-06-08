'use client'

import { getAllProducts } from '@/services/Products.service'
import { ProductCard } from './components'
import { useQuery } from '@tanstack/react-query'
import { ProductCardSkeleton } from '../Skeleton'
import { ProductsProps } from './index.interface'

export const Products = (props?: ProductsProps) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    initialData: props,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 минут: данные считаются "свежими"
    gcTime: 1000 * 60 * 30 // 30 минут: хранятся в памяти даже после unmount
  })

  if (isLoading) return <ProductCardSkeleton />

  if (isError)
    return <div className="my-5 text-center text-2xl">{error.message}</div>

  if (isSuccess)
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {data.products?.map((product, index) => (
          <ProductCard
            id={product.id}
            rating={product.rating}
            key={index}
            images={product.photos}
            price={product.price}
            title={product.title}
            discountInfo={product.discount}
            stock={product.stock}
          />
        ))}
      </div>
    )
}
