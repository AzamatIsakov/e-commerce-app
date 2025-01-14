export interface IPrice {
  min: number
  max: number
}

export interface IPhoto {
  id: string
  link: string
}

export interface ProductCardProps {
  photos: IPhoto[]
  title: string
  price: IPrice
}
