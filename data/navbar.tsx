import {
  Grid2X2,
  Heart,
  House,
  ShoppingCart,
  User,
  UserRound
} from 'lucide-react'

const iconsSize = 16

export const links = [
  {
    icon: <Grid2X2 size={iconsSize} />,
    title: 'Категории',
    path: '/categories'
  },
  {
    icon: <Heart size={iconsSize} />,
    title: 'Избранное',
    path: '/favorite'
  },
  {
    icon: <ShoppingCart size={iconsSize} />,
    title: 'Корзина',
    path: '/cart'
  },
  {
    icon: <UserRound size={iconsSize} />,
    title: 'Профиль',
    path: '/profile'
  }
]

export const mobileNavbarLinks = [
  {
    icon: <House />,
    title: 'Главная',
    path: '/'
  },
  {
    icon: <Grid2X2 />,
    title: 'Категории',
    path: '/categories'
  },
  {
    icon: <Heart />,
    title: 'Избранное',
    path: '/favorite'
  },
  {
    icon: <User />,
    title: 'Профиль',
    path: '/cart'
  }
]
