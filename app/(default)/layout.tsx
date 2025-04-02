import { Header } from '@/components/shared'
import React from 'react'

import { auth } from '@/auth'
import { MobileNavbar } from '@/components/shared/Layout'

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
