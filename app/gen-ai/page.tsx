'use client'

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
const Page: React.FC = () => {
  // Categories data remains the same...
  const categories = [
    { name: 'Смартфоны', icon: 'fas fa-mobile-alt' },
    { name: 'Ноутбуки', icon: 'fas fa-laptop' },
    { name: 'Аксессуары', icon: 'fas fa-headphones' },
    { name: 'Мебель', icon: 'fas fa-couch' },
    { name: 'Одежда', icon: 'fas fa-tshirt' },
    { name: 'Спорт', icon: 'fas fa-dumbbell' },
    { name: 'Электроника', icon: 'fas fa-tv' },
    { name: 'Красота', icon: 'fas fa-spa' }
  ]
  // Product data generation function
  const generateProducts = (startId: number) =>
    [...Array(20)].map((_, index) => ({
      id: startId + index,
      name: [
        'Смартфон Samsung Galaxy S25 Ultra 512GB',
        'Ноутбук ASUS ROG Strix G15 RTX 4080',
        'Apple MacBook Pro 16 M3 Max',
        'Sony WH-1000XM5 Premium',
        'iPhone 15 Pro Max 1TB',
        'iPad Pro 12.9 M2 2TB',
        'Dyson V15 Detect Absolute',
        'LG OLED C3 77 дюймов',
        'Canon EOS R5 Kit',
        'DJI Mavic 3 Pro Combo'
      ][index % 10],
      price: [
        89999, 129999, 259999, 39999, 159999, 189999, 69999, 299999, 399999,
        259999
      ][index % 10],
      oldPrice: [
        99999, 149999, 289999, 44999, 179999, 209999, 79999, 349999, 449999,
        299999
      ][index % 10],
      rating: [4.8, 4.9, 4.7, 4.6, 4.9, 4.8, 4.7, 4.9, 4.8, 4.7][index % 10],
      image: [
        'https://public.readdy.ai/ai/img_res/3184672cbbdeea9543205a0c5cfacfa1.jpg',
        'https://public.readdy.ai/ai/img_res/5e384ad6aa4ec02134d3c21d53928fb1.jpg',
        'https://public.readdy.ai/ai/img_res/8738b1eb6394e11ed9dfc83be027bf9c.jpg',
        'https://public.readdy.ai/ai/img_res/7af4859f8e5d813904dcdf558fc10955.jpg',
        'https://public.readdy.ai/ai/img_res/f572faec5b3231dbb6dc0c05e00772bc.jpg',
        'https://public.readdy.ai/ai/img_res/ae1d20b1c968d183ef4f41222e1c3f99.jpg',
        'https://public.readdy.ai/ai/img_res/7e5b41a587aabf15868c1adfaabf5710.jpg',
        'https://public.readdy.ai/ai/img_res/28c07ddf5abee2762e36fa361f2cf6e6.jpg',
        'https://public.readdy.ai/ai/img_res/6aba921e2a46f7630a51f66035a36d9b.jpg',
        'https://public.readdy.ai/ai/img_res/2181b9a33c76da6fc80253aa9f44d77f.jpg'
      ][index % 10]
    }))
  const popularProducts = generateProducts(1)
  const recommendedProducts = generateProducts(21)
  const newProducts = generateProducts(41)
  //   const handleAddToCart = (productId: number) => {
  //     setCartCount((prev) => prev + 1)
  //   }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ProductCard = ({ product }: { product: any }) => (
    <Card
      key={product.id}
      className="group overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative p-4 pb-0">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[3/4] w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Button
            variant="ghost"
            className="absolute right-3 top-3 h-9 w-9 transform !rounded-full bg-white/90 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
            onClick={() => {
              const btn = document.getElementById(`like-${product.id}`)
              if (btn) btn.classList.toggle('text-red-500')
            }}
          >
            <i
              id={`like-${product.id}`}
              className="fas fa-heart text-gray-600 transition-colors duration-300 hover:text-red-500"
            ></i>
          </Button>
          <div className="absolute left-3 top-3 flex gap-2">
            {product.oldPrice > product.price && (
              <Badge className="bg-red-500 px-2 py-1 text-xs font-medium text-white">
                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
              </Badge>
            )}
            <Badge className="bg-emerald-500 px-2 py-1 text-xs font-medium text-white">
              Хит продаж
            </Badge>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <i
                key={i}
                className={`fas fa-star text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
              ></i>
            ))}
          <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
        </div>
        <h3 className="mb-3 line-clamp-2 h-10 text-sm font-medium">
          {product.name}
        </h3>
        <div className="mb-4 flex items-end gap-2">
          <span className="text-lg font-bold text-[#E53935]">
            {product.price.toLocaleString()} ₽
          </span>
          {product.oldPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
        <Button className="!rounded-button h-10 w-full transform bg-[#E53935] text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF6D00]">
          <i className="fas fa-shopping-cart mr-2"></i>В корзину
        </Button>
      </div>
    </Card>
  )
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Header section remains the same... */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-[#E53935]">МегаМаркет</h1>
            {/* <div className="relative">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                className="w-[400px] border-none bg-gray-100 py-2 pl-10 pr-4 focus:ring-2 focus:ring-[#E53935]"
              />
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div> */}
          </div>
          <div className="flex items-center gap-6">
            <Button variant="ghost" className="!rounded-button">
              <i className="fas fa-th-large mr-2"></i>
              Категории
            </Button>
            <Button variant="ghost" className="!rounded-button">
              <i className="fas fa-heart mr-2"></i>
              Избранное
            </Button>
            <div className="relative">
              <Button variant="ghost" className="!rounded-button">
                <i className="fas fa-shopping-cart mr-2"></i>
                Корзина
                {/* {cartCount > 0 && (
                  <Badge className="absolute -right-1 -top-1 bg-[#E53935]">
                    {cartCount}
                  </Badge>
                )} */}
              </Button>
            </div>
            <Button variant="ghost" className="!rounded-button">
              <i className="fas fa-user mr-2"></i>
              Профиль
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[1440px] px-6 pb-16 pt-24">
        {/* Categories section remains the same... */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold">Популярные категории</h2>
          <div className="grid grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group relative h-[200px] cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img
                    src={
                      [
                        'https://public.readdy.ai/ai/img_res/e26c1a5b8ea08aa2bef243f7835d1fc8.jpg',
                        'https://public.readdy.ai/ai/img_res/404246ec57af8c63144932c9a84a12ab.jpg',
                        'https://public.readdy.ai/ai/img_res/802447d486fcc2b5761f5af6e04f9457.jpg',
                        'https://public.readdy.ai/ai/img_res/a52ebdbef8962384b79fedf91c88b877.jpg',
                        'https://public.readdy.ai/ai/img_res/b9c7fc08ba13f2297b0a660c539289e4.jpg',
                        'https://public.readdy.ai/ai/img_res/19c1790bad7b198fea8837f05b6627ed.jpg',
                        'https://public.readdy.ai/ai/img_res/a8574c9954ab1acaa3254c8d77b02da2.jpg',
                        'https://public.readdy.ai/ai/img_res/849d80e9e90ed077e4506fffb3a8da3b.jpg'
                      ][index]
                    }
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 transform p-6 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <div className="mb-2 flex items-center gap-3">
                    <i className={`${category.icon} text-2xl`}></i>
                    <span className="text-xl font-semibold">
                      {category.name}
                    </span>
                  </div>
                  <div className="h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        {/* Popular Products */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold">Популярные товары</h2>
          <div className="grid grid-cols-5 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        {/* Personal Recommendations */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold">Персональные рекомендации</h2>
          <div className="grid grid-cols-5 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        {/* New Arrivals */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold">Новинки</h2>
          <div className="grid grid-cols-5 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 py-16 text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-3 gap-8 px-6">
          <div>
            <h3 className="mb-6 text-xl font-bold">О магазине</h3>
            <ul className="space-y-4">
              <li>Контакты</li>
              <li>О нас</li>
              <li>Доставка</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-bold">Навигация</h3>
            <ul className="space-y-4">
              <li>Категории</li>
              <li>Поиск</li>
              <li>Личный кабинет</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-bold">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <i className="fas fa-phone mr-2"></i>8 800 555 35 35
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i>
                support@megamarket.ru
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>
                Москва, ул. Пушкина, д. 1
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Page
