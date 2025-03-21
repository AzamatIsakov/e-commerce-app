import { ISubcategory } from '@/types/category/category.interface'

export interface CardModalProps {
  open: boolean
  updateOpen: (open: boolean) => void
  categoryName: string
  path: string
  subCategories: ISubcategory[]
}
