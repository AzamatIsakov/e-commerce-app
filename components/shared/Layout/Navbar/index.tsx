'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { getLinks } from '@/data/navbar'
import { useLoginStore } from '@/stores/useLoginStore'
import { useMemo } from 'react'

export const Navbar = () => {
  const currentPath = usePathname()
  const session = useSession()
  const { setOpen } = useLoginStore()

  const onItemClickHandler = (e: React.MouseEvent, isProtected: boolean) => {
    if (isProtected && session.status !== 'authenticated') {
      e.preventDefault()
      setOpen(true)
    }
  }

  const links = useMemo(
    () => getLinks(session.status === 'authenticated'),
    [session.status]
  )

  return (
    <nav className="hidden items-center text-sm font-semibold lg:flex lg:gap-2 xl:gap-3">
      {links.map((link) =>
        currentPath !== link.path ? (
          <Link
            draggable="false"
            onClick={(e) => onItemClickHandler(e, link.protected)}
            href={link.path}
            key={link.title}
            className="flex items-center gap-2 rounded-md px-2.5 py-1.5 transition-all duration-300 hover:bg-gray-100 focus-visible:outline-[#E53935] active:bg-gray-200"
          >
            {link.icon} {link.title}
          </Link>
        ) : (
          <span
            key={link.title}
            className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-red-600 transition-all duration-300"
          >
            {link.icon} {link.title}
          </span>
        )
      )}
    </nav>
  )
}
