import { Hero } from '@/components/Hero'
import { Benefits } from '@/components/Benefits'
import { Testimonials } from '@/components/Testimonials'
import { ProductCard } from '@/components/ProductCard'
import { CTASection } from '@/components/CTASection'
import { products } from '@/lib/products'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonials />
      <section id="produtos" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Produtos</p>
          <h2 className="text-4xl font-black uppercase text-white">Catálogo principal</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
