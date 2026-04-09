const benefits = [
  {
    title: 'Energia',
    text: 'Produtos pensados para acompanhar treinos intensos e uma rotina de alta exigência.'
  },
  {
    title: 'Performance',
    text: 'Foco em resultados visíveis com proposta clara e comunicação direta.'
  },
  {
    title: 'Confiança',
    text: 'Experiência de compra premium, navegação limpa e visual marcante.'
  }
]

export function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Benefícios</p>
        <h2 className="text-4xl font-black uppercase text-white">Alta performance começa aqui</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h3 className="mb-3 text-2xl font-bold text-white">{benefit.title}</h3>
            <p className="text-white/70">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
