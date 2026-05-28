import { Link } from 'react-router-dom'
import FaqAccordion from '../components/FaqAccordion'

const faqItems = [
  {
    question: '¿C\u00f3mo se determina si mis sistemas son categor\u00eda Alta?',
    answer: 'La categor\u00eda Alta se determina cuando el impacto potencial de un incidente de seguridad en alguna de las cinco dimensiones \u2014confidencialidad, integridad, disponibilidad, autenticidad o trazabilidad\u2014 alcanza el nivel \u201cAlto\u201d seg\u00fan la escala de valoraci\u00f3n del RD 311/2022. En t\u00e9rminos concretos, esto ocurre cuando un incidente podr\u00eda tener consecuencias muy graves o irreversibles: comprometer la seguridad nacional, inutilizar infraestructuras cr\u00edticas, exponer masivamente datos de ciudadanos o interrumpir servicios esenciales. El an\u00e1lisis formal debe realizarse mediante metodolog\u00eda MAGERIT y documentarse en el an\u00e1lisis de riesgos. Avson puede realizar una primera valoraci\u00f3n orientativa de forma gratuita.'
  },
  {
    question: '\u00bfEl ENS Alto es m\u00e1s caro que el Medio?',
    answer: 'S\u00ed, significativamente. El ENS Alto requiere la implementaci\u00f3n de los 75 controles del Anexo II en su nivel m\u00e1ximo, lo que supone una inversi\u00f3n mayor en consultor\u00eda especializada, controles t\u00e9cnicos (SIEM, criptograf\u00eda avanzada, redundancia f\u00edsica) y una auditor\u00eda externa m\u00e1s extensa e intensa. El plazo tambi\u00e9n es mayor: entre 5 y 7 meses seg\u00fan la complejidad del proyecto. Sin embargo, el ENS Alto abre el acceso a contratos de muy alta cuant\u00eda que justifican con creces la inversi\u00f3n.'
  },
  {
    question: '\u00bfQu\u00e9 entidades pueden auditar el ENS Alto?',
    answer: 'La auditor\u00eda del ENS Alto debe realizarla una entidad de certificaci\u00f3n acreditada por ENAC para el esquema ENS: Bureau Veritas, SGS, AENOR, Applus+, BSI y otras con acreditaci\u00f3n v\u00e1lida. Para sistemas que manejan informaci\u00f3n clasificada o relacionados con defensa y seguridad nacional, pueden intervenir tambi\u00e9n auditores habilitados por el CCN (Centro Criptol\u00f3gico Nacional), con competencias espec\u00edficas para estos entornos. Avson coordina la selecci\u00f3n de la entidad auditora m\u00e1s adecuada para cada proyecto ENS Alto.'
  },
  {
    question: '\u00bfEl ENS Alto equivale a ISO 27001?',
    answer: 'No son equivalentes aunque comparten una base significativa de controles (aproximadamente el 65%). El ENS Alto tiene requisitos espec\u00edficos del contexto de la Administraci\u00f3n P\u00fablica espa\u00f1ola y controles m\u00e1s estrictos en \u00e1reas como continuidad de servicio, criptograf\u00eda certificada por el CCN y seguridad f\u00edsica. La ISO 27001 tiene alcance internacional, es m\u00e1s flexible en su aplicaci\u00f3n y est\u00e1 orientada al sector privado. Ambas certificaciones se complementan muy bien: el ENS Alto junto con ISO 27001 proporciona la mayor cobertura posible ante clientes p\u00fablicos y privados.'
  },
  {
    question: '\u00bfMis sistemas de categor\u00eda Alta necesitan tambi\u00e9n ENS B\u00e1sico o Medio en otros sistemas?',
    answer: 'Es perfectamente posible que una misma organizaci\u00f3n tenga sistemas de distintas categor\u00edas ENS. La categorizaci\u00f3n se hace sistema por sistema, en funci\u00f3n del impacto potencial de cada uno. Los sistemas de apoyo, administrativos o secundarios pueden ser de categor\u00eda B\u00e1sica o Media aunque los sistemas principales sean Alto. Esta situaci\u00f3n es frecuente en organizaciones grandes: mantienen un alcance ENS Alto para sus sistemas cr\u00edticos y un alcance ENS Medio o B\u00e1sico para el resto. Avson ayuda a definir correctamente el alcance de cada alcance de certificaci\u00f3n para optimizar el esfuerzo y los costes.'
  }
]

