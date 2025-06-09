import { Product } from '@/models/Product'
import { Tag } from '@/types/product'

export interface ProductDTO {
  products: Product[]
}

//! =======================================================

export type GetAllProductsParams = {
  category?: string
  tags?: Tag[]
  minPrice?: number
  maxPrice?: number
  rating?: number
  limit?: number
}
