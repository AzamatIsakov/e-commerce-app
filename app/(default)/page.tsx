import { CategoriesGrid } from '@/components/shared/CategoriesGrid'
import { ProductsSkeleton } from '@/components/shared/Skeleton'
import { Products } from '@/shared'
import { Suspense } from 'react'

const Home = async () => {
  console.log('Main page')

  return (
    <div className="container">
      <h1 className="my-5 text-center text-4xl font-semibold">
        Интернет магазин
      </h1>
      <CategoriesGrid />
      <div className="my-10">
        <Suspense fallback={<ProductsSkeleton />}>
          <Products />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
