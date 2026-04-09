import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, products } from '@/lib/products'
import { AddToCartButton } from '@/components/buttons'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <div className="h-[460px] rounded-[1.5rem] border border-[#FFD700]/20 bg-[linear-gradient(180deg,_rgba(255,215,0,0.28)_0%,_rgba(255,215,0,0.08)_24%,_rgba(255,255,255,0.04)_24%,_rgba(0,0,0,0.6)_100%)]" />
        </div>
        <div className="space-y-7">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">{product.category}</p>
            <h1 className="text-5xl font-black uppercase text-white">{product.name}</h1>
            <p className="mt-4 max-w-xl text-lg text-white/75">{product.description}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/55">Preço</p>
            <p className="mt-2 text-4xl font-black text-white">R$ {product.price.toFixed(2).replace('.', ',')}</p>
            <p className="mt-2 text-white/65">Embalagem: {product.size}</p>
            {product.flavor ? <p className="mt-1 text-white/65">Sabores: {product.flavor}</p> : null}
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-white">Benefícios</h2>
            <ul className="grid gap-3">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <AddToCartButton slug={product.slug} large />
            <Link
              href="/checkout"
              className="rounded-full border border-white/15 px-8 py-4 text-center font-bold uppercase tracking-wide text-white"
            >
              Ir para checkout
            </Link>
          </div>
          <div className="rounded-3xl border border-[#FFD700]/25 bg-[#FFD700]/10 p-5 text-sm text-white/75">
            Base de produto pronta para receber imagem real, avaliações, informações nutricionais e integração de estoque.
          </div>
        </div>
      </div>
    </section>
  )
}
