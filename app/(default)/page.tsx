import { auth } from '@/auth'
import { CategoriesGrid } from '@/components/shared/CategoriesGrid'
import { ProductCardSkeleton } from '@/components/shared/Skeleton'
import { CategoriesSkeleton } from '@/components/shared/Skeleton/CategoriesSkeleton'
import dbConnect from '@/lib/dbConnect'
import { User } from '@/models/User'
import {
  getAllProducts,
  getRecommendedProducts
} from '@/services/Products.service'
import { Products } from '@/shared'
import { UserTag, UserType } from '@/types/user'
import { ChevronRight, Flame } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Suspense } from 'react'

const Home = async () => {
  console.log('Main page')

  const session = await auth()

  const data = await getAllProducts({ rating: 5 })

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
    ? await getRecommendedProducts(20, cookieHeader)
    : await getAllProducts()

  return (
    <div className="container">
      <h2 className="title my-8 flex w-full flex-col items-center justify-between gap-2 md:flex-row">
        <span>Популярные категории</span>
        <Link
          className="text-base font-normal transition-all hover:text-red"
          href="/products"
        >
          Посмотреть больше <ChevronRight className="inline-block size-5" />
        </Link>
      </h2>
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
        <h2 className="title mb-8 mt-16 flex w-full flex-col items-center justify-between gap-2 md:flex-row">
          <span>
            <span className="mr-2 inline-block rounded-lg bg-gray-300 p-2 align-middle">
              <Flame fill="#f97316" />
            </span>
            <span>Рекомендованные вам товары</span>
          </span>
          <Link
            className="text-base font-normal transition-all hover:text-red"
            href="/products"
          >
            Посмотреть больше <ChevronRight className="inline-block size-5" />
          </Link>
        </h2>
        <Suspense fallback={<ProductCardSkeleton />}>
          <Products products={recommended.products} />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
