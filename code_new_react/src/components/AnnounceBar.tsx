import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  // Don't show on contacto/gracias pages
  const hidden = /contacto|gracias/.test(pathname)

  useEffect(() => {
    if (hidden) return
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [hidden])

  if (hidden) return null

  return (
    <div className="v3-sticky-bar" id="stickyBar" style={{ display: visible ? 'flex' : 'none' }}>
      <span className="v3-sticky-bar__text">Avson GRC — <strong>Si no te certificamos, te devolvemos el dinero</strong></span>
      <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--sm">Habla con un experto →</Link>
    </div>
  )
}
