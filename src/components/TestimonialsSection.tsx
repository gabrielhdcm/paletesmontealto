import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

export function TestimonialsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#05070d_0%,#070b14_100%)] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Percepção de clientes que valorizam estabilidade operacional"
          description="Depoimentos demonstrativos para apresentar o tom de relacionamento, entrega e confiança que a marca transmite ao mercado."
          theme="dark"
        />

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="flex h-full flex-col rounded-md border border-white/10 bg-[linear-gradient(180deg,#1f2937_0%,#111827_100%)] p-4 text-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.2)] sm:p-6"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/8 text-amber-400 sm:h-12 sm:w-12">
                <Quote className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              </div>
              <p className="mt-4 flex-1 text-xs leading-6 text-slate-300 sm:mt-6 sm:text-sm sm:leading-7">"{testimonial.quote}"</p>
              <footer className="mt-4 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
                <p className="font-display text-base text-white sm:text-xl">{testimonial.name}</p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}