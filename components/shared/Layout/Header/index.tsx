'use client'

import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Input } from '@/components/ui/input'
import { Navbar } from '../Navbar'

export const Header = () => (
  <header className="sticky left-0 right-0 top-0 z-50 bg-white shadow-sm">
    <div className="container">
      <div className="flex justify-between py-4">
        <div className="flex items-center gap-8">
          <h1 className="hidden text-2xl font-bold text-[#E53935]">Unicora</h1>
          <Link className="focus-visible:outline-red-600" href="/">
            <div className="relative h-8 w-36 overflow-visible">
              <Image
                src="/logo-black.svg"
                className="object-contain"
                fill
                alt="Unicora logo"
              />
            </div>
          </Link>
          <div className="relative">
            <Input
              type="text"
              placeholder="Поиск товаров..."
              className="peer w-[400px] border-none bg-gray-100 py-2 pl-10 pr-4 transition-all duration-300 focus:ring-2 focus:ring-red-600 focus-visible:ring-[#E53935] active:ring-red-600"
            />
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-focus-within:text-red-600 peer-focus-visible:text-red-600"
            />
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  </header>
)
