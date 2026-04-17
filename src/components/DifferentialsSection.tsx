import { motion } from 'framer-motion'
import { differentials } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function DifferentialsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f4f6f3_100%)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Uma operação pensada para performance, sustentabilidade e segurança comercial"
          description="A combinação entre matéria-prima, padrão construtivo e atendimento próximo fortalece a confiança de empresas que dependem de estabilidade em suas rotinas logísticas."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.34, delay: index * 0.05 }}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              >
                <div className="inline-flex rounded-lg bg-[linear-gradient(135deg,rgba(14,42,136,0.14),rgba(243,211,27,0.2))] p-3 text-[color:#0E2A88]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}