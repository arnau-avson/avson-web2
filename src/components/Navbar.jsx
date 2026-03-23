import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-black w-full relative z-50">
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          <Link to="/" className="text-2xl font-semibold tracking-tight text-white">
            avson
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl text-gray-400 hover:text-white transition-colors rotate-90 cursor-pointer"
            >
              ☰
            </button>
            <a href="/#contacto" className="cursor-pointer border border-white border-3 text-white px-4 py-1">
              Contacto
            </a>
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
        <div className="h-full overflow-y-auto px-8 md:px-20 py-8 md:py-0 md:flex md:items-center md:justify-center">
          <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 md:gap-20">
            {/* Left: Navigation */}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Navegación</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Link
                  to="/grc"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-3 p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <span className="text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">01</span>
                  <h3 className="text-lg font-bold text-white">GRC Estratégico</h3>
                  <p className="text-sm text-gray-500">Gobierno, Riesgo y Cumplimiento</p>
                </Link>

                <Link
                  to="/ai"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-3 p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <span className="text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">02</span>
                  <h3 className="text-lg font-bold text-white">Inteligencia Artificial</h3>
                  <p className="text-sm text-gray-500">IA Real, No Hype</p>
                </Link>

                <Link
                  to="/cyber"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-3 p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <span className="text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">03</span>
                  <h3 className="text-lg font-bold text-white">Ciberseguridad</h3>
                  <p className="text-sm text-gray-500">CISO as a Service + Threat Intelligence</p>
                </Link>

                <div className="group flex flex-col gap-3 p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all cursor-pointer">
                  <span className="text-3xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">04</span>
                  <h3 className="text-lg font-bold text-white">Inteligencia & Defensa</h3>
                  <p className="text-sm text-gray-500">Capacidades soberanas para seguridad nacional</p>
                </div>
              </div>
            </div>

            {/* Right: Software */}
            <div className="md:w-[300px] shrink-0">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Software</p>
              <div className="flex flex-col gap-5">
                <a
                  href="https://praesys.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-3 p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">Activo</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Software de GRC</h3>
                  <p className="text-sm text-gray-500">praesys.ai</p>
                </a>

                <a
                  href="https://nyctos.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="group flex flex-col gap-3 p-6 border border-white/10 rounded-xl hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">Activo</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Software de Inteligencia</h3>
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
          Cerrar <span className="text-lg">&times;</span>
        </button>
      </div>
    </>
  )
}
