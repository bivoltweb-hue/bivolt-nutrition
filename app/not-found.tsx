import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">404</p>
      <h1 className="text-4xl font-black uppercase text-white">Página não encontrada</h1>
      <p className="mt-4 text-white/75">Volte para a home e continue navegando pelo catálogo.</p>
      <Link href="/" className="mt-8 rounded-full bg-[#FFD700] px-8 py-4 font-black uppercase tracking-wide text-black">
        Ir para home
      </Link>
    </section>
  )
}
