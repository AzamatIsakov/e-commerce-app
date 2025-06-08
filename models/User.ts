import { UserType } from '@/types/user'
import { model, models, Schema } from 'mongoose'

const userSchema = new Schema<UserType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // password: { type: String },
    avatar: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    provider: {
      type: String,
      enum: ['credentials', 'google', 'yandex'],
      required: true
    },
    favorites: [{ type: String }], // ID товаров
    cart: [{ productId: String, quantity: Number }],
    tags: [{ name: String, displayName: String }]
  },
  { timestamps: true }
)

export const User = models?.User || model('User', userSchema)
