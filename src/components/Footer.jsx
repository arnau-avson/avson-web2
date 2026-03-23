import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Footer = forwardRef(function Footer(props, ref) {
  return (
    <footer
      ref={ref}
      className="bg-black border-t border-white/10 py-12 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <span className="text-2xl font-semibold text-white tracking-tight">avson</span>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            IA aplicada a Governance, Risk & Compliance. Automatiza tu cumplimiento normativo.
          </p>
        </div>
        <div className="flex gap-16">
          <div>
            <h3 className="text-white font-medium mb-3 text-sm">Soluciones</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><Link to="/grc" className="hover:text-white transition-colors">GRC</Link></li>
              <li><Link to="/ai" className="hover:text-white transition-colors">Artificial Intelligence</Link></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Cybersecurity</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Data Intelligence</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-3 text-sm">Empresa</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><span className="cursor-pointer hover:text-white transition-colors">Sobre nosotros</span></li>
              <li><a href="/#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">Política de privacidad</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} avson. Todos los derechos reservados.
      </div>
    </footer>
  )
})

export default Footer
