'use client'

import { Button } from '@/components/ui/button'
import { mobileNavbarLinks } from '@/data/navbar'
import { Dialog, DialogContent } from '@radix-ui/react-dialog'
import { UserRound } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export const MobileNavbar = () => {
  const router = useRouter()
  const session = useSession()
  const pathname = usePathname()

  const [isModalOpened, setIsModalOpened] = useState(false)

  const navigateTo = (path: string) => {
    router.push(path)
  }

  const navItemClickHandler = (path: string, isProtected: boolean) => {
    if (isProtected && session.status !== 'authenticated')
      setIsModalOpened(true)
    else navigateTo(path)
  }

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 block bg-white shadow-lg lg:hidden">
        <div className="flex h-16 items-center justify-around px-4">
          {mobileNavbarLinks.map((link, index) => (
            <Button
              onClick={() => navItemClickHandler(link.path, link.protected)}
              key={index}
              variant="ghost"
              className={`flex h-full flex-1 flex-col items-center justify-center gap-1 !rounded-none ${pathname === link.path ? 'text-red *:fill-[#ff000033] hover:text-red' : ''}`}
            >
              {link.icon}
              <span className="text-xs">{link.title}</span>
            </Button>
          ))}
        </div>
      </nav>
      <Dialog open={isModalOpened} onOpenChange={setIsModalOpened}>
        <DialogContent>
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 w-fit rounded-full bg-gray-400 p-2">
              <UserRound className="text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">
              Требуется авторизация
            </h3>
            <p className="mb-4 text-gray-600">
              Войдите или зарегистрируйтесь, чтобы получить доступ к корзине
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
    </>
  )
}
