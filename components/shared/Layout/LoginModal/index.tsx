'use client'

import { UserRound } from 'lucide-react'

import { useLoginStore } from '@/stores/useLoginStore'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { usePathname, useRouter } from 'next/navigation'

export const LoginModal = () => {
  const { open, setOpen } = useLoginStore()

  const router = useRouter()
  const pathname = usePathname()

  const goToLink = (path: string) => {
    router.push(path)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xs rounded-lg p-3 sm:max-w-lg sm:p-5 md:p-6">
        <div className="p-6 text-center">
          <div className="mx-auto mb-4 w-fit rounded-full bg-gray-400 p-2">
            <UserRound className="text-white" />
          </div>
          <DialogTitle className="mb-2 text-lg font-semibold">
            Требуется авторизация
          </DialogTitle>
          <p className="mb-4 text-gray-600">
            Войдите или зарегистрируйтесь, чтобы получить доступ к корзине
          </p>
          <div className="mx-auto flex max-w-80 flex-col gap-2">
            <Button
              onClick={() => goToLink(`/auth/login?callbackUrl=${pathname}`)}
              variant="outline"
              className="!rounded-button transition-all duration-300"
            >
              Войти
            </Button>
            <Button
              onClick={() => goToLink(`/auth/register?callbackUrl=${pathname}`)}
              className="!rounded-button bg-red transition-all duration-300 hover:bg-red-600 active:bg-red-500"
            >
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
