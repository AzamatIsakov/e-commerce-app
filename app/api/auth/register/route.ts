import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { User } from '@/models/User'
import dbConnect from '@/lib/dbConnect'

export const POST = async (req: Request) => {
  try {
    const { name, email, password } = await req.json()
    if (!name || !email || !password)
      return NextResponse.json(
        { error: 'Все поля обязательны' },
        { status: 400 }
      )

    await dbConnect()

    const existingUser = await User.findOne({ email })
    if (existingUser)
      return NextResponse.json(
        { error: 'Пользователь уже существует' },
        { status: 400 }
      )

    const passwordHash = await bcrypt.hash(password, 10)

    await User.create({ name, email, passwordHash, provider: 'credentials' })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Ошибка регистрации:', err)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
