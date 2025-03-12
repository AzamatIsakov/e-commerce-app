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
      className="group relative inset-0 h-[100px] cursor-pointer overflow-hidden md:h-[200px]"
    >
      <Image
        src={imagePath}
        fill
        alt={title}
        className="absolute left-0 top-0 h-full w-full object-cover object-center md:transition-all md:duration-700 md:group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-4 text-white md:p-6 md:transition-all md:duration-300 md:group-hover:translate-y-[-8px]">
        <div className="flex items-center gap-[5px] md:mb-2 md:gap-3">
          <div className="relative size-4 md:size-6">
            <Image src={icon} fill alt={title} />
          </div>
          <span className="text-sm font-semibold md:text-xl">{title}</span>
        </div>
        <div className="h-0.5 w-0 bg-white transition-all duration-500 md:group-hover:w-full"></div>
      </div>
    </Card>
  )
}
