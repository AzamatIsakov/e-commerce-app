import dbConnect from '@/lib/dbConnect'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await dbConnect()
    return NextResponse.json({ message: 'Соединение с MongoDB успешно!' })
  } catch (error) {
    return NextResponse.json(
      { message: 'Ошибка подключения к MongoDB', error },
      { status: 500 }
    )
  }
}
