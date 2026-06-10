export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-6 py-24">
      <section className="w-full max-w-3xl rounded-4xl border border-white/10 bg-[#111111] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-primary" />
            <div>
              <p className="text-lg font-semibold text-white">
                Cargando detalles del vehículo
              </p>
              <p className="text-sm text-slate-400">
                Un momento, preparando la experiencia de navegación.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-4 w-3/4 rounded-full bg-white/10 animate-pulse" />
            <div className="h-4 w-1/2 rounded-full bg-white/10 animate-pulse" />
            <div className="h-64 rounded-3xl bg-white/5 shadow-inner animate-pulse" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-28 rounded-2xl bg-white/5 animate-pulse" />
              <div className="h-28 rounded-2xl bg-white/5 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
