'use client'

// import { auth } from '@/auth'
// import { redirect } from 'next/navigation'

// const ProfilePage = async () => {
//   const session = await auth()
//   if (!session) redirect('/auth/login?callbackUrl=/profile')

//   return (
//     <main>
//       <div className="container">
//         <h1 className="my-5 text-4xl font-semibold">Профиль</h1>
//       </div>
//     </main>
//   )
// }

// export default ProfilePage

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
const App: React.FC = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Основной контент */}
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Левая колонка с информацией о профиле */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                    <AvatarImage
                      src="https://public.readdy.ai/ai/img_res/8a77afb0ba1dd7d12ac1ac06e65abcb4.jpg"
                      alt="Фото профиля"
                    />
                    <AvatarFallback>АИ</AvatarFallback>
                  </Avatar>
                  <button className="!rounded-button absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-[#e53935] text-white shadow-md transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
                    <i className="fas fa-camera"></i>
                  </button>
                </div>
                <h2 className="text-xl font-bold">Анна Иванова</h2>
                <p className="mb-4 text-gray-500">Постоянный клиент</p>
                <Button className="!rounded-button w-full whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
                  <i className="fas fa-edit mr-2"></i> Редактировать профиль
                </Button>
              </div>
              <div className="mt-8">
                <h3 className="mb-3 text-lg font-semibold">
                  Личная информация
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-envelope w-6 text-gray-400"></i>
                    <span className="ml-2">anna.ivanova@mail.ru</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone w-6 text-gray-400"></i>
                    <span className="ml-2">+7 (912) 345-67-89</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt w-6 text-gray-400"></i>
                    <span className="ml-2">г. Москва</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
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
              </div>
              <div className="mt-8">
                <Button
                  variant="outline"
                  className="!rounded-button w-full whitespace-nowrap border-[#e53935] text-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] hover:text-white active:bg-[#dc2626]"
                >
                  <i className="fas fa-sign-out-alt mr-2"></i> Выйти
                </Button>
              </div>
            </Card>
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
                        <i className="fas fa-box-open text-2xl"></i>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">Мои заказы</h3>
                      <p className="mb-4 text-sm text-gray-500">
                        История и статус ваших заказов
                      </p>
                      <Button className="!rounded-button w-full whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
                        Просмотреть
                      </Button>
                    </Card>
                    <a href="/favorites" className="block">
                      <Card className="flex h-full flex-col items-center p-6 text-center transition-shadow duration-200 hover:shadow-lg">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e53935] text-white">
                          <i className="fas fa-heart text-2xl"></i>
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
                    </a>
                    <a href="/cart" className="block">
                      <Card className="flex h-full flex-col items-center p-6 text-center transition-shadow duration-200 hover:shadow-lg">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e53935] text-white">
                          <i className="fas fa-shopping-cart text-2xl"></i>
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
      {/* Футер */}
      <footer className="mt-16 bg-gray-800 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">О компании</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Вакансии
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Новости
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Покупателям</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Как сделать заказ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Способы оплаты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Возврат товара
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Партнерам</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Продавайте на МаркетПлейс
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Реклама на сайте
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    Сотрудничество
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Мы в соцсетях</h3>
              <div className="mb-6 flex space-x-4">
                <a
                  href="#"
                  className="cursor-pointer text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  <i className="fab fa-vk text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="cursor-pointer text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  <i className="fab fa-telegram text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="cursor-pointer text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="cursor-pointer text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
              <h3 className="mb-4 text-lg font-semibold">Способы оплаты</h3>
              <div className="flex space-x-4">
                <i className="fab fa-cc-visa text-2xl"></i>
                <i className="fab fa-cc-mastercard text-2xl"></i>
                <i className="fab fa-cc-paypal text-2xl"></i>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 МаркетПлейс. Все права защищены.</p>
          </div>
        </div>
      </footer>
      {/* Модальное окно авторизации */}
      <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Вход в аккаунт</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="login-email">Email</Label>
              <Input id="login-email" type="email" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="login-password">Пароль</Label>
              <Input id="login-password" type="password" className="mt-1" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <Label htmlFor="remember" className="text-sm">
                  Запомнить меня
                </Label>
              </div>
              <a
                href="#"
                className="text-sm text-[#e53935] hover:text-[#ef4444]"
              >
                Забыли пароль?
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="!rounded-button w-full whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
              Войти
            </Button>
            <p className="text-center text-sm">
              Нет аккаунта?{' '}
              <a
                href="#"
                className="text-[#e53935] hover:text-[#ef4444]"
                onClick={() => {
                  setIsLoginModalOpen(false)
                  setIsRegisterModalOpen(true)
                }}
              >
                Зарегистрироваться
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
      {/* Модальное окно регистрации */}
      <Dialog open={isRegisterModalOpen} onOpenChange={setIsRegisterModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Регистрация</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="register-name">Имя</Label>
                <Input id="register-name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="register-surname">Фамилия</Label>
                <Input id="register-surname" className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="register-email">Email</Label>
              <Input id="register-email" type="email" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="register-phone">Телефон</Label>
              <Input id="register-phone" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="register-password">Пароль</Label>
              <Input id="register-password" type="password" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="register-confirm-password">
                Подтвердите пароль
              </Label>
              <Input
                id="register-confirm-password"
                type="password"
                className="mt-1"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <Label htmlFor="terms" className="text-sm">
                Я согласен с{' '}
                <a href="#" className="text-[#e53935] hover:text-[#ef4444]">
                  условиями использования
                </a>
              </Label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="!rounded-button w-full whitespace-nowrap bg-[#e53935] transition-colors duration-200 hover:bg-[#ef4444] active:bg-[#dc2626]">
              Зарегистрироваться
            </Button>
            <p className="text-center text-sm">
              Уже есть аккаунт?{' '}
              <a
                href="#"
                className="text-[#e53935] hover:text-[#ef4444]"
                onClick={() => {
                  setIsRegisterModalOpen(false)
                  setIsLoginModalOpen(true)
                }}
              >
                Войти
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default App
