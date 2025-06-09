import { Product } from '@/models/Product'

export interface ProductDTO {
  products: Product[]
}

//! =======================================================

export type GetAllProductsParams = {
  category?: string
  tags?: string[]
  minPrice?: number
  maxPrice?: number
  rating?: number
  limit?: number
}
