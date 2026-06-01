import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <span className="footer__logo">AVSON<span> · </span>GRC</span>
            <p className="footer__tagline">Consultora especializada en ENS, ISO 27001, ISO 22301, DORA y NIS2. 87+ empresas certificadas con éxito garantizado.</p>
            <div className="footer__contact">
              <a href="mailto:hello@avson.eu">hello@avson.eu</a><br />
              <a href="https://www.linkedin.com/company/avson-grc" target="_blank" rel="noopener" style={{display:'inline-flex',alignItems:'center',gap:'6px',marginTop:'12px',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--gold)',letterSpacing:'0.04em'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn · Avson GRC
              </a>
              Calle Martínez Izquierdo 90<br />
              28028 Madrid, España
            </div>
          </div>
          <div>
            <div className="footer__col-title">Certificaciones</div>
            <ul className="footer__links">
              <li><Link to="/ens">ENS</Link></li>
              <li><Link to="/iso27001">ISO 27001</Link></li>
              <li><Link to="/iso22301">ISO 22301</Link></li>
              <li><Link to="/dora">DORA</Link></li>
              <li><Link to="/nis2">NIS2</Link></li>
              <li><Link to="/tisax">TISAX</Link></li>
              <li><Link to="/otras">Otras ISOs</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Empresa</div>
            <ul className="footer__links">
              <li><Link to="/packs">Packs GRC</Link></li>
              <li><Link to="/equipo">Equipo</Link></li>
              <li><Link to="/webinars">Webinars</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer__col-title">Newsletter GRC</div>
            <p className="footer__newsletter-text">Análisis mensual sobre ENS, ISO 27001 y cumplimiento normativo. Sin spam.</p>
            <div className="footer__newsletter-form">
              <input type="email" className="footer__newsletter-input" placeholder="tu@empresa.com" />
              <button className="footer__newsletter-btn">→</button>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">© 2025 Avson Consultoría Estratégica SLU — Todos los derechos reservados.</span>
          <ul className="footer__legal">
            <li><Link to="/privacidad">Política de privacidad</Link></li>
            <li><a href="#">Aviso legal</a></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
