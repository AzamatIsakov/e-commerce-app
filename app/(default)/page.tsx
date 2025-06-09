import { auth } from '@/auth'
import { CategoriesGrid } from '@/components/shared/CategoriesGrid'
import { ProductCardSkeleton } from '@/components/shared/Skeleton'
import { CategoriesSkeleton } from '@/components/shared/Skeleton/CategoriesSkeleton'
import {
  getAllProducts,
  getRecommendedProducts
} from '@/services/Products.service'
import { Products } from '@/shared'
import { Flame } from 'lucide-react'
import { Suspense } from 'react'

const Home = async () => {
  console.log('Main page')

  const session = await auth()

  const data = await getAllProducts({ rating: 5 })

  const recomended = await (session?.user && session.user.tags?.length
    ? getRecommendedProducts(20)
    : getAllProducts())

  return (
    <div className="container">
      <h2 className="title my-8">Популярные категории</h2>
      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoriesGrid />
      </Suspense>
      <div className="my-10">
        <h2 className="title mb-8 mt-16">Популярные товары</h2>
        <Suspense fallback={<ProductCardSkeleton />}>
          <Products products={data.products} />
        </Suspense>
      </div>
      <div className="my-10">
        <h2 className="title mb-8 mt-16">
          <span className="mr-2 inline-block rounded-lg bg-gray-300 p-2 align-middle">
            <Flame fill="#f97316" />
          </span>
          Рекомендованные вам товары
        </h2>
        <Suspense fallback={<ProductCardSkeleton />}>
          <Products products={recomended.products} />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
