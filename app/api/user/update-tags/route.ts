import { auth } from '@/auth'
import dbConnect from '@/lib/dbConnect'
import { User } from '@/models/User'
import { UserTag } from '@/types/user'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    const session = await auth()

    if (!session?.user?.id)
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const newTags: UserTag[] = body.tags

    if (!Array.isArray(newTags))
      return NextResponse.json(
        { message: 'Неверный формат тегов' },
        { status: 400 }
      )

    await dbConnect()

    // Обновим пользователя: добавим только новые теги по полю `name`
    const user = await User.findById(session.user.id)

    if (!user)
      return NextResponse.json(
        { message: 'Пользователь не найден' },
        { status: 404 }
      )

    const existingTagNames = user.tags.map((tag: UserTag) => tag.name)
    const filteredNewTags = newTags.filter(
      (tag) => !existingTagNames.includes(tag.name)
    )

    console.log(filteredNewTags)

    if (filteredNewTags.length === 0)
      return NextResponse.json(
        { message: 'Новых тегов нет, обновление не требуется' },
        { status: 200 }
      )

    user.tags.push(...filteredNewTags)
    await user.save()

    return NextResponse.json(
      { message: 'Теги успешно обновлены', tags: user.tags },
      { status: 200 }
    )
  } catch (error) {
    console.error('Ошибка при обновлении тегов пользователя:', error)
    return NextResponse.json({ message: 'Ошибка сервера' }, { status: 500 })
  }
}
