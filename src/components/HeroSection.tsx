import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  company,
  floatingMetrics,
  whatsappUrl,
} from '../data/siteContent'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-bg relative isolate overflow-hidden scroll-mt-28 px-4 pb-12 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-36"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-md border border-yellow-300 bg-yellow-100/90 px-4 py-2 text-sm font-semibold text-blue-900">
            <BadgeCheck className="h-4 w-4 text-[color:#0E2A88]" />
            Fabricante de paletes e embalagens de madeira em Monte Alto - SP
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-3xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.04em] lg:text-7xl">
            {company.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:mt-5 sm:text-lg sm:leading-8">{company.slogan}</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">{company.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/#produtos"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#0E2A88,#2450C8)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(14,42,136,0.35)] transition hover:-translate-y-0.5"
            >
              Ver Produtos
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Solicitar Orçamento
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
            {floatingMetrics.map((metric) => (
              <div key={metric.label} className="rounded-md border border-white/10 bg-white/8 p-2 backdrop-blur sm:p-4">
                <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs sm:tracking-[0.2em]">{metric.label}</p>
                <p className="mt-1 text-sm font-semibold text-white sm:mt-2 sm:text-base">{metric.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}