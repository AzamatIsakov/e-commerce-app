'use client'

import { Search, ShoppingCart, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Input } from '@/components/ui/input'
import { Navbar } from '../Navbar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

import { useSession } from 'next-auth/react'
import { useState } from 'react'

export const Header = () => {
  const { data: session } = useSession()

  const isAuthorized = session?.user

  const [openAuthorizeModal, setOpenAuthorizeModal] = useState(false)

  const cartClickHandler = () => {
    if (!isAuthorized) return setOpenAuthorizeModal(true)
  }

  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <div className="container">
        <div className="flex justify-between py-3 md:py-4">
          <div className="flex items-center gap-8">
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
                className="peer cursor-pointer border-none bg-gray-100 py-2 pl-10 pr-4 outline-none transition-all duration-300 focus-within:cursor-text focus:ring-2 focus:ring-red-600 focus-visible:ring-[#E53935] active:ring-red-600 lg:w-64 xl:w-[400px]"
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus-within:text-red-600 peer-focus-visible:text-red-600"
              />
            </div>
          </div>
          <Navbar />
          <div className="lg:hidden">
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
            <Dialog
              open={openAuthorizeModal}
              onOpenChange={setOpenAuthorizeModal}
            >
              <DialogContent>
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 w-fit rounded-full bg-gray-400 p-2">
                    <UserRound className="text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Требуется авторизация
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Войдите или зарегистрируйтесь, чтобы получить доступ к
                    корзине
                  </p>
                  <div className="mx-auto flex max-w-80 flex-col gap-2">
                    <Button
                      variant="outline"
                      className="!rounded-button transition-all duration-300"
                    >
                      Войти
                    </Button>
                    <Button className="!rounded-button bg-red transition-all duration-300 hover:bg-red-600 active:bg-red-500">
                      Зарегистрироваться
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  )
}
