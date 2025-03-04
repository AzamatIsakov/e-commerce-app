'use client'

import { links } from '@/data/navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const currentPath = usePathname()

  return (
    <nav className="flex items-center gap-6 text-sm font-semibold">
      {links.map((link) =>
        currentPath !== link.path ? (
          <Link
            draggable="false"
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
