import { CategoryCard } from './components'
import { CategoriesGridProps } from './index.interface'
import { GoTopButton } from '@/components/shared/Layout/GoTopButton'

export const CategoriesGrid = ({ categories }: CategoriesGridProps) => (
  <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {categories.map((category) => (
      <CategoryCard key={category.id} {...category} />
    ))}
    <GoTopButton />
  </div>
)
