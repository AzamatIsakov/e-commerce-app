import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useRef, useState } from 'react'
import { ProductCarouselProps } from './index.interface'
import { ProductCarouselModal } from './components'

export const ProductCarousel = ({ images }: ProductCarouselProps) => {
  const mainCarouselApi = useRef<CarouselApi | null>(null)
  const thumbnailCarouselApi = useRef<CarouselApi | null>(null)

  const [selected, setSelected] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const selectHandler = () => {
    if (!mainCarouselApi.current || !thumbnailCarouselApi.current) return

    const selectedIndex = mainCarouselApi.current.selectedScrollSnap()

    setSelected(selectedIndex)
    thumbnailCarouselApi.current.scrollTo(selectedIndex)
  }

  const initMainApiHandler = (value: CarouselApi) => {
    mainCarouselApi.current = value

    mainCarouselApi.current?.on('select', selectHandler)
    mainCarouselApi.current?.on('reInit', selectHandler)
  }

  const initThumbnailApiHandler = (value: CarouselApi) => {
    thumbnailCarouselApi.current = value
  }

  const setSlide = (index: number) => {
    if (!mainCarouselApi.current || !thumbnailCarouselApi.current) return

    mainCarouselApi.current.scrollTo(index)
  }

  const itemClickHandler = (index: number) => {
    setSlide(index)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="w-full shrink-0 xl:w-[600px]">
      <ProductCarouselModal
        onCarouselSelect={setSlide}
        selected={selected}
        images={images}
        open={isModalOpen}
        updateModalOpen={setIsModalOpen}
      />
      <div className="relative">
        <Carousel
          setApi={initMainApiHandler}
          className="aspect-[3/4] w-full overflow-hidden rounded-xl border-2 border-gray-50"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem onClick={openModal} key={index}>
                <div className="group relative aspect-[3/4] overflow-hidden hover:cursor-pointer">
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
          {/* <button
            onClick={() => setFavorite(!favorite)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
          >
            <i
              className={`fa-${favorite ? 'solid' : 'regular'} fa-heart text-xl text-red-600`}
            ></i>
          </button> */}
          <div className="absolute left-4 top-4 z-10 rounded-full bg-red-600 px-4 py-2 font-medium text-white">
            -50%
          </div>
        </Carousel>
      </div>
      <div className="mt-4">
        <Carousel
          setApi={initThumbnailApiHandler}
          className="w-full"
          opts={{
            align: 'start',
            dragFree: true
          }}
        >
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-1/4 pl-2">
                <div
                  className={`aspect-[3/4] cursor-pointer overflow-hidden rounded-lg border-2 transition-colors hover:border-red-400 ${selected === index ? 'border-red-400' : 'border-transparent'}`}
                  onClick={() => itemClickHandler(index)}
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
  )
}
