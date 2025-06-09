'use client'

import { Button } from '@/components/ui/button'
import { formatNumberWithSpace } from '@/utilities/format'

import { useEffect, useState } from 'react'
import { ProductCarousel } from '@/components/shared/ProductCarousel'
import { RatingStars } from '@/components/shared'
import {
  SelectQuantity,
  SelectVariation,
  Specifications,
  VariationOptions
} from './_components'
import { Product } from '@/models/Product'
import { updateUserTags } from '@/services/User.service'
import { useSession } from 'next-auth/react'

const SingleProductPage = ({ params }: { params: { id: string } }) => {
  const id = params.id

  const session = useSession()

  const [product, setProduct] = useState<Product | null>(null)

  const [selectedVariation, setSelectedVariation] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const selectVariation = (index: number) => {
    setSelectedVariation(index)
  }

  const updateQuantity = (number: number) => {
    setQuantity(number)
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`)
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)

        const text = await res.text() // Читаем как текст
        const data = text ? JSON.parse(text) : null // Проверяем, не пустой ли ответ

        if (data && data.data) setProduct(data.data)
        else throw new Error('Invalid JSON structure')
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    if (id) fetchProduct()
  }, [id])

  useEffect(() => {
    if (product && product?.tags?.length > 0 && session.data?.user)
      updateUserTags(
        product.tags.map((tag) => ({
          name: tag.name,
          displayName: tag.displayName,
          category: product.categories[2]
        }))
      )
  }, [product, session.data?.user])

  if (!product) return null

  return (
    <div className="container min-h-screen bg-gray-50">
      <div className="py-6 sm:py-8 lg:py-12">
        {/* Breadcrumbs */}
        {/* <div className="mb-4 overflow-x-auto whitespace-nowrap text-sm text-gray-600 sm:mb-8">
          <span className="cursor-pointer hover:text-gray-900">Главная</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-gray-900">
            Игровые аксессуары
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Коврики для мыши</span>
        </div> */}
        <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-start gap-4 lg:gap-8 xl:flex-row">
              <ProductCarousel
                images={[...product.photos.map((photo) => photo.link)]}
              />

              <div className="w-full overflow-hidden">
                <h1 className="mb-6 text-xl font-bold md:text-2xl">
                  {product.title}
                </h1>
                {product.variations && (
                  <div className="mb-6 rounded-xl bg-gray-50 p-4 sm:mb-8 sm:p-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-baseline gap-2 sm:gap-4">
                        <span className="text-2xl font-bold sm:text-3xl">
                          {formatNumberWithSpace(
                            product.variations[selectedVariation].price
                          )}
                        </span>
                        {/* <span className="text-base text-gray-500 line-through sm:text-lg">
                        {formatNumberWithSpace(
                          product.variations[selectedVariation]
                            .originalPrice
                        )}
                      </span> */}
                      </div>
                      <div className="flex items-center gap-3">
                        <RatingStars rating={product.rating} />
                        <span className="text-lg font-medium">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {product.variations && (
                  <div className="mb-8">
                    <h3 className="mb-4 text-lg font-medium">
                      Выберите вариацию
                    </h3>
                    <div>
                      <SelectVariation
                        onSelect={selectVariation}
                        variations={product.variations}
                        selected={selectedVariation}
                      />
                    </div>
                    <div className="mt-6 rounded-xl bg-gray-50 p-4">
                      <h4 className="mb-3 font-medium">
                        Характеристики выбранной комплектации:
                      </h4>
                      <div className="space-y-2">
                        <VariationOptions
                          selected={selectedVariation}
                          variations={product.variations}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-6">
                  <span className="font-medium">Количество:</span>
                  <SelectQuantity value={quantity} setValue={updateQuantity} />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button className="!rounded-button h-12 w-full bg-red-600 text-base text-white hover:bg-red-700 sm:flex-1">
                    Купить сейчас
                  </Button>
                  <Button
                    disabled={!product.stock}
                    variant="outline"
                    className="!rounded-button h-12 w-full border-2 border-red-600 text-base text-red-600 hover:bg-red-600 hover:text-white sm:flex-1"
                  >
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
            {product.features && (
              <Specifications
                descriptions={product.description}
                features={product.features}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleProductPage
