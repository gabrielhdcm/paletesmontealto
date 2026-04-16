import { Route, Routes } from 'react-router-dom'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { DifferentialsSection } from './components/DifferentialsSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { ProductsSection } from './components/ProductsSection'
import { ScrollToHash } from './components/ScrollToHash'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ToastProvider } from './components/ToastProvider'
import { WhatsAppButton } from './components/WhatsAppButton'

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-stone-950 text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_right,_rgba(217,119,6,0.2),_transparent_32%),radial-gradient(circle_at_top_left,_rgba(34,139,34,0.18),_transparent_28%)]" />
      <ScrollToHash />
      <ToastProvider>
        <Navbar />
        <main>
          <HeroSection />
          <ProductsSection />
          <AboutSection />
          <DifferentialsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </ToastProvider>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}