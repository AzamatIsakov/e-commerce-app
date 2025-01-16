import { Header } from '@/components/shared'
import React from 'react'

const MainPageLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <>
    <Header />
    {children}
  </>
)

export default MainPageLayout
