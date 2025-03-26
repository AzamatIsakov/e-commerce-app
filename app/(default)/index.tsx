'use client'

import { Button } from '@/components/ui/button'
import { mobileNavbarLinks } from '@/data/navbar'
import { useLoginStore } from '@/stores/useLoginStore'

import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

export const MobileNavbar = () => {
  const router = useRouter()
  const session = useSession()
  const pathname = usePathname()

  const { setOpen } = useLoginStore()

  const navigateTo = (path: string) => {
    router.push(path)
  }

  const navItemClickHandler = (path: string, isProtected: boolean) => {
    if (isProtected && session.status !== 'authenticated') setOpen(true)
    else navigateTo(path)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 block bg-white shadow-lg lg:hidden">
      <div className="flex h-16 items-center justify-around px-4">
        {mobileNavbarLinks.map((link, index) => (
          <Button
            onClick={() => navItemClickHandler(link.path, link.protected)}
            key={index}
            variant="ghost"
            className={`flex h-full flex-1 flex-col items-center justify-center gap-1 !rounded-none ${pathname === link.path ? 'text-red *:fill-[#ff000033] hover:text-red' : ''}`}
          >
            {link.icon}
            <span className="text-xs">{link.title}</span>
          </Button>
        ))}
      </div>
    </nav>
  )
}
