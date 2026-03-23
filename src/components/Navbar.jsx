import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-black w-full relative z-50">
      <div className="flex items-center justify-between px-6 py-6 md:px-12">
        <span className="text-2xl font-semibold tracking-tight text-white">
          avson
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#soluciones" className="text-xl text-gray-400 hover:text-white transition-colors">
            Soluciones
          </a>
          <a href="#contacto" className="cursor-pointer border border-white border-3 text-white px-4 py-1">
            Contacto
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-black border-t border-white/10 ${open ? 'max-h-64' : 'max-h-0 border-transparent'}`}>
        <div className="flex flex-col px-6 py-4 gap-4">
          <a href="#soluciones" onClick={() => setOpen(false)} className="text-lg text-gray-400 hover:text-white transition-colors">
            Soluciones
          </a>
          <a href="#contacto" onClick={() => setOpen(false)} className="text-lg text-white border border-white/20 text-center py-2 hover:border-accent transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}
