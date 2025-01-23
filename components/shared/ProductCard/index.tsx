import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import { ProductCardProps } from './index.interface'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'

export const ProductCard = ({ photos, title, price }: ProductCardProps) => (
  <Card>
    <CardHeader>
      <div className="list-item__thumbnail">
        <div className="list-item__thumbnail__container">
          <div className="list-item__thumbnail__brazzers">
            <div className="brazzers">
              {photos.map((photo) => (
                <div key={photo.id} className="brazzers__page">
                  <div className="brazzers__image-wrapper">
                    <div className="relative h-80">
                      <Image
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="/placeholder-image.webp"
                        src={photo.link}
                        fill
                        alt={title}
                        className="brazzers__image overflow-hidden rounded-lg object-contain"
                      />
                    </div>
                  </div>
                  <div className="brazzers__button"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <HoverCard>
        <HoverCardTrigger>
          <CardTitle className="mt-0 overflow-hidden text-ellipsis whitespace-nowrap rounded-md border p-2">
            {title}
          </CardTitle>
        </HoverCardTrigger>
        <HoverCardContent className="font-medium">{title}</HoverCardContent>
      </HoverCard>
    </CardContent>
    <CardFooter>{price.min} сум</CardFooter>
  </Card>
)
