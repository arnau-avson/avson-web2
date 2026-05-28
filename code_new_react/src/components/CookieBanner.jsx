import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookieAccepted')) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const close = () => {
    localStorage.setItem('cookieAccepted', 'true')
    setVisible(false)
  }

  return (
    <div className={`cookie-banner${visible ? ' visible' : ''}`}>
      <p className="cookie-banner__text">Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico. Puedes aceptarlas o rechazarlas. <a href="/cookies">Política de cookies</a>.</p>
      <div className="cookie-banner__actions">
        <button className="cookie-accept" onClick={close}>Aceptar</button>
        <button className="cookie-decline" onClick={close}>Rechazar</button>
      </div>
    </div>
  )
}
