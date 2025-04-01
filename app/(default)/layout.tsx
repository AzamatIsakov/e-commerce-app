import { Header } from '@/components/shared'
import React from 'react'
import { MobileNavbar } from '.'
import { auth } from '@/auth'

const MainPageLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const session = await auth()

  const authenticated = !!session

  return (
    <>
      <Header isAuthorized={authenticated} />
      {children}
      <MobileNavbar />
    </>
  )
}

export default MainPageLayout
