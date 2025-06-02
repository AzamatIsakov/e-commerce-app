'use client'

// import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { EMAIL_REGEX } from '@/constants/validations'
// import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
// import React, { useState } from 'react'

export const LoginForm = () => {
  // const [showPassword, setShowPassword] = useState(false)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [error, setError] = useState('')

  const urlParams = useSearchParams()
  const callbackUrl = urlParams.get('callbackUrl') ?? '/'

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     setError('Пожалуйста, заполните все поля')
  //     return
  //   }
  //   if (!EMAIL_REGEX.test(email)) {
  //     setError('Неверный формат email')
  //     return
  //   }
  //   setError('')

  //   try {
  //     await signIn('credentials', {
  //       redirect: true,
  //       redirectTo: '/',
  //       email,
  //       password
  //     })
  //   } catch {
  //     setError('Неверные учетные данные')
  //   }
  //   // Handle login logic here
  // }

  // const iconClickHanlder: React.MouseEventHandler<SVGSVGElement> = (e) => {
  //   try {
  //     const iconElem = e.target as SVGSVGElement

  //     const inputElem = iconElem.previousElementSibling as HTMLInputElement
  //     inputElem.focus()
  //   } catch {
  //     //
  //   }
  // }

  return (
    <Card className="w-full max-w-[400px] p-6 shadow-lg">
      <h1 className="mb-4 text-center text-2xl font-bold">Вход в аккаунт</h1>
      {/* {error && (
        <Alert variant="destructive" className="mb-4 font-semibold">
          {error}
        </Alert>
      )} */}
      {/* <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
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
          <Label htmlFor="password">Пароль</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        </div>
        <Button onClick={handleLogin} className="!rounded-button w-full">
          Войти
        </Button>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">или</span>
          </div>
        </div> */}

      <div className="space-y-3">
        <Button
          variant="outline"
          className="!rounded-button w-full bg-blue-50 hover:bg-blue-100 active:bg-blue-200"
          onClick={() => signIn('google', { redirectTo: callbackUrl })}
        >
          <div className="relative size-4">
            <Image src="/icons/google-logo-icon.svg" fill alt="google logo" />
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
            <Image src="/icons/yandex-logo-icon.svg" fill alt="google logo" />
          </div>
          <span>
            Войти через <span className="font-semibold">Яндекс</span>
          </span>
        </Button>
      </div>
      {/* </form> */}
    </Card>
  )
}
