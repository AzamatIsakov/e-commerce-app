import { Header } from '@/components/shared'
import React from 'react'
import { MobileNavbar } from '.'

const MainPageLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <>
    <Header />
    {children}
    <MobileNavbar />
  </>
)

export default MainPageLayout
