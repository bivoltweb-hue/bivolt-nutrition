const faqs = [
  {
    question: 'Esse projeto já tem pagamento real?',
    answer: 'Ainda não. Esta base já entrega o layout, a navegação e o fluxo visual de compra.'
  },
  {
    question: 'Posso integrar Mercado Pago depois?',
    answer: 'Sim. Esse projeto foi pensado para evoluir com checkout real, frete e automações.'
  },
  {
    question: 'O site está pronto para mobile?',
    answer: 'Sim. O layout foi construído com prioridade para telas menores e navegação simples.'
  },
  {
    question: 'Consigo trocar textos e imagens?',
    answer: 'Sim. Os textos estão organizados e o projeto já está estruturado para ajustes fáceis.'
  }
]

export default function FAQPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">FAQ</p>
        <h1 className="text-4xl font-black uppercase text-white">Perguntas frequentes</h1>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-white">{faq.question}</h2>
            <p className="mt-3 text-white/75">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
