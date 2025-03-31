import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const FavoritePage = async () => {
  const session = await auth()
  if (!session) redirect('/auth/login?callbackUrl=/favorite')

  return <div>FavoritePage</div>
}

export default FavoritePage
