import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company, footerLinks, footerNote, whatsappUrl } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#0a1b4f_0%,#061238_100%)] px-4 py-10 text-slate-300 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="flex items-center gap-3">
              {/* PLACEHOLDER: troque por /public/logopma.png caso altere o arquivo da logo */}
              <img
                src="/logopma.png"
                alt="Logo Paletes Monte Alto"
                className="h-14 w-auto rounded-md object-contain"
              />
              <div>
                <p className="font-display text-2xl text-white">{company.name}</p>
                <p className="text-sm text-slate-400">{company.slogan}</p>
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">{footerNote}</p>

            <div className="mt-5 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 sm:gap-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4">
                <div className="flex items-center gap-2 text-white">
                  <Phone className="h-4 w-4 text-yellow-300" />
                  Telefones
                </div>
                <p className="mt-1.5 text-xs leading-6 sm:mt-2 sm:text-sm sm:leading-7">{company.phones.join(' / ')}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4">
                <div className="flex items-center gap-2 text-white">
                  <Mail className="h-4 w-4 text-blue-300" />
                  E-mail
                </div>
                <p className="mt-1.5 text-xs leading-6 sm:mt-2 sm:text-sm sm:leading-7">{company.email}</p>
              </div>
              <div className="col-span-2 rounded-lg border border-white/10 bg-white/5 p-3 sm:col-span-1 sm:p-4">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4 text-sky-400" />
                  Endereço
                </div>
                <p className="mt-1.5 text-xs leading-6 sm:mt-2 sm:text-sm sm:leading-7">Monte Alto - SP</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <p className="font-display text-xl text-white">{group.title}</p>
                <div className="mt-4 grid gap-3">
                  {group.items.map((item) => (
                    <Link
                      key={`${group.title}-${item.label}`}
                      to={item.href}
                      className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <p className="font-display text-xl text-white">Atendimento</p>
              <div className="mt-4 grid gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(135deg,#0E2A88,#2450C8)] px-4 py-3 text-sm font-semibold text-white"
                >
                  Solicitar orçamento pelo WhatsApp
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-3 text-sm font-semibold text-white"
                >
                  Enviar e-mail comercial
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © GABRIEL HENRIQUE DA CRUZ MACHADO - WEB DEVELOPER. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}