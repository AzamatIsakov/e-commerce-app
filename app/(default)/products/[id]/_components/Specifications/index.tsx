'use client'

import { useState } from 'react'
import { SpecificationsProps } from './index.interface'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'

export const Specifications = ({
  descriptions,
  features
}: SpecificationsProps) => {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid h-auto w-full grid-cols-2 gap-2 rounded-xl bg-gray-100 p-1 sm:gap-4">
        <TabsTrigger
          value="description"
          className={`py-3 ${
            activeTab === 'description'
              ? 'bg-white text-red-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Описание
        </TabsTrigger>
        <TabsTrigger
          value="specifications"
          className={`py-3 ${
            activeTab === 'specifications'
              ? 'bg-white text-red-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setActiveTab('specifications')}
        >
          Характеристики
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="mt-6">
        <ScrollArea className="h-[300px] pr-3 sm:h-[400px] sm:pr-6">
          {descriptions}
          {/* <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Профессиональный игровой компьютер ASUS ROG - это мощное
                  решение для самых требовательных геймеров и создателей
                  контента. Каждая конфигурация тщательно подобрана для
                  обеспечения максимальной производительности и
                  надежности. Система оснащена передовыми компонентами от
                  ведущих производителей и оптимизирована для работы с
                  современными играми и профессиональными приложениями.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Основные преимущества:</h4>
                  <ul className="list-inside list-disc space-y-2 text-gray-600">
                    <li>
                      Высокопроизводительные процессоры Intel Core
                      последнего поколения
                    </li>
                    <li>Мощные видеокарты NVIDIA GeForce RTX 40 серии</li>
                    <li>Быстрая оперативная память DDR5</li>
                    <li>Эффективная система охлаждения</li>
                    <li>
                      Премиальные компоненты от ведущих производителей
                    </li>
                    <li>Предустановленная Windows 11 Pro</li>
                    <li>Профессиональная сборка и настройка</li>
                  </ul>
                </div>
              </div>
            </div> */}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="specifications" className="mt-6">
        <ScrollArea className="h-[300px] pr-3 sm:h-[400px] sm:pr-6">
          <div className="space-y-8">
            <div className="space-y-4">
              {features.map((option, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between border-b py-3 lg:flex-row"
                >
                  <span className="font-medium">{option.name}</span>
                  <span className="text-gray-600">{option.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </TabsContent>
    </Tabs>
  )
}
