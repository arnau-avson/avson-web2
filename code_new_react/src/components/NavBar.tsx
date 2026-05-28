import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-overflow', mobileOpen)
  }, [mobileOpen])

  const toggleNav = () => setMobileOpen(v => !v)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <div className="nav__inner">
          <Link to="/" className="nav__logo">AVSON<span className="dot"> · </span>GRC</Link>
          <ul className="nav__links">
            <li><Link to="/ens">ENS</Link></li>
            <li className="nav__has-dropdown">
              <a href="#">Certificaciones ▾</a>
              <div className="nav__dropdown">
                <Link to="/ens" className="nav__dropdown-item">
                  <span className="nav__dropdown-title">ENS</span>
                  <span className="nav__dropdown-desc">Esquema Nacional de Seguridad</span>
                </Link>
                <Link to="/iso27001" className="nav__dropdown-item">
                  <span className="nav__dropdown-title">ISO 27001</span>
                  <span className="nav__dropdown-desc">Seguridad de la Información</span>
                </Link>
                <Link to="/iso22301" className="nav__dropdown-item">
                  <span className="nav__dropdown-title">ISO 22301</span>
                  <span className="nav__dropdown-desc">Continuidad de Negocio</span>
                </Link>
                <Link to="/dora" className="nav__dropdown-item">
                  <span className="nav__dropdown-title">DORA</span>
                  <span className="nav__dropdown-desc">Resiliencia Operacional Digital</span>
                </Link>
                <Link to="/nis2" className="nav__dropdown-item">
                  <span className="nav__dropdown-title">NIS 2</span>
                  <span className="nav__dropdown-desc">Directiva Europea de Ciberseguridad</span>
                </Link>
                <Link to="/tisax" className="nav__dropdown-item">
                  <span className="nav__dropdown-title">TISAX</span>
                  <span className="nav__dropdown-desc">Seguridad en Cadena de Suministro</span>
                </Link>
                <Link to="/otras" className="nav__dropdown-item">
                  <span className="nav__dropdown-title">Otras ISOs</span>
                  <span className="nav__dropdown-desc">ISO 9001, 14001, 22000, 55001</span>
                </Link>
                <div style={{borderTop:'1px solid var(--border)',paddingTop:'4px',marginTop:'4px'}}>
                  <Link to="/ens-express" className="nav__dropdown-item" style={{background:'rgba(201,168,76,0.06)'}}>
                    <span className="nav__dropdown-title" style={{color:'var(--gold)'}}>⚡ ENS Express</span>
                    <span className="nav__dropdown-desc">Certificado ENS en 30 días · Urgente</span>
                  </Link>
                  <Link to="/diagnostico" className="nav__dropdown-item">
                    <span className="nav__dropdown-title">🎯 ¿Qué certificación necesito?</span>
                    <span className="nav__dropdown-desc">Autodiagnóstico en 5 preguntas</span>
                  </Link>
                  <Link to="/calculadora-roi" className="nav__dropdown-item">
                    <span className="nav__dropdown-title">📊 Calculadora de impacto</span>
                    <span className="nav__dropdown-desc">¿Cuánto pierdes sin el ENS?</span>
                  </Link>
                </div>
              </div>
            </li>
            <li><Link to="/packs">Packs</Link></li>
            <li><Link to="/equipo">Equipo</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <div className={`lang-switcher${langOpen ? ' open' : ''}`} ref={langRef}>
            <button className="lang-switcher__btn" onClick={() => setLangOpen(v => !v)} aria-label="Cambiar idioma">
              <span className="lang-switcher__flag">🌐</span>
              <span>ES</span>
              <span className="lang-switcher__chevron">▼</span>
            </button>
            <div className="lang-switcher__dropdown">
              <a href="/" className="lang-switcher__item lang-switcher__item--active">
                <span className="lang-switcher__item-flag">🇪🇸</span>
                <span className="lang-switcher__item-label">Español</span>
                <span className="lang-switcher__item-tag">ES</span>
              </a>
              <a href="/en/" className="lang-switcher__item">
                <span className="lang-switcher__item-flag">🇬🇧</span>
                <span className="lang-switcher__item-label">English</span>
                <span className="lang-switcher__item-tag">EN</span>
              </a>
              <a href="/fr/" className="lang-switcher__item">
                <span className="lang-switcher__item-flag">🇫🇷</span>
                <span className="lang-switcher__item-label">Français</span>
                <span className="lang-switcher__item-tag">FR</span>
              </a>
              <a href="/de/" className="lang-switcher__item">
                <span className="lang-switcher__item-flag">🇩🇪</span>
                <span className="lang-switcher__item-label">Deutsch</span>
                <span className="lang-switcher__item-tag">DE</span>
              </a>
              <a href="/pt/" className="lang-switcher__item">
                <span className="lang-switcher__item-flag">🇵🇹</span>
                <span className="lang-switcher__item-label">Português</span>
                <span className="lang-switcher__item-tag">PT</span>
              </a>
              <a href="/it/" className="lang-switcher__item">
                <span className="lang-switcher__item-flag">🇮🇹</span>
                <span className="lang-switcher__item-label">Italiano</span>
                <span className="lang-switcher__item-tag">IT</span>
              </a>
            </div>
          </div>
          <Link to="/contacto" className="nav__cta">Hablar con un experto →</Link>
          <div className="nav__hamburger" onClick={toggleNav}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>
      <div className={`nav-overlay${mobileOpen ? ' open' : ''}`}>
        <Link to="/ens" onClick={toggleNav}>ENS</Link>
        <Link to="/iso27001" onClick={toggleNav}>ISO 27001</Link>
        <Link to="/iso22301" onClick={toggleNav}>ISO 22301</Link>
        <Link to="/dora" onClick={toggleNav}>DORA</Link>
        <Link to="/nis2" onClick={toggleNav}>NIS 2</Link>
        <Link to="/tisax" onClick={toggleNav}>TISAX</Link>
        <Link to="/otras" onClick={toggleNav}>Otras ISOs</Link>
        <Link to="/diagnostico" onClick={toggleNav}>🎯 ¿Qué certificación necesito?</Link>
        <Link to="/calculadora-roi" onClick={toggleNav}>📊 Calculadora de impacto</Link>
        <Link to="/packs" onClick={toggleNav}>Packs</Link>
        <Link to="/equipo" onClick={toggleNav}>Equipo</Link>
        <Link to="/contacto" onClick={toggleNav}>Hablar con un experto →</Link>
      </div>
    </>
  )
}
