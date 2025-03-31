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
                    unoptimized
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
              unoptimized
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

        <div className="mt-1 flex flex-col items-start sm:flex-row sm:items-end sm:gap-2">
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
          className="rounded-button h-8 w-full transform text-xs font-medium md:h-10 md:text-sm"
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
