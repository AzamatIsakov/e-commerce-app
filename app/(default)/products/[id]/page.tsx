'use client'

// import React from 'react'

// const SingleProductPage = async ({
//   params
// }: {
//   params: Promise<{ id: string }>
// }) => {
//   const productId = await params

//   return <div>Product ID: {productId.id} </div>
// }

// export default SingleProductPage

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { formatNumberWithSpace } from '@/utilities/format'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/thumbs'
// import 'swiper/css/free-mode'

const SingleProductPage: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link')
    link.href =
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])
  // const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [selectedVariation, setSelectedVariation] = useState(0)
  const [favorite, setFavorite] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [currentSlide, setCurrentSlide] = useState(0)
  const productData = {
    name: 'Игровой компьютер ASUS ROG',
    variations: [
      {
        id: 1,
        name: 'Вариант 1',
        price: 649000,
        originalPrice: 1290000,
        rating: 4.5,
        reviewCount: 128,
        options: [
          {
            name: 'Процессор',
            value:
              'Intel Core i9-14900KF (24 ядра/32 потока, 3.2 ГГц база, до 5.8 ГГц турбо)'
          },
          {
            name: 'Видеокарта',
            value: 'GIGABYTE GeForce RTX 4080 SUPER AERO OC (16 ГБ GDDR6X)'
          },
          {
            name: 'Оперативная память',
            value: 'Corsair Vengeance RGB DDR5-6000 64 ГБ (2x32 ГБ)'
          },
          {
            name: 'Материнская плата',
            value: 'ASUS ROG Strix Z790-E Gaming WiFi'
          },
          {
            name: 'Накопитель',
            value: '2 ТБ Samsung 990 PRO NVMe PCIe 4.0 SSD'
          },
          { name: 'Охлаждение', value: 'NZXT Kraken Z73 RGB (360 мм)' },
          {
            name: 'Блок питания',
            value: 'Corsair HX1000i (1000 Вт, 80 PLUS Platinum)'
          }
        ]
      },
      {
        id: 2,
        name: 'Вариант 2',
        price: 849000,
        originalPrice: 1690000,
        rating: 4.7,
        reviewCount: 256,
        options: [
          {
            name: 'Процессор',
            value:
              'Intel Core i7-14700KF (20 ядер/28 потоков, 3.4 ГГц база, до 5.6 ГГц турбо)'
          },
          {
            name: 'Видеокарта',
            value: 'ASUS TUF Gaming GeForce RTX 4070 Ti SUPER OC (16 ГБ GDDR6X)'
          },
          {
            name: 'Оперативная память',
            value: 'G.SKILL Trident Z5 RGB DDR5-6400 32 ГБ (2x16 ГБ)'
          },
          { name: 'Материнская плата', value: 'MSI MPG Z790 EDGE WIFI' },
          {
            name: 'Накопитель',
            value: '1 ТБ WD BLACK SN850X NVMe PCIe 4.0 SSD'
          },
          { name: 'Охлаждение', value: 'be quiet! Dark Rock Pro 4' },
          {
            name: 'Блок питания',
            value: 'be quiet! Straight Power 11 850W (80 PLUS Platinum)'
          }
        ]
      },
      {
        id: 3,
        name: 'Вариант 3',
        price: 1049000,
        originalPrice: 2090000,
        rating: 4.9,
        reviewCount: 512,
        options: [
          {
            name: 'Процессор',
            value:
              'Intel Core i9-14900KS (24 ядра/32 потока, 3.4 ГГц база, до 6.2 ГГц турбо)'
          },
          {
            name: 'Видеокарта',
            value: 'ASUS ROG STRIX GeForce RTX 4090 OC (24 ГБ GDDR6X)'
          },
          {
            name: 'Оперативная память',
            value: 'G.SKILL Trident Z5 RGB DDR5-7200 64 ГБ (2x32 ГБ)'
          },
          { name: 'Материнская плата', value: 'ASUS ROG MAXIMUS Z790 HERO' },
          {
            name: 'Накопитель',
            value: '4 ТБ Samsung 990 PRO NVMe PCIe 4.0 SSD'
          },
          { name: 'Охлаждение', value: 'ASUS ROG RYUJIN III 360 ARGB' },
          {
            name: 'Блок питания',
            value: 'ASUS ROG THOR 1200P2 (1200 Вт, 80 PLUS Platinum)'
          }
        ]
      }
    ],
    images: [
      'https://public.readdy.ai/ai/img_res/19d2f9b2bde05ffe10e2e8f37a16a940.jpg',
      'https://public.readdy.ai/ai/img_res/d6b1a6bfc3805db16197601d814300fd.jpg',
      'https://public.readdy.ai/ai/img_res/2ea495d05e9e651b8a6f42df50fb7feb.jpg',
      'https://public.readdy.ai/ai/img_res/cc6cdd46a6853a14652aa097a191a745.jpg'
    ],
    specifications: [
      { name: 'Размеры', value: '800 x 300 x 3 мм' },
      { name: 'Материал поверхности', value: 'Текстурированный полиэстер' },
      { name: 'Материал основания', value: 'Натуральный каучук' },
      { name: 'Вес', value: '350 г' },
      { name: 'Цвет', value: 'Черный' },
      { name: 'Тип края', value: 'Прошитый красной нитью' },
      { name: 'Водоотталкивающее покрытие', value: 'Да' },
      { name: 'Совместимость с сенсорами', value: 'Оптический и лазерный' }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <div className="mb-4 overflow-x-auto whitespace-nowrap text-sm text-gray-600 sm:mb-8">
          <span className="cursor-pointer hover:text-gray-900">Главная</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-gray-900">
            Игровые аксессуары
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Коврики для мыши</span>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-8">
              <div className="w-full lg:w-[600px]">
                <div className="relative">
                  <Carousel
                    className="aspect-[3/4] w-full"
                    onSelect={(index) => setCurrentSlide(Number(index))}
                  >
                    <CarouselContent>
                      {productData.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                            <img
                              src={image}
                              alt={`Product view ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                    <button
                      onClick={() => setFavorite(!favorite)}
                      className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
                    >
                      <i
                        className={`fa-${favorite ? 'solid' : 'regular'} fa-heart text-xl text-red-600`}
                      ></i>
                    </button>
                    <div className="absolute left-4 top-4 z-10 rounded-full bg-red-600 px-4 py-2 font-medium text-white">
                      -50%
                    </div>
                  </Carousel>
                </div>
                <div className="mt-4">
                  <Carousel
                    className="w-full"
                    opts={{
                      align: 'start',
                      slidesToScroll: 1
                    }}
                  >
                    <CarouselContent className="-ml-2">
                      {productData.images.map((image, index) => (
                        <CarouselItem key={index} className="basis-1/4 pl-2">
                          <div
                            className={`aspect-[3/4] cursor-pointer overflow-hidden rounded-lg border-2 transition-colors hover:border-red-400 ${currentSlide === index ? 'border-red-400' : 'border-transparent'}`}
                            onClick={() => {
                              setCurrentSlide(index)
                              const mainCarousel = document.querySelector(
                                '.carousel'
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              ) as any
                              if (mainCarousel?.scrollTo)
                                mainCarousel.scrollTo({
                                  left: index * mainCarousel.offsetWidth,
                                  behavior: 'smooth'
                                })
                            }}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>

              {/* <div className="w-full lg:w-[600px]">
                <div className="relative">
                  <Swiper
                    modules={[Navigation, Pagination, Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    navigation
                    pagination={{ clickable: true }}
                    className="aspect-[3/4] overflow-hidden rounded-xl"
                  >
                    {productData.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt={`Product view ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button
                    onClick={() => setFavorite(!favorite)}
                    className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
                  >
                    <i
                      className={`fa-${favorite ? 'solid' : 'regular'} fa-heart text-xl text-red-600`}
                    ></i>
                  </button>
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-red-600 px-4 py-2 font-medium text-white">
                    -50%
                  </div>
                </div>
                <div className="mt-4">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={12}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="thumbs-gallery"
                  >
                    {productData.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="aspect-[3/4] cursor-pointer overflow-hidden rounded-lg border-2 transition-colors hover:border-red-400">
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div> */}
              <div className="flex-1">
                <h1 className="mb-6 text-2xl font-bold">{productData.name}</h1>
                <div className="mb-6 rounded-xl bg-gray-50 p-4 sm:mb-8 sm:p-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                      <span className="text-2xl font-bold sm:text-3xl">
                        {formatNumberWithSpace(
                          productData.variations[selectedVariation].price
                        )}
                      </span>
                      <span className="text-base text-gray-500 line-through sm:text-lg">
                        {formatNumberWithSpace(
                          productData.variations[selectedVariation]
                            .originalPrice
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <i
                            key={index}
                            className={`fas fa-star text-sm ${
                              index <
                              Math.floor(
                                productData.variations[selectedVariation].rating
                              )
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          ></i>
                        ))}
                      </div>
                      <span className="text-lg font-medium">
                        {productData.variations[selectedVariation].rating}
                      </span>
                      <span className="text-gray-500">
                        ({productData.variations[selectedVariation].reviewCount}{' '}
                        отзывов)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="mb-4 text-lg font-medium">
                    Выберите комплектацию
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {productData.variations.map((variation, index) => (
                      <button
                        key={variation.id}
                        onClick={() => setSelectedVariation(index)}
                        className={`flex flex-col items-center rounded-xl p-4 transition-all ${
                          selectedVariation === index
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <span className="mb-1 text-lg font-medium">
                          {variation.name}
                        </span>
                        <div className="text-center">
                          <p className="font-bold">
                            {formatNumberWithSpace(variation.price)}
                          </p>
                          <p className="text-sm line-through opacity-75">
                            {formatNumberWithSpace(variation.originalPrice)}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl bg-gray-50 p-4">
                    <h4 className="mb-3 font-medium">
                      Характеристики выбранной комплектации:
                    </h4>
                    <div className="space-y-2">
                      {productData.variations[selectedVariation].options.map(
                        (option, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <i className="fas fa-check-circle mt-1 text-green-500"></i>
                            <div>
                              <span className="font-medium">
                                {option.name}:{' '}
                              </span>
                              <span className="text-gray-600">
                                {option.value}
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-6">
                  <span className="font-medium">Количество:</span>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="!rounded-button h-10 w-10"
                    >
                      <i className="fas fa-minus"></i>
                    </Button>
                    <span className="w-12 text-center text-lg font-medium">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="!rounded-button h-10 w-10"
                    >
                      <i className="fas fa-plus"></i>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button className="!rounded-button h-12 w-full bg-red-600 text-base text-white hover:bg-red-700 sm:flex-1">
                    Купить сейчас
                  </Button>
                  <Button
                    variant="outline"
                    className="!rounded-button h-12 w-full border-2 border-red-600 text-base text-red-600 hover:bg-red-600 hover:text-white sm:flex-1"
                  >
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid h-auto w-full grid-cols-2 gap-2 rounded-xl bg-gray-100 p-1 sm:gap-4">
                <TabsTrigger
                  value="description"
                  className={`py-3 ${
                    activeTab === 'description'
                      ? 'bg-white text-red-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Описание
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className={`py-3 ${
                    activeTab === 'specifications'
                      ? 'bg-white text-red-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab('specifications')}
                >
                  Характеристики
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <ScrollArea className="h-[300px] pr-3 sm:h-[400px] sm:pr-6">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Профессиональный игровой компьютер ASUS ROG - это мощное
                        решение для самых требовательных геймеров и создателей
                        контента. Каждая конфигурация тщательно подобрана для
                        обеспечения максимальной производительности и
                        надежности. Система оснащена передовыми компонентами от
                        ведущих производителей и оптимизирована для работы с
                        современными играми и профессиональными приложениями.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Основные преимущества:</h4>
                        <ul className="list-inside list-disc space-y-2 text-gray-600">
                          <li>
                            Высокопроизводительные процессоры Intel Core
                            последнего поколения
                          </li>
                          <li>Мощные видеокарты NVIDIA GeForce RTX 40 серии</li>
                          <li>Быстрая оперативная память DDR5</li>
                          <li>Эффективная система охлаждения</li>
                          <li>
                            Премиальные компоненты от ведущих производителей
                          </li>
                          <li>Предустановленная Windows 11 Pro</li>
                          <li>Профессиональная сборка и настройка</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="specifications" className="mt-6">
                <ScrollArea className="h-[300px] pr-3 sm:h-[400px] sm:pr-6">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      {productData.variations[selectedVariation].options.map(
                        (option, index) => (
                          <div
                            key={index}
                            className="flex justify-between border-b py-3"
                          >
                            <span className="font-medium">{option.name}</span>
                            <span className="text-gray-600">
                              {option.value}
                            </span>
                          </div>
                        )
                      )}
                      <div className="flex justify-between border-b py-3">
                        <span className="font-medium">
                          Операционная система
                        </span>
                        <span className="text-gray-600">Windows 11 Pro</span>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <span className="font-medium">Гарантия</span>
                        <span className="text-gray-600">36 месяцев</span>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleProductPage
