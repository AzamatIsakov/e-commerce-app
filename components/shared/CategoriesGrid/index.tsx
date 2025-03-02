import { categories } from '@/data/categories'
import { CategoryCard } from './components'

export const CategoriesGrid = () => (
  <div className="grid grid-cols-4 gap-6">
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
