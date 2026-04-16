import { motion } from 'framer-motion'
import { whatsappUrl } from '../data/siteContent'

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.4, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_28px_rgba(37,211,102,0.45)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-full w-full"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="24" fill="#25D366" />
        <path
          fill="#fff"
          d="M24 11C16.82 11 11 16.82 11 24c0 2.29.61 4.44 1.68 6.3L11 37l6.93-1.64A13 13 0 0 0 24 37c7.18 0 13-5.82 13-13S31.18 11 24 11zm6.4 17.9c-.27.75-1.57 1.44-2.14 1.53-.55.08-1.23.12-1.98-.12-.46-.14-1.04-.34-1.79-.66-3.14-1.35-5.19-4.5-5.35-4.71-.16-.21-1.29-1.71-1.29-3.26s.82-2.31 1.11-2.63c.29-.32.63-.4.84-.4l.6.01c.19 0 .45-.07.7.54.27.63.9 2.18.98 2.34.08.16.13.34.03.55-.1.21-.16.34-.31.52-.16.18-.33.41-.47.55-.16.16-.32.33-.14.65.19.32.82 1.35 1.76 2.19 1.21 1.08 2.23 1.41 2.55 1.57.32.16.5.13.69-.08.19-.21.8-.93 1.01-1.25.21-.32.42-.27.71-.16.29.11 1.83.86 2.14 1.02.32.16.53.24.61.37.08.14.08.79-.19 1.54z"
        />
      </svg>
    </motion.a>
  )
}
