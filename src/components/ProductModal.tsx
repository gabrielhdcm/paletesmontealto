import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { company, type Product, whatsappUrl } from '../data/siteContent'
import { useToast } from './ToastProvider'

type ProductModalProps = {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { showToast } = useToast()
  const [quickForm, setQuickForm] = useState({ name: '', company: '', phone: '' })

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  if (!product) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          onClick={(event) => event.stopPropagation()}
          className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-md border border-white/10 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.3)]"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-slate-950/75 p-2 text-white transition hover:bg-slate-950"
            aria-label="Fechar detalhes do produto"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="bg-[#07153d] p-4 lg:p-6">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-100">
                <img
                  src={product.image}
                  alt={`Placeholder do produto ${product.name}`}
                  className="h-full min-h-[20rem] w-full object-contain p-4"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <div>
                <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-900">
                  {product.badge}
                </span>
                <h3 className="mt-4 font-display text-3xl text-slate-900">{product.name}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{product.details}</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Especificações e aplicações
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <form
                className="rounded-lg border border-slate-200 p-5"
                onSubmit={(event) => {
                  event.preventDefault()
                  showToast(
                    'Solicitação registrada',
                    `Recebemos seu interesse em ${product.name}. Nossa equipe comercial retornará em breve.`,
                  )
                  setQuickForm({ name: '', company: '', phone: '' })
                }}
              >
                <p className="font-display text-xl text-slate-900">Solicite detalhes rápidos</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Preencha abaixo para simular um contato comercial sobre este produto.
                </p>

                <div className="mt-5 grid gap-4">
                  <input
                    required
                    value={quickForm.name}
                    onChange={(event) => setQuickForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Seu nome"
                    className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700"
                  />
                  <input
                    required
                    value={quickForm.company}
                    onChange={(event) =>
                      setQuickForm((current) => ({ ...current, company: event.target.value }))
                    }
                    placeholder="Empresa"
                    className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700"
                  />
                  <input
                    required
                    value={quickForm.phone}
                    onChange={(event) => setQuickForm((current) => ({ ...current, phone: event.target.value }))}
                    placeholder="Telefone"
                    className="rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-700"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[linear-gradient(135deg,#0E2A88,#2450C8)] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20"
                >
                  Enviar interesse
                </button>
              </form>

              <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-blue-700"
                >
                  <Phone className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
                <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 font-semibold text-slate-800">
                  <Mail className="h-4 w-4" />
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}