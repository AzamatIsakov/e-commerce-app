export interface Photo {
  id: string
  link: string
}

export interface Tag {
  name: string
  displayName: string
}

export interface Feature {
  name: string
  value: string
}

export interface Option {
  name: string
  value: string
}

export interface Variation {
  id: string
  price: number
  stock: number
  options: Option[]
}

export interface Image {
  id: string
  link: string
}

export interface Price {
  min: number
  max: number
}
