'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ProductCarouselModalProps } from './index.interface'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useRef } from 'react'

export const ProductCarouselModal = ({
  open,
  updateModalOpen,
  images,
  onCarouselSelect,
  selected
}: ProductCarouselModalProps) => {
  const carouselApi = useRef<CarouselApi | null>(null)

  const openChangeHanlder = (open: boolean) => {
    updateModalOpen(open)
  }

  const selectHandler = () => {
    if (!carouselApi.current) return

    onCarouselSelect(carouselApi.current.selectedScrollSnap())
  }

  const carouselInitHandler = (value: CarouselApi) => {
    value?.scrollTo(selected)
    carouselApi.current = value

    carouselApi.current?.on('select', selectHandler)
    carouselApi.current?.on('reInit', selectHandler)
  }

  return (
    <Dialog open={open} onOpenChange={openChangeHanlder}>
      <DialogContent className="aspect-[3/4] !rounded-none !border-0 bg-transparent p-0 shadow-none md:h-screen md:max-w-fit">
        <Carousel
          setApi={carouselInitHandler}
          wrapperClass="h-full"
          className="h-full"
        >
          <CarouselContent className="ml-0 h-full">
            {images.map((image, index) => (
              <CarouselItem className="h-full p-0 md:h-screen" key={index}>
                <img
                  src={image}
                  className="h-full w-full object-cover"
                  alt={`Product view ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-5 size-9 md:-right-20 md:size-10" />
          <CarouselPrevious className="left-5 size-9 md:-left-20 md:size-10" />
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}
