import Link from 'next/link'

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-[2rem] border border-[#FFD700]/25 bg-[linear-gradient(135deg,_rgba(255,215,0,0.14),_rgba(255,255,255,0.03))] p-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Pronto para vender</p>
        <h2 className="mx-auto max-w-3xl text-4xl font-black uppercase text-white md:text-5xl">
          Estrutura base de e-commerce pronta para ganhar imagens, checkout real e campanhas.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Você já pode subir esse projeto no GitHub e publicar na Vercel. Depois, evolui com fotos reais,
          integração de pagamento e automações.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="#produtos"
            className="rounded-full bg-[#FFD700] px-8 py-4 font-black uppercase tracking-wide text-black"
          >
            Ver produtos
          </Link>
          <Link
            href="/contato"
            className="rounded-full border border-white/15 px-8 py-4 font-bold uppercase tracking-wide text-white"
          >
            Falar com a marca
          </Link>
        </div>
      </div>
    </section>
  )
}
