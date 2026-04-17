import { motion } from 'framer-motion'
import { Building2, CalendarRange, MapPin } from 'lucide-react'
import { aboutPlaceholder, company, stats } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="scroll-mt-28 bg-[linear-gradient(180deg,#f8fafc_0%,#eef4f7_100%)] px-4 py-12 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-8 right-8 h-40 w-40 rounded-full bg-yellow-400/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-md border border-slate-200 bg-white p-3 shadow-[0_30px_85px_rgba(31,41,55,0.18)]">
            <img
              src={aboutPlaceholder}
              alt="Imagem institucional da fábrica da Paletes Monte Alto"
              className="h-44 w-full rounded-lg object-cover sm:h-[28rem]"
            />

            <div className="absolute inset-x-6 bottom-6 rounded-lg border border-white/25 bg-slate-950/55 px-4 py-3 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">Estrutura industrial</p>
              <p className="mt-1 font-display text-xl text-white">Paletes Monte Alto</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeading
            eyebrow="Sobre nós"
            title="Tradição industrial com foco em consistência, escala e atendimento confiável"
            description="Desde 2006, a Paletes Monte Alto atua com produção de paletes de madeira e embalagens personalizadas para operações que exigem robustez, padronização e suporte comercial próximo."
          />

          <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-white p-3 shadow-[0_8px_24px_rgba(31,41,55,0.08)] sm:p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500 sm:text-xs sm:tracking-[0.2em]">{stat.label}</p>
                <p className="mt-2 font-display text-xl text-slate-900 sm:mt-3 sm:text-2xl">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-3"
      >
            <div className="flex h-full items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-[0_8px_20px_rgba(31,41,55,0.06)] sm:gap-4 sm:p-6">
              <div className="shrink-0 rounded-lg bg-yellow-100/85 p-2 text-yellow-800 sm:p-3">
                <CalendarRange className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="font-display text-base text-slate-900 sm:text-xl">História e confiança</p>
                <p className="mt-1 text-sm leading-6 text-slate-700 sm:mt-2 sm:leading-7">
                  Atuamos há quase duas décadas fornecendo soluções para indústrias, operadores logísticos e empresas que precisam de qualidade repetível em cada lote.
                </p>
              </div>
            </div>

            <div className="flex h-full items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-[0_8px_20px_rgba(31,41,55,0.06)] sm:gap-4 sm:p-6">
              <div className="shrink-0 rounded-lg bg-blue-100/85 p-2 text-blue-800 sm:p-3">
                <Building2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="font-display text-base text-slate-900 sm:text-xl">Capacidade produtiva orientada ao cliente</p>
                <p className="mt-1 text-sm leading-6 text-slate-700 sm:mt-2 sm:leading-7">
                  Desenvolvemos linhas retornáveis, descartáveis e projetos especiais, sempre com atenção ao tipo de carga, fluxo operacional e expectativa de desempenho.
                </p>
              </div>
            </div>

            <div className="flex h-full items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-[0_8px_20px_rgba(31,41,55,0.06)] sm:gap-4 sm:p-6">
              <div className="shrink-0 rounded-lg bg-slate-100 p-2 text-slate-800 sm:p-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <p className="font-display text-base text-slate-900 sm:text-xl">Base operacional</p>
                <p className="mt-1 text-sm leading-6 text-slate-700 sm:mt-2 sm:leading-7">{company.address}</p>
              </div>
            </div>
      </motion.div>
      </div>
    </section>
  )
}