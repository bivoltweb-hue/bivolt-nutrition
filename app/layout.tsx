import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CartProvider } from '@/components/CartProvider'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora'
})

export const metadata: Metadata = {
  title: 'Bivolt Nutrition',
  description: 'E-commerce base da Bivolt Nutrition com visual premium esportivo.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable} bg-black text-white antialiased [font-family:var(--font-sora)]`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
