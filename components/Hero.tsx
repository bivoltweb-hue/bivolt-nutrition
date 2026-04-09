import Link from 'next/link'

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.14),_transparent_35%),linear-gradient(180deg,_#0a0a0a_0%,_#000_100%)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-[#FFD700]/40 bg-[#FFD700]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD700]">
            Bivolt Nutrition
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-black uppercase leading-none text-white md:text-7xl">
              O combustível da sua evolução.
            </h1>
            <p className="max-w-xl text-lg text-white/75 md:text-xl">
              Suplementos com visual premium, energia de marca forte e uma experiência de compra direta,
              rápida e focada em conversão.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#produtos"
              className="rounded-full bg-[#FFD700] px-8 py-4 text-center font-black uppercase tracking-wide text-black transition hover:opacity-90"
            >
              Comprar agora
            </Link>
            <Link
              href="/faq"
              className="rounded-full border border-white/15 px-8 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:border-white/40"
            >
              Tirar dúvidas
            </Link>
          </div>
          <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <strong className="block text-2xl text-white">3</strong>
              produtos principais
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <strong className="block text-2xl text-white">Mobile</strong>
              experiência priorizada
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <strong className="block text-2xl text-white">Rápido</strong>
              foco em compra direta
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 blur-3xl">
            <div className="mx-auto h-full w-3/4 rounded-full bg-[#FFD700]/20" />
          </div>
          <div className="relative grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-4 h-56 rounded-[1.5rem] border border-[#FFD700]/20 bg-[linear-gradient(180deg,_rgba(255,215,0,0.28)_0%,_rgba(255,215,0,0.08)_24%,_rgba(255,255,255,0.04)_24%,_rgba(0,0,0,0.6)_100%)]" />
              <p className="text-sm uppercase tracking-[0.2em] text-[#FFD700]">Whey Protein</p>
              <h3 className="mt-2 text-xl font-bold text-white">Recuperação e construção</h3>
            </div>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur md:mt-16">
              <div className="mb-4 h-56 rounded-[1.5rem] border border-[#FFD700]/20 bg-[linear-gradient(180deg,_rgba(255,215,0,0.28)_0%,_rgba(255,215,0,0.08)_24%,_rgba(255,255,255,0.04)_24%,_rgba(0,0,0,0.6)_100%)]" />
              <p className="text-sm uppercase tracking-[0.2em] text-[#FFD700]">Creatina + Pré-treino</p>
              <h3 className="mt-2 text-xl font-bold text-white">Força, foco e constância</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
