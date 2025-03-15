import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import { SelectVariationsProps } from './index.interface'
import { formatNumberWithSpace } from '@/utilities/format'

export const SelectVariation = ({
  onSelect,
  selected,
  variations
}: SelectVariationsProps) => {
  console.log(selected)

  return (
    <Carousel opts={{ align: 'start' }}>
      <CarouselContent>
        {variations.map((variation, index) => (
          <CarouselItem className="grow basis-auto" key={index}>
            <button
              key={variation.id}
              onClick={() => onSelect(index)}
              className={`flex flex-col items-center rounded-xl p-4 transition-all ${
                selected === index
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <span className="mb-1 text-lg font-medium">
                Вариант {index + 1}
              </span>
              <div className="text-center">
                <p className="font-bold">
                  {formatNumberWithSpace(variation.price)}
                </p>
              </div>
            </button>
          </CarouselItem>
        ))}
        {/* <CarouselItem>selected</CarouselItem> */}
      </CarouselContent>
    </Carousel>
  )
}
