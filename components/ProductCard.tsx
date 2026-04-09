'use client'

import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="mb-6 rounded-3xl border border-[#FFD700]/30 bg-gradient-to-b from-[#FFD700]/20 to-transparent p-6">
        <div className="mb-3 inline-flex rounded-full border border-[#FFD700]/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FFD700]">
          {product.badge}
        </div>
        <div className="h-48 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.25),_rgba(0,0,0,0.15)_50%,_rgba(0,0,0,0.95))]" />
      </div>
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-[#FFD700]">{product.category}</p>
        <h3 className="text-2xl font-bold text-white">{product.name}</h3>
        <p className="text-white/70">{product.shortDescription}</p>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-white/50">A partir de</p>
            <p className="text-3xl font-black text-white">R$ {product.price.toFixed(2).replace('.', ',')}</p>
          </div>
          <p className="text-sm font-semibold text-white/70">{product.size}</p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <Link
          href={`/produto/${product.slug}`}
          className="flex-1 rounded-full border border-white/15 px-5 py-3 text-center font-semibold text-white transition hover:border-white/40"
        >
          Ver produto
        </Link>
        <button
          onClick={() => addItem(product.slug)}
          className="rounded-full bg-[#FFD700] px-5 py-3 font-bold text-black transition hover:opacity-90"
        >
          Comprar
        </button>
      </div>
    </article>
  )
}
