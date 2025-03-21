import { ISubcategory } from '@/types/category/category.interface'

export interface CategoryCardProps {
  id: string
  name: string
  path: string
  image: string
  subCategories: ISubcategory[]
}
