import dbConnect from '@/lib/dbConnect'
import { Post } from '@/models/Post'
import { Types } from 'mongoose'
import { NextRequest, NextResponse } from 'next/server'

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await dbConnect()

  const { id } = params

  if (!Types.ObjectId.isValid(id))
    return NextResponse.json({ error: 'Неверный ID' }, { status: 400 })

  const deletedPost = await Post.findByIdAndDelete(id)

  if (!deletedPost)
    return NextResponse.json({ error: 'Пост не найден' }, { status: 404 })

  return NextResponse.json(deletedPost, { status: 200 })
}
