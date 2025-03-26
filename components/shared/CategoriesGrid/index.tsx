import { categories } from '@/data/main/categories'
import { CategoryCard } from './components'
import { GoTopButton } from '../Layout/GoTopButton'

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
    <GoTopButton />
  </div>
)
