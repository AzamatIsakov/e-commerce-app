'use client'

import { Button } from '@/components/ui/button'
import { CategoryCard } from './components'
import { CategoriesGridProps } from './index.interface'
import { ArrowUp } from 'lucide-react'

export const CategoriesGrid = ({ categories }: CategoriesGridProps) => (
  <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {categories.map((category) => (
      <CategoryCard key={category.id} {...category} />
    ))}
    <Button
      className="fixed bottom-8 right-8 h-fit cursor-pointer rounded-full bg-red-500 p-4 text-xl text-white shadow-lg transition-colors duration-200 hover:bg-red-600"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp className="!size-4 md:!size-5" />
    </Button>
  </div>
)
