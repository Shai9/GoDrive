import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GoDrive',
  description: 'Hire your dream car today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <SignedIn>
              <Navbar />
              {children}
            </SignedIn>
            <SignedOut>
              <SignedIn />
            </SignedOut>
          </body>
        </html>
    </ClerkProvider>
  )
}
