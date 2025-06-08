import { Feature, Option, Photo, Tag, Variation } from '@/types/product'
import mongoose, { Schema, Document, Model, ObjectId } from 'mongoose'

export interface Product extends Document {
  _id: ObjectId
  id: string
  title: string
  price: {
    min: number
    max: number
  }
  favorite: boolean
  rating: number
  photos: Photo[]
  discount: number | null
  categories: string[]
  description: string
  tags: Tag[]
  stock: number
  features: Feature[] | null
  variations: Variation[] | null
}

const PhotoSchema = new Schema<Photo>({
  id: { type: String, required: true },
  link: { type: String, required: true }
})

const TagSchema = new Schema<Tag>({
  name: { type: String, required: true },
  displayName: { type: String, required: true }
})

const FeatureSchema = new Schema<Feature>({
  name: { type: String, required: true },
  value: { type: String, required: true }
})

const OptionSchema = new Schema<Option>({
  name: { type: String, required: true },
  value: { type: String, required: true }
})

const VariationSchema = new Schema<Variation>({
  id: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  options: { type: [OptionSchema], required: true }
})

const ProductSchema = new Schema<Product>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  price: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  favorite: { type: Boolean, required: true },
  rating: { type: Number, required: true },
  photos: { type: [PhotoSchema], required: true },
  discount: { type: Number, required: false, default: null },
  categories: { type: [String], required: true },
  description: { type: String, required: true },
  tags: { type: [TagSchema], required: true },
  stock: { type: Number, required: true },
  features: { type: [FeatureSchema], required: false, default: null },
  variations: { type: [VariationSchema], required: false, default: null }
})

const ProductModel: Model<Product> =
  mongoose.models.Product || mongoose.model<Product>('Product', ProductSchema)

export default ProductModel
