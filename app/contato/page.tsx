export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD700]">Contato</p>
        <h1 className="text-4xl font-black uppercase text-white">Fale com a Bivolt Nutrition</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-white/75">Use esta página para inserir seus canais oficiais.</p>
          <div className="mt-6 space-y-3 text-white">
            <p>E-mail: contato@bivoltnutrition.com.br</p>
            <p>WhatsApp: (75) 0000-0000</p>
            <p>Instagram: @bivoltnutrition</p>
          </div>
        </div>
        <form className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          {['Nome', 'E-mail', 'Assunto'].map((field) => (
            <label key={field} className="block">
              <span className="mb-2 block text-sm text-white/70">{field}</span>
              <input
                type="text"
                className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white"
                placeholder={field}
              />
            </label>
          ))}
          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Mensagem</span>
            <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white" />
          </label>
          <button
            type="button"
            className="w-full rounded-full bg-[#FFD700] px-8 py-4 font-black uppercase tracking-wide text-black"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
