import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { LoginForm } from './_components/LoginForm'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const LoginPage = async () => {
  const session = await auth()

  if (session?.user) redirect('/')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      {/* Logo */}
      <Link href="/" className="relative mb-6 h-[60px] w-[180px]">
        <Image
          src="/logo-black.svg"
          fill
          alt="Unicora"
          className="object-contain"
        />
      </Link>

      <LoginForm />

      <div className="mt-5 text-center">
        <span className="text-gray-600">Нет аккаунта? </span>
        <Link href="/auth/register">
          <Button
            variant="link"
            className="p-0 font-semibold text-red-active hover:text-[#cc0000]"
          >
            Зарегистрироваться
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
