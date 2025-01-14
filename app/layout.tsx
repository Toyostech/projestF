import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/Navbar'

import Footer from '@/app/component/footer/Footer'
import Navigation_bar from './Navigation/Navigation_bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {/* <Navigation_bar /> */}
        <Navbar />
        
        <main className='container' style={{
          position: 'relative',
          overflow: "hidden",
          
        }}>
          
          
      

          {children}
         

        
        </main>   
        <Footer />    
      </body>
    </html>
  )
}
