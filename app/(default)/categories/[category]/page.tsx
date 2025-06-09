import { ProductCardSkeleton, Products } from '@/components/shared'
import { categoryNames } from '@/data/categories/names'
import { getAllProducts } from '@/services/Products.service'
import { Suspense } from 'react'

const SingleCategoryPage = async ({
  params
}: {
  params: { category: string }
}) => {
  console.log('Category page', params.category)

  const data = await getAllProducts({ limit: 40, category: params.category })

  return (
    <main>
      <div className="container">
        <h1 className="my-5 text-4xl font-semibold">
          {categoryNames[params.category] || params.category}
        </h1>
        <div className="my-10">
          <Suspense fallback={<ProductCardSkeleton />}>
            <Products products={data.products} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

export default SingleCategoryPage
