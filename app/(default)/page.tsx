import { CategoriesGrid } from '@/components/shared/CategoriesGrid'
import { ProductCardSkeleton } from '@/components/shared/Skeleton'
import { CategoriesSkeleton } from '@/components/shared/Skeleton/CategoriesSkeleton'
import { Products } from '@/shared'
import { Suspense } from 'react'
import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'

const Home = async () => {
  console.log('Main page')

  return (
    <div className="container">
      <form
        action={async () => {
          'use server'
          await signIn('google')
        }}
      >
        <Button type="submit">Signin with Google</Button>
      </form>
      <h2 className="title my-8">Популярные категории</h2>
      <Suspense fallback={<CategoriesSkeleton />}>
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
