import { Link } from 'react-router-dom'
import FaqAccordion from '../components/FaqAccordion'

const faqItems = [
  {
    question: '¿El precio incluye la auditoria externa?',
    answer: (
      <p>No. El precio de la consultoria cubre todo el trabajo de implantacion: analisis de brecha, documentacion, formacion, gestion de controles y acompanamiento en auditoria. Los honorarios de la entidad certificadora acreditada (ENAC para ENS, o cualquier certificadora ISO acreditada) se contratan directamente con ellos y varian entre 2.000\u20ac y 6.000\u20ac segun el alcance. En el diagnostico gratuito te informamos del coste exacto de certificacion para tu caso especifico.</p>
    ),
  },
  {
    question: '\u00bfHay algun coste adicional que no este incluido?',
    answer: (
      <p>El unico coste no incluido en nuestra propuesta son los honorarios del organismo certificador externo y las posibles herramientas tecnologicas de terceros que decidas implantar. Nuestra propuesta es de precio cerrado: sin sorpresas ni presupuestos adicionales por cambios de alcance menores. Si el alcance cambia de forma sustancial durante el proyecto, lo acordamos contigo antes de ejecutar ningun trabajo adicional.</p>
    ),
  },
  {
    question: '\u00bfLa garantia de exito tiene coste adicional?',
    answer: (
      <p>No. La garantia de exito en primera auditoria esta incluida en todos nuestros proyectos sin coste adicional. Si la certificadora detecta no conformidades mayores imputables a nuestra consultoria, asumimos los costes de la auditoria de seguimiento y el trabajo adicional de subsanacion sin cargo al cliente. La garantia se formaliza por escrito en el contrato de servicio.</p>
    ),
  },
  {
    question: '\u00bfPuedo financiar la consultoria?',
    answer: (
      <p>Si. Ofrecemos planes de pago fraccionado en hasta 6 mensualidades sin intereses para proyectos superiores a 8.000\u20ac. Tambien informamos sobre ayudas y subvenciones disponibles — Kit Digital, fondos Next Generation EU, convocatorias INCIBE — que pueden cubrir parte del coste de la consultoria en funcion del perfil de tu empresa. Preguntanos en el diagnostico gratuito y te asesoramos sobre las opciones disponibles para tu caso.</p>
    ),
  },
  {
    question: '\u00bfCuanto ahorro si ya tengo el ENS y quiero el ISO 27001?',
    answer: (
      <p>El certificado ENS cubre aproximadamente el 65% de los controles de ISO 27001. Si ya estas certificado en ENS Medio o Alto, el proyecto de certificacion ISO 27001 puede reducirse hasta un 50% respecto al precio estandar, ya que gran parte de la documentacion, analisis de riesgos y controles ya estan implantados y auditados. En el diagnostico gratuito te damos un presupuesto exacto de la ampliacion basado en el estado actual de tu sistema de gestion.</p>
    ),
  },
]

