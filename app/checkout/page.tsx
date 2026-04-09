'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/components/CartProvider'

export default function CheckoutPage() {
  const { subtotal, totalItems, clearCart } = useCart()
  const [success, setSuccess] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSuccess(true)
    clearCart()
  }

  if (success) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="rounded-[2rem] border border-[#FFD700]/25 bg-[#FFD700]/10 p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Pedido recebido</p>
          <h1 className="text-4xl font-black uppercase text-white">Checkout de demonstração concluído</h1>
          <p className="mt-4 text-white/75">
            Essa versão é uma base visual. Agora você pode integrar Mercado Pago, Stripe, frete real e automações.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#FFD700] px-8 py-4 font-black uppercase tracking-wide text-black"
          >
            Voltar para home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Checkout</p>
        <h1 className="text-4xl font-black uppercase text-white">Finalizar compra</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          {[
            ['Nome completo', 'text'],
            ['E-mail', 'email'],
            ['Telefone', 'tel'],
            ['Endereço', 'text'],
            ['Cidade', 'text'],
            ['CEP', 'text']
          ].map(([label, type]) => (
            <label key={label} className="block">
              <span className="mb-2 block text-sm text-white/70">{label}</span>
              <input
                type={type}
                required
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none ring-0 placeholder:text-white/25"
                placeholder={label}
              />
            </label>
          ))}

          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Observações</span>
            <textarea
              className="min-h-28 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
              placeholder="Observações do pedido"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-[#FFD700] px-8 py-4 font-black uppercase tracking-wide text-black"
          >
            Confirmar pedido
          </button>
        </form>

        <aside className="rounded-[2rem] border border-[#FFD700]/25 bg-[#FFD700]/10 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#FFD700]">Resumo do pedido</p>
          <div className="mt-6 space-y-4 text-white/80">
            <div className="flex items-center justify-between">
              <span>Itens</span>
              <strong className="text-white">{totalItems}</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <strong className="text-2xl text-white">R$ {subtotal.toFixed(2).replace('.', ',')}</strong>
            </div>
            <p className="text-sm text-white/65">
              Esta página é uma base visual. Substitua este fluxo por checkout real com gateway de pagamento.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
