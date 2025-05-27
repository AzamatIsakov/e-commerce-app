import { categoryNames } from '../names'

export const homeAppliances = {
  id: '22e58838-5d01-4f17-a90c-b83faf003984',
  name: categoryNames.homeAppliances,
  path: 'home-appliances',
  image:
    'https://public.readdy.ai/ai/img_res/4ecd586ec0404349619cf915028cc658.jpg',
  subCategories: [
    {
      name: categoryNames.largeAppliances,
      path: 'large-appliances',
      items: [
        {
          name: categoryNames.fridgesAndFreezers,
          path: 'fridges-and-freezers'
        },
        {
          name: categoryNames.waterCoolersAndAccessories,
          path: 'water-coolers-and-accessories'
        }
        // {
        //   name: '',
        //   path: '' // route путь 'smartphone-accessories'
        // }
      ]
    }
    // {
    //   name: 'Ноутбуки, планшеты и электронные книги',
    //   path: 'laptops-tablets-ereaders',
    //   items: [
    //     {
    //       name: 'Аксессуары для ноутбуков',
    //       path: 'laptop-accessories'
    //     },
    //     {
    //       name: 'Ноутбуки',
    //       path: 'laptops'
    //     },
    //     {
    //       name: 'Планшеты и электронные книги',
    //       path: 'tablets-ereaders'
    //     }
    //   ]
    // },
    // {
    //   name: 'Компьютерная техника',
    //   path: 'computer-hardware',
    //   items: [
    //     {
    //       name: 'Аксессуары для компьютеров',
    //       path: 'computer-accessories'
    //     },
    //     {
    //       name: 'Компьютерная периферия',
    //       path: 'computer-peripherals'
    //     },
    //     {
    //       name: 'Компьютеры',
    //       path: 'computers'
    //     },
    //     {
    //       name: 'Хранение данных',
    //       path: 'data-storage'
    //     },
    //     {
    //       name: 'Программное обеспечение',
    //       path: 'software'
    //     }
    //   ]
    // },
    // {
    //   name: categoryNames.gamingProducts,
    //   path: 'gaming-products',
    //   items: [
    //     {
    //       name: categoryNames.gameConsoles,
    //       path: 'game-consoles'
    //     },
    //     {
    //       name: categoryNames.gamingHeadphones,
    //       path: 'gaming-headphones'
    //     },
    //     {
    //       name: categoryNames.gamingKeyboards,
    //       path: 'gaming-keyboards'
    //     },
    //     {
    //       name: categoryNames.gamingLaptops,
    //       path: 'gaming-laptops'
    //     },
    //     {
    //       name: categoryNames.gamingMice,
    //       path: 'gaming-mice'
    //     },
    //     {
    //       name: categoryNames.gamingMonitors,
    //       path: 'gaming-monitors'
    //     },
    //     {
    //       name: categoryNames.gamingMousepads,
    //       path: 'gaming-mousepads'
    //     },
    //     {
    //       name: categoryNames.videoGames,
    //       path: 'video-games'
    //     }
    //   ]
    // },
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
