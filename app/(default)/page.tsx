import { CategoriesGrid } from '@/components/shared/CategoriesGrid'
import { ProductCardSkeleton } from '@/components/shared/Skeleton'
import { ProductCategoriesSkeleton } from '@/components/shared/Skeleton/ProductCategoriesSkeleton'
import { Products } from '@/shared'
import { Suspense } from 'react'

const Home = async () => {
  console.log('Main page')

  return (
    <div className="container">
      <h2 className="title my-8">Популярные категории</h2>
      <Suspense fallback={<ProductCategoriesSkeleton />}>
        <CategoriesGrid />
      </Suspense>
      <div className="my-10">
        <h2 className="title mb-8 mt-16">Популярные товары</h2>
        <Suspense fallback={<ProductCardSkeleton />}>
          <Products />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
