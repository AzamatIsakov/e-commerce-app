'use client'

import { Button } from '@/components/ui/button'
import { mobileNavbarLinks } from '@/data/navbar'
import { usePathname, useRouter } from 'next/navigation'

export const MobileNavbar = () => {
  const router = useRouter()

  const pathname = usePathname()

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 block bg-white shadow-lg lg:hidden">
      <div className="flex h-16 items-center justify-around px-4">
        {mobileNavbarLinks.map((link, index) => (
          <Button
            onClick={() => navigateTo(link.path)}
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
