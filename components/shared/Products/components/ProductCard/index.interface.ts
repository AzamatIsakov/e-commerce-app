import { Image, Price } from '@/types/product'

export interface ProductCardProps {
  id: string | number
  images: Image[]
  title: string
  price: Price
  rating: number
  discountInfo: number | null
  stock: number
}
