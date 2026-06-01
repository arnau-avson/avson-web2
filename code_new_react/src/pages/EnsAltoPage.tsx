import { Link } from 'react-router-dom'

const faqItems = [
  {
    question: '¿Cómo se determina si mis sistemas son categoría Alta?',
    answer: 'La categoría Alta se determina cuando el impacto potencial de un incidente de seguridad en alguna de las cinco dimensiones —confidencialidad, integridad, disponibilidad, autenticidad o trazabilidad— alcanza el nivel "Alto" según la escala de valoración del RD 311/2022. En términos concretos, esto ocurre cuando un incidente podría tener consecuencias muy graves o irreversibles: comprometer la seguridad nacional, inutilizar infraestructuras críticas, exponer masivamente datos de ciudadanos o interrumpir servicios esenciales. El análisis formal debe realizarse mediante metodología MAGERIT y documentarse en el análisis de riesgos. Avson puede realizar una primera valoración orientativa de forma gratuita.'
  },
  {
    question: '¿El ENS Alto es más caro que el Medio?',
    answer: 'Sí, significativamente. El ENS Alto requiere la implementación de los 73 controles del Anexo II en su nivel máximo, lo que supone una inversión mayor en consultoría especializada, controles técnicos (SIEM, criptografía avanzada, redundancia física) y una auditoría externa más extensa e intensa. El plazo también es mayor: entre 5 y 7 meses según la complejidad del proyecto. Sin embargo, el ENS Alto abre el acceso a contratos de muy alta cuantía que justifican con creces la inversión.'
  },
  {
    question: '¿Qué entidades pueden auditar el ENS Alto?',
    answer: 'La auditoría del ENS Alto debe realizarla una entidad de certificación acreditada por ENAC para el esquema ENS: Bureau Veritas, SGS, AENOR, Applus+, BSI y otras con acreditación válida. Para sistemas que manejan información clasificada o relacionados con defensa y seguridad nacional, pueden intervenir también auditores habilitados por el CCN (Centro Criptológico Nacional), con competencias específicas para estos entornos. Avson coordina la selección de la entidad auditora más adecuada para cada proyecto ENS Alto.'
  },
  {
    question: '¿El ENS Alto equivale a ISO 27001?',
    answer: 'No son equivalentes aunque comparten una base significativa de controles (aproximadamente el 65%). El ENS Alto tiene requisitos específicos del contexto de la Administración Pública española y controles más estrictos en áreas como continuidad de servicio, criptografía certificada por el CCN y seguridad física. La ISO 27001 tiene alcance internacional, es más flexible en su aplicación y está orientada al sector privado. Ambas certificaciones se complementan muy bien: el ENS Alto junto con ISO 27001 proporciona la mayor cobertura posible ante clientes públicos y privados.'
  },
  {
    question: '¿Mis sistemas de categoría Alta necesitan también ENS Básico o Medio en otros sistemas?',
    answer: 'Es perfectamente posible que una misma organización tenga sistemas de distintas categorías ENS. La categorización se hace sistema por sistema, en función del impacto potencial de cada uno. Los sistemas de apoyo, administrativos o secundarios pueden ser de categoría Básica o Media aunque los sistemas principales sean Alto. Esta situación es frecuente en organizaciones grandes: mantienen un alcance ENS Alto para sus sistemas críticos y un alcance ENS Medio o Básico para el resto. Avson ayuda a definir correctamente el alcance de cada alcance de certificación para optimizar el esfuerzo y los costes.'
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
            <span style={{color:'var(--navy)'}}>ENS Alto</span>
          </div>
          <div style={{maxWidth:'780px'}}>
            <span className="label-tag">Esquema Nacional de Seguridad · Categoría Alta · RD 311/2022</span>
            <div className="gold-line"></div>
            <h1 className="display-title">Certificado ENS Alto: para sistemas críticos<br /><em>donde el fallo no es una opción.</em></h1>
            <div className="guarantee-seal" style={{marginBottom:'24px'}}>
              <span className="guarantee-seal__icon">✦</span>
              <span className="guarantee-seal__text">Garantía de éxito<br />al 100% por escrito</span>
            </div>
            <p className="body-large mt-32" style={{maxWidth:'620px'}}>La categoría Alta del ENS representa el máximo nivel de exigencia del Esquema Nacional de Seguridad. Para sistemas cuyo fallo podría comprometer la seguridad nacional, datos masivos de ciudadanos o infraestructuras esenciales. Avson ofrece consultoría especializada ENS Alto en toda España.</p>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/gracias'; }} style={{display:'flex',gap:'0',marginTop:'32px',marginBottom:'16px',maxWidth:'480px',boxShadow:'0 4px 24px rgba(26,39,68,0.12)',borderRadius:'4px',animation:'v3-gold-pulse 2.6s infinite'}}>
              <input type="email" id="heroEmail" name="email" required placeholder="tu@empresa.com"
                style={{flex:'1',padding:'16px 20px',border:'none',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',minWidth:'0'}} />
              <button type="submit"
                style={{background:'var(--gold)',color:'var(--navy)',border:'none',padding:'16px 24px',fontFamily:'var(--font-sans)',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.04em',cursor:'pointer',whiteSpace:'nowrap',transition:'opacity 0.2s'}}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '0.88')} onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}>
                Diagnóstico ENS gratis →
              </button>
            </form>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'var(--navy-60)',marginTop:'0',marginBottom:'24px'}}>Sin compromiso · Respuesta en 24h · Servicio en toda España</p>
            <div className="flex gap-24 mt-16" style={{flexWrap:'wrap'}}>
              <Link to="/contacto" className="btn-primary">Habla con un experto →</Link>
              <Link to="/ens" className="btn-text">Ver todas las categorías ENS →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ ES ENS ALTO */}
      <section className="section section--white deco-section">
        <div style={{position:'absolute',top:'50%',left:'-40px',transform:'translateY(-50%)',fontFamily:"'Cormorant Garamond',serif",fontSize:'280px',fontWeight:'700',color:'var(--navy)',opacity:'0.025',lineHeight:'1',pointerEvents:'none',userSelect:'none'}}>A</div>
        <div className="container" style={{position:'relative',zIndex:'1'}}>
          <div className="grid-7-5">
            <div className="anim-fade-up">
              <span className="label-tag">Qué es el ENS Alto</span>
              <div className="gold-line"></div>
              <h2 className="section-title">La categoría Alta del ENS:<br />cuando un incidente tiene consecuencias muy graves.</h2>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>La categoría Alta del Esquema Nacional de Seguridad se aplica cuando un fallo de seguridad en los sistemas podría tener consecuencias <strong>muy graves e irreversibles</strong>: comprometer la seguridad nacional, inutilizar infraestructuras críticas del Estado, exponer datos masivos de ciudadanos, interrumpir servicios esenciales de los que depende la población o causar daños de difícil o imposible reparación. Es la categoría más exigente del ENS y la que mayor nivel de madurez de seguridad requiere.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>El RD 311/2022 determina la categoría Alta cuando el impacto potencial de un incidente en alguna de las cinco dimensiones de seguridad —<strong>confidencialidad, integridad, disponibilidad, autenticidad o trazabilidad</strong>— alcanza el nivel "Alto" según la escala de valoración formal. Esta valoración debe realizarse mediante un análisis de riesgos riguroso, siguiendo la metodología MAGERIT u otras equivalentes aceptadas por el CCN, y documentarse formalmente en la Declaración de Aplicabilidad y la Política de Seguridad.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>A diferencia de las categorías inferiores, el ENS Alto exige la implementación de los <strong>73 controles del Anexo II</strong> en su nivel de aplicación máximo, incluyendo medidas adicionales en seguridad física, controles criptográficos avanzados, sistemas de monitorización en tiempo real, gestión reforzada de identidades y accesos privilegiados, y requisitos de continuidad y disponibilidad más estrictos que en ninguna otra categoría.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>Avson cuenta con experiencia acreditada en proyectos ENS Alto, con consultores especializados en entornos de alta seguridad, conocimiento profundo de las guías CCN-STIC aplicables y experiencia directa en auditorías de sistemas de información críticos. Prestamos servicio en toda España, con equipos que pueden desplazarse a las instalaciones del cliente cuando la clasificación del proyecto lo requiere.</p>
            </div>
            <div className="anim-fade-up delay-2">
              <div className="legal-box" style={{marginBottom:'24px'}}>
                <div className="legal-box__label">Marco legal</div>
                <div className="legal-box__text">Real Decreto 311/2022, de 3 de mayo. Artículos 40-43, Anexo I (categorización nivel Alto) y Anexo II (73 medidas en nivel máximo).</div>
              </div>
              <div className="legal-box" style={{marginBottom:'24px'}}>
                <div className="legal-box__label">Impacto que determina categoría Alta</div>
                <div className="legal-box__text">Consecuencias muy graves o irreversibles: compromiso de seguridad nacional, interrupción de servicios esenciales, exposición masiva de datos ciudadanos.</div>
              </div>
              <div className="legal-box">
                <div className="legal-box__label">Controles requeridos</div>
                <div className="legal-box__text">Los 73 controles del Anexo II del RD 311/2022 en su nivel de aplicación máximo. Incluye requisitos físicos, criptográficos y de disponibilidad más estrictos.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉN LO NECESITA */}
      <section className="section section--pearl">
        <div className="container">
          <span className="label-tag">¿Te afecta?</span>
          <div className="gold-line"></div>
          <h2 className="section-title">¿Quién necesita el certificado ENS Alto?</h2>
          <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'720px',marginBottom:'48px'}}>El ENS Alto aplica a un espectro más reducido de organizaciones que las categorías inferiores, pero de mayor criticidad estratégica. Si tu empresa presta servicios tecnológicos a organismos que gestionan información clasificada, infraestructuras esenciales o servicios cuya interrupción tendría consecuencias nacionales, el ENS Alto es tu categoría. Los perfiles habituales son:</p>
          <div className="grid-3" style={{gap:'32px'}}>
            <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px'}}>🛡️</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Defensa y seguridad nacional</div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Proveedores tecnológicos del Ministerio de Defensa, Fuerzas y Cuerpos de Seguridad del Estado, organismos de inteligencia y cualquier entidad que gestione información clasificada o sistemas relacionados con la seguridad nacional.</p>
            </div>
            <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px'}}>⚡</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Infraestructuras críticas nacionales</div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Operadores de infraestructuras críticas en los sectores de energía, telecomunicaciones, transporte, agua y salud, y sus proveedores tecnológicos, cuando los sistemas de control industrial (OT/ICS) o de gestión tienen impacto Alto.</p>
            </div>
            <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px'}}>🏥</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Salud crítica a escala nacional</div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Plataformas de historia clínica nacional, sistemas de gestión de emergencias sanitarias, redes de vigilancia epidemiológica y cualquier sistema de salud pública cuya interrupción comprometería vidas humanas o la respuesta a crisis sanitarias.</p>
            </div>
            <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px'}}>🗃️</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Datos masivos de ciudadanos</div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Sistemas que gestionan datos personales muy sensibles de más de 100.000 ciudadanos, o datos que en caso de compromiso podrían tener consecuencias muy graves para los afectados, como bases de datos de salud, judiciales o de seguridad.</p>
            </div>
            <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px'}}>🚨</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Sistemas de emergencias y protección civil</div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Plataformas tecnológicas de gestión de emergencias (112, protección civil, gestión de catástrofes), sistemas de alerta temprana y plataformas de coordinación de respuesta a incidentes de seguridad pública.</p>
            </div>
            <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px'}}>🏦</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Sistemas financieros críticos del Estado</div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Plataformas de gestión tributaria nacional, sistemas de control presupuestario del Estado, registros públicos de alcance nacional y sistemas financieros cuya interrupción comprometería el funcionamiento del erario público.</p>
            </div>
          </div>
          <div className="cta-inline-box" style={{marginTop:'48px'}}>
            <span className="cta-inline-box__text">"El ENS Alto requiere una consultoría altamente especializada. Contacta con Avson para un análisis preliminar sin compromiso."</span>
            <Link to="/contacto" className="btn-primary">Hablar con un especialista →</Link>
          </div>
        </div>
      </section>

      {/* REQUISITOS ESPECÍFICOS ENS ALTO */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-7-5">
            <div className="anim-fade-up">
              <span className="label-tag">Controles específicos del ENS Alto</span>
              <div className="gold-line"></div>
              <h2 className="section-title">Los 73 controles del ENS Alto:<br />el nivel máximo de exigencia.</h2>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>El ENS Alto exige la implementación de los <strong>73 controles del Anexo II del RD 311/2022 en su nivel de aplicación máximo</strong>. Esto incluye no solo todos los controles de las categorías Básica y Media, sino medidas adicionales específicas de la categoría Alta que suponen requisitos técnicos y organizativos de alta complejidad.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>En el ámbito de la <strong>seguridad física</strong>, el ENS Alto exige controles de acceso físico a los centros de proceso de datos más estrictos, con registros de acceso, videovigilancia perimetral y, en algunos casos, redundancia física de las instalaciones. Las comunicaciones externas deben estar protegidas con mecanismos criptográficos certificados, y el acceso remoto está sometido a controles adicionales que van más allá del doble factor de autenticación.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>Los <strong>controles criptográficos</strong> del ENS Alto incluyen el uso de algoritmos y longitudes de clave certificados por el CCN, la gestión formal del ciclo de vida de claves y certificados, y el uso de dispositivos de firma y cifrado homologados para los sistemas más críticos. El cifrado en reposo y en tránsito es mandatorio para todos los datos en alcance.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>La <strong>continuidad de servicio</strong> en categoría Alta incluye requisitos de disponibilidad más estrictos: planes de continuidad probados con frecuencia semestral, recuperación ante desastres con RTO y RPO muy ajustados, redundancia de sistemas críticos y, en algunos casos, requisitos de grupo electrógeno con autonomía mínima de dos horas. La monitorización debe ser continua, con capacidad de detección y respuesta en tiempo real.</p>
            </div>
            <div className="anim-fade-up delay-2">
              <div style={{background:'var(--navy)',padding:'40px 32px'}}>
                <span className="label-tag">Controles distintivos del ENS Alto</span>
                <div style={{display:'flex',flexDirection:'column',gap:'16px',marginTop:'24px'}}>
                  <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
                    <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Criptografía avanzada certificada CCN</div>
                    <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Algoritmos y longitudes de clave certificadas. Dispositivos de cifrado homologados para sistemas críticos.</div>
                  </div>
                  <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
                    <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>SIEM y detección en tiempo real</div>
                    <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Sistema de gestión de eventos de seguridad (SIEM) con correlación de eventos y alertas en tiempo real.</div>
                  </div>
                  <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
                    <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Seguridad física reforzada</div>
                    <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Control de acceso físico estricto, videovigilancia y redundancia física de instalaciones críticas.</div>
                  </div>
                  <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
                    <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Continuidad con alta disponibilidad</div>
                    <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>RTO/RPO muy ajustados. Pruebas semestrales de recuperación. Grupo electrógeno con 2h de autonomía.</div>
                  </div>
                  <div style={{borderLeft:'2px solid rgba(201,168,76,0.4)',paddingLeft:'20px'}}>
                    <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>73 controles en nivel máximo</div>
                    <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Todos los controles del Anexo II aplicados en su nivel de exigencia más alto.</div>
                  </div>
                </div>
                <Link to="/contacto" className="btn-primary btn-primary--white" style={{marginTop:'32px'}}>Consultar proyecto ENS Alto →</Link>
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
          <h2 className="section-title">ENS Alto y el Centro Criptológico Nacional:<br /><em>el papel del CCN en la supervisión.</em></h2>
          <div className="grid-7-5" style={{marginTop:'48px'}}>
            <div>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>El <strong>Centro Criptológico Nacional (CCN)</strong>, organismo dependiente del Centro Nacional de Inteligencia (CNI), juega un papel central en el ecosistema del ENS Alto. El CCN es el organismo responsable de la supervisión técnica del Esquema Nacional de Seguridad, elabora las guías CCN-STIC que desarrollan y complementan los controles del RD 311/2022, y supervisa la seguridad de los sistemas de información de la Administración Pública española.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>Para los sistemas de categoría Alta que manejan <strong>información clasificada</strong> o que están relacionados con defensa y seguridad nacional, el CCN puede intervenir directamente en los procesos de acreditación, establecer requisitos adicionales más allá del RD 311/2022 y designar auditores habilitados específicamente para estos entornos. El cumplimiento de las guías CCN-STIC correspondientes a cada tipo de sistema (aplicaciones web, bases de datos, sistemas operativos, comunicaciones) es especialmente relevante en categoría Alta.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>El <strong>CCN-CERT</strong>, la capacidad de respuesta a incidentes del CCN, tiene competencias de supervisión sobre los sistemas de las Administraciones Públicas catalogados como críticos. Los operadores de sistemas ENS Alto deben mantener canales de comunicación establecidos con el CCN-CERT y reportar incidentes de seguridad significativos según los procedimientos establecidos en las guías CCN-STIC 817 y 817c.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>En Avson, nuestros consultores ENS Alto tienen conocimiento profundo de las guías CCN-STIC aplicables y experiencia en la interlocución con el CCN en el marco de proyectos de alta complejidad. Esta especialización es fundamental para abordar proyectos ENS Alto con garantías de éxito.</p>
            </div>
            <div>
              <div style={{background:'var(--navy)',padding:'40px 32px'}}>
                <span className="label-tag">Guías CCN-STIC relevantes</span>
                <div style={{display:'flex',flexDirection:'column',gap:'16px',marginTop:'24px'}}>
                  <div style={{padding:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                    <div style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>CCN-STIC 804</div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.5'}}>Guía de implantación del ENS. Referencia principal para el proceso de implementación.</div>
                  </div>
                  <div style={{padding:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                    <div style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>CCN-STIC 808</div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.5'}}>Verificación del cumplimiento de las medidas de seguridad del ENS.</div>
                  </div>
                  <div style={{padding:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                    <div style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>CCN-STIC 817</div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.5'}}>Gestión de ciberincidentes. Notificación al CCN-CERT para sistemas críticos.</div>
                  </div>
                  <div style={{padding:'16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                    <div style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Series CCN-STIC 500 y 600</div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.5'}}>Guías técnicas por tecnología: servidores, aplicaciones, comunicaciones, sistemas operativos.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ REQUIERE CONSULTORÍA ESPECIALIZADA */}
      <section className="section section--white">
        <div className="container">
          <span className="label-tag">Consultoría especializada</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Por qué el ENS Alto requiere<br /><em>una consultoría verdaderamente especializada.</em></h2>
          <div className="grid-7-5" style={{marginTop:'48px'}}>
            <div>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>El ENS Alto no es un proyecto de certificación estándar. Requiere un nivel de especialización, rigor y experiencia muy superior al de las categorías Básica y Media. La razón es sencilla: los sistemas en alcance son sistemas críticos cuyo fallo podría tener consecuencias muy graves, y la entidad auditora y el CCN aplicarán el mismo nivel de exigencia en la revisión.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>Desde el punto de vista técnico, el ENS Alto exige implementar controles que van más allá de la documentación y las políticas: criptografía avanzada con dispositivos homologados, sistemas de monitorización en tiempo real (SIEM) con capacidad de correlación de eventos, arquitecturas de red segmentadas y reforzadas, y sistemas de respaldo con tiempos de recuperación muy ajustados. Cada uno de estos elementos requiere expertise técnico específico.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>Desde el punto de vista organizativo, el ENS Alto exige un nivel de madurez en gestión de la seguridad que no se construye de la noche a la mañana. Los procedimientos de gestión de incidentes deben estar probados, los planes de continuidad deben haberse ensayado, y el personal debe haber recibido formación específica en seguridad de la información.</p>
              <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>En Avson, los proyectos ENS Alto los lideran consultores senior con experiencia acreditada en entornos de alta seguridad, conocimiento de las guías CCN-STIC y experiencia directa en procesos de auditoría de sistemas críticos. No se trata de adaptar una metodología de ENS Básico o Medio: el ENS Alto tiene su propio enfoque, su propio equipo y su propio nivel de exigencia interna.</p>
            </div>
            <div>
              <div style={{background:'var(--navy)',padding:'40px 32px'}}>
                <span className="label-tag">Por qué Avson para el ENS Alto</span>
                <div style={{display:'flex',flexDirection:'column',gap:'16px',marginTop:'24px'}}>
                  <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
                    <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'16px',fontWeight:'700',color:'var(--navy)'}}>✓</div>
                    <div>
                      <p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Consultores senior especializados</p>
                      <p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Equipo con experiencia acreditada en proyectos ENS Alto y entornos de alta seguridad.</p>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
                    <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(201,168,76,0.2)',border:'1px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'16px',fontWeight:'700',color:'var(--gold)'}}>✓</div>
                    <div>
                      <p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Conocimiento profundo CCN-STIC</p>
                      <p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Dominio de todas las guías CCN-STIC aplicables a sistemas ENS Alto.</p>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
                    <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(201,168,76,0.2)',border:'1px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'16px',fontWeight:'700',color:'var(--gold)'}}>✓</div>
                    <div>
                      <p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Garantía de éxito por escrito</p>
                      <p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>La misma garantía que en las categorías inferiores: si no aprobas, seguimos sin coste adicional.</p>
                    </div>
                  </div>
                  <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
                    <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(201,168,76,0.2)',border:'1px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'16px',fontWeight:'700',color:'var(--gold)'}}>✓</div>
                    <div>
                      <p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Servicio en toda España</p>
                      <p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Presencial o remoto según las necesidades del proyecto y la clasificación de la información.</p>
                    </div>
                  </div>
                </div>
                <Link to="/contacto" className="btn-primary btn-primary--white" style={{marginTop:'32px'}}>Pide presupuesto ENS Alto →</Link>
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
          <h2 className="section-title">Proceso ENS Alto con Avson:<br /><em>5-7 meses según complejidad.</em></h2>
          <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'680px',marginBottom:'48px'}}>El ENS Alto requiere mayor tiempo de implementación que las categorías inferiores, dado el mayor número de controles, su mayor exigencia y la complejidad técnica de algunos de ellos. El equipo Avson asignado a proyectos ENS Alto es ampliado respecto al estándar, con coordinación estrecha con el área de seguridad del cliente en todas las fases del proyecto.</p>
          <div className="timeline mt-32">
            <div className="timeline__step anim-fade-up">
              <div className="timeline__number">01</div>
              <div className="timeline__week">Semanas 1-3</div>
              <div className="timeline__title">Análisis de alcance y categorización formal</div>
              <div className="timeline__desc">Análisis formal de sistemas en alcance según MAGERIT. Valoración de activos y determinación formal de la categoría Alta. Definición del alcance de la certificación y revisión de la arquitectura de seguridad existente. GAP analysis completo respecto a los 73 controles ENS Alto.</div>
            </div>
            <div className="timeline__step anim-fade-up delay-1">
              <div className="timeline__number">02</div>
              <div className="timeline__week">Semanas 4-18</div>
              <div className="timeline__title">Implementación integral de controles ENS Alto</div>
              <div className="timeline__desc">Implementación de los 73 controles en nivel máximo: SGSI completo, criptografía avanzada, SIEM, controles de acceso reforzados, seguridad física, gestión de vulnerabilidades, planes de continuidad con pruebas, y toda la documentación requerida por el CCN-STIC.</div>
            </div>
            <div className="timeline__step anim-fade-up delay-2">
              <div className="timeline__number">03</div>
              <div className="timeline__week">Semanas 19-22</div>
              <div className="timeline__title">Auditoría interna y simulacros de certificación</div>
              <div className="timeline__desc">Auditoría interna exhaustiva con revisión técnica y documental de todos los controles. Simulacros de auditoría externa. Pruebas de recuperación y continuidad. Corrección de todas las no conformidades detectadas antes de la auditoría externa.</div>
            </div>
            <div className="timeline__step anim-fade-up delay-3">
              <div className="timeline__number">04</div>
              <div className="timeline__week">Semanas 23-28</div>
              <div className="timeline__title">Auditoría de certificación ENAC</div>
              <div className="timeline__desc">Coordinación integral con la entidad auditora acreditada por ENAC para ENS Alto. Acompañamiento en todas las sesiones de auditoría. Respuesta a no conformidades. Garantía de éxito por escrito. Emisión del certificado ENS Alto.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE APLICACIÓN */}
      <section className="section section--white">
        <div className="container">
          <span className="label-tag">Casos de aplicación</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Casos de aplicación del ENS Alto:<br />dónde marca la diferencia.</h2>
          <div className="grid-3" style={{gap:'32px',marginTop:'48px'}}>
            <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px'}}>🔬</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Defensa y proveedores del sector</div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Empresas de tecnología que contratan con el Ministerio de Defensa, DGAM, INTA o cualquier organismo de defensa necesitan el ENS Alto para sistemas que procesan información clasificada o estratégica. El ENS Alto es la puerta de entrada a este mercado especializado.</p>
            </div>
            <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px'}}>🚦</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Gestión de emergencias nacionales</div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Plataformas que dan soporte a la gestión de emergencias nacionales (catástrofes naturales, emergencias sanitarias, alertas civiles) donde la disponibilidad es crítica y la interrupción del sistema podría costar vidas o comprometer la coordinación de la respuesta.</p>
            </div>
            <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
              <div style={{fontSize:'28px',marginBottom:'16px'}}>🏦</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Grandes plataformas de salud pública</div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Sistemas de historia clínica nacional o interoperable entre CCAA, plataformas de vigilancia epidemiológica nacional y sistemas de prescripción electrónica que procesan datos de salud de millones de ciudadanos con requisitos de disponibilidad crítica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--pearl" id="faq">
        <div className="container">
          <span className="label-tag">Preguntas frecuentes</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Preguntas frecuentes sobre<br />el certificado ENS Alto.</h2>
          <div className="faq-list mt-48" style={{maxWidth:'820px'}}>
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>{item.question}</div>
                <div className="faq-item__answer">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section section--white">
        <div className="container">
          <span className="label-tag">Casos reales</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{maxWidth:'600px'}}>Quien necesita ENS Alto,<br /><em>nos elige por especialización.</em></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'24px',marginTop:'32px'}}>
            <div style={{background:'var(--pearl,#F7F7F5)',border:'1px solid #E5E5E0',borderRadius:'12px',padding:'28px'}}>
              <div style={{color:'#C9A84C',fontSize:'14px',letterSpacing:'2px',marginBottom:'12px'}}>★★★★★</div>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'300',color:'#1A2744',lineHeight:'1.5',fontStyle:'italic',margin:'0 0 16px'}}>"Operamos sistemas para infraestructura crítica y el pliego exigía ENS Alto. No es un proyecto para generalistas. El equipo de Avson conocía el CCN-STIC al detalle y superamos la auditoría sin no conformidades mayores."</p>
              <p style={{fontFamily:"'Inter',sans-serif",fontSize:'13px',color:'#7A8499',fontWeight:'600',margin:'0'}}>Silvia R. — CISO · Operador de infraestructura crítica</p>
              <p style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'#C9A84C',margin:'4px 0 0'}}>ENS Alto certificado ✓</p>
            </div>
            <div style={{background:'var(--pearl,#F7F7F5)',border:'1px solid #E5E5E0',borderRadius:'12px',padding:'28px'}}>
              <div style={{color:'#C9A84C',fontSize:'14px',letterSpacing:'2px',marginBottom:'12px'}}>★★★★★</div>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'300',color:'#1A2744',lineHeight:'1.5',fontStyle:'italic',margin:'0 0 16px'}}>"Ofrecemos servicios cloud a organismos públicos y necesitábamos ENS Alto del sistema que prestamos, no solo de nuestras oficinas. Avson entendió el alcance real desde la primera reunión."</p>
              <p style={{fontFamily:"'Inter',sans-serif",fontSize:'13px',color:'#7A8499',fontWeight:'600',margin:'0'}}>Andrés D. — CTO · Proveedor cloud sector público</p>
              <p style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'#C9A84C',margin:'4px 0 0'}}>ENS Alto + ISO 27001 ✓</p>
            </div>
          </div>
        </div>
      </section>

      {/* TAMBIÉN TE INTERESA */}
      <section className="section section--navy">
        <div className="container" style={{textAlign:'center'}}>
          <span className="label-tag">Categorías ENS</span>
          <div className="gold-line" style={{margin:'0 auto 24px'}}></div>
          <h2 className="section-title section-title--white">También te puede interesar</h2>
          <p style={{fontSize:'16px',color:'rgba(255,255,255,0.5)',maxWidth:'560px',margin:'0 auto 48px'}}>Explora todas las categorías del Esquema Nacional de Seguridad y el resto de servicios de consultoría GRC que ofrece Avson en toda España.</p>
          <div style={{display:'flex',gap:'24px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/ens-basico" style={{display:'inline-block',padding:'20px 36px',border:'1px solid rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.75)',fontFamily:'var(--font-sans)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none',letterSpacing:'0.04em',transition:'all 0.2s'}}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}>ENS Básico →</Link>
            <Link to="/ens-medio" style={{display:'inline-block',padding:'20px 36px',border:'1px solid rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.75)',fontFamily:'var(--font-sans)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none',letterSpacing:'0.04em',transition:'all 0.2s'}}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}>ENS Medio →</Link>
            <Link to="/ens-alto" style={{display:'inline-block',padding:'20px 36px',border:'2px solid var(--gold)',color:'var(--gold)',fontFamily:'var(--font-sans)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none',letterSpacing:'0.04em',background:'rgba(201,168,76,0.08)'}}>ENS Alto (actual)</Link>
          </div>
          <div className="mt-48">
            <Link to="/ens" className="btn-text" style={{color:'rgba(255,255,255,0.5)'}}>← Ver resumen de todas las categorías ENS</Link>
          </div>
        </div>
      </section>
    </>
  )
}
