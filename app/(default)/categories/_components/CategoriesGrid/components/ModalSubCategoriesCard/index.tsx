'use client'

import { ChevronRight, Folder, Inbox } from 'lucide-react'
import { ModalSubCategoriesCardProps } from './index.interface'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ISubcategoryItem } from '@/types/category/category.interface'

export const ModalSubCategoriesCard = ({
  title,
  items,
  path
}: ModalSubCategoriesCardProps) => {
  const router = useRouter()

  const [currentItems, setCurrentItems] = useState<ISubcategoryItem[]>(
    items.slice(0, 4)
  )

  const [expanded, setExpanded] = useState(
    items.length <= items.slice(0, 4).length
  )

  const goToSingleCategory = (singleCat: string) => {
    router.push(`/categories/${singleCat}`)
  }

  const expand = () => {
    setExpanded(true)
    setCurrentItems(items)
  }

  return (
    <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 hover:border-red-200">
      <div className="flex items-center justify-between border-b border-gray-50 pb-3">
        <div className="flex items-center space-x-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
            <Folder color="#ef4444" fill="#ef4444" />
          </div>
          <h3
            title={title}
            className="line-clamp-1 cursor-default text-lg font-semibold text-gray-800"
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="mb-2 mt-3 space-y-1.5">
        {currentItems.map((item, idx) => (
          <div
            key={idx}
            className="group flex cursor-pointer items-center rounded-lg px-2 py-1.5 text-gray-600 transition-all hover:bg-red-50 hover:text-red-500"
            onClick={() => goToSingleCategory(item.path)}
          >
            <Inbox className="shrink-0" color="#f87171" size={16} />
            <span title={item.name} className="mx-2 line-clamp-1 text-sm">
              {item.name}
            </span>
            <ChevronRight
              size={18}
              className="ml-auto shrink-0 text-gray-300 transition-all duration-300 group-hover:text-red-400"
            />
          </div>
        ))}
        {!expanded && (
          <Button
            variant="link"
            className="!my-2 mx-2 h-auto p-0 text-sm text-red-500"
            onClick={expand}
          >
            Показать ещё...
          </Button>
        )}
      </div>
      <Button
        className="!rounded-button mt-auto w-full border border-red-200 bg-white text-red-500 hover:bg-red-50"
        onClick={() => goToSingleCategory(path)}
      >
        Перейти в раздел
      </Button>
    </div>
  )
}
