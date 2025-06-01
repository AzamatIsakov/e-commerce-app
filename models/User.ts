// import { model, models, Schema } from 'mongoose'

// const userSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     passwordHash: { type: String },
//     avatar: { type: String },
//     role: { type: String, enum: ['user', 'admin'], default: 'user' },
//     provider: {
//       type: String,
//       enum: ['credentials', 'google', 'yandex'],
//       required: true
//     },
//     favorites: [{ type: String }], // ID товаров
//     cart: [{ productId: String, quantity: Number }]
//   },
//   { timestamps: true }
// )

// export const User = models?.User || model('User', userSchema)
