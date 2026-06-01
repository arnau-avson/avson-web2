import { Link } from 'react-router-dom'

export default function PrivacidadPage() {
  return (
    <>
<section style={{padding:'140px 0 80px',background:'var(--pearl)'}}>
  <div className="container" style={{maxWidth:'800px'}}>
    <span className="label-tag">Legal</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4vw,56px)',fontWeight:'300',color:'var(--navy)',marginBottom:'32px'}}>Politica de Privacidad</h1>
    <p style={{fontSize:'13px',color:'var(--text-muted)',marginBottom:'48px'}}>Ultima actualizacion: junio de 2025</p>

    <div style={{display:'flex',flexDirection:'column',gap:'48px'}}>

      {/* 1 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>1. Responsable del Tratamiento</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'12px'}}>En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Organica 3/2018, de 5 de diciembre, de Proteccion de Datos Personales y garantia de los derechos digitales (LOPDGDD), le informamos que el responsable del tratamiento de sus datos personales es:</p>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'28px 32px',fontSize:'14px',lineHeight:'2'}}>
          <p style={{margin:'0'}}><strong>Denominacion social:</strong> Avson Consultoria Estrategica SLU</p>
          <p style={{margin:'0'}}><strong>Nombre comercial:</strong> Avson GRC</p>
          <p style={{margin:'0'}}><strong>CIF:</strong> B10560795</p>
          <p style={{margin:'0'}}><strong>Domicilio social:</strong> Calle Pedro Munoz Seca 2 (Madrid) · Plaza Francesc Macia 7 (Barcelona), Espana</p>
          <p style={{margin:'0'}}><strong>Email de contacto:</strong> <a href="mailto:hello@avson.eu" style={{color:'var(--navy)'}}>hello@avson.eu</a></p>
          <p style={{margin:'0'}}><strong>Web:</strong> <a href="https://avson.eu" style={{color:'var(--navy)'}}>https://avson.eu</a></p>
        </div>
      </div>

      {/* 2 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>2. Datos que Recopilamos</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'16px'}}>Recopilamos datos personales en los siguientes contextos:</p>
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          <div style={{background:'var(--white)',borderLeft:'3px solid var(--gold)',padding:'20px 24px'}}>
            <p style={{fontSize:'14px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}><strong>Formulario de contacto y solicitud de diagnostico</strong></p>
            <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',margin:'0'}}>Nombre y apellidos, correo electronico, telefono (opcional), nombre de la empresa, sector y mensaje libre. Estos datos son facilitados voluntariamente por el usuario.</p>
          </div>
          <div style={{background:'var(--white)',borderLeft:'3px solid var(--gold)',padding:'20px 24px'}}>
            <p style={{fontSize:'14px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}><strong>Newsletter</strong></p>
            <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',margin:'0'}}>Direccion de correo electronico para el envio de nuestra newsletter mensual sobre ENS y cumplimiento normativo.</p>
          </div>
          <div style={{background:'var(--white)',borderLeft:'3px solid var(--gold)',padding:'20px 24px'}}>
            <p style={{fontSize:'14px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}><strong>Datos de navegacion y cookies</strong></p>
            <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',margin:'0'}}>Direccion IP, tipo de navegador, sistema operativo, paginas visitadas, tiempo de permanencia y comportamiento de navegacion, a traves de cookies analiticas (Google Analytics). Consulte nuestra <Link to="/cookies" style={{color:'var(--navy)'}}>Politica de Cookies</Link> para mas informacion.</p>
          </div>
          <div style={{background:'var(--white)',borderLeft:'3px solid var(--gold)',padding:'20px 24px'}}>
            <p style={{fontSize:'14px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}><strong>Registro en webinars</strong></p>
            <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',margin:'0'}}>Nombre, correo electronico y empresa para la gestion de inscripciones a nuestros webinars formativos gratuitos.</p>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>3. Finalidades del Tratamiento y Base Juridica</h2>
        <div style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'13px'}}>
            <thead>
              <tr style={{background:'var(--navy)',color:'var(--white)'}}>
                <th style={{padding:'12px 16px',textAlign:'left',fontWeight:'500'}}>Finalidad</th>
                <th style={{padding:'12px 16px',textAlign:'left',fontWeight:'500'}}>Base juridica</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'14px 16px',color:'var(--text)',lineHeight:'1.5'}}>Responder a consultas y solicitudes de presupuesto sin compromiso</td>
                <td style={{padding:'14px 16px',color:'var(--text)'}}>Interes legitimo / Consentimiento (art. 6.1.a y 6.1.f RGPD)</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--pearl)'}}>
                <td style={{padding:'14px 16px',color:'var(--text)',lineHeight:'1.5'}}>Gestion de la relacion comercial y prestacion de servicios de consultoria</td>
                <td style={{padding:'14px 16px',color:'var(--text)'}}>Ejecucion de contrato (art. 6.1.b RGPD)</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'14px 16px',color:'var(--text)',lineHeight:'1.5'}}>Envio de newsletter con contenidos sobre ENS y cumplimiento normativo</td>
                <td style={{padding:'14px 16px',color:'var(--text)'}}>Consentimiento (art. 6.1.a RGPD)</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)',background:'var(--pearl)'}}>
                <td style={{padding:'14px 16px',color:'var(--text)',lineHeight:'1.5'}}>Gestion de inscripciones a webinars</td>
                <td style={{padding:'14px 16px',color:'var(--text)'}}>Consentimiento / Ejecucion de contrato (art. 6.1.a y 6.1.b RGPD)</td>
              </tr>
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td style={{padding:'14px 16px',color:'var(--text)',lineHeight:'1.5'}}>Analisis estadistico del trafico web y mejora de la experiencia de usuario</td>
                <td style={{padding:'14px 16px',color:'var(--text)'}}>Consentimiento (art. 6.1.a RGPD)</td>
              </tr>
              <tr style={{background:'var(--pearl)'}}>
                <td style={{padding:'14px 16px',color:'var(--text)',lineHeight:'1.5'}}>Cumplimiento de obligaciones legales (fiscales, contables, mercantiles)</td>
                <td style={{padding:'14px 16px',color:'var(--text)'}}>Obligacion legal (art. 6.1.c RGPD)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>4. Plazos de Conservacion</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'16px'}}>Los datos personales seran conservados durante los plazos que se indican a continuacion:</p>
        <ul style={{fontSize:'14px',lineHeight:'2',color:'var(--text)',paddingLeft:'20px'}}>
          <li><strong>Consultas y solicitudes de diagnostico:</strong> 12 meses desde la ultima comunicacion, salvo que se inicie una relacion comercial.</li>
          <li><strong>Clientes activos:</strong> Durante la vigencia de la relacion contractual y, posteriormente, durante los plazos de prescripcion legal aplicables (con caracter general, 5 anos para obligaciones mercantiles y 4 anos para obligaciones fiscales).</li>
          <li><strong>Newsletter:</strong> Hasta que el interesado retire su consentimiento o solicite la baja.</li>
          <li><strong>Webinars:</strong> 6 meses desde la celebracion del evento, salvo que el participante se convierta en cliente o newsletter.</li>
          <li><strong>Datos de navegacion (cookies analiticas):</strong> Segun los plazos configurados en Google Analytics (maximo 14 meses).</li>
        </ul>
        <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text-muted)',marginTop:'16px'}}>Transcurridos estos plazos, los datos seran suprimidos o anonimizados de forma irreversible.</p>
      </div>

      {/* 5 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>5. Destinatarios y Encargados del Tratamiento</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'16px'}}>Sus datos no seran cedidos a terceros, salvo en los siguientes supuestos:</p>
        <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px',display:'grid',gridTemplateColumns:'1fr 2fr',gap:'16px',alignItems:'start'}}>
            <div>
              <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0'}}>Google LLC</p>
              <p style={{fontSize:'12px',color:'var(--text-muted)',margin:'4px 0 0'}}>Analytics / Fonts / Ads</p>
            </div>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>Servicio de analitica web (Google Analytics) y tipografias (Google Fonts). Google LLC, con sede en EE.UU., actua como encargado del tratamiento bajo el Marco de Privacidad de Datos UE-EE.UU. Consulte la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style={{color:'var(--navy)'}}>politica de privacidad de Google</a>.</p>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px',display:'grid',gridTemplateColumns:'1fr 2fr',gap:'16px',alignItems:'start'}}>
            <div>
              <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0'}}>Proveedor de hosting</p>
              <p style={{fontSize:'12px',color:'var(--text-muted)',margin:'4px 0 0'}}>Infraestructura web</p>
            </div>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>El servidor web que aloja avson.eu puede procesar datos de conexion (IP, logs) en el marco de la prestacion del servicio de hosting, actuando como encargado del tratamiento con las garantias contractuales adecuadas.</p>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px',display:'grid',gridTemplateColumns:'1fr 2fr',gap:'16px',alignItems:'start'}}>
            <div>
              <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0'}}>Obligacion legal</p>
              <p style={{fontSize:'12px',color:'var(--text-muted)',margin:'4px 0 0'}}>Autoridades publicas</p>
            </div>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>En caso de requerimiento legal por parte de las Fuerzas y Cuerpos de Seguridad del Estado, autoridades judiciales, tributarias o administrativas competentes.</p>
          </div>
        </div>
      </div>

      {/* 6 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>6. Transferencias Internacionales de Datos</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'12px'}}>Algunos de nuestros proveedores (en particular Google LLC) tienen su sede en los Estados Unidos de America. Estas transferencias internacionales se realizan al amparo del Marco de Privacidad de Datos UE-EE.UU. (<em>EU-U.S. Data Privacy Framework</em>), adoptado por la Comision Europea mediante Decision de Adecuacion de 10 de julio de 2023, que garantiza un nivel de proteccion equivalente al del Espacio Economico Europeo.</p>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)'}}>No realizamos transferencias internacionales a paises que no cuenten con una decision de adecuacion o garantias apropiadas conforme al art. 46 RGPD.</p>
      </div>

      {/* 7 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>7. Derechos del Interesado</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'20px'}}>De conformidad con el RGPD y la LOPDGDD, usted tiene derecho a:</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}>Derecho de Acceso</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>Obtener confirmacion sobre si tratamos sus datos y acceder a los mismos, asi como a informacion sobre las finalidades, categorias de datos, destinatarios y plazos de conservacion.</p>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}>Derecho de Rectificacion</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>Solicitar la correccion de datos inexactos o incompletos que le conciernan.</p>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}>Derecho de Supresion ("al olvido")</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>Solicitar la eliminacion de sus datos cuando, entre otras causas, ya no sean necesarios para los fines para los que fueron recogidos o retire el consentimiento.</p>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}>Derecho de Portabilidad</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>Recibir sus datos en un formato estructurado, de uso comun y lectura mecanica, y a transmitirlos a otro responsable cuando el tratamiento se base en el consentimiento o en un contrato.</p>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}>Derecho de Limitacion</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>Solicitar la suspension del tratamiento de sus datos en determinados supuestos, como mientras se verifica la exactitud de los datos impugnados.</p>
          </div>
          <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}>Derecho de Oposicion</p>
            <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>Oponerse al tratamiento de sus datos por motivos relacionados con su situacion particular, cuando el tratamiento se base en el interes legitimo del responsable.</p>
          </div>
        </div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px',marginTop:'16px'}}>
          <p style={{fontSize:'13px',fontWeight:'600',color:'var(--navy)',margin:'0 0 8px'}}>Derecho a retirar el consentimiento</p>
          <p style={{fontSize:'13px',lineHeight:'1.6',color:'var(--text)',margin:'0'}}>Cuando el tratamiento se base en su consentimiento, puede retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento previo a su retirada.</p>
        </div>
      </div>

      {/* 8 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>8. Como Ejercer sus Derechos</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)',marginBottom:'16px'}}>Puede ejercer cualquiera de los derechos anteriores enviando una solicitud por escrito a:</p>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'28px 32px',fontSize:'14px',lineHeight:'2'}}>
          <p style={{margin:'0'}}><strong>Por correo electronico:</strong> <a href="mailto:hello@avson.eu" style={{color:'var(--navy)'}}>hello@avson.eu</a></p>
          <p style={{margin:'0'}}><strong>Por correo postal:</strong> Avson Consultoria Estrategica SLU — Calle Pedro Munoz Seca 2 (Madrid) · Plaza Francesc Macia 7 (Barcelona)</p>
          <p style={{margin:'0'}}><strong>Asunto:</strong> "Ejercicio de derechos RGPD"</p>
        </div>
        <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text)',marginTop:'16px'}}>Su solicitud debe incluir: nombre completo, copia de DNI/NIE o documento identificativo equivalente, descripcion del derecho que desea ejercer y, en su caso, documentacion de apoyo. Le responderemos en el plazo maximo de un mes desde la recepcion de la solicitud completa, plazo que podra prorrogarse otros dos meses en casos de especial complejidad.</p>
      </div>

      {/* 9 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>9. Reclamacion ante la Autoridad de Control</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)'}}>Si considera que el tratamiento de sus datos personales infringe la normativa aplicable, tiene derecho a presentar una reclamacion ante la Agencia Espanola de Proteccion de Datos (AEPD), autoridad de control competente en Espana:</p>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'20px 24px',marginTop:'16px',fontSize:'14px',lineHeight:'1.8'}}>
          <p style={{margin:'0'}}><strong>Agencia Espanola de Proteccion de Datos (AEPD)</strong></p>
          <p style={{margin:'0'}}>C/ Jorge Juan, 6 — 28001 Madrid</p>
          <p style={{margin:'0'}}>Web: <a href="https://www.aepd.es" target="_blank" rel="noopener" style={{color:'var(--navy)'}}>www.aepd.es</a></p>
          <p style={{margin:'0'}}>Sede electronica: <a href="https://sedeagpd.gob.es" target="_blank" rel="noopener" style={{color:'var(--navy)'}}>sedeagpd.gob.es</a></p>
        </div>
        <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text-muted)',marginTop:'16px'}}>Le recomendamos que, antes de presentar una reclamacion ante la AEPD, se dirija a nosotros para intentar resolver la cuestion de forma amistosa.</p>
      </div>

      {/* 10 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>10. Cookies</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)'}}>Este sitio web utiliza cookies propias y de terceros. Para informacion detallada sobre los tipos de cookies utilizadas, sus finalidades, duraciones y como gestionarlas, consulte nuestra <Link to="/cookies" style={{color:'var(--navy)',fontWeight:'500'}}>Politica de Cookies</Link>.</p>
      </div>

      {/* 11 */}
      <div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px',paddingBottom:'12px',borderBottom:'1px solid var(--border)'}}>11. Modificaciones de la Politica de Privacidad</h2>
        <p style={{fontSize:'15px',lineHeight:'1.8',color:'var(--text)'}}>Avson Consultoria Estrategica SLU se reserva el derecho de modificar la presente politica de privacidad para adaptarla a cambios legislativos, jurisprudenciales o de practica empresarial. Cualquier modificacion relevante sera notificada a los usuarios mediante aviso destacado en el sitio web o, en su caso, por correo electronico. La fecha de ultima actualizacion aparece siempre en la cabecera de este documento.</p>
        <p style={{fontSize:'14px',lineHeight:'1.7',color:'var(--text-muted)',marginTop:'12px'}}>Le recomendamos revisar periodicamente esta pagina para mantenerse informado sobre como protegemos su informacion.</p>
      </div>

    </div>
  </div>
</section>
    </>
  )
}
