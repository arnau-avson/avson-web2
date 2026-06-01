import { FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function OtrasPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = '/gracias'
  }

  return (
    <>
      {/* HERO */}
      <section className="section section--pearl" style={{ paddingTop: '120px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="hero-conv">
            <div>
              <span className="label-tag">ISO 9001 · 14001 · 22000 · 42001 · 50001</span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px,5.2vw,68px)', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.08, margin: '14px 0 18px' }}>
                Mas certificaciones.<br /><em>A coste marginal.</em>
              </h1>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.6, color: 'var(--text-body)', maxWidth: '520px', margin: 0 }}>
                Si ya tienes <Link to="/ens" style={{ color: 'var(--navy)', fontWeight: 600 }}>ENS</Link> o <Link to="/iso27001" style={{ color: 'var(--navy)', fontWeight: 600 }}>ISO 27001</Link>, cada nueva ISO cuesta una fraccion. <strong style={{ color: 'var(--navy)' }}>Aprovechamos lo que ya tienes hecho.</strong>
              </p>

              <div className="hero-conv__kpis">
                <div className="hero-conv__kpi"><strong>355+</strong><span>empresas certificadas</span></div>
                <div className="hero-conv__kpi"><strong>100%</strong><span>tasa de exito</span></div>
                <div className="hero-conv__kpi"><strong>4.9</strong><span>valoracion clientes</span></div>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #C9A84C', padding: '9px 16px', borderRadius: '8px' }}>
                <span style={{ fontSize: '16px', color: '#C9A84C' }}>&#10022;</span>
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#1A2744' }}>Garantia de exito al 100% por escrito</span>
              </div>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, margin: '22px 0 0', maxWidth: '480px' }}>
                <span style={{ color: '#C9A84C', letterSpacing: '1px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span><br />
                <em>"Empezamos con el ENS y anadimos la ISO 9001 en el mismo proyecto. En cuatro meses teniamos las dos."</em> -- Gerente de Calidad
              </p>
            </div>

            <div style={{ background: '#fff', border: '1px solid #E5E5E0', borderRadius: '14px', padding: '30px', boxShadow: '0 18px 50px rgba(26,39,68,0.12)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700, color: '#16a34a', margin: '0 0 4px' }}>Te respondemos hoy</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--navy)', margin: '0 0 4px' }}>Pide tu presupuesto</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 18px' }}>Gratuito · Sin compromiso · En 30 min sabes que necesitas</p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <input type="text" name="nombre" placeholder="Tu nombre *" required style={{ padding: '13px 16px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '15px', color: '#1A2744', outline: 'none' }} />
                <input type="email" name="email" placeholder="Tu email *" required style={{ padding: '13px 16px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '15px', color: '#1A2744', outline: 'none' }} />
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <input type="checkbox" required style={{ width: '15px', height: '15px', flexShrink: 0, marginTop: '3px', accentColor: '#1A2744' }} />
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#7A8499', lineHeight: 1.4 }}>Al enviar, acepto que Avson me contacte para responder mi consulta. <Link to="/privacidad" target="_blank" style={{ color: '#1A2744' }}>Politica de privacidad</Link></label>
                </div>
                <button type="submit" className="v3-btn v3-btn--gold v3-btn--full v3-btn--xl v3-btn--pulse">Quiero mas certificaciones &rarr;</button>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#B0B8C4', textAlign: 'center', margin: 0 }}>Gratuito · Sin compromiso · Confidencial</p>
              </form>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', margin: '14px 0 0' }}>Prefieres escribirnos? <a href="mailto:hello@avson.eu" style={{ color: 'var(--navy)', fontWeight: 600 }}>hello@avson.eu</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* LAS 4 CERTIFICACIONES */}
      <section className="section section--white" id="certificaciones">
        <div className="container">
          <span className="label-tag">Las cuatro certificaciones</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '560px' }}>Que ofrece cada<br /><em>norma ISO.</em></h2>

          {/* ISO 9001 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', marginTop: '60px', paddingBottom: '60px', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
            <div>
              <div style={{ background: 'var(--navy)', padding: '32px', textAlign: 'center', marginBottom: '24px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 300, color: 'var(--gold)', marginBottom: '4px' }}>9001</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Gestion de la Calidad</p>
              </div>
              <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Quien la necesita</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>Empresas que quieren licitar en el sector publico, demostrar calidad a grandes clientes, o mejorar sus procesos internos de forma sistematica.</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '20px' }}>ISO 9001:2015 -- Sistema de Gestion de la Calidad</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>
                ISO 9001 es el estandar de gestion de la calidad mas extendido del mundo, con mas de un millon de organizaciones certificadas en todos los sectores. Establece los requisitos para que una organizacion demuestre su capacidad de proporcionar productos y servicios que satisfagan de forma consistente los requisitos del cliente y los legales y reglamentarios aplicables. Su enfoque basado en procesos y en el ciclo PDCA permite mejorar continuamente la eficiencia operativa.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '24px' }}>
                Los principios clave de ISO 9001 son el enfoque en el cliente (entender y superar sus expectativas), el liderazgo (la direccion debe comprometerse activamente), el enfoque a procesos (gestionar las actividades como procesos interrelacionados), la mejora (mejorar continuamente el rendimiento), las decisiones basadas en evidencia, y la gestion de las relaciones con las partes interesadas.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Por que certificarse</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    <li style={{ padding: '4px 0' }}>Requisito habitual en licitaciones publicas</li>
                    <li style={{ padding: '4px 0' }}>Exigida por clientes grandes como minimo de calidad</li>
                    <li style={{ padding: '4px 0' }}>Mejora real de procesos y reduccion de errores</li>
                    <li style={{ padding: '4px 0' }}>Diferenciador comercial en mercados competitivos</li>
                  </ul>
                </div>
                <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Solapamiento con otros marcos</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    <li style={{ padding: '4px 0' }}>~50% con <Link to="/iso27001">ISO 27001</Link> (estructura HLS identica)</li>
                    <li style={{ padding: '4px 0' }}>~40% con <Link to="/iso22301">ISO 22301</Link> (gestion de riesgos)</li>
                    <li style={{ padding: '4px 0' }}>~35% con <Link to="/ens">ENS</Link> (revision por la direccion)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ISO 14001 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', marginTop: '60px', paddingBottom: '60px', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
            <div>
              <div style={{ background: 'var(--navy)', padding: '32px', textAlign: 'center', marginBottom: '24px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 300, color: 'var(--gold)', marginBottom: '4px' }}>14001</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Gestion Medioambiental</p>
              </div>
              <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Quien la necesita</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>Empresas con compromisos ESG, del sector industrial, construccion, manufactura, o cualquier empresa con impacto ambiental significativo o que quiera diferenciarse en sostenibilidad.</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '20px' }}>ISO 14001:2015 -- Sistema de Gestion Medioambiental</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>
                ISO 14001 establece los requisitos para implementar un Sistema de Gestion Medioambiental (SGMA) que ayuda a las organizaciones a mejorar su desempeno ambiental, cumplir con las obligaciones legales en materia medioambiental y alcanzar sus objetivos ambientales. La norma tiene un enfoque preventivo: en lugar de gestionar los problemas ambientales cuando ocurren, exige identificar los aspectos ambientales significativos y gestionarlos proactivamente.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '24px' }}>
                En el contexto actual de compromisos ESG (Environmental, Social, Governance), ISO 14001 es la evidencia mas robusta y auditada del compromiso de una empresa con la gestion ambiental. Va mas alla de cumplir la legislacion: exige una perspectiva de ciclo de vida de los productos y servicios, incluyendo los impactos en la cadena de suministro y en el uso por el cliente final.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Requisitos clave</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    <li style={{ padding: '4px 0' }}>Identificacion de aspectos e impactos ambientales</li>
                    <li style={{ padding: '4px 0' }}>Cumplimiento de requisitos legales ambientales</li>
                    <li style={{ padding: '4px 0' }}>Preparacion ante emergencias ambientales</li>
                    <li style={{ padding: '4px 0' }}>Perspectiva de ciclo de vida de productos</li>
                  </ul>
                </div>
                <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Por que certificarse</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    <li style={{ padding: '4px 0' }}>Informes ESG y sostenibilidad corporativa</li>
                    <li style={{ padding: '4px 0' }}>Acceso a financiacion verde y bonos sostenibles</li>
                    <li style={{ padding: '4px 0' }}>Requisito en cadenas de suministro de grandes grupos</li>
                    <li style={{ padding: '4px 0' }}>Reduccion de costes energeticos y de residuos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ISO 22000 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', marginTop: '60px', paddingBottom: '60px', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
            <div>
              <div style={{ background: 'var(--navy)', padding: '32px', textAlign: 'center', marginBottom: '24px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 300, color: 'var(--gold)', marginBottom: '4px' }}>22000</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Seguridad Alimentaria</p>
              </div>
              <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Quien la necesita</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>Industria alimentaria, restauracion, logistica de alimentos, proveedores de envases alimentarios, distribuidores y cualquier empresa en la cadena de suministro alimentaria.</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '20px' }}>ISO 22000:2018 -- Sistema de Gestion de la Inocuidad Alimentaria</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>
                ISO 22000 establece los requisitos para un Sistema de Gestion de la Inocuidad Alimentaria (SGIA) aplicable a cualquier organizacion en la cadena alimentaria. Integra los principios del APPCC (Analisis de Peligros y Puntos Criticos de Control, o HACCP en ingles), los Programas de Prerrequisitos (PRPs) y un sistema de gestion basado en el enfoque por procesos de ISO. Es la norma mas completa para la gestion de la seguridad alimentaria a nivel internacional.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '24px' }}>
                La version 2018 actualizo la norma para alinearla con la estructura HLS de ISO (identica a la de ISO 9001 e ISO 14001), lo que facilita la integracion en sistemas de gestion multiples. Los requisitos especificos mas exigentes de ISO 22000 respecto a otras normas son la obligatoriedad del analisis APPCC, la gestion de alergenos, la trazabilidad de ingredientes y el control de peligros biologicos, quimicos, fisicos y alergenicos.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Conceptos clave</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    <li style={{ padding: '4px 0' }}>HACCP -- Analisis de peligros alimentarios</li>
                    <li style={{ padding: '4px 0' }}>PRPs -- Programas de prerrequisitos higienicos</li>
                    <li style={{ padding: '4px 0' }}>Trazabilidad de ingredientes y producto</li>
                    <li style={{ padding: '4px 0' }}>Gestion de alergenos y contaminacion cruzada</li>
                  </ul>
                </div>
                <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Por que certificarse</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    <li style={{ padding: '4px 0' }}>Acceso a grandes distribuidores y supermercados</li>
                    <li style={{ padding: '4px 0' }}>Exportacion a mercados internacionales exigentes</li>
                    <li style={{ padding: '4px 0' }}>Proteccion ante crisis alimentarias y retiradas</li>
                    <li style={{ padding: '4px 0' }}>Demostracion de cumplimiento del Reglamento UE</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ISO 55001 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', marginTop: '60px', alignItems: 'start' }}>
            <div>
              <div style={{ background: 'var(--navy)', padding: '32px', textAlign: 'center', marginBottom: '24px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 300, color: 'var(--gold)', marginBottom: '4px' }}>55001</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Gestion de Activos</p>
              </div>
              <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Quien la necesita</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>Empresas de infraestructuras, utilities (agua, energia, telecomunicaciones), transporte, manufactura intensiva en activos fisicos, y cualquier organizacion con un parque de activos fisicos significativo.</p>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '20px' }}>ISO 55001:2014 -- Sistema de Gestion de Activos</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>
                ISO 55001 establece los requisitos para un Sistema de Gestion de Activos (SGA) que optimiza el valor que los activos fisicos proporcionan a la organizacion a lo largo de su ciclo de vida completo: desde la planificacion de la adquisicion hasta la renovacion o disposicion final. La norma se basa en la premisa de que los activos fisicos bien gestionados son una fuente de creacion de valor, no simplemente un coste a minimizar.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '24px' }}>
                ISO 55001 exige la alineacion de la gestion de activos con los objetivos estrategicos de la organizacion, la toma de decisiones basada en el riesgo sobre intervenciones en activos (mantenimiento, renovacion, reemplazo), y la optimizacion del rendimiento de los activos considerando su coste total a lo largo del ciclo de vida. Es especialmente relevante para sectores regulados donde el rendimiento de los activos afecta directamente a la calidad del servicio que se presta a los ciudadanos o clientes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Conceptos clave</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    <li style={{ padding: '4px 0' }}>Plan Estrategico de Gestion de Activos (SAMP)</li>
                    <li style={{ padding: '4px 0' }}>Gestion del ciclo de vida completo del activo</li>
                    <li style={{ padding: '4px 0' }}>Decisiones de riesgo sobre intervenciones</li>
                    <li style={{ padding: '4px 0' }}>Optimizacion coste-rendimiento-riesgo</li>
                  </ul>
                </div>
                <div style={{ background: 'var(--pearl)', padding: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Por que certificarse</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    <li style={{ padding: '4px 0' }}>Requisito de reguladores en utilities y transporte</li>
                    <li style={{ padding: '4px 0' }}>Optimizacion del CAPEX y OPEX de mantenimiento</li>
                    <li style={{ padding: '4px 0' }}>Reduccion de fallos inesperados y tiempos de parada</li>
                    <li style={{ padding: '4px 0' }}>Mejora de la fiabilidad del servicio prestado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMA INTEGRADO */}
      <section className="section section--navy" id="integrado">
        <div className="container">
          <span className="label-tag" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>Sistema de Gestion Integrado</span>
          <div className="gold-line"></div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,4.5vw,58px)', fontWeight: 300, color: '#fff', lineHeight: 1.15, margin: '0 0 32px', maxWidth: '680px' }}>
            Un sistema de gestion integrado<br />para todos tus marcos.
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: '640px', marginBottom: '48px' }}>
            Todas las normas ISO de sistemas de gestion (ISO 9001, ISO 14001, ISO 22000, ISO 27001, ISO 22301, ISO 55001) comparten la misma estructura de alto nivel (HLS). Esto no es casualidad: ISO diseno esta estructura precisamente para facilitar la integracion. Un Sistema de Gestion Integrado (SGI) es la forma mas eficiente de gestionar multiples certificaciones.
          </p>

          <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: '3px solid #C9A84C', padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap', marginTop: '48px' }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 400, color: '#1A2744', lineHeight: 1.3, flex: 1, minWidth: '200px' }}>"Integrar ISO 9001 con ENS e ISO 27001 en un sistema unico ahorra tiempo y dinero. Te disenamos el IMS a medida."</span>
            <Link to="/contacto" className="btn-primary">Disenar mi IMS &rarr;</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '48px' }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '32px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Una sola auditoria</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Con un SGI bien disenado, las auditorias de certificacion pueden realizarse de forma conjunta por el mismo auditor, reduciendo el tiempo de auditoria y el coste de certificacion de forma muy significativa. En lugar de tres auditorias independientes, una sola auditoria integrada.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '32px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Una sola documentacion</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>El manual del sistema, las politicas corporativas, los procedimientos de gestion de no conformidades, la metodologia de analisis de riesgos y la revision por la direccion son compartidos por todos los marcos integrados. Se eliminan las duplicidades y la burocracia redundante.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '32px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Una sola revision por la direccion</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Todas las normas ISO exigen una revision periodica del sistema por la alta direccion. Con un SGI, esta revision se hace una sola vez, abarcando todos los marcos de gestion de forma integrada, con un unico orden del dia y un unico acta de revision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO TABLE */}
      <section className="section section--pearl" id="portfolio">
        <div className="container">
          <span className="label-tag">Que certificaciones necesitas?</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '480px' }}>Elige tu<br /><em>combinacion.</em></h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', maxWidth: '640px', marginBottom: '48px' }}>
            No existe una combinacion universalmente correcta. El portfolio optimo depende del sector, de los clientes, de las exigencias regulatorias y de los objetivos de negocio. Estas son las combinaciones mas habituales con las que trabajamos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '32px', border: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>Empresa TIC</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 300, color: 'var(--navy)', marginBottom: '12px' }}><Link to="/ens" style={{ color: 'inherit', textDecoration: 'none' }}>ENS</Link> + <Link to="/iso27001" style={{ color: 'inherit', textDecoration: 'none' }}>ISO 27001</Link></h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>El estandar para proveedores de tecnologia que trabajan con el sector publico y con clientes enterprise privados. Cubre el 100% de los requisitos de seguridad del mercado TIC espanol.</p>
              <Link to="/iso27001" className="btn-text" style={{ fontSize: '12px' }}>Ver mas &rarr;</Link>
            </div>
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '32px', border: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>Empresa industrial o manufacturera</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 300, color: 'var(--navy)', marginBottom: '12px' }}>ISO 9001 + ISO 14001</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>La combinacion mas habitual para empresas industriales. Calidad y medio ambiente en un sistema integrado, con un solo ciclo de auditorias anuales y una sola revision por la direccion.</p>
              <Link to="/contacto" className="btn-text" style={{ fontSize: '12px' }}>Habla con un experto &rarr;</Link>
            </div>
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '32px', border: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>Empresa del sector alimentario</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 300, color: 'var(--navy)', marginBottom: '12px' }}>ISO 22000 + ISO 14001</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>Seguridad alimentaria y gestion medioambiental, dos exigencias que van de la mano en la industria alimentaria moderna. El 40% de los requisitos se solapan entre ambas normas.</p>
              <Link to="/contacto" className="btn-text" style={{ fontSize: '12px' }}>Habla con un experto &rarr;</Link>
            </div>
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '32px', border: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>Empresa de infraestructuras o utilities</p>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 300, color: 'var(--navy)', marginBottom: '12px' }}>ISO 55001 + ISO 14001</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px' }}>Gestion de activos y gestion medioambiental, la combinacion para empresas de utilities, transporte e infraestructuras con un parque de activos fisicos extenso e impacto ambiental relevante.</p>
              <Link to="/contacto" className="btn-text" style={{ fontSize: '12px' }}>Habla con un experto &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section section--white" id="proceso">
        <div className="container">
          <span className="label-tag">Como trabajamos</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '520px' }}>El mismo proceso<br /><em>para cada certificacion.</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px', marginTop: '52px' }}>
            <div className="anim-fade-up" style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div style={{ width: '56px', height: '56px', background: 'var(--navy)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 300, color: 'var(--gold)' }}>01</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Diagnostico</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Analizamos el estado actual y lo que ya tienes implementado. Identificamos el solapamiento con otros marcos y definimos el alcance optimo.</p>
            </div>
            <div className="anim-fade-up" style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div style={{ width: '56px', height: '56px', background: 'var(--navy)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 300, color: 'var(--gold)' }}>02</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Gap analysis</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Evaluamos cada requisito de la norma frente a tu situacion actual. El resultado es un plan de trabajo priorizado por impacto y plazo.</p>
            </div>
            <div className="anim-fade-up" style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div style={{ width: '56px', height: '56px', background: 'var(--navy)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 300, color: 'var(--gold)' }}>03</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Implementacion</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Implementamos los controles, desarrollamos la documentacion y formamos al equipo. Sin burocracia innecesaria: solo lo que el auditor va a pedir.</p>
            </div>
            <div className="anim-fade-up" style={{ textAlign: 'center', padding: '32px 20px' }}>
              <div style={{ width: '56px', height: '56px', background: 'var(--navy)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 300, color: 'var(--gold)' }}>04</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Certificacion</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Auditoria interna, acompanamiento en la auditoria de certificacion, y garantia de exito por escrito. Si no lo conseguimos, cubrimos la siguiente auditoria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE EXITO */}
      <section className="section section--pearl" id="casos">
        <div className="container">
          <span className="label-tag">Otras ISOs · Casos de exito</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '560px' }}>Lo que dicen nuestros<br /><em>clientes certificados.</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '52px' }}>
            <div className="anim-fade-up" style={{ background: 'var(--navy)', padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
              <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 300, color: '#fff', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>&ldquo;Empezamos con el ENS y preguntamos a Avson si tendria sentido anadir el ISO 9001. En cuatro meses teniamos las dos certificaciones. El mismo equipo, el mismo sistema, y un coste total que era menos de lo que habriamos pagado por el ISO 9001 solo con otra consultora.&rdquo;</blockquote>
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: '#fff', margin: 0 }}>Isabel Vega</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: '4px 0 0', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Directora de Operaciones · Empresa de servicios IT · Sevilla</p>
              </div>
            </div>
            <div className="anim-fade-up" style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
              <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>&ldquo;Necesitabamos el ISO 14001 para entrar en la cadena de suministro de un grupo industrial europeo. Avson lo hizo en paralelo con el ISO 9001 que ya estaba en proceso. Los auditores vinieron una sola vez y certificaron las dos normas en la misma semana. Exactamente lo que necesitabamos.&rdquo;</blockquote>
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: 'var(--navy)', margin: 0 }}>Andres Castillo</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--text-muted)', margin: '4px 0 0', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Gerente · Empresa de componentes industriales · Zaragoza</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}><Link to="/contacto" className="btn-primary">Pide presupuesto &rarr;</Link></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--pearl" id="faq">
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="label-tag">Preguntas frecuentes</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '520px' }}>Certificaciones ISO:<br /><em>tus dudas resueltas.</em></h2>
          <div style={{ marginTop: '48px' }}>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Por que ISO empezar si no tengo ninguna certificacion?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Depende de tu sector y tus clientes. Si eres empresa tecnologica o proveedor de servicios digitales, empieza por el ENS (si vendes a la administracion) o ISO 27001 (si vendes a empresas privadas). Si eres empresa industrial o de servicios, ISO 9001 es el punto de entrada mas habitual porque es la mas exigida en licitaciones y contratos. Si tienes impacto ambiental significativo o compromisos ESG, anade ISO 14001 al mismo tiempo. La consulta gratuita de Avson esta disenada precisamente para ayudarte a tomar esta decision con toda la informacion.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Cuanto ahorro con un sistema de gestion integrado?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>El ahorro depende de la combinacion de normas, pero en general un Sistema de Gestion Integrado bien disenado reduce el coste de implementacion en un 25-35% respecto a implementar las normas de forma independiente, y el coste de mantenimiento anual (auditorias de seguimiento, revisiones por la direccion, actualizacion documental) en un 30-40%. El ahorro mas significativo a largo plazo es el de las auditorias de seguimiento: en lugar de pagar tres auditorias anuales por separado, se hace una sola auditoria integrada.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Puedo certificar ISO 9001 e ISO 14001 al mismo tiempo?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Si, es perfectamente posible y muy habitual. Ambas normas comparten la misma estructura de alto nivel (HLS), lo que significa que la politica del sistema, el analisis de riesgos, el procedimiento de auditoria interna, el control de documentos y la revision por la direccion son comunes a las dos. En la practica, implementar ISO 9001 e ISO 14001 simultaneamente cuesta aproximadamente lo mismo que implementar una sola de ellas por separado, gracias al solapamiento de la estructura documental.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Cuanto tiempo lleva certificarse en ISO 9001?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Con la metodologia de Avson, el proceso completo de implementacion y certificacion de ISO 9001 dura entre 3 y 4 meses. Si ya tienes otros marcos ISO implementados (ISO 27001, ISO 14001, ISO 22301), el plazo puede reducirse a 2-3 meses gracias al solapamiento de la estructura documental. El plazo incluye el gap analysis, la implementacion, la auditoria interna y el acompanamiento en la auditoria de certificacion.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>ISO 14001 es obligatoria?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>ISO 14001 es voluntaria desde el punto de vista legal. Sin embargo, en la practica puede ser obligatoria contractualmente: muchos grandes grupos industriales la exigen a sus proveedores, aparece cada vez mas en pliegos de contratacion publica con criterios de sostenibilidad, y es practicamente indispensable para acceder a determinados programas de financiacion verde o bonos sostenibles. En el contexto de los informes ESG obligatorios para grandes empresas (Directiva CSRD), la certificacion ISO 14001 proporciona evidencias objetivas para los indicadores de gestion ambiental.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Que diferencia hay entre HACCP e ISO 22000?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>HACCP (Analisis de Peligros y Puntos Criticos de Control) es una metodologia de analisis y control de peligros alimentarios. Es obligatoria por ley en la UE para todos los operadores de la cadena alimentaria (Reglamento CE 852/2004). ISO 22000 integra HACCP dentro de un sistema de gestion completo que anade los Programas de Prerrequisitos (buenas practicas higienicas, trazabilidad, gestion de alergenos), el ciclo de mejora continua y el marco de gestion tipico de los estandares ISO. ISO 22000 demuestra que el HACCP no es solo un documento, sino un sistema que funciona y mejora.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>ISO 55001 aplica solo a grandes empresas?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>No. ISO 55001 es escalable a cualquier tamano de organizacion. Es cierto que es mas habitual en empresas grandes de utilities, transporte e infraestructuras, donde el parque de activos fisicos es extenso y la gestion del ciclo de vida tiene un impacto economico enorme. Pero tambien es aplicable y muy util para empresas medianas con maquinaria industrial significativa, equipamiento medico o infraestructura de telecomunicaciones. El beneficio de ISO 55001 es siempre el mismo: optimizar el coste total de propiedad de los activos y reducir las paradas inesperadas.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Puedo anadir ISO 9001 si ya tengo ENS certificado?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Si, y es una de las combinaciones mas eficientes que ofrecemos. El ENS y la ISO 9001 comparten aproximadamente el 35% de la estructura documental (politica del sistema, revision por la direccion, gestion de no conformidades, auditoria interna). Partiendo del trabajo ya hecho para el ENS, la implementacion de ISO 9001 requiere principalmente anadir los procesos especificos de calidad: mapa de procesos, indicadores de satisfaccion del cliente, gestion de la cadena de suministro desde la perspectiva de calidad y el plan de diseno y desarrollo si aplica. El plazo desde el ENS a la certificacion ISO 9001 es habitualmente de 2-3 meses.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label-tag" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>Otras ISOs · Pide presupuesto</span>
          <div className="gold-line" style={{ margin: '20px auto 0' }}></div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,4.5vw,58px)', fontWeight: 300, color: '#fff', lineHeight: 1.15, margin: '32px 0 24px' }}>
            Que certificaciones<br /><em>necesita tu empresa?</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Pide presupuesto. Un consultor senior analiza tu situacion, tus clientes y tus objetivos, y te recomienda el portfolio de certificaciones mas eficiente para tu caso concreto.
          </p>
          <Link to="/contacto" className="btn-primary" style={{ borderColor: 'var(--gold)', color: '#fff', fontSize: '15px', padding: '18px 36px' }}>Solicitar presupuesto sin compromiso &rarr;</Link>
        </div>
      </section>
    </>
  )
}
