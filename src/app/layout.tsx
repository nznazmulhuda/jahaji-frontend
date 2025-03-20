import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import NextTopLoader from 'nextjs-toploader'
import Authprovider from '@/providers/auth.provider'
import axios from "axios"
import Footer from '@/components/footer/footer'

export const metadata: Metadata = {
  title: 'Jahaji',
  description: 'Generated by create next app',
}

// Define Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning >
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* navbar */}
        <Navbar />

        <NextTopLoader />

        <Authprovider>
          {children}
        </Authprovider>

        {/* footer */}
        <Footer />
      </body>
    </html>
  )
}
