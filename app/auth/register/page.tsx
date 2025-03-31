'use client'

import Link from 'next/link'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Alert } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'

import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import { EMAIL_REGEX } from '@/constants/validations'
import { useRouter, useSearchParams } from 'next/navigation'

const RegisterPage: React.FC = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'authenticated') router.push('/')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)

  const urlParams = useSearchParams()
  const callbackUrl = urlParams.get('callbackUrl') ?? '/'

  const calculatePasswordStrength = (pwd: string) => {
    let strength = 0
    if (pwd.length >= 8) strength += 25
    if (pwd.match(/[A-Z]/)) strength += 25
    if (pwd.match(/[0-9]/)) strength += 25
    if (pwd.match(/[^A-Za-z0-9]/)) strength += 25
    setPasswordStrength(strength)
  }

  const handleRegister = () => {
    if (!email || !password || !confirmPassword || !username) {
      setError('Пожалуйста, заполните все поля')
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setError('Неверный формат email')
      return
    }
    if (password !== confirmPassword) {
      setError('Пароли не совпадают')
      return
    }
    if (passwordStrength < 75) {
      setError('Пароль недостаточно надежный')
      return
    }
    setError('')
  }

  const iconClickHanlder: React.MouseEventHandler<SVGSVGElement> = (e) => {
    try {
      const iconElem = e.target as SVGSVGElement

      const inputElem = iconElem.previousElementSibling as HTMLInputElement
      inputElem.focus()
    } catch {
      //
    }
  }

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

      <Card className="w-full max-w-[400px] p-6 shadow-lg">
        <h1 className="mb-4 text-center text-2xl font-bold">Регистрация</h1>
        {error && (
          <Alert variant="destructive" className="mb-4 font-semibold">
            {error}
          </Alert>
        )}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer pl-10 focus:border-red focus-visible:outline-none focus-visible:ring-0"
                placeholder="Введите email"
              />
              <Mail
                onClick={iconClickHanlder}
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer text-gray-400 transition-all peer-focus:text-red"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Имя пользователя</Label>
            <div className="relative">
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="peer pl-10 focus:border-red focus-visible:outline-none focus-visible:ring-0"
                placeholder="Введите имя пользователя"
              />
              <User
                onClick={iconClickHanlder}
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer text-gray-400 transition-all peer-focus:text-red"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  calculatePasswordStrength(e.target.value)
                }}
                className="peer pl-10 pr-10 focus:border-red focus-visible:outline-none focus-visible:ring-0"
                placeholder="Введите пароль"
              />
              <Lock
                onClick={iconClickHanlder}
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer text-gray-400 transition-all peer-focus:text-red"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Progress value={passwordStrength} className="h-1" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                className="peer pl-10 pr-10 focus:border-red focus-visible:outline-none focus-visible:ring-0"
                placeholder="Подтвердите пароль"
              />
              <Lock
                onClick={iconClickHanlder}
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 cursor-pointer text-gray-400 transition-all peer-focus:text-red"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button onClick={handleRegister} className="!rounded-button w-full">
            Зарегистрироваться
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">или</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="!rounded-button w-full bg-blue-50 hover:bg-blue-100 active:bg-blue-200"
              onClick={() => signIn('google', { redirectTo: callbackUrl })}
            >
              <div className="relative size-4">
                <Image
                  src="/icons/google-logo-icon.svg"
                  fill
                  alt="google logo"
                />
              </div>
              <span>
                Войти через <span className="font-semibold">Google</span>
              </span>
            </Button>
            <Button
              variant="outline"
              className="!rounded-button w-full bg-red-50 hover:bg-red-100 active:bg-red-200"
              onClick={() => signIn('yandex', { redirectTo: callbackUrl })}
            >
              <div className="relative size-4">
                <Image
                  src="/icons/yandex-logo-icon.svg"
                  fill
                  alt="google logo"
                />
              </div>
              <span>
                Войти через <span className="font-semibold">Яндекс</span>
              </span>
            </Button>
          </div>
        </form>
      </Card>

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
