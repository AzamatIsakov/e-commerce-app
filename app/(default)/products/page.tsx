import { Suspense } from 'react'

// import { Flame } from 'lucide-react'

import { auth } from '@/auth'

import { ProductCardSkeleton, Products } from '@/components/shared'
import {
  getAllProducts,
  getRecommendedProducts
} from '@/services/Products.service'

const ProductsPage = async () => {
  console.log('Products Page')

  const session = await auth()

  const data = await getAllProducts({ limit: 30 })

  const recomended = await (session?.user && session.user.tags?.length
    ? getRecommendedProducts(20)
    : getAllProducts({ limit: 15 }))

  return (
    <div className="container">
      <div className="mb-10 mt-8">
        <h2 className="title mb-8">
          {/* <span className="mr-2 inline-block rounded-lg bg-gray-300 p-2 align-middle">
            <Flame fill="#f97316" />
          </span> */}
          Рекомендованные товары
        </h2>
        <Suspense fallback={<ProductCardSkeleton />}>
          <Products products={recomended.products} />
        </Suspense>
      </div>
      <div className="my-10">
        <h2 className="title mb-8">Другие товары</h2>
        <Suspense fallback={<ProductCardSkeleton />}>
          <Products products={data.products} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductsPage
