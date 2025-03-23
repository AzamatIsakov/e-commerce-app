'use client'

import { categories } from '@/data/main/categories'
import { CategoryCard } from './components'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

export const CategoriesGrid = () => (
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
    <Button
      className="fixed bottom-8 right-8 z-10 h-fit cursor-pointer rounded-full bg-red-500 p-4 text-xl text-white shadow-lg transition-colors duration-200 hover:bg-red-600"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp className="!size-4 md:!size-5" />
    </Button>
  </div>
)
