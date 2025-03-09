export interface IPrice {
  min: number
  max: number
}

export interface IPhoto {
  id: string
  link: string
}

export interface IProduct {
  id: string | string
  title: string
  price: IPrice
  favorite: boolean
  rating: number
  photos: IPhoto[]
  discountInfo: number | null
}

export interface ProductDTO {
  items: IProduct[]
}
