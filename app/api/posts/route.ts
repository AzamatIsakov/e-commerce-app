// import dbConnect from '@/lib/dbConnect'
// import { Post } from '@/models/Post'
// import { NextRequest, NextResponse } from 'next/server'

// export const GET = async () => {
//   await dbConnect()

//   const posts = await Post.find({})

//   return NextResponse.json(posts)
// }

// export const POST = async (req: NextRequest) => {
//   await dbConnect()

//   const data = await req.json()
//   const newPost = await Post.create(data)

//   return NextResponse.json(newPost, { status: 201 })
// }
