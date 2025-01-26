'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRef } from 'react'

export const ReactQueryProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const queryClient = useRef(new QueryClient())

  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  )
}
