'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SquarePen, Mail, Phone, MapPin, LogOut } from 'lucide-react'
import { UserInfoProps } from './index.intarface'
import { signOut } from 'next-auth/react'

export const UserInfo = ({
  fullName,
  avatar,
  email,
  address,
  phoneNumber
}: UserInfoProps) => {
  if (!fullName && !email) return null

  return (
    <Card className="p-6">
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
            <AvatarImage
              src={avatar ?? '/images/avatar-template.webp'}
              // "https://public.readdy.ai/ai/img_res/8a77afb0ba1dd7d12ac1ac06e65abcb4.jpg"
              alt="Фото профиля"
            />
            <AvatarFallback>{fullName}</AvatarFallback>
          </Avatar>
          {/* <button className="!rounded-button absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#e53935] text-white shadow-md transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
                <i className="fas fa-camera"></i>
              </button> */}
        </div>
        <h2 className="text-xl font-bold">{fullName}</h2>
        <p className="mb-4 text-gray-500">Постоянный клиент</p>
        <Button className="!rounded-button w-full whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
          <SquarePen /> Редактировать профиль
        </Button>
      </div>
      <div className="mt-8">
        <h3 className="mb-3 text-lg font-semibold">Личная информация</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Mail className="size-5 shrink-0 text-gray-400" />
            <span title={email} className="ml-2 truncate">
              {email}
            </span>
          </div>
          <div className="flex items-center">
            <Phone className="size-5 shrink-0 text-gray-400" />
            <span className="ml-2">{phoneNumber ?? 'Не указано'}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="size-5 shrink-0 text-gray-400" />
            <span className="ml-2">{address ?? 'Не указано'}</span>
          </div>
        </div>
      </div>

      {/*//? Блок статистики */}
      {/* <div className="mt-8">
        <h3 className="mb-3 text-lg font-semibold">Статистика</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-2xl font-bold text-[#e53935]">7</p>
            <p className="text-sm text-gray-500">Заказов</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-2xl font-bold text-[#e53935]">3</p>
            <p className="text-sm text-gray-500">Отзывов</p>
          </div>
        </div>
      </div> */}

      <div className="mt-8">
        <Button
          onClick={() => signOut()}
          variant="outline"
          className="!rounded-button w-full whitespace-nowrap border-[#e53935] text-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] hover:text-white active:bg-[#dc2626]"
        >
          <LogOut />
          Выйти
        </Button>
      </div>
    </Card>
  )
}
