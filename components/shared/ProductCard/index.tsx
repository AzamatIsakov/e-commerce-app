import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import { ProductCardProps } from './index.interface'

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
                        src={photo.link}
                        fill
                        alt={title}
                        className="brazzers__image object-contain"
                      />
                    </div>
                  </div>
                  <div className=" brazzers__button"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <CardTitle>{title}</CardTitle>
    </CardContent>
    <CardFooter>{price.min} сум</CardFooter>
  </Card>
)
