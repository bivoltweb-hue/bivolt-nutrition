'use client'

import { useRouter } from 'next/navigation'
import { useCart } from '@/components/CartProvider'

export function AddToCartButton({ slug, large = false }: { slug: string; large?: boolean }) {
  const { addItem } = useCart()
  const router = useRouter()

  return (
    <button
      onClick={() => {
        addItem(slug)
        router.push('/carrinho')
      }}
      className={`rounded-full bg-[#FFD700] font-black uppercase tracking-wide text-black transition hover:opacity-90 ${
        large ? 'px-8 py-4' : 'px-5 py-3'
      }`}
    >
      Adicionar ao carrinho
    </button>
  )
}
