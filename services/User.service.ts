import { UserTag } from '@/types/user'

export const updateUserTags = async (tags: UserTag[]): Promise<void> => {
  try {
    const response = await fetch('/api/user/update-tags', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tags })
    })

    if (!response.ok)
      throw new Error('Ошибка при обновлении тегов пользователя')

    const json = await response.json()
    console.log('Теги обновлены:', json.tags)
  } catch (e) {
    console.error('updateUserTags error:', e)
  }
}

//! ==================================================
