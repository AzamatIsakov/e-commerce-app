'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    title: 'Главная',
    path: '/'
  },
  {
    title: 'Категории',
    path: '/category'
  },
  {
    title: 'Поиск',
    path: '/search'
  },
  {
    title: 'Корзина',
    path: '/cart'
  },
  {
    title: 'Добавить продукт',
    path: '/product/create'
  },
  {
    title: 'Посмотреть продукты',
    path: '/product/all'
  }
]

export const Navbar = () => {
  const currentPath = usePathname()

  return (
    <nav>
      <ul className="flex gap-5">
        {links.map((link) =>
          link.path === currentPath ? (
            <li className="cursor-default text-red-600" key={link.path}>
              {link.title}
            </li>
          ) : (
            <li key={link.path}>
              <Link
                className="transition-all hover:text-red-400 active:text-red-700"
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
