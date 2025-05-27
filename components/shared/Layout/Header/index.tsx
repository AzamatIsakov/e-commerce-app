'use client'

import Image from 'next/image'
import Link from 'next/link'

import { LogIn, Mailbox, Search, ShoppingCart, UserPlus } from 'lucide-react'

import { useLoginStore } from '@/stores/useLoginStore'

import { Input } from '@/components/ui/input'
import { Navbar } from '../Navbar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { usePathname, useRouter } from 'next/navigation'
import { HeaderProps } from './index.interface'

export const Header = ({ isAuthorized }: HeaderProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const { setOpen } = useLoginStore()

  const cartClickHandler = () => {
    if (!isAuthorized) return setOpen(true)
    router.push('/cart')
  }

  const goToLink = (path: string) => {
    router.push(path)
  }

  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <div className="container">
        <div className="flex justify-between py-3 md:py-4">
          <div className="flex items-center gap-6 md:gap-2 xl:gap-8">
            <h1 className="hidden text-2xl font-bold text-[#E53935]">
              Unicora
            </h1>
            <Link className="focus-visible:outline-red-600" href="/">
              <div className="relative h-7 w-32 overflow-visible md:h-8 md:w-36">
                <Image
                  src="/logo-black.svg"
                  className="object-contain"
                  fill
                  alt="Unicora logo"
                />
              </div>
            </Link>
            <div className="relative hidden lg:block">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                className="peer cursor-pointer border-none bg-gray-100 py-2 pl-10 pr-4 outline-none transition-all duration-300 focus-within:cursor-text focus:ring-2 focus:ring-red-600 focus-visible:ring-[#E53935] active:ring-red-600 lg:w-64 xl:w-80"
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus-within:text-red-600 peer-focus-visible:text-red-600"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Navbar isAuthorized={isAuthorized} />

            {!isAuthorized && (
              <div className="hidden items-center gap-2 lg:flex">
                <Button
                  onClick={() =>
                    goToLink(`/auth/login?callbackUrl=${pathname}`)
                  }
                  variant="outline"
                  className="!rounded-button whitespace-nowrap"
                >
                  <LogIn />
                  Войти
                </Button>
                <Button
                  onClick={() =>
                    goToLink(`/auth/register?callbackUrl=${pathname}`)
                  }
                  className="!rounded-button primary-button whitespace-nowrap"
                >
                  <UserPlus />
                  Зарегистрироваться
                </Button>
              </div>
            )}
          </div>

          <div className="lg:hidden">
            <Button
              onClick={() => goToLink('/db-test')}
              variant="ghost"
              className="!rounded-button h-10 w-10 p-0"
            >
              <Mailbox />
            </Button>
            <Button variant="ghost" className="!rounded-button h-10 w-10 p-0">
              <Search className="!size-[18px]" />
            </Button>
            <Button
              onClick={cartClickHandler}
              variant="ghost"
              className="!rounded-button relative h-10 w-10 p-0"
            >
              <ShoppingCart className="!size-[18px]" />
              {0 > 0 && (
                <Badge className="absolute -right-1 -top-1 bg-[#E53935]">
                  {/* {cartCount} */ 0}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
