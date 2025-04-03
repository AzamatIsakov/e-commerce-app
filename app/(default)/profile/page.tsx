import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Heart, PackageOpen, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { UserInfo } from './_components/UserInfo'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const ProfilePage: React.FC = async () => {
  const session = await auth()

  if (!session) redirect('/auth/login?callbackUrl=/profile')

  const user = session.user

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Основной контент */}
      {/* max-w-7xl  */}
      <main className="container mt-10 pb-16 md:pt-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Левая колонка с информацией о профиле */}
          <div className="lg:col-span-3">
            <UserInfo
              fullName={user?.name ?? ''}
              email={user?.email ?? ''}
              avatar={user?.image ?? ''}
            />
          </div>
          {/* Правая колонка с основным контентом */}
          <div className="lg:col-span-9">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-6">
                <Card className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">Личный кабинет</h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card className="flex flex-col items-center p-6 text-center transition-shadow duration-200 hover:shadow-lg">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e53935] text-white">
                        <PackageOpen className="size-7" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">Мои заказы</h3>
                      <p className="mb-4 text-sm text-gray-500">
                        История и статус ваших заказов
                      </p>
                      <Button className="!rounded-button w-full whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
                        Просмотреть
                      </Button>
                    </Card>
                    <Link href="/favorites" className="block">
                      <Card className="flex h-full flex-col items-center p-6 text-center transition-shadow duration-200 hover:shadow-lg">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e53935] text-white">
                          <Heart fill="#ffffff" className="size-7" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">
                          Избранное
                        </h3>
                        <p className="mb-4 text-sm text-gray-500">
                          Товары, которые вам понравились
                        </p>
                        <Button className="!rounded-button w-full whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
                          Перейти
                        </Button>
                      </Card>
                    </Link>
                    <a href="/cart" className="block">
                      <Card className="flex h-full flex-col items-center p-6 text-center transition-shadow duration-200 hover:shadow-lg">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e53935] text-white">
                          <ShoppingCart fill="#ffffff" className="size-7" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">Корзина</h3>
                        <p className="mb-4 text-sm text-gray-500">
                          Товары, готовые к оформлению
                        </p>
                        <Button className="!rounded-button w-full whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
                          Перейти
                        </Button>
                      </Card>
                    </a>
                  </div>
                </Card>
                {/* Блок "Последние заказы" удален */}
                <Card className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">Настройки профиля</h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" defaultValue="Анна" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="surname">Фамилия</Label>
                      <Input
                        id="surname"
                        defaultValue="Иванова"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="anna.ivanova@mail.ru"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        defaultValue="+7 (912) 345-67-89"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="!rounded-button whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
                      Сохранить изменения
                    </Button>
                  </div>
                </Card>
                <Card className="p-6">
                  <h2 className="mb-6 text-2xl font-bold">Адрес доставки</h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="city">Город</Label>
                      <Input id="city" defaultValue="Москва" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="street">Улица</Label>
                      <Input
                        id="street"
                        defaultValue="Ленина"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="house">Дом</Label>
                      <Input id="house" defaultValue="10" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="apartment">Квартира</Label>
                      <Input
                        id="apartment"
                        defaultValue="42"
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="comment">Комментарий для курьера</Label>
                      <Input
                        id="comment"
                        defaultValue="Код домофона: 1234"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="!rounded-button whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
                      Сохранить адрес
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default ProfilePage
