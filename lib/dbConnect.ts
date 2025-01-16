import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_DB_URI

console.log(MONGO_URI)

if (!MONGO_URI) throw new Error('Пожалуйста, добавьте MONGO_URI в .env файл')

// Глобальная переменная для кэширования соединения
interface MongooseCache {
  conn: mongoose.Connection | null
  promise: Promise<mongoose.Connection> | null
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null }

if (!cached) cached = global.mongoose = { conn: null, promise: null }

async function dbConnect() {
  if (cached.conn) return cached.conn

  if (!cached.promise)
    cached.promise = mongoose
      .connect(MONGO_URI!, {
        bufferCommands: false
      })
      .then((mongooseInstance) => mongooseInstance.connection) // Указываем, что возвращается connection

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
