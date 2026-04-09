'use client'

import Link from 'next/link'
import { useCart } from '@/components/CartProvider'

export function Header() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-[0.2em] text-white">
          BIVOLT <span className="text-[#FFD700]">NUTRITION</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <Link href="/">Home</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contato">Contato</Link>
          <Link
            href="/carrinho"
            className="rounded-full border border-[#FFD700] px-4 py-2 text-[#FFD700] transition hover:bg-[#FFD700] hover:text-black"
          >
            Carrinho ({totalItems})
          </Link>
        </nav>
        <Link
          href="/carrinho"
          className="rounded-full border border-[#FFD700] px-4 py-2 text-sm text-[#FFD700] md:hidden"
        >
          {totalItems}
        </Link>
      </div>
    </header>
  )
}
