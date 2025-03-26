'use client'

import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'
import React from 'react'

export const GoTopButton = () => (
  <Button
    className="fixed bottom-20 right-8 z-10 h-fit cursor-pointer rounded-full bg-red-500 p-4 text-xl text-white shadow-lg transition-colors duration-200 hover:bg-red-600 lg:bottom-8"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <ArrowUp className="!size-4 md:!size-5" />
  </Button>
)
