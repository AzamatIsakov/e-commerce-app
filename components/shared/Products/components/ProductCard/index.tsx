'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import { ProductCardProps } from './index.interface'
import { RatingStars } from '@/components/shared'
import { useEffect, useState } from 'react'
import { formatNumberWithSpace } from '@/utilities/format'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

export const ProductCard = ({
  id,
  images,
  title,
  price,
  rating,
  discountInfo
}: ProductCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScreenLarge, setIsScreenLarge] = useState(false)

  const router = useRouter()

  const clearActiveIndex = () => {
    setActiveIndex(0)
  }

  const handleProductClick = (id: string | number) => {
    router.push(`/products/${id}`)
  }

  const handleAddToCart = (id: string | number) => {
    console.log('Не тыкай, пока не работает')
    console.log('ID:', id)
  }

  useEffect(() => {
    // Проверяем, доступно ли window (клиентская сторона)
    if (typeof window !== 'undefined') {
      // Устанавливаем начальный размер экрана
      setIsScreenLarge(window.innerWidth >= 768)

      // Добавляем слушатель изменения размера окна
      const handleResize = () => {
        setIsScreenLarge(window.innerWidth >= 768)
      }

      window.addEventListener('resize', handleResize)

      // Очистка
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const onMouseEnterHandler = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <Card
      onClick={() => handleProductClick(id)}
      className="cursor-default select-none p-2 transition-all duration-300 hover:shadow-xl md:p-4"
    >
      <CardHeader className="overflow-hidden rounded-md p-0">
        {isScreenLarge ? (
          <div className="relative aspect-[3_/_4] w-full overflow-hidden rounded-md">
            {discountInfo && discountInfo !== 0 && (
              <Badge
                variant="destructive"
                className="absolute left-3 top-3 z-10 bg-red-active px-2 py-1 text-xs font-medium text-white hover:bg-red-active"
              >
                {discountInfo} %
              </Badge>
            )}
            {/* Контейнер изображений */}
            <div className="absolute h-full w-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute h-full w-full transition-opacity duration-300 ease-in-out ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    placeholder="blur"
                    blurDataURL="/placeholder-image.webp"
                    className="h-full w-full object-cover"
                    src={image.link || '/placeholder.svg'}
                    alt={title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

            {/* Контейнер для миниатюр */}
            <div className="absolute left-1/2 table h-full w-full -translate-x-1/2 overflow-hidden bg-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
              {images.map((_, index) => (
                <div
                  key={index}
                  className="relative table-cell h-full"
                  style={{ width: `calc(100% / ${images.length})` }}
                  onMouseEnter={() => onMouseEnterHandler(index)}
                  onMouseLeave={() => clearActiveIndex()}
                >
                  {/* Индикатор активной миниатюры */}
                  <div
                    className={`absolute bottom-[5px] left-0 h-[3px] w-full border-x-2 border-x-transparent bg-clip-content transition-all duration-300 ease-in-out ${
                      activeIndex === index ? 'bg-red' : 'bg-[#e2e2e2]'
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative aspect-[3_/_4] w-full">
            <Image
              placeholder="blur"
              blurDataURL="/placeholder-image.webp"
              alt={title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
              src={images[0].link || '/placeholder.svg'}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="mt-2 p-0">
        <div className="flex items-center">
          <RatingStars rating={rating} />{' '}
          <span className="ml-2 text-xs text-gray-600 md:text-sm">
            {rating}
          </span>
        </div>
        <CardTitle title={title} className="mt-1 truncate text-sm font-medium">
          {title}
        </CardTitle>

        <div className="mt-1 flex items-end gap-2">
          <span className="text-base font-bold text-red md:text-lg">
            {formatNumberWithSpace(price.max)}
          </span>
          {price.max > price.min && (
            <span className="text-xs text-gray-400 line-through md:text-sm">
              {formatNumberWithSpace(price.max)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="mt-2 p-0">
        <Button
          className="rounded-button h-8 w-full transform bg-red text-xs font-medium transition-all duration-300 hover:bg-red-500 active:bg-red-600 md:h-10 md:text-sm"
          onClick={(e) => {
            e.stopPropagation()
            handleAddToCart(id)
          }}
        >
          <ShoppingCart fill="white" /> В корзину
        </Button>
      </CardFooter>
    </Card>
  )
}

{
  /* <Card
      key={product.id}
      className="group bg-white hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
    >
      <div className="relative p-4 pb-0">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <Button
            variant="ghost"
            className="absolute top-3 right-3 h-9 w-9 !rounded-full bg-white/90 hover:bg-white shadow-lg transform hover:scale-110 transition-all duration-300"
            onClick={() => {
              const btn = document.getElementById(`like-${product.id}`);
              if (btn) {
                btn.classList.toggle("text-red-500");
              }
            }}
          >
            <i
              id={`like-${product.id}`}
              className="fas fa-heart text-gray-600 hover:text-red-500 transition-colors duration-300"
            ></i>
          </Button>
          <div className="absolute top-3 left-3 flex gap-2">
            {product.oldPrice > product.price && (
              <Badge className="bg-red-500 text-white px-2 py-1 text-xs font-medium">
                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
              </Badge>
            )}
            <Badge className="bg-emerald-500 text-white px-2 py-1 text-xs font-medium">
              Хит продаж
            </Badge>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <i
                key={i}
                className={`fas fa-star text-sm ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-200"}`}
              ></i>
            ))}
          <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
        </div>
        <h3 className="font-medium text-sm mb-3 truncate">{product.name}</h3>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-lg font-bold text-[#E53935]">
            {product.price.toLocaleString()} ₽
          </span>
          {product.oldPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
        <Button
          className="w-full !rounded-button bg-[#E53935] hover:bg-[#FF6D00] transform hover:scale-[1.02] transition-all duration-300 text-sm font-medium h-10"
          onClick={() => handleAddToCart(product.id)}
        >
          <i className="fas fa-shopping-cart mr-2"></i>В корзину
        </Button>
      </div>
    </Card> */
}

// <Image
//   loading="lazy"
//   placeholder="blur"
//   blurDataURL="/placeholder-image.webp"
//   src={photo.link}
//   fill
//   alt={title}
//   className="brazzers__image overflow-hidden rounded-lg object-contain"
// />
