import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import ContactModal from './ContactModal'

const languages = [
  { code: 'ES', label: 'Español' },
  { code: 'CA', label: 'Català' },
  { code: 'EU', label: 'Euskara' },
  { code: 'HE', label: 'עברית' },
  { code: 'EN', label: 'English' },
  { code: 'AR', label: 'العربية' },
  { code: 'PL', label: 'Polski' },
]

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.dataset.menuOpen = 'true'
    } else {
      document.body.style.overflow = ''
      delete document.body.dataset.menuOpen
    }
    return () => {
      document.body.style.overflow = ''
      delete document.body.dataset.menuOpen
    }
  }, [menuOpen])

  return (
    <>
      <nav className="bg-black w-full relative z-50">
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          <Link to="/" className="text-2xl font-semibold tracking-tight text-white">
            avs<span className="inline-block border-t-[4px] border-white leading-[0.85]">on</span>
          </Link>

          {/* Language selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer px-2 py-1"
            >
              {lang}
              <span className={`text-[10px] transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black border border-white/10 rounded-lg overflow-hidden transition-all duration-200 ${langOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-3 whitespace-nowrap ${l.code === lang ? 'text-accent' : 'text-gray-400'}`}
                >
                  <span className="text-xs font-mono w-5">{l.code}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl text-gray-400 hover:text-white transition-colors rotate-90 cursor-pointer"
            >
              ☰
            </button>
            <button onClick={() => setContactOpen(true)} className="cursor-pointer border border-white border-3 text-white px-4 py-1">
              {t('nav.contact')}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Fullscreen menu modal */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 bg-black/95 backdrop-blur-sm transition-all duration-500 ease-in-out ${
          menuOpen ? 'top-[72px] opacity-100' : 'top-[-100%] opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto px-6 md:px-20 py-6 md:py-0 md:flex md:items-center md:justify-center">
          <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6 md:gap-20">
            {/* Left: Navigation */}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 md:mb-6">{t('nav.navigation')}</p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
                <Link
                  to="/grc"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-2 p-4 md:p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <span className="text-2xl md:text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">01</span>
                  <h3 className="text-sm md:text-lg font-bold text-white">{t('nav.grc')}</h3>
                  <p className="text-xs md:text-sm text-gray-500 hidden sm:block">{t('nav.grcDesc')}</p>
                </Link>

                <Link
                  to="/ai"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-2 p-4 md:p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <span className="text-2xl md:text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">02</span>
                  <h3 className="text-sm md:text-lg font-bold text-white">{t('nav.ai')}</h3>
                  <p className="text-xs md:text-sm text-gray-500 hidden sm:block">{t('nav.aiDesc')}</p>
                </Link>

                <Link
                  to="/cyber"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-2 p-4 md:p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <span className="text-2xl md:text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">03</span>
                  <h3 className="text-sm md:text-lg font-bold text-white">{t('nav.cyber')}</h3>
                  <p className="text-xs md:text-sm text-gray-500 hidden sm:block">{t('nav.cyberDesc')}</p>
                </Link>

                <Link
                  to="/intel"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-2 p-4 md:p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <span className="text-2xl md:text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">04</span>
                  <h3 className="text-sm md:text-lg font-bold text-white">{t('nav.intel')}</h3>
                  <p className="text-xs md:text-sm text-gray-500 hidden sm:block">{t('nav.intelDesc')}</p>
                </Link>
              </div>
            </div>

            {/* Right: Software */}
            <div className="md:w-[300px] shrink-0">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 md:mb-6">{t('nav.software')}</p>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-5">
                <a
                  href="https://praesys.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-2 p-4 md:p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">{t('nav.active')}</span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white">{t('nav.softwareGrc')}</h3>
                  <p className="text-sm text-gray-500">praesys.ai</p>
                </a>

                <a
                  href="https://nyctos.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-2 p-4 md:p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">{t('nav.active')}</span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white">{t('nav.softwareIntel')}</h3>
                  <p className="text-sm text-gray-500">nyctos.ai</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-8 md:right-12 text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-2 cursor-pointer"
        >
          {t('nav.close')} <span className="text-lg">&times;</span>
        </button>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
