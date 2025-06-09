export interface CartType {
  productId: string
  quantity: number
}

export interface UserTag {
  name: string
  displayName: string
  category: string
}

export interface UserType {
  _id: string
  name: string
  email: string
  avatar?: string
  role: 'user' | 'admin'
  provider: 'credentials' | 'google' | 'yandex'
  favorites: string[]
  cart: CartType[]
  tags: UserTag[]
}
