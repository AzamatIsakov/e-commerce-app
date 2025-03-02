'use client'

import { ProductCard } from '@/components/shared'
import { ProductsSkeleton } from '@/components/shared/Skeleton'
import { getAllProducts } from '@/services/Products.service'
import { useQuery } from '@tanstack/react-query'

const CategoryPage = () => {
  console.log('Category page')

  const {
    data: products,
    isLoading,
    isError,
    error,
    isSuccess
  } = useQuery({ queryKey: ['products'], queryFn: getAllProducts })

  if (isLoading)
    return (
      <div className="container">
        <ProductsSkeleton />
      </div>
    )

  if (isError)
    return <div className="my-5 text-center text-2xl">{error.message}</div>

  if (isSuccess)
    return (
      <div className="container">
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
      </div>
    )

  return (
    <main>
      <div className="container">
        <h1 className="my-5 text-4xl font-semibold">Категории</h1>
      </div>
    </main>
  )
}

// const product = {
//   features: [
//     {
//       power: {
//         title: 'Мощность',
//         value: '700W'
//       },
//       battery_life: {
//         title: 'Время работы аккумулятора',
//         value: '60 минут'
//       }
//     },
//     {
//       material: {
//         title: 'Материал',
//         value: 'Дерево'
//       },
//       dimensions: {
//         title: 'Размеры',
//         value: '120x60x40 см'
//       },
//       weight: {
//         title: 'Вес',
//         value: '20 кг'
//       }
//     }
//   ]
// }

export default CategoryPage
