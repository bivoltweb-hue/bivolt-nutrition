'use client'

import Link from 'next/link'
import { useCart } from '@/components/CartProvider'
import { products } from '@/lib/products'

export default function CartPage() {
  const { items, addItem, decreaseItem, removeItem, subtotal } = useCart()

  const detailedItems = items
    .map((item) => {
      const product = products.find((entry) => entry.slug === item.slug)
      if (!product) return null
      return { ...item, product }
    })
    .filter(Boolean)

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Carrinho</p>
        <h1 className="text-4xl font-black uppercase text-white">Seu pedido</h1>
      </div>

      {detailedItems.length === 0 ? (
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
          <p className="text-lg text-white/75">Seu carrinho está vazio.</p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-[#FFD700] px-8 py-4 font-black uppercase tracking-wide text-black"
          >
            Ver produtos
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {detailedItems.map((item) => (
              <article
                key={item!.slug}
                className="flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#FFD700]">{item!.product.category}</p>
                  <h2 className="text-2xl font-bold text-white">{item!.product.name}</h2>
                  <p className="mt-2 text-white/70">R$ {item!.product.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseItem(item!.slug)}
                    className="h-11 w-11 rounded-full border border-white/15 text-xl text-white"
                  >
                    -
                  </button>
                  <span className="min-w-8 text-center text-lg font-bold text-white">{item!.quantity}</span>
                  <button
                    onClick={() => addItem(item!.slug)}
                    className="h-11 w-11 rounded-full border border-white/15 text-xl text-white"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item!.slug)}
                    className="rounded-full border border-red-400/30 px-4 py-2 text-sm text-red-300"
                  >
                    Remover
                  </button>
                </div>
              </article>
            ))}
          </div>
          <aside className="rounded-[2rem] border border-[#FFD700]/25 bg-[#FFD700]/10 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#FFD700]">Resumo</p>
            <div className="mt-6 space-y-4 text-white/80">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <strong className="text-2xl text-white">R$ {subtotal.toFixed(2).replace('.', ',')}</strong>
              </div>
              <p className="text-sm text-white/65">Frete e pagamento podem ser integrados depois na versão real.</p>
            </div>
            <Link
              href="/checkout"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-[#FFD700] px-8 py-4 font-black uppercase tracking-wide text-black"
            >
              Continuar para checkout
            </Link>
          </aside>
        </div>
      )}
    </section>
  )
}
