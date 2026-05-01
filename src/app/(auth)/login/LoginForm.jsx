"use client";

import Link from 'next/link';
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LoginForm = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Aquí iría la lógica de autenticación, por ejemplo, una llamada a la API
        setTimeout(() => {
            setLoading(false);
            alert('Login successful (simulado)');
        }, 2000);
    };
  return (
    <main role="main" aria-label="Inicio de sesión" className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),transparent_25%)]" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-12">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.9fr]">
          <section aria-label="Presentación de Monza Motors" className="hidden overflow-hidden rounded-[40px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-cyan-500/10 lg:block">
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Monza Motors
                </span>
                <h1 className="mt-8 text-5xl font-black tracking-tight text-white">
                  {t("login.join_title")}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  {t("login.join_subtitle")}
                </p>
              </div>

              <div className="grid gap-6 text-slate-300">
                <div className="rounded-3xl bg-slate-800/70 p-6 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Experiencia</p>
                  <p className="mt-3 text-3xl font-semibold text-white">+25 años</p>
                </div>
                <div className="rounded-3xl bg-slate-800/70 p-6 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Confianza</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Clientes Premium</p>
                </div>
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Est. 1998 • Automotive Excellence
              </p>
            </div>
          </section>

          <section className="rounded-[40px] bg-white/95 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl text-slate-950">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-600">Bienvenido</p>
                <h2 className="mt-3 text-3xl font-semibold">{t("login.title")}</h2>
              </div>
              <span className="inline-flex rounded-2xl bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                Monza Sports
              </span>
            </div>

            <p className="mb-10 text-sm leading-6 text-slate-600">
              {t("login.subtitle")}
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="login-email" className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-2">
                  {t("login.email_label")}
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="w-full rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200"
                  placeholder="julian@example.com"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-2">
                  {t("login.password_label")}
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-200"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-3xl bg-cyan-500 px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? t("login.btn") : t("login.btn")}
              </button>
            </form>

            <div className="mt-8 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/register" className="font-medium text-cyan-600 transition hover:text-cyan-500">
                {t("login.no_account")}
              </Link>
              <Link href="/" className="font-medium text-slate-500 transition hover:text-slate-700">
                {t("login.back_home")}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default LoginForm
