import { categoryNames } from '../names'

export const electronicsCategory = {
  id: '34efa955-ca42-49dc-ae30-17e0aae439d4',
  name: categoryNames.electronics,
  path: 'electronics',
  image:
    'https://public.readdy.ai/ai/img_res/f4c0aab810b419eebbc808eb03fcc856.jpg',
  subCategories: [
    {
      name: categoryNames.phones,
      path: 'phones',
      items: [
        {
          name: categoryNames.smartphones,
          path: 'smartphones'
        },
        {
          name: 'Аксессуары для смартфонов',
          path: 'smartphone-accessories'
        },
        {
          name: 'Кнопочные телефоны',
          path: 'feature-phones'
        },
        {
          name: 'Стационарные телефоны',
          path: 'landline-phones'
        }
      ]
    },
    {
      name: 'Ноутбуки, планшеты и электронные книги',
      path: 'laptops-tablets-ereaders',
      items: [
        {
          name: 'Аксессуары для ноутбуков',
          path: 'laptop-accessories'
        },
        {
          name: 'Ноутбуки',
          path: 'laptops'
        },
        {
          name: 'Планшеты и электронные книги',
          path: 'tablets-ereaders'
        }
      ]
    },
    {
      name: 'Компьютерная техника',
      path: 'computer-hardware',
      items: [
        {
          name: 'Аксессуары для компьютеров',
          path: 'computer-accessories'
        },
        {
          name: 'Компьютерная периферия',
          path: 'computer-peripherals'
        },
        {
          name: 'Компьютеры',
          path: 'computers'
        },
        {
          name: 'Хранение данных',
          path: 'data-storage'
        },
        {
          name: 'Программное обеспечение',
          path: 'software'
        }
      ]
    },
    {
      name: categoryNames.gamingProducts,
      path: 'gaming-products',
      items: [
        {
          name: categoryNames.gameConsoles,
          path: 'game-consoles'
        },
        {
          name: categoryNames.gamingHeadphones,
          path: 'gaming-headphones'
        },
        {
          name: categoryNames.gamingKeyboards,
          path: 'gaming-keyboards'
        },
        {
          name: categoryNames.gamingLaptops,
          path: 'gaming-laptops'
        },
        {
          name: categoryNames.gamingMice,
          path: 'gaming-mice'
        },
        {
          name: categoryNames.gamingMonitors,
          path: 'gaming-monitors'
        },
        {
          name: categoryNames.gamingMousepads,
          path: 'gaming-mousepads'
        },
        {
          name: categoryNames.videoGames,
          path: 'video-games'
        }
      ]
    }
    // {
    //   name: '',
    //   path: '',
    //   items: [
    //     {
    //       name: '',
    //       path: ''
    //     },
    //     {
    //       name: '',
    //       path: ''
    //     },
    //     {
    //       name: '',
    //       path: ''
    //     },
    //     {
    //       name: '',
    //       path: ''
    //     },
    //     {
    //       name: '',
    //       path: ''
    //     }
    //   ]
    // }
  ]
}
