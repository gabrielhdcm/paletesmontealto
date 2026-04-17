import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const element = document.getElementById(location.hash.replace('#', ''))
    if (!element) {
      return
    }

    const timer = window.setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)

    return () => window.clearTimeout(timer)
  }, [location.hash, location.pathname, location.search])

  return null
}