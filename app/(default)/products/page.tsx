import { Suspense } from 'react'

// import { Flame } from 'lucide-react'

import { auth } from '@/auth'

import { ProductCardSkeleton, Products } from '@/components/shared'
import {
  getAllProducts,
  getRecommendedProducts
} from '@/services/Products.service'
import { UserTag, UserType } from '@/types/user'
import dbConnect from '@/lib/dbConnect'
import { User } from '@/models/User'
import { cookies } from 'next/headers'

const ProductsPage = async () => {
  console.log('Products Page')

  const session = await auth()

  const data = await getAllProducts({ limit: 30 })

  const cookieHeader = cookies().toString()

  let userTags: UserTag[] = []

  if (session?.user?.id) {
    await dbConnect()
    const fullUser = await User.findById(session.user.id)
      .select('tags')
      .lean<UserType>()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    userTags = fullUser?.tags || []
  }

  const recommended = userTags.length
    ? await getRecommendedProducts(40, cookieHeader)
    : await getAllProducts()

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
          <Products products={recommended.products} />
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
