import { Link } from 'react-router-dom'

export default function CookiesPage() {
  return (
    <>
<section style={{padding:'140px 0 80px',background:'var(--pearl)'}}>
  <div className="container" style={{maxWidth:'800px'}}>
    <span className="label-tag">Legal</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4vw,56px)',fontWeight:'300',color:'var(--navy)',marginBottom:'32px'}}>Política de Cookies</h1>
    <p style={{fontSize:'13px',color:'var(--text-muted)',marginBottom:'48px'}}>Última actualización: junio de 2025</p>

    <div style={{display:'flex',flexDirection:'column',gap:'48px'}}>

      
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>1. ¿Qué son las cookies?</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'12px'}}>Las cookies son pequeños archivos de texto que los sitios web instalan en el dispositivo del usuario (ordenador, smartphone, tablet) cuando este los visita. Permiten al sitio web recordar información sobre la visita —como el idioma preferido y otras opciones— para facilitar la próxima visita y hacer el sitio más útil para usted.</p>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)'}}>La presente política de cookies se rige por el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), así como por el Reglamento (UE) 2016/679 (RGPD) en lo relativo al tratamiento de datos personales a través de cookies.</p>
      </div>

      
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>2. Tipos de cookies que utilizamos</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'20px'}}>En avson.eu utilizamos los siguientes tipos de cookies:</p>

        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',overflow:'hidden'}}>
            <div style={{background:'var(--navy)',padding:'16px 24px',display:'flex',alignItems:'center',gap:'12px'}}>
              <span style={{fontSize:'11px',letterSpacing:'0.1em',textTransform:'uppercase',fontWeight:'500',color:'var(--white)'}}>Cookies Propias — Técnicas / Sesión</span>
            </div>
            <div style={{padding:'20px 24px'}}>
              <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',margin:'0'}}>Son cookies estrictamente necesarias para el funcionamiento del sitio web. Permiten recordar sus preferencias de privacidad (aceptación del banner de cookies) y garantizan la correcta navegación. <strong>No requieren consentimiento</strong> según el art. 22.2 LSSI-CE.</p>
            </div>
          </div>

          <div style={{background:'var(--white)',border:'1px solid var(--border)',overflow:'hidden'}}>
            <div style={{background:'var(--navy)',padding:'16px 24px'}}>
              <span style={{fontSize:'11px',letterSpacing:'0.1em',textTransform:'uppercase',fontWeight:'500',color:'var(--white)'}}>Cookies Analíticas — Google Analytics</span>
            </div>
            <div style={{padding:'20px 24px'}}>
              <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',margin:'0'}}>Proporcionadas por Google LLC a través de Google Analytics. Nos permiten medir el tráfico del sitio web, el comportamiento de los usuarios y el rendimiento del contenido. Los datos se agregan y anonimizan. <strong>Requieren su consentimiento previo.</strong></p>
            </div>
          </div>

          <div style={{background:'var(--white)',border:'1px solid var(--border)',overflow:'hidden'}}>
            <div style={{background:'var(--navy)',padding:'16px 24px'}}>
              <span style={{fontSize:'11px',letterSpacing:'0.1em',textTransform:'uppercase',fontWeight:'500',color:'var(--white)'}}>Cookies de Terceros — Google Fonts</span>
            </div>
            <div style={{padding:'20px 24px'}}>
              <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',margin:'0'}}>Google Fonts puede establecer cookies o registrar solicitudes de fuentes tipográficas. No utilizamos dichas cookies con finalidades de seguimiento. La carga de fuentes se realiza en el contexto de la prestación del servicio tipográfico.</p>
            </div>
          </div>
        </div>
      </div>

      
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>3. Tabla de cookies</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'20px'}}>A continuación se detallan las cookies concretas utilizadas en avson.eu:</p>
        <div style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'12px',minWidth:'600px'}}>
            <thead>
              <tr style={{background:'var(--navy)',color:'var(--white)'}}>
                <th style={{padding:'12px 14px',textAlign:'left',fontWeight:'500'}}>Nombre</th>
                <th style={{padding:'12px 14px',textAlign:'left',fontWeight:'500'}}>Tipo</th>
                <th style={{padding:'12px 14px',textAlign:'left',fontWeight:'500'}}>Finalidad</th>
                <th style={{padding:'12px 14px',textAlign:'left',fontWeight:'500'}}>Duración</th>
                <th style={{padding:'12px 14px',textAlign:'left',fontWeight:'500'}}>Proveedor</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'12px 14px',color:'var(--navy)',fontWeight:'500',fontFamily:'monospace'}}>cookieAccepted</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Propia · Técnica</td>
                <td style={{padding:'12px 14px',color:'var(--text)',lineHeight:'1.5'}}>Almacena la preferencia de aceptación del banner de cookies (localStorage)</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Persistente</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>avson.eu</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--pearl)'}}>
                <td style={{padding:'12px 14px',color:'var(--navy)',fontWeight:'500',fontFamily:'monospace'}}>exitShown</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Propia · Sesión</td>
                <td style={{padding:'12px 14px',color:'var(--text)',lineHeight:'1.5'}}>Controla si el modal de exit-intent ya ha sido mostrado en la sesión actual</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Sesión</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>avson.eu</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'12px 14px',color:'var(--navy)',fontWeight:'500',fontFamily:'monospace'}}>_ga</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Terceros · Analítica</td>
                <td style={{padding:'12px 14px',color:'var(--text)',lineHeight:'1.5'}}>Distingue usuarios únicos asignando un número generado aleatoriamente como identificador de cliente</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>2 años</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Google Analytics</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--pearl)'}}>
                <td style={{padding:'12px 14px',color:'var(--navy)',fontWeight:'500',fontFamily:'monospace'}}>_ga_XXXXXXXX</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Terceros · Analítica</td>
                <td style={{padding:'12px 14px',color:'var(--text)',lineHeight:'1.5'}}>Almacena el estado de la sesión (Google Analytics 4)</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>2 años</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Google Analytics</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'12px 14px',color:'var(--navy)',fontWeight:'500',fontFamily:'monospace'}}>_gid</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Terceros · Analítica</td>
                <td style={{padding:'12px 14px',color:'var(--text)',lineHeight:'1.5'}}>Distingue usuarios. Almacena información sobre cómo usan el sitio</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>24 horas</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Google Analytics</td>
              </tr>
              <tr style={{background:'var(--pearl)'}}>
                <td style={{padding:'12px 14px',color:'var(--navy)',fontWeight:'500',fontFamily:'monospace'}}>_gat</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Terceros · Analítica</td>
                <td style={{padding:'12px 14px',color:'var(--text)',lineHeight:'1.5'}}>Limita la tasa de solicitudes al servidor de Google Analytics</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>1 minuto</td>
                <td style={{padding:'12px 14px',color:'var(--text)'}}>Google Analytics</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{fontSize:'12px',color:'var(--text-muted)',marginTop:'12px'}}>(*) Las cookies analíticas de Google solo se instalan si el usuario acepta las cookies a través del banner de consentimiento.</p>
      </div>

      
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>4. Cómo gestionar y desactivar las cookies</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'20px'}}>Puede retirar su consentimiento o gestionar las cookies en cualquier momento a través de las siguientes vías:</p>

        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px',marginBottom:'20px'}}>
          <p style={{fontSize:'14px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}>Desde nuestro panel de cookies</p>
          <p style={{fontSize:'14px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>Elimine la entrada <code style={{background:'var(--pearl)',padding:'2px 6px',fontSize:'12px'}}>cookieAccepted</code> de su localStorage (puede hacerlo desde las herramientas de desarrollo del navegador, pestaña Application {'>'} Local Storage) para que vuelva a aparecer el banner de consentimiento.</p>
        </div>

        <p style={{fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'16px'}}>O configurando su navegador:</p>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 10px'}}>Google Chrome</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0 0 10px'}}>Menú (⋮) → Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</p>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" style={{fontSize:'12px',color:'var(--navy)'}}>Instrucciones de Google →</a>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 10px'}}>Mozilla Firefox</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0 0 10px'}}>Menú (☰) → Opciones → Privacidad y Seguridad → Cookies y datos del sitio</p>
            <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener" style={{fontSize:'12px',color:'var(--navy)'}}>Instrucciones de Mozilla →</a>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 10px'}}>Apple Safari</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0 0 10px'}}>Safari → Preferencias → Privacidad → Gestionar datos de sitios web</p>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener" style={{fontSize:'12px',color:'var(--navy)'}}>Instrucciones de Apple →</a>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 10px'}}>Microsoft Edge</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0 0 10px'}}>Menú (…) → Configuración → Privacidad, búsqueda y servicios → Cookies y permisos del sitio</p>
            <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" style={{fontSize:'12px',color:'var(--navy)'}}>Instrucciones de Microsoft →</a>
          </div>
        </div>

        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px',marginTop:'16px'}}>
          <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}>Opt-out de Google Analytics</p>
          <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>También puede instalar el <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" style={{color:'var(--navy)'}}>complemento de inhabilitación de Google Analytics</a> para su navegador, que impide que JavaScript de Google Analytics recopile información sobre sus visitas a cualquier sitio web.</p>
        </div>

        <p style={{fontSize:'13px',lineHeight:'1.7',color:'var(--text-muted)',marginTop:'16px'}}>Tenga en cuenta que desactivar determinadas cookies puede afectar a la funcionalidad del sitio web o impedir el correcto funcionamiento de algunas secciones.</p>
      </div>

      
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>5. Más información</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'12px'}}>Para cualquier consulta relacionada con el uso de cookies en avson.eu, puede contactarnos en:</p>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px 28px',fontSize:'14px',lineHeight:'2'}}>
          <p style={{margin:'0'}}><strong>Avson Consultoría Estratégica SLU</strong></p>
          <p style={{margin:'0'}}>Calle Martínez Izquierdo 90, 28028 Madrid</p>
          <p style={{margin:'0'}}><a href="mailto:hello@avson.eu" style={{color:'var(--navy)'}}>hello@avson.eu</a></p>
        </div>
        <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',marginTop:'16px'}}>Para más información general sobre cookies y cómo le afectan, puede visitar la <a href="https://www.aepd.es" target="_blank" rel="noopener" style={{color:'var(--navy)'}}>web de la Agencia Española de Protección de Datos (AEPD)</a> y la <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener" style={{color:'var(--navy)'}}>plataforma Your Online Choices</a>.</p>
        <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',marginTop:'12px'}}>Consulte también nuestra <Link to="/privacidad" style={{color:'var(--navy)',fontWeight:'500'}}>Política de Privacidad</Link> para información completa sobre el tratamiento de datos personales.</p>
      </div>

    </div>
  </div>
</section>
    </>
  )
}
