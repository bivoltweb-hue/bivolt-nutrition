const testimonials = [
  {
    name: 'Cliente 01',
    text: 'Layout premium, compra simples e produto com posicionamento forte.'
  },
  {
    name: 'Cliente 02',
    text: 'A experiência ficou rápida no celular e a navegação está muito objetiva.'
  },
  {
    name: 'Cliente 03',
    text: 'Ótima base para começar a vender e evoluir campanhas depois.'
  }
]

export function Testimonials() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Prova social</p>
          <h2 className="text-4xl font-black uppercase text-white">Uma base pensada para converter</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl border border-white/10 bg-black p-7">
              <p className="mb-4 text-white/80">“{item.text}”</p>
              <strong className="text-[#FFD700]">{item.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
