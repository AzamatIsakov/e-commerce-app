export interface Product {
  id: string
  title: string
  price: number
}

//! ============= Requests =============

export interface CreateProductReqDTO {
  title: string
  price: number
}

//! ============= Responses =============

export type GetProductResDTO = Product[]
