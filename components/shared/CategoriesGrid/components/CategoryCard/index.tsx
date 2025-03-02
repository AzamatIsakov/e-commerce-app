'use client'

import Image from 'next/image'

import { Card } from '@/components/ui/card'
import { CategoryCardProps } from './index.interface'
import { useRouter } from 'next/navigation'

export const CategoryCard = ({
  icon,
  title,
  imagePath,
  link
}: CategoryCardProps) => {
  const router = useRouter()

  const handleClick = (link: string) => {
    router.push(link)
  }

  return (
    <Card
      onClick={() => handleClick(link)}
      className="group relative inset-0 h-[200px] cursor-pointer overflow-hidden"
    >
      <Image
        src={imagePath}
        fill
        alt={title}
        className="absolute left-0 top-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-6 text-white transition-all duration-300 group-hover:translate-y-[-8px]">
        <div className="mb-2 flex items-center gap-3">
          <div className="relative size-6">
            <Image src={icon} fill alt={title} />
          </div>
          <span className="text-xl font-semibold">{title}</span>
        </div>
        <div className="h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
      </div>
    </Card>
  )
}
