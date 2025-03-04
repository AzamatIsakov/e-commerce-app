import { Grid2X2, Heart, ShoppingCart, UserRound } from 'lucide-react'

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
