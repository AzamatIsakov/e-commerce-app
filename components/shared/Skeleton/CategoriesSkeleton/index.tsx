import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const CategoriesSkeleton = () => (
  <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
    {new Array(8).fill('').map((_, index) => (
      <Card key={index}>
        <Skeleton className="h-[100px] w-full md:h-[200px]" />
      </Card>
    ))}
  </div>
)
