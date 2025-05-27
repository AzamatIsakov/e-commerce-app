import {
  Heart,
  Grid2X2,
  House,
  ShoppingCart,
  User,
  UserRound,
  Mailbox
} from 'lucide-react'

const iconsSize = 16

export const getLinks = (isAuthorized: boolean) => {
  if (isAuthorized)
    return [
      {
        icon: <Grid2X2 size={iconsSize} />,
        title: 'Категории',
        path: '/categories',
        protected: false
      },
      {
        icon: <Heart size={iconsSize} />,
        title: 'Избранное',
        path: '/favorites',
        protected: true
      },
      {
        icon: <ShoppingCart size={iconsSize} />,
        title: 'Корзина',
        path: '/cart',
        protected: true
      },
      {
        icon: <UserRound size={iconsSize} />,
        title: 'Профиль',
        path: '/profile',
        protected: true
      }
    ]

  return [
    {
      icon: <Mailbox size={iconsSize} />,
      title: 'Посты',
      path: '/db-test',
      protected: false
    },
    {
      icon: <Grid2X2 size={iconsSize} />,
      title: 'Категории',
      path: '/categories',
      protected: false
    },
    {
      icon: <ShoppingCart size={iconsSize} />,
      title: 'Корзина',
      path: '/cart',
      protected: true
    }
  ]
}

export const mobileNavbarLinks = [
  {
    icon: <House />,
    title: 'Главная',
    path: '/',
    protected: false
  },
  {
    icon: <Grid2X2 />,
    title: 'Категории',
    path: '/categories',
    protected: false
  },
  {
    icon: <Heart />,
    title: 'Избранное',
    path: '/favorites',
    protected: true
  },
  {
    icon: <User />,
    title: 'Профиль',
    path: '/profile',
    protected: true
  }
]
