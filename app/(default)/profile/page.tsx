import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const ProfilePage = async () => {
  const session = await auth()
  if (!session) redirect('/auth/login?callbackUrl=/profile')

  return (
    <main>
      <div className="container">
        <h1 className="my-5 text-4xl font-semibold">Профиль</h1>
      </div>
    </main>
  )
}

export default ProfilePage
