export interface IPrice {
  min: number
  max: number
}

export interface IImage {
  id: string
  link: string
}

export interface ProductCardProps {
  id: string | number
  images: IImage[]
  title: string
  price: IPrice
  rating: number
  discountInfo: number | null
}
