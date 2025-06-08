import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const ProductCardSkeleton = () => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
    {new Array(10).fill('').map((_, index) => (
      <Card key={index} className="p-2 md:p-2">
        <CardHeader className="p-0">
          <Skeleton className="aspect-[3_/_4] w-full" />
        </CardHeader>
        <CardContent className="p-0">
          {/* Rating */}
          <Skeleton className="mt-2 h-4 w-32 md:h-5" />
          {/* Title */}
          <Skeleton className="mt-1 h-5" />
          {/* Price */}
          <Skeleton className="mt-1 h-6 w-24 md:h-7" />
          {/* Discount */}
          <Skeleton className="mt-1 h-3 w-20 sm:hidden" />
        </CardContent>
        <CardFooter className="p-0">
          {/* Button */}
          <Skeleton className="mt-2 h-8 w-full md:h-10" />
        </CardFooter>
      </Card>
    ))}
  </div>
)
