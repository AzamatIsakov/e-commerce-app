import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ReactQueryProvider } from '@/components/shared'
// import queryClient from '@/config/queryClient'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Unicora - покупки, которые знают тебя',
  description: 'Unicora - покупки, которые знают тебя'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <ReactQueryProvider>
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  </ReactQueryProvider>
)

export default RootLayout
