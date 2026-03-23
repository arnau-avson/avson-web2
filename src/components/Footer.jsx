import { forwardRef } from 'react'

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
              <li>GRC</li>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Data Intelligence</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-3 text-sm">Empresa</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li>Sobre nosotros</li>
              <li>Contacto</li>
              <li>Política de privacidad</li>
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
