import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { company, mapEmbedUrl, whatsappUrl } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'
import { useToast } from './ToastProvider'

export function ContactSection() {
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  return (
    <section id="contato" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contato"
          title="Converse com a equipe comercial e apresente sua necessidade operacional"
          description="Use o formulário abaixo para simular uma solicitação de orçamento ou entre em contato pelos canais diretos da empresa."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="rounded-md border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-8"
          >
            <form
              className="grid gap-4"
              onSubmit={(event) => {
                event.preventDefault()
                showToast(
                  'Mensagem enviada com sucesso',
                  'Sua solicitação foi registrada na demonstração e a equipe poderá retornar em breve.',
                )
                setFormData({ name: '', company: '', email: '', phone: '', message: '' })
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  placeholder="Nome"
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700"
                />
                <input
                  required
                  value={formData.company}
                  onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
                  placeholder="Empresa"
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  placeholder="E-mail"
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700"
                />
                <input
                  required
                  value={formData.phone}
                  onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
                  placeholder="Telefone"
                  className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700"
                />
              </div>

              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                placeholder="Descreva o tipo de palete, embalagem ou demanda logística"
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-[#F3D31B] px-5 py-3.5 text-sm font-semibold text-[#0E2A88] shadow-[0_18px_30px_rgba(243,211,27,0.32)] hover:bg-[#e7c814]"
              >
                Enviar solicitação
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-[#F3D31B] px-4 py-2 text-sm font-semibold text-[#0E2A88] hover:bg-[#e7c814]"
              >
                WhatsApp comercial
              </a>
              <a
                href={`mailto:${company.email}`}
                className="rounded-md bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800"
              >
                {company.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6"
          >
            <div className="rounded-md border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-lg bg-stone-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-yellow-100 p-3 text-yellow-800">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-xl text-slate-900">Telefones</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{company.phones.join(' / ')}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-stone-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 p-3 text-blue-800">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-xl text-slate-900">E-mail</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{company.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-lg bg-stone-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-slate-200 p-3 text-slate-800">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-xl text-slate-900">Endereço</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{company.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-md border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
              <iframe
                title="Mapa da Paletes Monte Alto"
                src={mapEmbedUrl}
                className="h-[24rem] w-full rounded-lg border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}