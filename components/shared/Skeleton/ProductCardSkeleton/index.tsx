import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const ProductsSkeleton = () => (
  <div className="grid grid-cols-5 gap-5">
    {new Array(10).fill('').map((_, index) => (
      <Card key={index}>
        <CardHeader>
          <Skeleton className="h-80 w-full" />
        </CardHeader>
        <CardContent>
          <CardTitle className="mt-0 overflow-hidden text-ellipsis whitespace-nowrap rounded-md border p-2">
            <Skeleton className="h-4 w-full" />
          </CardTitle>
        </CardContent>
        <CardFooter>
          <Skeleton className="h-6 w-28" />
        </CardFooter>
      </Card>
    ))}
  </div>
)
