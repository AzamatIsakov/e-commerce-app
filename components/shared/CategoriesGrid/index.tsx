'use client'

import { categories } from '@/data/categories'
import { CategoryCard } from './components'
import { useQuery } from '@tanstack/react-query'
import { ProductCategoriesSkeleton } from '../Skeleton/ProductCategoriesSkeleton'
import { getAllProducts } from '@/services/Products.service'

export const CategoriesGrid = () => {
  const { isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllProducts
  })

  if (isLoading) return <ProductCategoriesSkeleton />

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {categories.map(({ icon, title, imagePath, link }) => (
        <CategoryCard
          key={title}
          icon={icon}
          title={title}
          imagePath={imagePath}
          link={link}
        />
      ))}
    </div>
  )
}
