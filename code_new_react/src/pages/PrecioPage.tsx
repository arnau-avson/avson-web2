import { Link } from 'react-router-dom'

export default function PrecioPage() {
  return (
    <>
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" style={{ padding: '80px 0 0', background: 'var(--pearl,#F5F3EE)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '8px', fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#888' }}>
            <li><Link to="/" style={{ color: '#888', textDecoration: 'none' }}>Inicio</Link></li>
            <li style={{ color: '#ccc' }}>/</li>
            <li style={{ color: 'var(--navy,#1A2744)', fontWeight: 500 }}>Precio consultoria</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="precio-hero">
        <div className="container" style={{ maxWidth: '860px', padding: '0 24px' }}>
          <p className="precio-hero__eyebrow anim-fade-up">Transparencia de costes</p>
          <h1 className="anim-fade-up">Cuanto cuesta el certificado ENS y la consultoria ISO 27001 en Espana.</h1>
          <p className="precio-hero__intro anim-fade-up">El precio de la consultoria GRC depende de tres factores: el tamano de tu empresa, la categoria del certificado y tu punto de partida. Aqui te damos rangos reales, no vaguedades.</p>
        </div>
      </section>

      {/* FACTORES QUE DETERMINAN EL PRECIO */}
      <section className="precio-factores">
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 className="precio-factores__title anim-fade-up">Factores que determinan el precio</h2>
          <p className="precio-factores__sub anim-fade-up">Tres variables explican el 90% de la variacion de precio entre proyectos similares.</p>
          <div className="precio-factores__grid">

            <div className="precio-factor anim-fade-up">
              <div className="precio-factor__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Tamano de la organizacion</h3>
              <p>El numero de empleados, sistemas en alcance y ubicaciones fisicas determina el volumen de documentacion, controles a implantar y tiempo de auditoria.</p>
            </div>

            <div className="precio-factor anim-fade-up">
              <div className="precio-factor__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Categoria del certificado</h3>
              <p>Para el ENS, la categoria Basica, Media o Alta implica niveles de exigencia muy distintos. A mayor categoria, mayor numero de controles obligatorios y mas documentacion requerida.</p>
            </div>

            <div className="precio-factor anim-fade-up">
              <div className="precio-factor__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3>Punto de partida</h3>
              <p>Una organizacion que ya tiene controles implantados, documentacion de seguridad vigente o una certificacion previa (ENS, ISO 9001, etc.) requiere menos trabajo que una que parte de cero.</p>
            </div>

          </div>
        </div>
      </section>

      {/* TABLA DE RANGOS DE PRECIO */}
      <section className="precio-tabla">
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 className="precio-tabla__title anim-fade-up">Rangos de precio orientativos</h2>
          <p className="precio-tabla__sub anim-fade-up">Precios en euros, IVA no incluido. Consultoria completa hasta obtener el certificado.</p>
          <div className="precio-tabla__wrapper anim-fade-up">
            <table className="precio-table">
              <thead>
                <tr>
                  <th>Servicio</th>
                  <th>Empresa pequena<br /><span style={{ fontWeight: 400, opacity: 0.7 }}>{'<'}50 empleados</span></th>
                  <th>Empresa mediana<br /><span style={{ fontWeight: 400, opacity: 0.7 }}>50-200 empleados</span></th>
                  <th>Empresa grande<br /><span style={{ fontWeight: 400, opacity: 0.7 }}>{'>'}200 empleados</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Certificado ENS Basico</td>
                  <td>Desde <strong>4.000&#8364;</strong></td>
                  <td>Desde <strong>8.000&#8364;</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr>
                  <td>Certificado ENS Medio</td>
                  <td>Desde <strong>8.000&#8364;</strong></td>
                  <td>Desde <strong>15.000&#8364;</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr>
                  <td>Certificado ENS Alto</td>
                  <td>Desde <strong>14.000&#8364;</strong></td>
                  <td>Desde <strong>25.000&#8364;</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr>
                  <td>ISO 27001</td>
                  <td>Desde <strong>6.000&#8364;</strong></td>
                  <td>Desde <strong>12.000&#8364;</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr>
                  <td>ISO 22301</td>
                  <td>Desde <strong>5.000&#8364;</strong></td>
                  <td>Desde <strong>10.000&#8364;</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr className="highlight">
                  <td>Pack ENS + ISO 27001 <span className="tag-pack">Ahorro</span></td>
                  <td>Desde <strong>11.000&#8364;</strong></td>
                  <td>Desde <strong>20.000&#8364;</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
              </tbody>
            </table>
            <p className="precio-table__note">Los precios mostrados son orientativos. El precio final se determina tras el presupuesto sin compromiso, en funcion del alcance, el punto de partida y la categoria especifica del proyecto.</p>
          </div>
        </div>
      </section>

      {/* POR QUE EL PRECIO DE AVSON COMPENSA */}
      <section className="precio-argumentos">
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 className="precio-argumentos__title anim-fade-up">Por que el precio de Avson compensa?</h2>
          <p className="precio-argumentos__sub anim-fade-up">No somos los mas baratos del mercado. Somos los que mejor relacion calidad-precio ofrecen.</p>
          <div className="precio-argumentos__grid">

            <div className="precio-argumento anim-fade-up">
              <div className="precio-argumento__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h3>Garantia de exito por escrito</h3>
              <p>Si la certificadora detecta no conformidades mayores imputables a nuestra consultoria, asumimos los costes de la auditoria de seguimiento y el trabajo de subsanacion sin cargo. Tasa de exito en primera auditoria: 100%.</p>
            </div>

            <div className="precio-argumento anim-fade-up">
              <div className="precio-argumento__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Velocidad: 3-4 meses</h3>
              <p>El mercado estandar tarda entre 6 y 12 meses. Nuestra metodologia acelerada lleva a empresas de tamano medio a la auditoria en 90-120 dias, reduciendo el tiempo en que no tienes el certificado y la incertidumbre en licitaciones.</p>
            </div>

            <div className="precio-argumento anim-fade-up">
              <div className="precio-argumento__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                </svg>
              </div>
              <h3>Certificaciones en cascada</h3>
              <p>El certificado ENS cubre el 65% de los controles de ISO 27001. Si certificas en ambos con Avson, ahorras hasta un 40% frente a contratar dos proyectos independientes. Un trabajo, dos certificados.</p>
            </div>

            <div className="precio-argumento anim-fade-up">
              <div className="precio-argumento__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Relacion vitalicia, no puntual</h3>
              <p>Incluimos revisiones anuales, actualizacion normativa y preparacion de auditorias de seguimiento en el ciclo completo de 3 anos. No desaparecemos tras la primera certificacion.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA BOX */}
      <section className="precio-cta">
        <div className="container" style={{ padding: '0 24px' }}>
          <div className="precio-cta__box anim-fade-up">
            <p className="precio-cta__eyebrow">Sin compromiso</p>
            <h2 className="precio-cta__title">Pide presupuesto -- propuesta personalizada en 48h.</h2>
            <p className="precio-cta__desc">Analizamos tu situacion actual, te decimos que certificaciones necesitas y te entregamos un presupuesto cerrado. Sin sorpresas. Sin letra pequena.</p>
            <Link to="/contacto" className="precio-cta__btn">Solicitar presupuesto sin compromiso &rarr;</Link>
          </div>
        </div>
      </section>

      {/* FAQ PREGUNTAS FRECUENTES */}
      <section className="precio-faq">
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 className="precio-faq__title anim-fade-up">Preguntas frecuentes sobre precios</h2>
          <div className="precio-faq__list">

            <div className="faq-item anim-fade-up">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                <span>El precio incluye la auditoria externa?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p>No. El precio de la consultoria cubre todo el trabajo de implantacion: analisis de brecha, documentacion, formacion, gestion de controles y acompanamiento en auditoria. Los honorarios de la entidad certificadora acreditada (ENAC para ENS, o cualquier certificadora ISO acreditada) se contratan directamente con ellos y varian entre 2.000&#8364; y 6.000&#8364; segun el alcance. En el presupuesto sin compromiso te informamos del coste exacto de certificacion para tu caso especifico.</p>
              </div>
            </div>

            <div className="faq-item anim-fade-up">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                <span>Hay algun coste adicional que no este incluido?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p>El unico coste no incluido en nuestra propuesta son los honorarios del organismo certificador externo y las posibles herramientas tecnologicas de terceros que decidas implantar. Nuestra propuesta es de precio cerrado: sin sorpresas ni presupuestos adicionales por cambios de alcance menores. Si el alcance cambia de forma sustancial durante el proyecto, lo acordamos contigo antes de ejecutar ningun trabajo adicional.</p>
              </div>
            </div>

            <div className="faq-item anim-fade-up">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                <span>La garantia de exito tiene coste adicional?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p>No. La garantia de exito en primera auditoria esta incluida en todos nuestros proyectos sin coste adicional. Si la certificadora detecta no conformidades mayores imputables a nuestra consultoria, asumimos los costes de la auditoria de seguimiento y el trabajo adicional de subsanacion sin cargo al cliente. La garantia se formaliza por escrito en el contrato de servicio.</p>
              </div>
            </div>

            <div className="faq-item anim-fade-up">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                <span>Puedo financiar la consultoria?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p>Si. Ofrecemos planes de pago fraccionado en hasta 6 mensualidades sin intereses para proyectos superiores a 8.000&#8364;. Tambien informamos sobre ayudas y subvenciones disponibles -- Kit Digital, fondos Next Generation EU, convocatorias INCIBE -- que pueden cubrir parte del coste de la consultoria en funcion del perfil de tu empresa. Preguntanos en el presupuesto sin compromiso y te asesoramos sobre las opciones disponibles para tu caso.</p>
              </div>
            </div>

            <div className="faq-item anim-fade-up">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                <span>Cuanto ahorro si ya tengo el ENS y quiero el ISO 27001?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p>El certificado ENS cubre aproximadamente el 65% de los controles de ISO 27001. Si ya estas certificado en ENS Medio o Alto, el proyecto de certificacion ISO 27001 puede reducirse hasta un 50% respecto al precio estandar, ya que gran parte de la documentacion, analisis de riesgos y controles ya estan implantados y auditados. En el presupuesto sin compromiso te damos un presupuesto exacto de la ampliacion basado en el estado actual de tu sistema de gestion.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
