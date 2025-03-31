'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowBigRightDash, FolderSearch } from 'lucide-react'
import React, { useState } from 'react'
import { CardModalProps } from './index.interface'
import { useRouter } from 'next/navigation'
import { ISubcategory } from '@/types/category/category.interface'
import { ModalSubCategoriesCard } from '../'

export const CardModal = ({
  open,
  updateOpen,
  categoryName,
  path,
  subCategories
}: CardModalProps) => {
  const router = useRouter()

  const [currentSubCategories, setCurrentSubCategories] =
    useState<ISubcategory[]>(subCategories)

  const [findCategory, setFindCategory] = useState('')

  const goToSingleCategory = (singleCat: string) => {
    router.push(`/categories/${singleCat}`)
  }

  const find = () => {
    const foundCategories = subCategories.filter((subCat) => {
      const categoryName = findCategory.trim().toLowerCase()

      const formattedName = subCat.name.trim().toLowerCase()
      const formattedPath = subCat.path.trim().toLowerCase()

      if (
        formattedName.includes(categoryName) ||
        formattedPath.includes(categoryName)
      )
        return true

      let isFound = false

      subCat.items.forEach((item) => {
        const formattedName = item.name.trim().toLowerCase()
        const formattedPath = item.path.trim().toLowerCase()

        console.log(item.path.trim().toLowerCase().includes(categoryName))

        if (
          formattedName.includes(categoryName) ||
          formattedPath.includes(categoryName)
        )
          isFound = true
      })

      return isFound
    })

    setCurrentSubCategories(foundCategories)
  }

  return (
    <Dialog open={open} onOpenChange={updateOpen}>
      <DialogContent className="max-h-[80vh] max-w-6xl overflow-hidden">
        <DialogHeader className="border-b border-gray-100 pb-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <div>
              <DialogTitle className="text-center text-2xl font-bold text-gray-800 md:text-start">
                {categoryName}
              </DialogTitle>
              <p className="mt-1 text-gray-500">
                Выберите подкатегорию для просмотра товаров
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                className="!rounded-button"
                onClick={() => goToSingleCategory(path)}
              >
                Все товары
                <ArrowBigRightDash />
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="md:p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              find()
            }}
            className="mb-6 grid grid-cols-4 gap-4"
          >
            <div className="col-span-3">
              <Input
                onChange={(e) => setFindCategory(e.target.value)}
                type="text"
                placeholder="Поиск в категории..."
                className="w-full border-2 border-gray-100 focus:border-red focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
            <Button
              type="submit"
              className="!rounded-button w-full bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              <FolderSearch className="hidden md:inline-block" />
              Найти
            </Button>
          </form>
          <ScrollArea className="h-[40vh]">
            <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {currentSubCategories.map((subCat, index) => (
                <ModalSubCategoriesCard
                  key={index}
                  title={subCat.name}
                  {...subCat}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
