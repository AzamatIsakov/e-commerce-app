import { CategoriesSkeleton, ProductCardSkeleton } from '@/components/shared'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingMainPage = () => {
  console.log('Loading page')

  return (
    <div className="container">
      <Skeleton className="my-8 h-8 w-80" />
      <CategoriesSkeleton />
      <Skeleton className="mb-8 mt-16 h-8 w-80" />
      <ProductCardSkeleton />
    </div>
  )
}
export default LoadingMainPage