export default function PrecioPage() {
  return (
    <>
      <style>{`
        /* ===== PRECIO PAGE SPECIFIC STYLES ===== */
        .precio-hero {
          padding: 140px 0 80px;
          background: var(--pearl, #F5F3EE);
          text-align: center;
        }
        .precio-hero__eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold, #C9A84C);
          margin-bottom: 20px;
        }
        .precio-hero h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          font-weight: 600;
          color: var(--navy, #1A2744);
          max-width: 820px;
          margin: 0 auto 24px;
          line-height: 1.2;
        }
        .precio-hero__intro {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          color: #4a4a4a;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .precio-factores {
          padding: 80px 0;
          background: #fff;
        }
        .precio-factores__title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 600;
          color: var(--navy, #1A2744);
          text-align: center;
          margin: 0 0 12px;
        }
        .precio-factores__sub {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #6b6b6b;
          text-align: center;
          margin: 0 0 52px;
        }
        .precio-factores__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
          max-width: 960px;
          margin: 0 auto;
        }
        .precio-factor {
          text-align: center;
          padding: 40px 28px;
          border: 1px solid var(--border, #E2DDD6);
          border-radius: 4px;
          background: var(--pearl, #F5F3EE);
        }
        .precio-factor__icon {
          width: 56px;
          height: 56px;
          background: rgba(26,39,68,0.07);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .precio-factor h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--navy, #1A2744);
          margin: 0 0 10px;
        }
        .precio-factor p {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #5a5a5a;
          line-height: 1.65;
          margin: 0;
        }
        .precio-tabla {
          padding: 80px 0;
          background: var(--pearl, #F5F3EE);
        }
        .precio-tabla__title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 600;
          color: var(--navy, #1A2744);
          text-align: center;
          margin: 0 0 12px;
        }
        .precio-tabla__sub {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #6b6b6b;
          text-align: center;
          margin: 0 0 48px;
        }
        .precio-tabla__wrapper {
          max-width: 960px;
          margin: 0 auto;
          overflow-x: auto;
        }
        .precio-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Inter', sans-serif;
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(26,39,68,0.07);
        }
        .precio-table thead tr {
          background: var(--navy, #1A2744);
          color: #fff;
        }
        .precio-table thead th {
          padding: 18px 20px;
          text-align: left;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .precio-table thead th:first-child {
          color: rgba(255,255,255,0.7);
        }
        .precio-table thead th:not(:first-child) {
          text-align: center;
          color: var(--gold, #C9A84C);
        }
        .precio-table tbody tr {
          border-bottom: 1px solid var(--border, #E2DDD6);
          transition: background 0.15s;
        }
        .precio-table tbody tr:last-child {
          border-bottom: none;
        }
        .precio-table tbody tr:hover {
          background: rgba(201,168,76,0.05);
        }
        .precio-table tbody tr.highlight {
          background: rgba(26,39,68,0.04);
        }
        .precio-table td {
          padding: 16px 20px;
          font-size: 0.9rem;
          color: #333;
        }
        .precio-table td:first-child {
          font-weight: 500;
          color: var(--navy, #1A2744);
        }
        .precio-table td:not(:first-child) {
          text-align: center;
          color: #1a1a1a;
        }
        .precio-table td .consultar {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--gold, #C9A84C);
          cursor: pointer;
          text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.4);
        }
        .precio-table td .tag-pack {
          display: inline-block;
          background: var(--gold, #C9A84C);
          color: var(--navy, #1A2744);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 2px;
          margin-left: 6px;
          vertical-align: middle;
        }
        .precio-table__note {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #888;
          text-align: center;
          margin-top: 20px;
          font-style: italic;
        }
        .precio-argumentos {
          padding: 80px 0;
          background: var(--navy, #1A2744);
        }
        .precio-argumentos__title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 600;
          color: #fff;
          text-align: center;
          margin: 0 0 12px;
        }
        .precio-argumentos__sub {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.65);
          text-align: center;
          margin: 0 0 52px;
        }
        .precio-argumentos__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 28px;
          max-width: 960px;
          margin: 0 auto;
        }
        .precio-argumento {
          padding: 36px 24px;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
        }
        .precio-argumento__icon {
          width: 44px;
          height: 44px;
          background: rgba(201,168,76,0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .precio-argumento h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--gold, #C9A84C);
          margin: 0 0 10px;
        }
        .precio-argumento p {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.78);
          line-height: 1.65;
          margin: 0;
        }
        .precio-cta {
          padding: 80px 0;
          background: #fff;
        }
        .precio-cta__box {
          max-width: 680px;
          margin: 0 auto;
          background: var(--navy, #1A2744);
          border-radius: 4px;
          padding: 56px 48px;
          text-align: center;
        }
        .precio-cta__eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold, #C9A84C);
          margin-bottom: 16px;
        }
        .precio-cta__title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 600;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1.25;
        }
        .precio-cta__desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          margin: 0 0 36px;
          line-height: 1.65;
        }
        .precio-cta__btn {
          display: inline-block;
          background: var(--gold, #C9A84C);
          color: var(--navy, #1A2744);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 16px 36px;
          border-radius: 2px;
          transition: opacity 0.2s, transform 0.2s;
        }
        .precio-cta__btn:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .precio-faq {
          padding: 80px 0;
          background: var(--pearl, #F5F3EE);
        }
        .precio-faq__title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 600;
          color: var(--navy, #1A2744);
          text-align: center;
          margin: 0 0 48px;
        }
        @media (max-width: 640px) {
          .precio-hero { padding: 120px 24px 60px; }
          .precio-factores { padding: 60px 24px; }
          .precio-tabla { padding: 60px 24px; }
          .precio-argumentos { padding: 60px 24px; }
          .precio-cta { padding: 60px 24px; }
          .precio-cta__box { padding: 40px 24px; }
          .precio-faq { padding: 60px 24px; }
        }
        @media (max-width: 760px) {
          .precio-table th, .precio-table td { padding: 12px 12px; font-size: 0.82rem; }
        }
      `}</style>

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
                  <th>Empresa pequena<br /><span style={{ fontWeight: 400, opacity: 0.7 }}>&lt;50 empleados</span></th>
                  <th>Empresa mediana<br /><span style={{ fontWeight: 400, opacity: 0.7 }}>50-200 empleados</span></th>
                  <th>Empresa grande<br /><span style={{ fontWeight: 400, opacity: 0.7 }}>&gt;200 empleados</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Certificado ENS Basico</td>
                  <td>Desde <strong>4.000\u20ac</strong></td>
                  <td>Desde <strong>8.000\u20ac</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr>
                  <td>Certificado ENS Medio</td>
                  <td>Desde <strong>8.000\u20ac</strong></td>
                  <td>Desde <strong>15.000\u20ac</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr>
                  <td>Certificado ENS Alto</td>
                  <td>Desde <strong>14.000\u20ac</strong></td>
                  <td>Desde <strong>25.000\u20ac</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr>
                  <td>ISO 27001</td>
                  <td>Desde <strong>6.000\u20ac</strong></td>
                  <td>Desde <strong>12.000\u20ac</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr>
                  <td>ISO 22301</td>
                  <td>Desde <strong>5.000\u20ac</strong></td>
                  <td>Desde <strong>10.000\u20ac</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
                <tr className="highlight">
                  <td>Pack ENS + ISO 27001 <span className="tag-pack">Ahorro</span></td>
                  <td>Desde <strong>11.000\u20ac</strong></td>
                  <td>Desde <strong>20.000\u20ac</strong></td>
                  <td><Link to="/contacto" className="consultar">Consultar</Link></td>
                </tr>
              </tbody>
            </table>
            <p className="precio-table__note">Los precios mostrados son orientativos. El precio final se determina tras el diagnostico gratuito, en funcion del alcance, el punto de partida y la categoria especifica del proyecto.</p>
          </div>
        </div>
      </section>

      {/* POR QUE EL PRECIO DE AVSON COMPENSA */}
      <section className="precio-argumentos">
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 className="precio-argumentos__title anim-fade-up">\u00bfPor que el precio de Avson compensa?</h2>
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
            <h2 className="precio-cta__title">Diagnostico gratuito — propuesta personalizada en 48h.</h2>
            <p className="precio-cta__desc">Analizamos tu situacion actual, te decimos que certificaciones necesitas y te entregamos un presupuesto cerrado. Sin sorpresas. Sin letra pequena.</p>
            <Link to="/contacto" className="precio-cta__btn">Solicitar diagnostico gratuito &rarr;</Link>
          </div>
        </div>
      </section>

      {/* FAQ PREGUNTAS FRECUENTES */}
      <section className="precio-faq">
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 className="precio-faq__title anim-fade-up">Preguntas frecuentes sobre precios</h2>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  )
}
