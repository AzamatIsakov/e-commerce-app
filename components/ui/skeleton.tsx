import { cn } from '@/lib/utils'

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'animate-pulse rounded-md bg-gray-900/10 dark:bg-gray-50/10',
      className
    )}
    {...props}
  />
)

export { Skeleton }
