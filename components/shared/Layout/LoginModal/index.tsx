'use client'

import { UserRound } from 'lucide-react'

import { useLoginStore } from '@/stores/useLoginStore'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export const LoginModal = () => {
  const { open, setOpen } = useLoginStore()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <div className="p-6 text-center">
          <div className="mx-auto mb-4 w-fit rounded-full bg-gray-400 p-2">
            <UserRound className="text-white" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">Требуется авторизация</h3>
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
  )
}
