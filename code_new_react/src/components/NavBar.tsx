import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-overflow', mobileOpen)
  }, [mobileOpen])

  const toggleNav = () => setMobileOpen(v => !v)
  const closeNav = () => setMobileOpen(false)

  return (
    <>
      <nav className={`v3-nav${scrolled ? ' v3-nav--scrolled' : ''}`} id="mainNav">
        <div className="v3-nav__inner">
          <Link to="/" className="v3-nav__logo">AVSON<span>·</span>GRC</Link>
          <ul className="v3-nav__links">
            <li><Link to="/ens">ENS</Link></li>
            <li><Link to="/ens-express" className="nav-express">⚡ ENS Express</Link></li>
            <li><Link to="/iso22301">ISO 22301</Link></li>
            <li><Link to="/iso27001">ISO 27001</Link></li>
            <li><Link to="/otras">Otras certificaciones</Link></li>
          </ul>
          <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--sm v3-nav__cta">Habla con un experto →</Link>
          <button className="v3-nav__burger" onClick={toggleNav} aria-label="Menú">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`v3-nav__overlay${mobileOpen ? ' open' : ''}`} id="navOverlay">
        <button className="v3-nav__overlay-close" onClick={closeNav}>✕</button>
        <Link to="/ens" onClick={closeNav}>ENS</Link>
        <Link to="/ens-express" onClick={closeNav}>⚡ ENS Express</Link>
        <Link to="/iso22301" onClick={closeNav}>ISO 22301</Link>
        <Link to="/iso27001" onClick={closeNav}>ISO 27001</Link>
        <Link to="/otras" onClick={closeNav}>Otras certificaciones</Link>
        <Link to="/contacto" className="v3-btn v3-btn--gold" onClick={closeNav}>Habla con un experto →</Link>
      </div>
    </>
  )
}