import { FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function EnsBasicoPage() {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = '/gracias'
  }

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link to="/">Inicio</Link>
            <span>/</span>
            <Link to="/ens">ENS</Link>
            <span>/</span>
            <span style={{ color: 'var(--navy)' }}>ENS Basico</span>
          </div>
          <div style={{ maxWidth: '780px' }}>
            <span className="label-tag">Esquema Nacional de Seguridad · Categoria Basica · RD 311/2022</span>
            <div className="gold-line"></div>
            <h1 className="display-title">Certificado ENS Basico: que es, quien lo necesita<br /><em>y como obtenerlo.</em></h1>
            <div className="guarantee-seal" style={{ marginBottom: '24px' }}>
              <span className="guarantee-seal__icon">&#10022;</span>
              <span className="guarantee-seal__text">Garantia de exito<br />al 100% por escrito</span>
            </div>
            <p className="body-large mt-32" style={{ maxWidth: '620px' }}>La categoria Basica del ENS es la puerta de entrada al mercado de contratacion publica. En Avson GRC te acompanamos en todo el proceso, desde el diagnostico hasta la emision del certificado, en toda Espana, en 3-4 meses.</p>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: 0, marginTop: '32px', marginBottom: '16px', maxWidth: '480px', boxShadow: '0 4px 24px rgba(26,39,68,0.12)', borderRadius: '4px' }}>
              <input type="email" name="email" required placeholder="tu@empresa.com"
                style={{ flex: 1, padding: '16px 20px', border: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--navy)', background: 'var(--white)', outline: 'none', minWidth: 0 }} />
              <button type="submit"
                style={{ background: 'var(--gold)', color: 'var(--navy)', border: 'none', padding: '16px 24px', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                Diagnostico ENS gratis &rarr;
              </button>
            </form>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--navy-60)', marginTop: 0, marginBottom: '24px' }}>Sin compromiso · Respuesta en 24h · Servicio en toda Espana</p>
            <div className="flex gap-24 mt-16" style={{ flexWrap: 'wrap' }}>
              <Link to="/contacto" className="btn-primary">Habla con un experto &rarr;</Link>
              <Link to="/ens" className="btn-text">Ver todas las categorias ENS &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUE ES ENS BASICO */}
      <section className="section section--white deco-section">
        <div style={{ position: 'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%)', fontFamily: "'Cormorant Garamond',serif", fontSize: '280px', fontWeight: 700, color: 'var(--navy)', opacity: 0.025, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>B</div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-7-5">
            <div className="anim-fade-up">
              <span className="label-tag">Que es el ENS Basico</span>
              <div className="gold-line"></div>
              <h2 className="section-title">La categoria Basica del ENS:<br />para sistemas con impacto limitado.</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>La categoria Basica del Esquema Nacional de Seguridad aplica cuando un incidente de seguridad en los sistemas TIC de una organizacion afectaria de forma <strong>limitada</strong> a la misma, sin consecuencias graves para los ciudadanos ni para el funcionamiento ordinario de la Administracion Publica. Es, por definicion, la categoria de menor impacto potencial de las tres que contempla el RD 311/2022.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>La formula de categorizacion del RD 311/2022 se basa en la valoracion del impacto de un incidente de seguridad sobre cada una de las cinco dimensiones: <strong>confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad</strong>. Si el impacto mas alto que se podria producir es "Bajo", el sistema se categoriza como Basico. Si es "Medio", la categoria sera Media; si es "Alto", Alta. Esta valoracion determina de forma objetiva que controles son obligatorios para cada sistema.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>Esta valoracion no es arbitraria: debe realizarse mediante un analisis de riesgos formal, habitualmente siguiendo la metodologia MAGERIT, y documentarse en la Politica de Seguridad de la organizacion. En la practica, la categoria Basica es la mas comun entre los proveedores de servicios digitales que trabajan con administraciones locales, municipios pequenos y medianos, y organismos de menor criticidad a lo largo de toda la geografia espanola.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)' }}>Una misma empresa puede tener sistemas de categoria Basica para ciertos contratos y de categoria Media para otros. La categoria la determina el sistema que se pone en el alcance de la certificacion, no la empresa en si. Por eso el primer paso siempre es el analisis del alcance, que en Avson realizamos de forma gratuita y sin compromiso.</p>
            </div>
            <div className="anim-fade-up delay-2">
              <div className="legal-box" style={{ marginBottom: '24px' }}>
                <div className="legal-box__label">Marco legal</div>
                <div className="legal-box__text">Real Decreto 311/2022, de 3 de mayo. Articulos 40-43 y Anexo I (categorizacion) y Anexo II (medidas de seguridad).</div>
              </div>
              <div className="legal-box" style={{ marginBottom: '24px' }}>
                <div className="legal-box__label">Dimensiones de seguridad</div>
                <div className="legal-box__text">Confidencialidad · Integridad · Disponibilidad · Autenticidad · Trazabilidad. El nivel mas alto en cualquiera de ellas determina la categoria del sistema.</div>
              </div>
              <div className="legal-box">
                <div className="legal-box__label">Impacto en categoria Basica</div>
                <div className="legal-box__text">El maximo impacto potencial de un incidente en cualquiera de las dimensiones no supera el nivel "Bajo" segun la escala del RD 311/2022.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUIEN LO NECESITA */}
      <section className="section section--pearl">
        <div className="container">
          <span className="label-tag">Te afecta?</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Quien necesita el certificado ENS Basico?</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', maxWidth: '720px', marginBottom: '48px' }}>El ENS Basico es la via de entrada al mercado publico para cientos de empresas TIC en Espana. Avson presta servicio de consultoria ENS en toda Espana, tanto de forma presencial como remota, cubriendo desde grandes ciudades hasta organismos de cualquier comunidad autonoma. Estos son los perfiles mas habituales que se certifican en categoria Basica:</p>
          <div className="grid-3" style={{ gap: '32px' }}>
            <div style={{ border: '1px solid var(--border)', padding: '32px 28px', background: 'var(--white)' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>&#128187;</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Software de gestion municipal</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Proveedores de aplicaciones de gestion de padron, licencias, tributos locales o portales de transparencia para ayuntamientos. Sus sistemas gestionan datos relevantes pero con un impacto potencial limitado sobre el servicio publico.</p>
            </div>
            <div style={{ border: '1px solid var(--border)', padding: '32px 28px', background: 'var(--white)' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>&#128225;</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Comunicaciones para AAPP locales</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Empresas que proveen servicios de conectividad, centralitas IP, videoconferencia o gestion de redes para concejos, mancomunidades y pequenos organismos locales. Infraestructuras cuyo fallo no comprometeria servicios esenciales.</p>
            </div>
            <div style={{ border: '1px solid var(--border)', padding: '32px 28px', background: 'var(--white)' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>&#9729;</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Cloud para organismos locales</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Proveedores de servicios en la nube (IaaS, SaaS, PaaS) para entidades locales con volumenes de datos bajos o sistemas administrativos de soporte, donde la disponibilidad o confidencialidad tiene impacto limitado.</p>
            </div>
            <div style={{ border: '1px solid var(--border)', padding: '32px 28px', background: 'var(--white)' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>&#128295;</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Consultoras TIC de diputaciones</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Empresas de consultoria tecnologica que prestan servicios de soporte, desarrollo o mantenimiento de sistemas para diputaciones provinciales, consorcios y entidades supramunicipales de caracter no critico.</p>
            </div>
            <div style={{ border: '1px solid var(--border)', padding: '32px 28px', background: 'var(--white)' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>&#128203;</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>Gestion documental y firma digital</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Proveedores de sistemas de gestion de expedientes, archivo electronico o firma digital para administraciones de menor escala, donde el volumen de documentacion y su criticidad son bajos o moderados.</p>
            </div>
            <div style={{ border: '1px solid var(--border)', padding: '32px 28px', background: 'var(--white)' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>&#127979;</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontWeight: 600, color: 'var(--navy)', marginBottom: '12px' }}>EdTech y plataformas educativas</div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Empresas que proveen plataformas LMS, herramientas de gestion escolar o soluciones tecnologicas para centros de educacion publica, donde los datos gestionados son relevantes pero el impacto de un incidente seria limitado.</p>
            </div>
          </div>
          <div className="cta-inline-box" style={{ marginTop: '48px' }}>
            <span className="cta-inline-box__text">"No sabes si necesitas ENS Basico o Medio? El presupuesto sin compromiso de Avson te lo dice en 24h."</span>
            <Link to="/contacto" className="btn-primary">Habla con un experto &rarr;</Link>
          </div>
        </div>
      </section>

      {/* CONTROLES ENS BASICO */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-7-5">
            <div className="anim-fade-up">
              <span className="label-tag">Controles y medidas</span>
              <div className="gold-line"></div>
              <h2 className="section-title">Los controles del ENS Basico:<br />que tienes que implementar.</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>El ENS Basico exige la aplicacion de aproximadamente <strong>45 medidas de seguridad</strong> del Anexo II del RD 311/2022. Estas medidas cubren las cinco dimensiones de seguridad --confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad-- y se organizan en tres grandes marcos: medidas del marco organizativo (org), del marco operacional (op) y medidas de proteccion (mp).</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>En el marco organizativo, la categoria Basica requiere tener definida una Politica de Seguridad documentada y aprobada, procedimientos basicos de gestion de riesgos y normativas de uso aceptable de los sistemas. En el marco operacional, se exigen controles de planificacion de la seguridad, control de acceso, gestion basica de configuraciones, continuidad del servicio y procedimientos de gestion de incidentes.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>La diferencia respecto a las categorias superiores no reside solo en el numero de controles, sino en su nivel de exigencia. En categoria Basica, la autenticacion puede resolverse con usuario y contrasena robusta, mientras que en Media se exige doble factor. Los registros de actividad deben conservarse durante periodos mas cortos y con menos detalle que en categorias superiores.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)' }}>En Avson utilizamos herramientas especializadas de IA para acelerar la implementacion documental --Politica de Seguridad, Plan de Tratamiento de Riesgos, procedimientos operativos-- y el analisis de riesgos MAGERIT. Esto nos permite reducir los plazos de implementacion sin sacrificar la calidad ni la solidez de la documentacion ante la auditoria.</p>
            </div>
            <div className="anim-fade-up delay-2">
              <div style={{ background: 'var(--navy)', padding: '40px 32px' }}>
                <span className="label-tag">Areas de control ENS Basico</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                  <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>Marco organizativo (org)</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>Politica de seguridad, normativa de uso, procedimientos y roles de seguridad definidos.</div>
                  </div>
                  <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>Marco operacional (op)</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>Planificacion, control de acceso, gestion de configuraciones, continuidad y gestion de incidentes.</div>
                  </div>
                  <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>Medidas de proteccion (mp)</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>Instalaciones, personal, equipamiento, comunicaciones, soportes, aplicaciones y servicios.</div>
                  </div>
                  <div style={{ borderLeft: '2px solid rgba(201,168,76,0.4)', paddingLeft: '20px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '4px' }}>~45 medidas aplicables</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>Subconjunto del total de 73 controles del Anexo II. Nivel de exigencia inferior a Medio y Alto.</div>
                  </div>
                </div>
                <Link to="/contacto" className="btn-primary btn-primary--white" style={{ marginTop: '32px' }}>Analizar mi caso &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DECLARACION VS CERTIFICADO */}
      <section className="section section--pearl">
        <div className="container">
          <span className="label-tag">Declaracion de Conformidad vs. Certificado</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Declaracion de Conformidad o certificado ENS Basico?<br /><em>La diferencia importa.</em></h2>
          <div className="grid-7-5" style={{ marginTop: '48px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '24px' }}>El RD 311/2022 introduce una particularidad importante para la categoria Basica: la posibilidad de acreditar el cumplimiento mediante una <strong>Declaracion de Conformidad</strong>, es decir, una auto-declaracion firmada por la propia organizacion sin necesidad de auditoria externa por entidad acreditada por ENAC. Esta opcion no existe para las categorias Media y Alta, donde el certificado emitido por entidad auditora es siempre obligatorio.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '24px' }}>La Declaracion de Conformidad puede parecer mas economica y rapida en apariencia. Sin embargo, en la practica presenta limitaciones significativas que conviene conocer antes de optar por ella:</p>
              <div className="checklist mt-16">
                <div className="checklist__item">La mayoria de pliegos de contratacion publica exigen explicitamente el <strong>certificado ENS</strong> emitido por entidad auditora acreditada por ENAC, aunque el sistema sea de categoria Basica. En esos casos, la Declaracion de Conformidad no es aceptada.</div>
                <div className="checklist__item">La Declaracion de Conformidad tiene menor valor juridico y de mercado: no demuestra la intervencion de un tercero independiente que valide el cumplimiento efectivo de los controles.</div>
                <div className="checklist__item">En licitaciones competitivas, disponer del certificado ENS frente a una mera declaracion puede suponer una ventaja en la puntuacion tecnica del sobre de criterios valorables.</div>
                <div className="checklist__item">Si en el futuro amplias el alcance de tu certificacion o tus sistemas aumentan de categoria, deberas transitar al certificado de todas formas. Es mejor partir directamente de la base correcta.</div>
              </div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginTop: '24px' }}>En Avson analizamos el pliego concreto de cada cliente antes de recomendar una u otra opcion. Como norma general, si hay posibilidad de que los pliegos a los que se quiera optar exijan el certificado, recomendamos ir directamente a la certificacion completa.</p>
            </div>
            <div>
              <div style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '36px 32px', marginBottom: '24px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 600, color: 'var(--navy)', marginBottom: '20px' }}>Declaracion de Conformidad</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#27AE60', fontSize: '16px', flexShrink: 0 }}>&#10003;</span><span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Mas rapida y economica inicialmente</span></div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#27AE60', fontSize: '16px', flexShrink: 0 }}>&#10003;</span><span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>No requiere auditoria externa ENAC</span></div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#C0392B', fontSize: '16px', flexShrink: 0 }}>&#10007;</span><span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>No aceptada en la mayoria de pliegos relevantes</span></div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#C0392B', fontSize: '16px', flexShrink: 0 }}>&#10007;</span><span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Menor credibilidad ante la Administracion</span></div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#C0392B', fontSize: '16px', flexShrink: 0 }}>&#10007;</span><span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Sin validacion de tercero independiente</span></div>
                </div>
              </div>
              <div style={{ background: 'var(--navy)', padding: '36px 32px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 600, color: 'var(--white)', marginBottom: '20px' }}>Certificado ENS Basico</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: 'var(--gold)', fontSize: '16px', flexShrink: 0 }}>&#10003;</span><span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Aceptado en todos los pliegos ENS Basico</span></div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: 'var(--gold)', fontSize: '16px', flexShrink: 0 }}>&#10003;</span><span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Auditoria por entidad acreditada por ENAC</span></div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: 'var(--gold)', fontSize: '16px', flexShrink: 0 }}>&#10003;</span><span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Maxima credibilidad ante la Administracion</span></div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: 'var(--gold)', fontSize: '16px', flexShrink: 0 }}>&#10003;</span><span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Validez bienal reconocida en toda Espana</span></div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: 'var(--gold)', fontSize: '16px', flexShrink: 0 }}>&#10003;</span><span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Base para ENS Medio, ISO 27001 y NIS2</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="section section--white" id="proceso">
        <div className="container">
          <span className="label-tag">Nuestro proceso</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Como obtenemos tu certificado ENS Basico<br /><em>en 3-4 meses con garantia.</em></h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', maxWidth: '680px', marginBottom: '48px' }}>El proceso de certificacion ENS Basico con Avson sigue una metodologia probada con mas de 80 proyectos completados. Trabajamos en toda Espana, de forma presencial o remota segun tu preferencia, con el mismo nivel de excelencia y la misma garantia de exito por escrito en todos los casos.</p>
          <div className="timeline mt-32">
            <div className="timeline__step anim-fade-up">
              <div className="timeline__number">01</div>
              <div className="timeline__week">Semanas 1-2</div>
              <div className="timeline__title">Diagnostico y analisis de alcance</div>
              <div className="timeline__desc">Analizamos tu situacion actual: sistemas en alcance, controles existentes, nivel de madurez y categoria ENS aplicable. Entregamos un GAP analysis detallado con las brechas identificadas y un plan de trabajo personalizado. Completamente gratuito y sin compromiso.</div>
            </div>
            <div className="timeline__step anim-fade-up delay-1">
              <div className="timeline__number">02</div>
              <div className="timeline__week">Semanas 3-10</div>
              <div className="timeline__title">Implementacion de controles</div>
              <div className="timeline__desc">Implementamos las ~45 medidas ENS Basico: documentacion del SGSI, analisis de riesgos MAGERIT, procedimientos operativos, controles tecnicos y evidencias requeridas. Usamos herramientas de IA especializadas para acelerar la documentacion sin sacrificar calidad.</div>
            </div>
            <div className="timeline__step anim-fade-up delay-2">
              <div className="timeline__number">03</div>
              <div className="timeline__week">Semanas 11-12</div>
              <div className="timeline__title">Auditoria interna y preauditoria</div>
              <div className="timeline__desc">Realizamos una auditoria interna completa para detectar y corregir cualquier no conformidad antes de la auditoria externa. Te preparamos para cada sesion con la entidad auditora acreditada por ENAC, anticipando las preguntas y validando las evidencias.</div>
            </div>
            <div className="timeline__step anim-fade-up delay-3">
              <div className="timeline__number">04</div>
              <div className="timeline__week">Semanas 13-16</div>
              <div className="timeline__title">Auditoria de certificacion ENAC</div>
              <div className="timeline__desc">Coordinamos todo el proceso con la entidad auditora acreditada por ENAC. Respondemos a los informes de no conformidades. Tasa de exito en primera convocatoria: 100%. Garantia de exito por escrito incluida en todos nuestros proyectos.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTIDADES CERTIFICACION */}
      <section className="section section--pearl">
        <div className="container">
          <div className="grid-7-5">
            <div className="anim-fade-up">
              <span className="label-tag">Entidades acreditadas por ENAC</span>
              <div className="gold-line"></div>
              <h2 className="section-title">Quien puede auditar el ENS Basico?</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>La auditoria de certificacion ENS debe realizarla una <strong>entidad de certificacion acreditada por ENAC</strong> (Entidad Nacional de Acreditacion) para el esquema ENS, o auditores habilitados con la cualificacion tecnica requerida por el CCN (Centro Criptologico Nacional). Esta acreditacion es el requisito que da validez juridica al certificado ante los organismos publicos en toda Espana.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>En Espana operan varias entidades de certificacion acreditadas por ENAC para auditar el ENS: <strong>Bureau Veritas, SGS, AENOR, Applus+ y BSI</strong> son las mas conocidas, aunque existen otras entidades especializadas con acreditacion valida.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '20px' }}>En Avson gestionamos integramente la relacion con la entidad auditora: seleccionamos la entidad mas adecuada para tu perfil, coordinamos todas las sesiones de auditoria, respondemos a los informes de no conformidades y hacemos seguimiento hasta la emision del certificado definitivo.</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)' }}>Esta coordinacion integral es uno de los valores diferenciadores de Avson. El resultado es un proceso menos estresante, mas rapido y con mayor tasa de exito en primera convocatoria que cuando la empresa gestiona la auditoria de forma independiente.</p>
            </div>
            <div className="anim-fade-up delay-2">
              <div style={{ background: 'var(--navy)', padding: '40px 32px' }}>
                <span className="label-tag">Entidades auditoras habituales</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
                  {['Bureau Veritas', 'SGS', 'AENOR', 'Applus+ / BSI'].map((name) => (
                    <div key={name} style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ fontSize: '20px' }}>&#127970;</div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>{name}</div>
                        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Acreditada ENAC · ENS todas las categorias</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '20px', lineHeight: 1.6 }}>Avson coordina la relacion con la entidad auditora. Tu no tienes que gestionarla directamente.</p>
                <Link to="/contacto" className="btn-primary btn-primary--white" style={{ marginTop: '24px' }}>Solicitar propuesta &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COSTE */}
      <section className="section section--white">
        <div className="container">
          <span className="label-tag">Inversion y ROI</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Cuanto cuesta el certificado ENS Basico?<br /><em>Menos de lo que pierdes sin el.</em></h2>
          <div className="grid-7-5" style={{ marginTop: '48px' }}>
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '24px' }}>El coste total de la certificacion ENS Basico varia segun el tamano de la organizacion, la complejidad de los sistemas en alcance, el numero de ubicaciones y el nivel de madurez de seguridad de partida.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div style={{ border: '1px solid var(--border)', padding: '24px 28px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center', minWidth: '80px' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '32px', fontWeight: 700, color: 'var(--navy)' }}>S</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hasta 10 empleados</div>
                  </div>
                  <div><p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Empresas pequenas con alcance reducido y pocos sistemas. Proceso mas agil y documentacion mas ligera.</p></div>
                </div>
                <div style={{ border: '1px solid var(--gold)', padding: '24px 28px', display: 'flex', gap: '24px', alignItems: 'center', background: 'rgba(201,168,76,0.03)' }}>
                  <div style={{ textAlign: 'center', minWidth: '80px' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '32px', fontWeight: 700, color: 'var(--navy)' }}>M</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>10-50 empleados</div>
                  </div>
                  <div><p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>El rango mas habitual entre nuestros clientes. La inversion se recupera tipicamente con el primer contrato publico obtenido tras la certificacion.</p></div>
                </div>
                <div style={{ border: '1px solid var(--border)', padding: '24px 28px', display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center', minWidth: '80px' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '32px', fontWeight: 700, color: 'var(--navy)' }}>L</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>+50 empleados</div>
                  </div>
                  <div><p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Mayor complejidad de alcance. Si ya existen medidas de seguridad implementadas, el coste de consultoria se reduce. Puede haber sinergias con ISO 27001 si se trabaja en paralelo.</p></div>
                </div>
              </div>
              <div className="urgency-box">
                <p className="urgency-box__text">Cada semana sin el certificado ENS Basico es una licitacion a la que no puedes presentarte. La inversion en la certificacion no es un coste: es el precio de acceder al mercado publico. Solicita tu presupuesto sin compromiso y recibe propuesta personalizada en 48 horas.</p>
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--navy)', padding: '40px 32px', position: 'sticky', top: '100px' }}>
                <span className="label-tag">Pide presupuesto</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '26px', fontWeight: 500, color: 'var(--white)', lineHeight: 1.3, margin: '16px 0' }}>Propuesta personalizada<br />en 48 horas</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: '28px' }}>Sin compromiso. Solo informacion util sobre tu proyecto ENS Basico. Servicio en toda Espana, presencial o remoto.</p>
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: 0, marginBottom: '16px', maxWidth: '480px', boxShadow: '0 4px 24px rgba(26,39,68,0.08)' }}>
                  <input type="email" name="email" required placeholder="tu@empresa.com"
                    style={{ flex: 1, padding: '16px 20px', border: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--navy)', background: 'var(--white)', outline: 'none', minWidth: 0 }} />
                  <button type="submit"
                    style={{ background: 'var(--gold)', color: 'var(--navy)', border: 'none', padding: '16px 24px', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Solicitar &rarr;
                  </button>
                </form>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>hello@avson.eu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--pearl" id="faq">
        <div className="container">
          <span className="label-tag">Preguntas frecuentes</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Preguntas frecuentes sobre<br />el certificado ENS Basico.</h2>
          <div className="faq-list mt-48" style={{ maxWidth: '820px' }}>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Es suficiente la Declaracion de Conformidad o necesito el certificado ENS Basico?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer">Depende del pliego concreto al que quieras optar. El RD 311/2022 permite la Declaracion de Conformidad para la categoria Basica como alternativa al certificado formal, pero la gran mayoria de organismos publicos exigen expresamente el certificado emitido por entidad acreditada por ENAC, especialmente en contratos de cierta cuantia o con componente competitivo. En Avson siempre analizamos el pliego especifico antes de recomendar, aunque como norma general recomendamos ir directamente al certificado: la diferencia de coste es pequena y la diferencia en valor de mercado es enorme.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>El ENS Basico caduca?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer">Si. El certificado ENS Basico tiene una vigencia de dos anos desde su emision. Pasado ese plazo, es necesario someterse a una nueva auditoria de renovacion para mantener la certificacion vigente. En Avson monitorizamos proactivamente la caducidad de tu certificado y te avisamos con seis meses de antelacion para iniciar el proceso de renovacion con tiempo suficiente.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Cuantos controles tiene el ENS Basico?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer">El ENS Basico requiere la implementacion de aproximadamente 45 medidas de seguridad del Anexo II del RD 311/2022. Son un subconjunto del total de 73 controles, aplicados con un nivel de exigencia inferior al de las categorias Media (aproximadamente 60 medidas) y Alta (las 73 medidas en nivel maximo).</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Que diferencia hay entre ENS Basico y ENS Medio?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer">La diferencia fundamental es el nivel de impacto que un incidente de seguridad podria causar sobre la organizacion, los ciudadanos o el servicio publico. El Basico aplica cuando el impacto seria limitado; el Medio cuando podria ser grave. En terminos de controles, el ENS Medio exige medidas adicionales que no son obligatorias en Basico: autenticacion de doble factor (2FA), monitorizacion continua de la seguridad, gestion formal y documentada de incidentes, mayor exigencia en continuidad del servicio y planes de recuperacion mas detallados. Ademas, el ENS Medio no admite la Declaracion de Conformidad: siempre requiere auditoria externa por entidad acreditada por ENAC.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>El ENS Basico sirve para cualquier licitacion publica?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer">No. El ENS Basico solo es valido para pliegos de contratacion publica que especifiquen explicitamente esa categoria o que no exijan una categoria superior. Muchos contratos relevantes de la Administracion General del Estado, ministerios y Comunidades Autonomas exigen ENS Medio como minimo, independientemente del tamano del contrato. Por eso es fundamental revisar el pliego concreto antes de iniciar el proceso de certificacion. El presupuesto sin compromiso de Avson incluye siempre este analisis del pliego y la recomendacion de la categoria adecuada.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section section--white">
        <div className="container">
          <span className="label-tag">Casos reales</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '560px' }}>Empresas como la tuya,<br /><em>ya con su ENS Basico.</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px', marginTop: '32px' }}>
            <div style={{ background: 'var(--pearl,#F7F7F5)', border: '1px solid #E5E5E0', borderRadius: '12px', padding: '28px' }}>
              <div style={{ color: '#C9A84C', fontSize: '14px', letterSpacing: '2px', marginBottom: '12px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontWeight: 300, color: '#1A2744', lineHeight: 1.5, fontStyle: 'italic', margin: '0 0 16px' }}>"Damos soporte informatico a varios ayuntamientos pequenos. En la ultima renovacion nos pidieron el ENS Basico o quedabamos fuera. Avson nos certifico en 10 semanas y mantuvimos el contrato."</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '13px', color: '#7A8499', fontWeight: 600, margin: 0 }}>Marta L. -- Responsable IT · Empresa de mantenimiento informatico</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#C9A84C', margin: '4px 0 0' }}>ENS Basico certificado &#10003;</p>
            </div>
            <div style={{ background: 'var(--pearl,#F7F7F5)', border: '1px solid #E5E5E0', borderRadius: '12px', padding: '28px' }}>
              <div style={{ color: '#C9A84C', fontSize: '14px', letterSpacing: '2px', marginBottom: '12px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontWeight: 300, color: '#1A2744', lineHeight: 1.5, fontStyle: 'italic', margin: '0 0 16px' }}>"Vendemos software a administraciones locales y creiamos que el ENS era solo para grandes. Lo necesitabamos para un pliego y Avson nos guio desde cero, sin jerga tecnica."</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '13px', color: '#7A8499', fontWeight: 600, margin: 0 }}>Ruben P. -- CEO · Startup de software para AAPP</p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#C9A84C', margin: '4px 0 0' }}>ENS Basico certificado &#10003;</p>
            </div>
          </div>
        </div>
      </section>

      {/* TAMBIEN TE INTERESA */}
      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label-tag">Categorias ENS</span>
          <div className="gold-line" style={{ margin: '0 auto 24px' }}></div>
          <h2 className="section-title section-title--white">Tambien te puede interesar</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '560px', margin: '0 auto 48px' }}>Conoce todas las categorias del Esquema Nacional de Seguridad y elige la que corresponde a tu organizacion y a los contratos que quieres conseguir.</p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/ens-basico" style={{ display: 'inline-block', padding: '20px 36px', border: '2px solid var(--gold)', color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em', background: 'rgba(201,168,76,0.08)' }}>ENS Basico (actual)</Link>
            <Link to="/ens-medio" style={{ display: 'inline-block', padding: '20px 36px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em' }}>ENS Medio &rarr;</Link>
            <Link to="/ens-alto" style={{ display: 'inline-block', padding: '20px 36px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em' }}>ENS Alto &rarr;</Link>
          </div>
          <div className="mt-48">
            <Link to="/ens" className="btn-text" style={{ color: 'rgba(255,255,255,0.5)' }}>&larr; Ver resumen de todas las categorias ENS</Link>
          </div>
        </div>
      </section>
    </>
  )
}
