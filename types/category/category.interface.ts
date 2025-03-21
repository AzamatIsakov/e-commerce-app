export interface ISubcategoryItem {
  name: string
  path: string
}

export interface ISubcategory {
  name: string
  path: string
  items: ISubcategoryItem[]
}

export interface ICategory {
  id: string
  name: string
  path: string
  image: string
  subCategories: ISubcategory[]
}
