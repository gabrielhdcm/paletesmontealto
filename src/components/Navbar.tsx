import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navigationItems, whatsappUrl } from '../data/siteContent'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dbe3fb] bg-white/95 backdrop-blur-xl">
      <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link to="/#inicio" className="flex items-center">
          {/* PLACEHOLDER: troque por /public/logopma.png caso altere o arquivo de logo */}
          <img
            src="/logopma.png"
            alt="Logo Paletes Monte Alto"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="font-display text-lg font-semibold tracking-[0.01em] text-slate-700 transition hover:text-[color:#0E2A88]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F3D31B] px-6 py-3 text-base font-semibold text-[#0E2A88] shadow-[0_12px_24px_rgba(243,211,27,0.35)] transition hover:-translate-y-0.5 hover:bg-[#e7c814]"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-[#dbe3fb] bg-white px-4 pb-4 pt-3 shadow-[0_16px_36px_rgba(15,23,42,0.1)] lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 font-display text-base font-semibold tracking-[0.01em] text-slate-700 transition hover:bg-stone-100 hover:text-[color:#0E2A88]"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#F3D31B] px-4 py-3 text-sm font-semibold text-[#0E2A88] hover:bg-[#e7c814]"
              >
                <Phone className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}