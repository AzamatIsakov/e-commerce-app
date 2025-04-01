import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

import { redirect } from 'next/navigation'
import { RegisterForm } from './_components/RegisterForm'
import { auth } from '@/auth'

const RegisterPage: React.FC = async () => {
  const session = await auth()

  if (session?.user) redirect('/')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <Link href="/" className="relative mb-5 h-[60px] w-[180px]">
        <Image
          src="/logo-black.svg"
          fill
          alt="Unicora"
          className="object-contain"
        />
      </Link>

      <RegisterForm />

      <div className="mt-5 text-center">
        <span className="text-gray-600">Уже есть аккаунт? </span>
        <Link href="/auth/login">
          <Button
            tabIndex={-1}
            variant="link"
            className="p-0 font-semibold text-red-active hover:text-[#cc0000]"
          >
            Войти
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage
