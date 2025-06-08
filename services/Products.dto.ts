import { Product } from '@/models/Product'

// export interface IPrice {
//   min: number
//   max: number
// }

// export interface IPhoto {
//   id: string
//   link: string
// }

// export interface ITag {
//   name: string
//   displayName: string
// }

// export interface IFeature {
//   name: string
//   value: string
// }

// export interface IVariationOption {
//   name: string
//   value: string
// }
// export interface IVariation {
//   id: string
//   price: number
//   stock: number
//   options: IVariationOption[]
// }

// export interface IProduct {
//   id: string | number
//   title: string
//   price: IPrice
//   favorite: boolean
//   rating: number
//   photos: IPhoto[]
//   discount: number | null
//   categories: string[]
//   description: string
//   tags: ITag[]
//   stock: number
//   features: IFeature[]
//   variations: IVariation[]
// }

// // export interface ProductDTO {
// //   products: IProduct[]
// // }

export interface ProductDTO {
  products: Product[]
}
