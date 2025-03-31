'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Fragment, useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import { CategoryCardProps } from './index.interface'
import { CardModal } from '../'

export const CategoryCard = ({
  image,
  name,
  path,
  subCategories
}: CategoryCardProps) => {
  const [showDialog, setShowDialog] = useState(false)

  const handleShowAll = () => {
    setShowDialog(true)
  }

  return (
    <Fragment>
      <Card className="group cursor-default transition-shadow duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            unoptimized
            placeholder="blur"
            blurDataURL="/placeholder-image.webp"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          </div>
          <div className="space-y-2">
            {subCategories.slice(0, 4).map((sub, index) => (
              <Link
                href={`/categories/${sub.path}`}
                key={index}
                className="flex items-center gap-1 text-gray-600 transition-colors duration-200 hover:text-red-active"
              >
                <ArrowRight size={16} />
                <span className="text-sm">{sub.name}</span>
              </Link>
            ))}
          </div>
          <Button
            className="!rounded-button mt-4 w-full"
            onClick={handleShowAll}
          >
            Показать все
          </Button>
        </div>
      </Card>
      {/* Category Dialog */}
      <CardModal
        categoryName={name}
        open={showDialog}
        path={path}
        subCategories={subCategories}
        updateOpen={(val) => setShowDialog(val)}
      />
    </Fragment>
  )
}
