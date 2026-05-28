import { Link } from 'react-router-dom'

export default function ContactoPage() {
  return (
    <>
<div style={{background:'#1A2744',color:'rgba(255,255,255,0.85)',fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'400',letterSpacing:'0.04em',textAlign:'center',padding:'10px 40px',position:'relative',zIndex:'200'}}>
    🔒 <strong>Garantía de éxito al 100% por escrito</strong>  ·  Diagnóstico gratuito sin compromiso · Respuesta en 24h  ·  <Link to="/contacto" style={{color:'#C9A84C',textDecoration:'none',fontWeight:'500'}}>Contactar →</Link>
  </div>

  
  <section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'80px'}}>
    <div className="container" style={{maxWidth:'800px',textAlign:'center'}}>
      <span className="label-tag">Contacto · Diagnóstico gratuito</span>
      <h1 className="section-title" style={{marginTop:'24px'}}>Diagnóstico gratuito.<br /><em>Respuesta en 24 horas.</em></h1>
      <p className="body-large" style={{marginTop:'24px',color:'var(--navy-60)'}}>
        La primera reunión es gratuita, dura 45 minutos y termina con un informe de diagnóstico por escrito. Analizamos qué certificaciones necesitas, cuánto tiempo llevará obtenerlas y qué inversión supone. Sin letra pequeña, sin compromiso.
      </p>
      <div style={{display:'flex',gap:'32px',justifyContent:'center',marginTop:'40px',flexWrap:'wrap'}}>
        <div style={{textAlign:'center'}}>
          <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'2.4rem',fontWeight:'700',color:'var(--gold)'}}>4h</div>
          <div style={{fontSize:'0.85rem',color:'var(--navy-60)',marginTop:'4px'}}>tiempo máximo de respuesta</div>
        </div>
        <div style={{textAlign:'center'}}>
          <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'2.4rem',fontWeight:'700',color:'var(--gold)'}}>45'</div>
          <div style={{fontSize:'0.85rem',color:'var(--navy-60)',marginTop:'4px'}}>duración del diagnóstico</div>
        </div>
        <div style={{textAlign:'center'}}>
          <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'2.4rem',fontWeight:'700',color:'var(--gold)'}}>0€</div>
          <div style={{fontSize:'0.85rem',color:'var(--navy-60)',marginTop:'4px'}}>coste de la consulta inicial</div>
        </div>
        <div style={{textAlign:'center'}}>
          <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'2.4rem',fontWeight:'700',color:'var(--gold)'}}>100%</div>
          <div style={{fontSize:'0.85rem',color:'var(--navy-60)',marginTop:'4px'}}>tasa de certificación</div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="section section--white">
    <div className="container">
      <div style={{display:'grid',gridTemplateColumns:'3fr 2fr',gap:'64px',alignItems:'start'}}>

        
        <div>
          <span className="label-tag">Formulario de contacto</span>
          <h2 className="section-title" style={{fontSize:'2rem',marginTop:'16px',marginBottom:'8px'}}>Solicita tu diagnóstico gratuito</h2>
          <p style={{color:'var(--navy-60)',marginBottom:'32px',fontSize:'0.95rem'}}>Todos los campos marcados con * son obligatorios. Te responderemos en menos de 4 horas laborables.</p>

          <div style={{background:'var(--pearl)',borderLeft:'3px solid #C9A84C',padding:'24px 28px',marginBottom:'32px'}}>
            <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'19px',fontWeight:'300',fontStyle:'italic',color:'var(--navy)',lineHeight:'1.5',marginBottom:'12px'}}>&ldquo;Mandé el formulario un viernes a las 18h. El lunes a las 9h ya tenía respuesta de un consultor con un análisis de qué necesitaba exactamente. Sin spam ni seguimiento comercial agresivo.&rdquo;</p>
            <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',fontWeight:'500',color:'var(--navy)'}}>M. Torres</p>
            <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.05em'}}>Director TIC · Empresa de integración · Cataluña</p>
          </div>

          <div style={{display:'flex',gap:'24px',flexWrap:'wrap',marginBottom:'40px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>
              <span style={{color:'#C9A84C'}}>✦</span> Sin compromiso
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>
              <span style={{color:'#C9A84C'}}>✦</span> Respuesta en 24h
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>
              <span style={{color:'#C9A84C'}}>✦</span> Información confidencial
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>
              <span style={{color:'#C9A84C'}}>✦</span> Sin spam, jamás
            </div>
          </div>

          <form id="contactForm" onSubmit={(e) => { e.preventDefault(); /* TODO: implement form submit */ }} noValidate style={{display:'flex',flexDirection:'column',gap:'20px'}}>

  <div className="form-group">
    <label htmlFor="nombre" style={{display:'block',fontSize:'0.85rem',fontWeight:'600',color:'var(--navy)',marginBottom:'6px',fontFamily:'var(--font-sans)'}}>Nombre y apellidos *</label>
    <input type="text" id="nombre" name="nombre" required placeholder="María García"
      style={{width:'100%',padding:'14px 18px',border:'1.5px solid #D8D8D8',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',boxSizing:'border-box',transition:'border-color 0.2s'}}
      onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onBlur={(e) => (e.currentTarget.style.borderColor = '#D8D8D8')} />
  </div>

  <div className="form-group">
    <label htmlFor="email" style={{display:'block',fontSize:'0.85rem',fontWeight:'600',color:'var(--navy)',marginBottom:'6px',fontFamily:'var(--font-sans)'}}>Email corporativo *</label>
    <input type="email" id="email" name="email" required placeholder="maria@empresa.com"
      style={{width:'100%',padding:'14px 18px',border:'1.5px solid #D8D8D8',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',boxSizing:'border-box',transition:'border-color 0.2s'}}
      onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onBlur={(e) => (e.currentTarget.style.borderColor = '#D8D8D8')} />
  </div>

  <div className="form-group">
    <label htmlFor="servicio" style={{display:'block',fontSize:'0.85rem',fontWeight:'600',color:'var(--navy)',marginBottom:'6px',fontFamily:'var(--font-sans)'}}>¿Qué necesitas? *</label>
    <select id="servicio" name="servicio" required
      style={{width:'100%',padding:'14px 18px',border:'1.5px solid #D8D8D8',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',boxSizing:'border-box',appearance:'none',backgroundImage:'url(&quot',data:'image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%231A2744\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E&quot',backgroundRepeat:'no-repeat',backgroundPosition:'right 16px center',cursor:'pointer'}}
      onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onBlur={(e) => (e.currentTarget.style.borderColor = '#D8D8D8')}>
      <option value="" disabled selected>Selecciona una opción</option>
      <option value="ens">Certificado ENS (Básico, Medio o Alto)</option>
      <option value="iso27001">ISO 27001 — Seguridad de la Información</option>
      <option value="iso22301">ISO 22301 — Continuidad de Negocio</option>
      <option value="dora">DORA — Resiliencia Operacional Digital</option>
      <option value="nis2">NIS2 — Directiva Europea de Ciberseguridad</option>
      <option value="tisax">TISAX — Sector Automotriz</option>
      <option value="pack">Pack ENS + ISO 27001 (ahorro del 40%)</option>
      <option value="otras">Otras normativas (ISO 9001, 14001, 22000…)</option>
      <option value="no-se">No sé todavía — necesito orientación</option>
    </select>
  </div>

  <div style={{display:'flex',alignItems:'flex-start',gap:'12px',marginTop:'4px'}}>
    <input type="checkbox" id="rgpd" name="rgpd" required style={{marginTop:'3px',accentColor:'var(--navy)',width:'16px',height:'16px',flexShrink:'0',cursor:'pointer'}} />
    <label htmlFor="rgpd" style={{fontFamily:'var(--font-sans)',fontSize:'0.8rem',color:'var(--navy-60)',lineHeight:'1.5',cursor:'pointer'}}>
      He leído y acepto la <Link to="/privacidad" style={{color:'var(--navy)',textDecoration:'underline'}}>Política de Privacidad</Link>. Avson Consultoría Estratégica SLU tratará mis datos para responder a mi consulta.
    </label>
  </div>

  <button type="submit" className="btn-primary" style={{width:'100%',justifyContent:'center',padding:'18px',fontSize:'1rem',marginTop:'8px'}}>
    Solicitar diagnóstico gratuito →
  </button>

  <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'var(--navy-60)',textAlign:'center',margin:'0'}}>
    🔒 Sin compromiso · Respuesta en menos de 24 horas · Te llamamos nosotros
  </p>

</form>

<div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid var(--border)',textAlign:'center'}}>
  <p style={{fontFamily:'var(--font-sans)',fontSize:'0.85rem',color:'var(--navy-60)',marginBottom:'12px'}}>¿Prefieres hablar directamente?</p>
  <a href="tel:+34648414863" style={{fontFamily:'var(--font-serif)',fontSize:'1.4rem',color:'var(--navy)',textDecoration:'none',fontWeight:'400'}}>+34 648 41 48 63</a>
  <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'var(--navy-60)',marginTop:'6px'}}>Lun–Vie 9:00–18:00 · También por WhatsApp</p>
  <a href="https://wa.me/34648414863?text=Hola,%20me%20interesa%20información%20sobre%20consultoría%20GRC" 
     style={{display:'inline-flex',alignItems:'center',gap:'8px',marginTop:'12px',fontFamily:'var(--font-sans)',fontSize:'0.85rem',color:'#25D366',textDecoration:'none',fontWeight:'500'}}
     target="_blank" rel="noopener">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    Escribir por WhatsApp →
  </a>
</div>

          <div id="form-success" style={{display:'none',background:'linear-gradient(135deg,#F0F8F4,#E8F5EE)',border:'2px solid #27AE60',borderRadius:'8px',padding:'32px',marginTop:'24px',textAlign:'center'}}>
            <div style={{fontSize:'2.5rem',marginBottom:'16px'}}>&#10003;</div>
            <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.6rem',color:'var(--navy)',marginBottom:'12px'}}>¡Solicitud recibida!</h3>
            <p style={{color:'var(--navy-60)',fontSize:'0.95rem',lineHeight:'1.6'}}>Te contactaremos en menos de <strong>4 horas laborables</strong> para confirmar la cita del diagnóstico gratuito. Revisa también tu carpeta de spam por si acaso.</p>
            <p style={{color:'var(--navy-60)',fontSize:'0.85rem',marginTop:'16px'}}>¿Prefieres que te llamemos ahora? <a href="tel:+34648414863" style={{color:'var(--gold)',fontWeight:'600'}}>+34 648 41 48 63</a></p>
          </div>
        </div>

        
        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>

          <div className="anim-fade-up" style={{background:'var(--pearl)',borderRadius:'8px',padding:'28px'}}>
            <div style={{fontSize:'1.5rem',marginBottom:'12px'}}>&#128269;</div>
            <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.2rem',fontWeight:'700',color:'var(--navy)',marginBottom:'8px'}}>Diagnóstico sin compromiso</h3>
            <p style={{fontSize:'0.9rem',color:'var(--navy-60)',lineHeight:'1.6'}}>En 45 minutos identificamos exactamente qué certificaciones necesitas, en qué orden obtenerlas y cuánto costará. Recibirás el informe por escrito aunque no contrates.</p>
          </div>

          <div className="anim-fade-up" style={{background:'var(--pearl)',borderRadius:'8px',padding:'28px'}}>
            <div style={{fontSize:'1.5rem',marginBottom:'12px'}}>&#127919;</div>
            <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.2rem',fontWeight:'700',color:'var(--navy)',marginBottom:'8px'}}>Garantía de éxito en primera auditoría</h3>
            <p style={{fontSize:'0.9rem',color:'var(--navy-60)',lineHeight:'1.6'}}>Si por nuestra parte surgen no conformidades mayores, asumimos los costes de repetición. En 7 años de actividad, tasa de éxito del 100%.</p>
          </div>

          <div className="anim-fade-up" style={{background:'var(--pearl)',borderRadius:'8px',padding:'28px'}}>
            <div style={{fontSize:'1.5rem',marginBottom:'12px'}}>&#128201;</div>
            <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.2rem',fontWeight:'700',color:'var(--navy)',marginBottom:'8px'}}>Packs con 50–70% de ahorro</h3>
            <p style={{fontSize:'0.9rem',color:'var(--navy-60)',lineHeight:'1.6'}}>Los estándares comparten controles. Si necesitas dos o más certificaciones, los packs aprovechan esas sinergias para reducir tiempo y coste significativamente.</p>
          </div>

          
          <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px 36px',marginTop:'0'}}>
            <span className="label-tag">Por qué contactarnos</span>
            <div style={{display:'flex',flexDirection:'column',gap:'24px',marginTop:'24px'}}>
              <div>
                <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'6px'}}>✦ Diagnóstico honesto</p>
                <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Te decimos si realmente necesitas la certificación y cuál es la categoría correcta. Sin inflar proyectos.</p>
              </div>
              <div>
                <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'6px'}}>✦ Presupuesto sin sorpresas</p>
                <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Precio cerrado desde el inicio. Sin costes ocultos ni extensiones de proyecto.</p>
              </div>
              <div>
                <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'6px'}}>✦ Respuesta en 24 horas</p>
                <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Un consultor sénior lee tu mensaje y responde. No un bot, no un formulario de seguimiento.</p>
              </div>
              <div style={{borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:'24px',marginTop:'8px'}}>
                <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'8px'}}>¿Prefieres que te llamemos?</p>
                <a href="tel:+34648414863" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'16px',fontWeight:'500',color:'var(--gold)',textDecoration:'none'}}>+34 648 41 48 63</a>
              </div>
            </div>
          </div>

          
          <div className="anim-fade-up" style={{background:'var(--navy)',borderRadius:'8px',padding:'28px'}}>
            <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.2rem',fontWeight:'700',color:'var(--white)',marginBottom:'20px'}}>Contacto directo</h3>
            <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'36px',height:'36px',background:'rgba(201,168,76,0.2)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',flexShrink:'0'}}>&#128231;</div>
                <div>
                  <div style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.5)',marginBottom:'2px'}}>Email</div>
                  <a href="mailto:hello@avson.eu" style={{color:'var(--gold)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none'}}>hello@avson.eu</a>
                </div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'36px',height:'36px',background:'rgba(201,168,76,0.2)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',flexShrink:'0'}}>&#128222;</div>
                <div>
                  <div style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.5)',marginBottom:'2px'}}>Teléfono</div>
                  <a href="tel:+34648414863" style={{color:'var(--gold)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none'}}>+34 648 41 48 63</a>
                </div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'36px',height:'36px',background:'rgba(201,168,76,0.2)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',flexShrink:'0'}}>&#128205;</div>
                <div>
                  <div style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.5)',marginBottom:'2px'}}>Oficina</div>
                  <div style={{color:'rgba(255,255,255,0.85)',fontSize:'0.9rem'}}>Calle Martínez Izquierdo 90, 28028 Madrid</div>
                </div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{width:'36px',height:'36px',background:'rgba(201,168,76,0.2)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',flexShrink:'0'}}>&#9201;</div>
                <div>
                  <div style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.5)',marginBottom:'2px'}}>Horario</div>
                  <div style={{color:'rgba(255,255,255,0.85)',fontSize:'0.9rem'}}>Lunes a viernes, 9:00–18:00</div>
                </div>
              </div>
            </div>
            <div style={{marginTop:'24px',paddingTop:'20px',borderTop:'1px solid rgba(255,255,255,0.1)'}}>
              <p style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.5)',marginBottom:'12px'}}>Nuestro equipo consultor:</p>
              <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                <span style={{background:'rgba(201,168,76,0.15)',border:'1px solid rgba(201,168,76,0.3)',borderRadius:'20px',padding:'4px 12px',fontSize:'0.75rem',color:'rgba(255,255,255,0.75)'}}>Lead Auditors ISO 27001</span>
                <span style={{background:'rgba(201,168,76,0.15)',border:'1px solid rgba(201,168,76,0.3)',borderRadius:'20px',padding:'4px 12px',fontSize:'0.75rem',color:'rgba(255,255,255,0.75)'}}>CISM / CISA</span>
                <span style={{background:'rgba(201,168,76,0.15)',border:'1px solid rgba(201,168,76,0.3)',borderRadius:'20px',padding:'4px 12px',fontSize:'0.75rem',color:'rgba(255,255,255,0.75)'}}>Auditores ENS ENAC</span>
                <span style={{background:'rgba(201,168,76,0.15)',border:'1px solid rgba(201,168,76,0.3)',borderRadius:'20px',padding:'4px 12px',fontSize:'0.75rem',color:'rgba(255,255,255,0.75)'}}>CCSP / CEH</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  
  <section className="section section--pearl">
    <div className="container">
      <div style={{textAlign:'center',marginBottom:'56px'}}>
        <span className="label-tag">El proceso</span>
        <h2 className="section-title" style={{marginTop:'16px'}}>Qué pasa después de que envíes el formulario</h2>
        <p className="body-large" style={{marginTop:'16px',color:'var(--navy-60)',maxWidth:'600px',marginLeft:'auto',marginRight:'auto'}}>
          Sabemos que tu tiempo es limitado. Por eso hemos diseñado un proceso de incorporación que requiere el mínimo esfuerzo por tu parte desde el primer contacto hasta el arranque del proyecto.
        </p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'24px'}}>

        <div className="anim-fade-up" style={{background:'var(--white)',borderRadius:'8px',padding:'32px 24px',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:'0',left:'0',right:'0',height:'4px',background:'var(--gold)'}}></div>
          <div style={{width:'48px',height:'48px',background:'var(--navy)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.4rem',fontWeight:'700',color:'var(--gold)',marginBottom:'20px'}}>1</div>
          <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.2rem',fontWeight:'700',color:'var(--navy)',marginBottom:'12px'}}>Recibimos tu solicitud</h3>
          <p style={{fontSize:'0.9rem',color:'var(--navy-60)',lineHeight:'1.6'}}>En menos de 4 horas laborables recibirás un email de confirmación con el nombre del consultor que se hará cargo de tu caso y un enlace para elegir el horario de la reunión de diagnóstico.</p>
          <div style={{marginTop:'16px',fontSize:'0.8rem',color:'var(--gold)',fontWeight:'600'}}>{'<'} 4 horas</div>
        </div>

        <div className="anim-fade-up" style={{background:'var(--white)',borderRadius:'8px',padding:'32px 24px',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:'0',left:'0',right:'0',height:'4px',background:'var(--gold)'}}></div>
          <div style={{width:'48px',height:'48px',background:'var(--navy)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.4rem',fontWeight:'700',color:'var(--gold)',marginBottom:'20px'}}>2</div>
          <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.2rem',fontWeight:'700',color:'var(--navy)',marginBottom:'12px'}}>Primera reunión de diagnóstico</h3>
          <p style={{fontSize:'0.9rem',color:'var(--navy-60)',lineHeight:'1.6'}}>45–60 minutos por videoconferencia. Exploramos tu situación actual, tus objetivos de certificación, los plazos que tienes y los recursos disponibles. Sin cuestionarios previos, sin deberes.</p>
          <div style={{marginTop:'16px',fontSize:'0.8rem',color:'var(--gold)',fontWeight:'600'}}>Día 1–3</div>
        </div>

        <div className="anim-fade-up" style={{background:'var(--white)',borderRadius:'8px',padding:'32px 24px',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:'0',left:'0',right:'0',height:'4px',background:'var(--gold)'}}></div>
          <div style={{width:'48px',height:'48px',background:'var(--navy)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.4rem',fontWeight:'700',color:'var(--gold)',marginBottom:'20px'}}>3</div>
          <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.2rem',fontWeight:'700',color:'var(--navy)',marginBottom:'12px'}}>Propuesta personalizada</h3>
          <p style={{fontSize:'0.9rem',color:'var(--navy-60)',lineHeight:'1.6'}}>En 48 horas tras la reunión recibirás una propuesta detallada: alcance exacto del proyecto, fases y calendario, coste total (sin sorpresas), entregables y condiciones de la garantía de éxito.</p>
          <div style={{marginTop:'16px',fontSize:'0.8rem',color:'var(--gold)',fontWeight:'600'}}>Día 3–5</div>
        </div>

        <div className="anim-fade-up" style={{background:'var(--white)',borderRadius:'8px',padding:'32px 24px',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:'0',left:'0',right:'0',height:'4px',background:'var(--gold)'}}></div>
          <div style={{width:'48px',height:'48px',background:'var(--navy)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.4rem',fontWeight:'700',color:'var(--gold)',marginBottom:'20px'}}>4</div>
          <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.2rem',fontWeight:'700',color:'var(--navy)',marginBottom:'12px'}}>Arranque del proyecto</h3>
          <p style={{fontSize:'0.9rem',color:'var(--navy-60)',lineHeight:'1.6'}}>Si aceptas la propuesta, firmamos el acuerdo de servicio y fijamos la reunión de kick-off. En esa sesión presentamos al equipo, establecemos el canal de comunicación y arrancamos el gap analysis inicial.</p>
          <div style={{marginTop:'16px',fontSize:'0.8rem',color:'var(--gold)',fontWeight:'600'}}>Semana 1</div>
        </div>

      </div>

      <div style={{background:'var(--white)',borderRadius:'8px',padding:'32px',marginTop:'40px',display:'flex',alignItems:'center',gap:'32px',flexWrap:'wrap'}}>
        <div style={{flex:'1',minWidth:'200px'}}>
          <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.3rem',fontWeight:'700',color:'var(--navy)',marginBottom:'8px'}}>¿Tienes un plazo urgente?</h3>
          <p style={{fontSize:'0.9rem',color:'var(--navy-60)',lineHeight:'1.5'}}>Si tienes una licitación con fecha límite, una auditoría ya programada o un cliente que te exige la certificación para renovar contrato, llámanos directamente. Gestionamos casos urgentes con capacidad de arranque en 48 horas.</p>
        </div>
        <div style={{flexShrink:'0'}}>
          <a href="tel:+34648414863" className="btn-primary" style={{display:'inline-block',whiteSpace:'nowrap'}}>Llamar ahora: +34 648 41 48 63</a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="section section--white">
    <div className="container" style={{maxWidth:'860px'}}>
      <div style={{textAlign:'center',marginBottom:'56px'}}>
        <span className="label-tag">Preguntas frecuentes</span>
        <h2 className="section-title" style={{marginTop:'16px'}}>Todo lo que necesitas saber antes de contactar</h2>
        <p className="body-large" style={{marginTop:'16px',color:'var(--navy-60)'}}>Respondemos a las dudas más habituales para que la primera reunión sea todo lo productiva posible.</p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>

        <div className="faq-item anim-fade-up">
          <button className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')} aria-expanded="false">
            ¿El diagnóstico inicial es realmente gratuito?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__answer">
            <p>Sí, completamente gratuito y sin compromiso. La primera reunión dura entre 45 y 60 minutos. Analizamos tu situación actual, identificamos qué certificaciones necesitas o te convienen más, y te explicamos el proceso completo. No te pediremos ningún dato de pago ni firmarás nada. Al finalizar recibirás un informe de diagnóstico por escrito, independientemente de que contrates con nosotros o no.</p>
            <p style={{marginTop:'12px'}}>El diagnóstico incluye: evaluación del nivel de madurez actual, mapa de certificaciones recomendadas por prioridad, estimación de plazos y coste aproximado, e identificación de riesgos y dependencias del proyecto.</p>
          </div>
        </div>

        <div className="faq-item anim-fade-up">
          <button className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')} aria-expanded="false">
            ¿Cuánto tiempo pasa desde que contacto hasta que me llamáis?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__answer">
            <p>Nuestro compromiso es responder en menos de 4 horas laborables. Si rellenas el formulario por la mañana, tendrás respuesta antes del mediodía. Si lo haces por la tarde, a primera hora del día siguiente. En casos urgentes —licitaciones con plazos inminentes, auditorías programadas— llámanos directamente al +34 648 41 48 63 e identificamos la situación como prioritaria.</p>
            <p style={{marginTop:'12px'}}>El email de confirmación incluirá el nombre del consultor asignado y un enlace Calendly para que puedas elegir el horario de la reunión de diagnóstico sin necesidad de intercambiar más correos.</p>
          </div>
        </div>

        <div className="faq-item anim-fade-up">
          <button className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')} aria-expanded="false">
            ¿Qué información necesitáis para la primera reunión?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__answer">
            <p>Cuanta más información nos aportes en el formulario, más productiva será la primera reunión. Lo mínimo imprescindible: sector de actividad, tamaño de la organización y la certificación que te interesa (o la razón que te ha llevado a buscarla, como un contrato público o un cliente que la exige).</p>
            <p style={{marginTop:'12px'}}>No necesitas ningún documento técnico previo; nuestros consultores realizarán el diagnóstico durante la propia reunión. Si ya tienes alguna política de seguridad, SGSI parcial o certificaciones anteriores, puedes compartirlas y las revisaremos antes de la sesión para hacerla más eficiente.</p>
          </div>
        </div>

        <div className="faq-item anim-fade-up">
          <button className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')} aria-expanded="false">
            ¿La reunión es presencial o por videollamada?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__answer">
            <p>Por defecto trabajamos en remoto vía videoconferencia (Teams, Google Meet o Zoom, según tu preferencia). Esto nos permite atender a clientes en toda España —y en organizaciones con sede en cualquier país de la UE— sin coste de desplazamiento para ninguna de las partes, lo que se traduce directamente en precios más competitivos.</p>
            <p style={{marginTop:'12px'}}>Para proyectos de gran envergadura o cuando el cliente lo prefiere expresamente, podemos organizar reuniones presenciales en nuestra oficina de Madrid o desplazarnos a las instalaciones del cliente. Los gastos de desplazamiento se detallan claramente en la propuesta.</p>
          </div>
        </div>

        <div className="faq-item anim-fade-up">
          <button className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')} aria-expanded="false">
            ¿Trabajáis con organizaciones de cualquier tamaño?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__answer">
            <p>Sí. Nuestra cartera abarca desde pymes de 10 empleados hasta grupos empresariales con varias subsidiarias. Los packs y el enfoque metodológico se adaptan al tamaño. Una empresa pequeña puede certificarse en ENS Básico + ISO 27001 en 3 meses con un alcance acotado; una gran empresa puede necesitar un programa plurianual con implantación por fases y gestión de múltiples unidades de negocio.</p>
            <p style={{marginTop:'12px'}}>El diagnóstico gratuito sirve precisamente para dimensionar correctamente el proyecto desde el inicio: ni sobredimensionarlo con procesos innecesarios, ni infradimensionarlo de manera que la auditoría resulte en no conformidades mayores.</p>
          </div>
        </div>

        <div className="faq-item anim-fade-up">
          <button className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')} aria-expanded="false">
            ¿Qué garantías ofrecéis de que obtendré la certificación?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__answer">
            <p>Ofrecemos una garantía de éxito en primera auditoría para todos nuestros clientes. Si la certificadora detecta no conformidades mayores imputables a nuestra consultoría —documentación incompleta, controles mal implementados, análisis de riesgos deficiente— asumimos los costes de la auditoría de seguimiento y el trabajo adicional de subsanación sin cargo al cliente.</p>
            <p style={{marginTop:'12px'}}>En 7 años de actividad y más de 180 proyectos completados, nuestra tasa de certificación en primera auditoría es del 100%. Esta garantía se recoge por escrito en el contrato de servicio, con los términos y condiciones detallados.</p>
          </div>
        </div>

        <div className="faq-item anim-fade-up">
          <button className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')} aria-expanded="false">
            ¿Puedo solicitar información sobre varios estándares a la vez?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__answer">
            <p>Por supuesto, y de hecho es lo más habitual. La mayoría de nuestros clientes terminan certificándose en dos o más estándares aprovechando las sinergias entre ellos. Puedes seleccionar "Pack o combinación de certificaciones" en el formulario y describir en el campo de mensaje qué objetivos persigues.</p>
            <p style={{marginTop:'12px'}}>Durante el diagnóstico analizaremos qué combinación te aporta más valor en tu situación concreta. Los packs más frecuentes son ENS+ISO 27001 (65% de controles compartidos), ISO 27001+ISO 22301 (60% de controles compartidos) y el Pack Triple ENS+ISO 27001+ISO 22301.</p>
          </div>
        </div>

        <div className="faq-item anim-fade-up">
          <button className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')} aria-expanded="false">
            ¿Cómo funciona la garantía de valor permanente?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__answer">
            <p>A diferencia de otros consultores que trabajan por proyecto y desaparecen tras la auditoría, Avson adopta un modelo de relación permanente. El precio inicial incluye el ciclo completo de certificación de 3 años, no solo la primera auditoría.</p>
            <p style={{marginTop:'12px'}}>Esto significa: revisiones anuales de mantenimiento del SGSI, actualizaciones normativas cuando sale una nueva versión del estándar (ej: transición de ISO 27001:2013 a ISO 27001:2022), preparación de auditorías de seguimiento y recertificación, y soporte por incidencias de seguridad cuando surgen. Tu consultor se convierte en un recurso permanente de tu organización, no en un proveedor puntual.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  
  <section style={{background:'var(--navy)',padding:'48px 0'}}>
    <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap'}}>
      <div>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'1.8rem',fontWeight:'700',color:'var(--white)',marginBottom:'8px'}}>¿Prefieres que te llamemos?</h2>
        <p style={{color:'rgba(255,255,255,0.7)',fontSize:'0.95rem'}}>Lunes a viernes, 9:00–18:00. Sin esperas, sin centralitas.</p>
      </div>
      <a href="tel:+34648414863" className="btn-primary" style={{fontSize:'1.1rem',padding:'18px 40px',whiteSpace:'nowrap'}}>
        +34 648 41 48 63
      </a>
    </div>
  </section>
    </>
  )
}
