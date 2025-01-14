export interface IPrice {
  min: number
  max: number
}

export interface IPhoto {
  id: string
  link: string
}

export interface IProduct {
  id: number
  title: string
  price: IPrice
  favorite: boolean
  rating: number
  photos: IPhoto[]
  discountInfo: string // '-56%'
}

export interface ProductDTO {
  items: IProduct[]
}