export default function EnsAltoPage() {
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
            <span style={{ color: 'var(--navy)' }}>ENS Alto</span>
          </div>
          <div style={{ maxWidth: 780 }}>
            <span className="label-tag">Esquema Nacional de Seguridad {'\u00b7'} Categor{'\u00eda'} Alta {'\u00b7'} RD 311/2022</span>
            <div className="gold-line"></div>
            <h1 className="display-title">Certificado ENS Alto: para sistemas cr{'\u00ed'}ticos<br /><em>donde el fallo no es una opci{'\u00f3'}n.</em></h1>
            <div className="guarantee-seal" style={{ marginBottom: 24 }}>
              <span className="guarantee-seal__icon">{'\u2726'}</span>
              <span className="guarantee-seal__text">Garant{'\u00ed'}a de {'\u00e9'}xito<br />al 100% por escrito</span>
            </div>
            <p className="body-large mt-32" style={{ maxWidth: 620 }}>La categor{'\u00ed'}a Alta del ENS representa el m{'\u00e1'}ximo nivel de exigencia del Esquema Nacional de Seguridad. Para sistemas cuyo fallo podr{'\u00ed'}a comprometer la seguridad nacional, datos masivos de ciudadanos o infraestructuras esenciales. Avson ofrece consultor{'\u00ed'}a especializada ENS Alto en toda Espa{'\u00f1'}a.</p>
            <form onSubmit={(e) => { e.preventDefault(); }} style={{ display: 'flex', gap: 0, marginTop: 32, marginBottom: 16, maxWidth: 480, boxShadow: '0 4px 24px rgba(26,39,68,0.12)' }}>
              <input type="email" id="heroEmail" required placeholder="tu@empresa.com"
                style={{ flex: 1, padding: '16px 20px', border: 'none', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--navy)', background: 'var(--white)', outline: 'none', minWidth: 0 }} />
              <button type="submit"
                style={{ background: 'var(--gold)', color: 'var(--navy)', border: 'none', padding: '16px 24px', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.88'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
                Diagn{'\u00f3'}stico ENS gratis {'\u2192'}
              </button>
            </form>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--navy-60)', marginTop: 0, marginBottom: 24 }}>Sin compromiso {'\u00b7'} Respuesta en 24h {'\u00b7'} Servicio en toda Espa{'\u00f1'}a</p>
            <div className="flex gap-24 mt-16" style={{ flexWrap: 'wrap' }}>
              <Link to="/contacto" className="btn-primary">Hablar con un experto {'\u2192'}</Link>
              <Link to="/ens" className="btn-text">Ver todas las categor{'\u00ed'}as ENS {'\u2192'}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* QU\u00c9 ES ENS ALTO */}
      <section className="section section--white deco-section">
        <div style={{ position: 'absolute', top: '50%', left: -40, transform: 'translateY(-50%)', fontFamily: "'Cormorant Garamond',serif", fontSize: 280, fontWeight: 700, color: 'var(--navy)', opacity: 0.025, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>A</div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-7-5">
            <div className="anim-fade-up">
              <span className="label-tag">Qu{'\u00e9'} es el ENS Alto</span>
              <div className="gold-line"></div>
              <h2 className="section-title">La categor{'\u00ed'}a Alta del ENS:<br />cuando un incidente tiene consecuencias muy graves.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>La categor{'\u00ed'}a Alta del Esquema Nacional de Seguridad se aplica cuando un fallo de seguridad en los sistemas podr{'\u00ed'}a tener consecuencias <strong>muy graves e irreversibles</strong>: comprometer la seguridad nacional, inutilizar infraestructuras cr{'\u00ed'}ticas del Estado, exponer datos masivos de ciudadanos, interrumpir servicios esenciales de los que depende la poblaci{'\u00f3'}n o causar da{'\u00f1'}os de dif{'\u00ed'}cil o imposible reparaci{'\u00f3'}n. Es la categor{'\u00ed'}a m{'\u00e1'}s exigente del ENS y la que mayor nivel de madurez de seguridad requiere.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>El RD 311/2022 determina la categor{'\u00ed'}a Alta cuando el impacto potencial de un incidente en alguna de las cinco dimensiones de seguridad {'\u2014'}<strong>confidencialidad, integridad, disponibilidad, autenticidad o trazabilidad</strong>{'\u2014'} alcanza el nivel {'\u201c'}Alto{'\u201d'} seg{'\u00fa'}n la escala de valoraci{'\u00f3'}n formal. Esta valoraci{'\u00f3'}n debe realizarse mediante un an{'\u00e1'}lisis de riesgos riguroso, siguiendo la metodolog{'\u00ed'}a MAGERIT u otras equivalentes aceptadas por el CCN, y documentarse formalmente en la Declaraci{'\u00f3'}n de Aplicabilidad y la Pol{'\u00ed'}tica de Seguridad.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>A diferencia de las categor{'\u00ed'}as inferiores, el ENS Alto exige la implementaci{'\u00f3'}n de los <strong>75 controles del Anexo II</strong> en su nivel de aplicaci{'\u00f3'}n m{'\u00e1'}ximo, incluyendo medidas adicionales en seguridad f{'\u00ed'}sica, controles criptogr{'\u00e1'}ficos avanzados, sistemas de monitorizaci{'\u00f3'}n en tiempo real, gesti{'\u00f3'}n reforzada de identidades y accesos privilegiados, y requisitos de continuidad y disponibilidad m{'\u00e1'}s estrictos que en ninguna otra categor{'\u00ed'}a.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)' }}>Avson cuenta con experiencia acreditada en proyectos ENS Alto, con consultores especializados en entornos de alta seguridad, conocimiento profundo de las gu{'\u00ed'}as CCN-STIC aplicables y experiencia directa en auditor{'\u00ed'}as de sistemas de informaci{'\u00f3'}n cr{'\u00ed'}ticos. Prestamos servicio en toda Espa{'\u00f1'}a, con equipos que pueden desplazarse a las instalaciones del cliente cuando la clasificaci{'\u00f3'}n del proyecto lo requiere.</p>
            </div>
            <div className="anim-fade-up delay-2">
              <div className="legal-box" style={{ marginBottom: 24 }}>
                <div className="legal-box__label">Marco legal</div>
                <div className="legal-box__text">Real Decreto 311/2022, de 3 de mayo. Art{'\u00ed'}culos 40-43, Anexo I (categorizaci{'\u00f3'}n nivel Alto) y Anexo II (75 medidas en nivel m{'\u00e1'}ximo).</div>
              </div>
              <div className="legal-box" style={{ marginBottom: 24 }}>
                <div className="legal-box__label">Impacto que determina categor{'\u00ed'}a Alta</div>
                <div className="legal-box__text">Consecuencias muy graves o irreversibles: compromiso de seguridad nacional, interrupci{'\u00f3'}n de servicios esenciales, exposici{'\u00f3'}n masiva de datos ciudadanos.</div>
              </div>
              <div className="legal-box">
                <div className="legal-box__label">Controles requeridos</div>
                <div className="legal-box__text">Los 75 controles del Anexo II del RD 311/2022 en su nivel de aplicaci{'\u00f3'}n m{'\u00e1'}ximo. Incluye requisitos f{'\u00ed'}sicos, criptogr{'\u00e1'}ficos y de disponibilidad m{'\u00e1'}s estrictos.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUI\u00c9N LO NECESITA */}
      <section className="section section--pearl">
        <div className="container">
          <span className="label-tag">{'\u00bf'}Te afecta?</span>
          <div className="gold-line"></div>
          <h2 className="section-title">{'\u00bf'}Qui{'\u00e9'}n necesita el certificado ENS Alto?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', maxWidth: 720, marginBottom: 48 }}>El ENS Alto aplica a un espectro m{'\u00e1'}s reducido de organizaciones que las categor{'\u00ed'}as inferiores, pero de mayor criticidad estrat{'\u00e9'}gica. Si tu empresa presta servicios tecnol{'\u00f3'}gicos a organismos que gestionan informaci{'\u00f3'}n clasificada, infraestructuras esenciales o servicios cuya interrupci{'\u00f3'}n tendr{'\u00ed'}a consecuencias nacionales, el ENS Alto es tu categor{'\u00ed'}a. Los perfiles habituales son:</p>
          <div className="grid-3" style={{ gap: 32 }}>
            {[
              { icon: '\ud83d\udee1\ufe0f', title: 'Defensa y seguridad nacional', desc: 'Proveedores tecnol\u00f3gicos del Ministerio de Defensa, Fuerzas y Cuerpos de Seguridad del Estado, organismos de inteligencia y cualquier entidad que gestione informaci\u00f3n clasificada o sistemas relacionados con la seguridad nacional.' },
              { icon: '\u26a1', title: 'Infraestructuras cr\u00edticas nacionales', desc: 'Operadores de infraestructuras cr\u00edticas en los sectores de energ\u00eda, telecomunicaciones, transporte, agua y salud, y sus proveedores tecnol\u00f3gicos, cuando los sistemas de control industrial (OT/ICS) o de gesti\u00f3n tienen impacto Alto.' },
              { icon: '\ud83c\udfe5', title: 'Salud cr\u00edtica a escala nacional', desc: 'Plataformas de historia cl\u00ednica nacional, sistemas de gesti\u00f3n de emergencias sanitarias, redes de vigilancia epidemiol\u00f3gica y cualquier sistema de salud p\u00fablica cuya interrupci\u00f3n comprometer\u00eda vidas humanas o la respuesta a crisis sanitarias.' },
              { icon: '\ud83d\uddc3\ufe0f', title: 'Datos masivos de ciudadanos', desc: 'Sistemas que gestionan datos personales muy sensibles de m\u00e1s de 100.000 ciudadanos, o datos que en caso de compromiso podr\u00edan tener consecuencias muy graves para los afectados, como bases de datos de salud, judiciales o de seguridad.' },
              { icon: '\ud83d\udea8', title: 'Sistemas de emergencias y protecci\u00f3n civil', desc: 'Plataformas tecnol\u00f3gicas de gesti\u00f3n de emergencias (112, protecci\u00f3n civil, gesti\u00f3n de cat\u00e1strofes), sistemas de alerta temprana y plataformas de coordinaci\u00f3n de respuesta a incidentes de seguridad p\u00fablica.' },
              { icon: '\ud83c\udfe6', title: 'Sistemas financieros cr\u00edticos del Estado', desc: 'Plataformas de gesti\u00f3n tributaria nacional, sistemas de control presupuestario del Estado, registros p\u00fablicos de alcance nacional y sistemas financieros cuya interrupci\u00f3n comprometer\u00eda el funcionamiento del erario p\u00fablico.' }
            ].map((item, i) => (
              <div key={i} style={{ border: '1px solid var(--border)', padding: '32px 28px', background: 'var(--white)' }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{item.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: 'var(--navy)', marginBottom: 12 }}>{item.title}</div>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="cta-inline-box" style={{ marginTop: 48 }}>
            <span className="cta-inline-box__text">{'\u201c'}El ENS Alto requiere una consultor{'\u00ed'}a altamente especializada. Contacta con Avson para un an{'\u00e1'}lisis preliminar sin compromiso.{'\u201d'}</span>
            <Link to="/contacto" className="btn-primary">Hablar con un especialista {'\u2192'}</Link>
          </div>
        </div>
      </section>

      {/* REQUISITOS ESPEC\u00cdFICOS ENS ALTO */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-7-5">
            <div className="anim-fade-up">
              <span className="label-tag">Controles espec{'\u00ed'}ficos del ENS Alto</span>
              <div className="gold-line"></div>
              <h2 className="section-title">Los 75 controles del ENS Alto:<br />el nivel m{'\u00e1'}ximo de exigencia.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>El ENS Alto exige la implementaci{'\u00f3'}n de los <strong>75 controles del Anexo II del RD 311/2022 en su nivel de aplicaci{'\u00f3'}n m{'\u00e1'}ximo</strong>. Esto incluye no solo todos los controles de las categor{'\u00ed'}as B{'\u00e1'}sica y Media, sino medidas adicionales espec{'\u00ed'}ficas de la categor{'\u00ed'}a Alta que suponen requisitos t{'\u00e9'}cnicos y organizativos de alta complejidad.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>En el {'\u00e1'}mbito de la <strong>seguridad f{'\u00ed'}sica</strong>, el ENS Alto exige controles de acceso f{'\u00ed'}sico a los centros de proceso de datos m{'\u00e1'}s estrictos, con registros de acceso, videovigilancia perimetral y, en algunos casos, redundancia f{'\u00ed'}sica de las instalaciones. Las comunicaciones externas deben estar protegidas con mecanismos criptogr{'\u00e1'}ficos certificados, y el acceso remoto est{'\u00e1'} sometido a controles adicionales que van m{'\u00e1'}s all{'\u00e1'} del doble factor de autenticaci{'\u00f3'}n.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>Los <strong>controles criptogr{'\u00e1'}ficos</strong> del ENS Alto incluyen el uso de algoritmos y longitudes de clave certificados por el CCN, la gesti{'\u00f3'}n formal del ciclo de vida de claves y certificados, y el uso de dispositivos de firma y cifrado homologados para los sistemas m{'\u00e1'}s cr{'\u00ed'}ticos. El cifrado en reposo y en tr{'\u00e1'}nsito es mandatorio para todos los datos en alcance.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)' }}>La <strong>continuidad de servicio</strong> en categor{'\u00ed'}a Alta incluye requisitos de disponibilidad m{'\u00e1'}s estrictos: planes de continuidad probados con frecuencia semestral, recuperaci{'\u00f3'}n ante desastres con RTO y RPO muy ajustados, redundancia de sistemas cr{'\u00ed'}ticos y, en algunos casos, requisitos de grupo electr{'\u00f3'}geno con autonom{'\u00ed'}a m{'\u00ed'}nima de dos horas. La monitorizaci{'\u00f3'}n debe ser continua, con capacidad de detecci{'\u00f3'}n y respuesta en tiempo real.</p>
            </div>
            <div className="anim-fade-up delay-2">
              <div style={{ background: 'var(--navy)', padding: '40px 32px' }}>
                <span className="label-tag">Controles distintivos del ENS Alto</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
                  {[
                    { title: 'Criptograf\u00eda avanzada certificada CCN', desc: 'Algoritmos y longitudes de clave certificadas. Dispositivos de cifrado homologados para sistemas cr\u00edticos.' },
                    { title: 'SIEM y detecci\u00f3n en tiempo real', desc: 'Sistema de gesti\u00f3n de eventos de seguridad (SIEM) con correlaci\u00f3n de eventos y alertas en tiempo real.' },
                    { title: 'Seguridad f\u00edsica reforzada', desc: 'Control de acceso f\u00edsico estricto, videovigilancia y redundancia f\u00edsica de instalaciones cr\u00edticas.' },
                    { title: 'Continuidad con alta disponibilidad', desc: 'RTO/RPO muy ajustados. Pruebas semestrales de recuperaci\u00f3n. Grupo electr\u00f3geno con 2h de autonom\u00eda.' }
                  ].map((item, i) => (
                    <div key={i} style={{ borderLeft: '2px solid var(--gold)', paddingLeft: 20 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  ))}
                  <div style={{ borderLeft: '2px solid rgba(201,168,76,0.4)', paddingLeft: 20 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 4 }}>75 controles en nivel m{'\u00e1'}ximo</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>Todos los controles del Anexo II aplicados en su nivel de exigencia m{'\u00e1'}s alto.</div>
                  </div>
                </div>
                <Link to="/contacto" className="btn-primary btn-primary--white" style={{ marginTop: 32 }}>Consultar proyecto ENS Alto {'\u2192'}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENS ALTO Y SEGURIDAD NACIONAL */}
      <section className="section section--pearl">
        <div className="container">
          <span className="label-tag">CCN y seguridad nacional</span>
          <div className="gold-line"></div>
          <h2 className="section-title">ENS Alto y el Centro Criptol{'\u00f3'}gico Nacional:<br /><em>el papel del CCN en la supervisi{'\u00f3'}n.</em></h2>
          <div className="grid-7-5" style={{ marginTop: 48 }}>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>El <strong>Centro Criptol{'\u00f3'}gico Nacional (CCN)</strong>, organismo dependiente del Centro Nacional de Inteligencia (CNI), juega un papel central en el ecosistema del ENS Alto. El CCN es el organismo responsable de la supervisi{'\u00f3'}n t{'\u00e9'}cnica del Esquema Nacional de Seguridad, elabora las gu{'\u00ed'}as CCN-STIC que desarrollan y complementan los controles del RD 311/2022, y supervisa la seguridad de los sistemas de informaci{'\u00f3'}n de la Administraci{'\u00f3'}n P{'\u00fa'}blica espa{'\u00f1'}ola.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>Para los sistemas de categor{'\u00ed'}a Alta que manejan <strong>informaci{'\u00f3'}n clasificada</strong> o que est{'\u00e1'}n relacionados con defensa y seguridad nacional, el CCN puede intervenir directamente en los procesos de acreditaci{'\u00f3'}n, establecer requisitos adicionales m{'\u00e1'}s all{'\u00e1'} del RD 311/2022 y designar auditores habilitados espec{'\u00ed'}ficamente para estos entornos. El cumplimiento de las gu{'\u00ed'}as CCN-STIC correspondientes a cada tipo de sistema (aplicaciones web, bases de datos, sistemas operativos, comunicaciones) es especialmente relevante en categor{'\u00ed'}a Alta.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>El <strong>CCN-CERT</strong>, la capacidad de respuesta a incidentes del CCN, tiene competencias de supervisi{'\u00f3'}n sobre los sistemas de las Administraciones P{'\u00fa'}blicas catalogados como cr{'\u00ed'}ticos. Los operadores de sistemas ENS Alto deben mantener canales de comunicaci{'\u00f3'}n establecidos con el CCN-CERT y reportar incidentes de seguridad significativos seg{'\u00fa'}n los procedimientos establecidos en las gu{'\u00ed'}as CCN-STIC 817 y 817c.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)' }}>En Avson, nuestros consultores ENS Alto tienen conocimiento profundo de las gu{'\u00ed'}as CCN-STIC aplicables y experiencia en la interlocuci{'\u00f3'}n con el CCN en el marco de proyectos de alta complejidad. Esta especializaci{'\u00f3'}n es fundamental para abordar proyectos ENS Alto con garant{'\u00ed'}as de {'\u00e9'}xito.</p>
            </div>
            <div>
              <div style={{ background: 'var(--navy)', padding: '40px 32px' }}>
                <span className="label-tag">Gu{'\u00ed'}as CCN-STIC relevantes</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
                  {[
                    { code: 'CCN-STIC 804', desc: 'Gu\u00eda de implantaci\u00f3n del ENS. Referencia principal para el proceso de implementaci\u00f3n.' },
                    { code: 'CCN-STIC 808', desc: 'Verificaci\u00f3n del cumplimiento de las medidas de seguridad del ENS.' },
                    { code: 'CCN-STIC 817', desc: 'Gesti\u00f3n de ciberincidentes. Notificaci\u00f3n al CCN-CERT para sistemas cr\u00edticos.' },
                    { code: 'Series CCN-STIC 500 y 600', desc: 'Gu\u00edas t\u00e9cnicas por tecnolog\u00eda: servidores, aplicaciones, comunicaciones, sistemas operativos.' }
                  ].map((item, i) => (
                    <div key={i} style={{ padding: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 4 }}>{item.code}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QU\u00c9 REQUIERE CONSULTOR\u00cdA ESPECIALIZADA */}
      <section className="section section--white">
        <div className="container">
          <span className="label-tag">Consultor{'\u00ed'}a especializada</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Por qu{'\u00e9'} el ENS Alto requiere<br /><em>una consultor{'\u00ed'}a verdaderamente especializada.</em></h2>
          <div className="grid-7-5" style={{ marginTop: 48 }}>
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>El ENS Alto no es un proyecto de certificaci{'\u00f3'}n est{'\u00e1'}ndar. Requiere un nivel de especializaci{'\u00f3'}n, rigor y experiencia muy superior al de las categor{'\u00ed'}as B{'\u00e1'}sica y Media. La raz{'\u00f3'}n es sencilla: los sistemas en alcance son sistemas cr{'\u00ed'}ticos cuyo fallo podr{'\u00ed'}a tener consecuencias muy graves, y la entidad auditora y el CCN aplicar{'\u00e1'}n el mismo nivel de exigencia en la revisi{'\u00f3'}n.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>Desde el punto de vista t{'\u00e9'}cnico, el ENS Alto exige implementar controles que van m{'\u00e1'}s all{'\u00e1'} de la documentaci{'\u00f3'}n y las pol{'\u00ed'}ticas: criptograf{'\u00ed'}a avanzada con dispositivos homologados, sistemas de monitorizaci{'\u00f3'}n en tiempo real (SIEM) con capacidad de correlaci{'\u00f3'}n de eventos, arquitecturas de red segmentadas y reforzadas, y sistemas de respaldo con tiempos de recuperaci{'\u00f3'}n muy ajustados. Cada uno de estos elementos requiere expertise t{'\u00e9'}cnico espec{'\u00ed'}fico.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>Desde el punto de vista organizativo, el ENS Alto exige un nivel de madurez en gesti{'\u00f3'}n de la seguridad que no se construye de la noche a la ma{'\u00f1'}ana. Los procedimientos de gesti{'\u00f3'}n de incidentes deben estar probados, los planes de continuidad deben haberse ensayado, y el personal debe haber recibido formaci{'\u00f3'}n espec{'\u00ed'}fica en seguridad de la informaci{'\u00f3'}n.</p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)' }}>En Avson, los proyectos ENS Alto los lideran consultores senior con experiencia acreditada en entornos de alta seguridad, conocimiento de las gu{'\u00ed'}as CCN-STIC y experiencia directa en procesos de auditor{'\u00ed'}a de sistemas cr{'\u00ed'}ticos. No se trata de adaptar una metodolog{'\u00ed'}a de ENS B{'\u00e1'}sico o Medio: el ENS Alto tiene su propio enfoque, su propio equipo y su propio nivel de exigencia interna.</p>
            </div>
            <div>
              <div style={{ background: 'var(--navy)', padding: '40px 32px' }}>
                <span className="label-tag">Por qu{'\u00e9'} Avson para el ENS Alto</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
                  {[
                    { bg: 'var(--gold)', border: 'none', color: 'var(--navy)', title: 'Consultores senior especializados', desc: 'Equipo con experiencia acreditada en proyectos ENS Alto y entornos de alta seguridad.' },
                    { bg: 'rgba(201,168,76,0.2)', border: '1px solid var(--gold)', color: 'var(--gold)', title: 'Conocimiento profundo CCN-STIC', desc: 'Dominio de todas las gu\u00edas CCN-STIC aplicables a sistemas ENS Alto.' },
                    { bg: 'rgba(201,168,76,0.2)', border: '1px solid var(--gold)', color: 'var(--gold)', title: 'Garant\u00eda de \u00e9xito por escrito', desc: 'La misma garant\u00eda que en las categor\u00edas inferiores: si no apruebas, seguimos sin coste adicional.' },
                    { bg: 'rgba(201,168,76,0.2)', border: '1px solid var(--gold)', color: 'var(--gold)', title: 'Servicio en toda Espa\u00f1a', desc: 'Presencial o remoto seg\u00fan las necesidades del proyecto y la clasificaci\u00f3n de la informaci\u00f3n.' }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: item.bg, border: item.border, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16, fontWeight: 700, color: item.color }}>{'\u2713'}</div>
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 4 }}>{item.title}</p>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/contacto" className="btn-primary btn-primary--white" style={{ marginTop: 32 }}>Hablar con un experto ENS Alto {'\u2192'}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO ENS ALTO */}
      <section className="section section--pearl" id="proceso">
        <div className="container">
          <span className="label-tag">Nuestro proceso</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Proceso ENS Alto con Avson:<br /><em>5-7 meses seg{'\u00fa'}n complejidad.</em></h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-body)', maxWidth: 680, marginBottom: 48 }}>El ENS Alto requiere mayor tiempo de implementaci{'\u00f3'}n que las categor{'\u00ed'}as inferiores, dado el mayor n{'\u00fa'}mero de controles, su mayor exigencia y la complejidad t{'\u00e9'}cnica de algunos de ellos. El equipo Avson asignado a proyectos ENS Alto es ampliado respecto al est{'\u00e1'}ndar, con coordinaci{'\u00f3'}n estrecha con el {'\u00e1'}rea de seguridad del cliente en todas las fases del proyecto.</p>
          <div className="timeline mt-32">
            {[
              { num: '01', week: 'Semanas 1-3', title: 'An\u00e1lisis de alcance y categorizaci\u00f3n formal', desc: 'An\u00e1lisis formal de sistemas en alcance seg\u00fan MAGERIT. Valoraci\u00f3n de activos y determinaci\u00f3n formal de la categor\u00eda Alta. Definici\u00f3n del alcance de la certificaci\u00f3n y revisi\u00f3n de la arquitectura de seguridad existente. GAP analysis completo respecto a los 75 controles ENS Alto.' },
              { num: '02', week: 'Semanas 4-18', title: 'Implementaci\u00f3n integral de controles ENS Alto', desc: 'Implementaci\u00f3n de los 75 controles en nivel m\u00e1ximo: SGSI completo, criptograf\u00eda avanzada, SIEM, controles de acceso reforzados, seguridad f\u00edsica, gesti\u00f3n de vulnerabilidades, planes de continuidad con pruebas, y toda la documentaci\u00f3n requerida por el CCN-STIC.' },
              { num: '03', week: 'Semanas 19-22', title: 'Auditor\u00eda interna y simulacros de certificaci\u00f3n', desc: 'Auditor\u00eda interna exhaustiva con revisi\u00f3n t\u00e9cnica y documental de todos los controles. Simulacros de auditor\u00eda externa. Pruebas de recuperaci\u00f3n y continuidad. Correcci\u00f3n de todas las no conformidades detectadas antes de la auditor\u00eda externa.' },
              { num: '04', week: 'Semanas 23-28', title: 'Auditor\u00eda de certificaci\u00f3n ENAC', desc: 'Coordinaci\u00f3n integral con la entidad auditora acreditada ENAC para ENS Alto. Acompa\u00f1amiento en todas las sesiones de auditor\u00eda. Respuesta a no conformidades. Garant\u00eda de \u00e9xito por escrito. Emisi\u00f3n del certificado ENS Alto.' }
            ].map((step, i) => (
              <div key={i} className={`timeline__step anim-fade-up${i > 0 ? ` delay-${i}` : ''}`}>
                <div className="timeline__number">{step.num}</div>
                <div className="timeline__week">{step.week}</div>
                <div className="timeline__title">{step.title}</div>
                <div className="timeline__desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE APLICACI\u00d3N */}
      <section className="section section--white">
        <div className="container">
          <span className="label-tag">Casos de aplicaci{'\u00f3'}n</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Casos de aplicaci{'\u00f3'}n del ENS Alto:<br />d{'\u00f3'}nde marca la diferencia.</h2>
          <div className="grid-3" style={{ gap: 32, marginTop: 48 }}>
            {[
              { icon: '\ud83d\udd2c', title: 'Defensa y proveedores del sector', desc: 'Empresas de tecnolog\u00eda que contratan con el Ministerio de Defensa, DGAM, INTA o cualquier organismo de defensa necesitan el ENS Alto para sistemas que procesan informaci\u00f3n clasificada o estrat\u00e9gica. El ENS Alto es la puerta de entrada a este mercado especializado.' },
              { icon: '\ud83d\udea6', title: 'Gesti\u00f3n de emergencias nacionales', desc: 'Plataformas que dan soporte a la gesti\u00f3n de emergencias nacionales (cat\u00e1strofes naturales, emergencias sanitarias, alertas civiles) donde la disponibilidad es cr\u00edtica y la interrupci\u00f3n del sistema podr\u00eda costar vidas o comprometer la coordinaci\u00f3n de la respuesta.' },
              { icon: '\ud83c\udfe6', title: 'Grandes plataformas de salud p\u00fablica', desc: 'Sistemas de historia cl\u00ednica nacional o interoperable entre CCAA, plataformas de vigilancia epidemiol\u00f3gica nacional y sistemas de prescripci\u00f3n electr\u00f3nica que procesan datos de salud de millones de ciudadanos con requisitos de disponibilidad cr\u00edtica.' }
            ].map((item, i) => (
              <div key={i} style={{ border: '1px solid var(--border)', padding: '32px 28px', background: 'var(--white)' }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{item.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: 'var(--navy)', marginBottom: 12 }}>{item.title}</div>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--pearl" id="faq">
        <div className="container">
          <span className="label-tag">Preguntas frecuentes</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Preguntas frecuentes sobre<br />el certificado ENS Alto.</h2>
          <div className="mt-48" style={{ maxWidth: 820 }}>
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* TAMBI\u00c9N TE INTERESA */}
      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label-tag">Categor{'\u00ed'}as ENS</span>
          <div className="gold-line" style={{ margin: '0 auto 24px' }}></div>
          <h2 className="section-title section-title--white">Tambi{'\u00e9'}n te puede interesar</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 560, margin: '0 auto 48px' }}>Explora todas las categor{'\u00ed'}as del Esquema Nacional de Seguridad y el resto de servicios de consultor{'\u00ed'}a GRC que ofrece Avson en toda Espa{'\u00f1'}a.</p>
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/ens-basico" style={{ display: 'inline-block', padding: '20px 36px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em', transition: 'all 0.2s' }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}>ENS B{'\u00e1'}sico {'\u2192'}</Link>
            <Link to="/ens-medio" style={{ display: 'inline-block', padding: '20px 36px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em', transition: 'all 0.2s' }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}>ENS Medio {'\u2192'}</Link>
            <Link to="/ens-alto" style={{ display: 'inline-block', padding: '20px 36px', border: '2px solid var(--gold)', color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em', background: 'rgba(201,168,76,0.08)' }}>ENS Alto (actual)</Link>
          </div>
          <div className="mt-48">
            <Link to="/ens" className="btn-text" style={{ color: 'rgba(255,255,255,0.5)' }}>{'\u2190'} Ver resumen de todas las categor{'\u00ed'}as ENS</Link>
          </div>
        </div>
      </section>
    </>
  )
}
