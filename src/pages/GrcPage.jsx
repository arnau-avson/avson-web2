import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const services = [
  {
    number: '01',
    title: 'ISO 27001',
    subtitle: 'Seguridad de la Información',
    description: 'Implementación y certificación del sistema de gestión de seguridad de la información. Protección integral de activos, controles técnicos y organizativos alineados con las mejores prácticas internacionales.',
  },
  {
    number: '02',
    title: 'ENS',
    subtitle: 'Esquema Nacional de Seguridad',
    description: 'Adecuación completa al Esquema Nacional de Seguridad para entidades del sector público y proveedores. Categorización, análisis de riesgos y plan de adecuación hasta la certificación.',
  },
  {
    number: '03',
    title: 'NIS2',
    subtitle: 'Directiva Europea de Ciberseguridad',
    description: 'Preparación y cumplimiento de la Directiva NIS2 para operadores de servicios esenciales e infraestructuras críticas. Gestión de incidentes, gobernanza y notificación obligatoria.',
  },
  {
    number: '04',
    title: 'DORA',
    subtitle: 'Resiliencia Operativa Digital',
    description: 'Cumplimiento del Reglamento DORA para el sector financiero. Gestión de riesgos TIC, pruebas de resiliencia, gestión de terceros y reporting regulatorio.',
  },
  {
    number: '05',
    title: 'ISO 22301',
    subtitle: 'Continuidad de Negocio',
    description: 'Diseño e implementación del sistema de gestión de continuidad de negocio. Análisis de impacto, estrategias de recuperación y planes de continuidad con enfoque predictivo.',
  },
  {
    number: '06',
    title: 'Auditoría & Riesgos',
    subtitle: 'Gestión Proactiva',
    description: 'Auditorías inteligentes automatizadas con IA, gestión integral del ciclo de vida de riesgos y cuadros de mando en tiempo real para la toma de decisiones estratégicas.',
  },
]

export default function GrcPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <section className="px-8 md:px-20 pt-20 pb-16 max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-10">
          <span>&larr;</span> Volver
        </Link>
        <p className="text-sm uppercase tracking-widest text-accent mb-4">01 — GRC Estratégico</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
          Gobierno, Riesgo y<br />Cumplimiento Inteligente
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          Automatizamos y fortalecemos la gestión de cumplimiento normativo de tu organización.
          Certificaciones estratégicas, resiliencia operativa y auditorías inteligentes impulsadas por IA.
        </p>
        <div className="flex gap-4 mt-8">
          <a href="/#contacto" className="bg-accent text-white px-8 py-3.5 rounded-lg text-base font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all">
            Solicitar demo
          </a>
          <span className="inline-flex items-center text-sm font-medium px-4 py-1.5 rounded-full bg-green-500/15 text-green-400">
            Plataforma disponible
          </span>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8 md:px-20">
        <div className="h-px bg-white/10" />
      </div>

      {/* Services grid */}
      <section className="px-8 md:px-20 py-20 max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-10">Servicios y certificaciones</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-5 mb-4">
                <span className="text-3xl font-bold text-white/10 tracking-tighter">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-accent">{service.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8 md:px-20">
        <div className="h-px bg-white/10" />
      </div>

      {/* CTA */}
      <section className="px-8 md:px-20 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          ¿Listo para transformar tu GRC?
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Nuestro equipo te guiará en el camino hacia el cumplimiento normativo inteligente y automatizado.
        </p>
        <a href="/#contacto" className="inline-block bg-accent text-white px-10 py-4 rounded-lg text-base font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all">
          Contactar con el equipo
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-8 md:px-20 text-center text-gray-600 text-xs">
        &copy; {new Date().getFullYear()} avson. Todos los derechos reservados.
      </footer>
    </div>
  )
}
