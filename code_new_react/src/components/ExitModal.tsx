import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ExitModal() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onLeave = (e) => {
      if (e.clientY < 0 && !sessionStorage.getItem('exitShown')) {
        setVisible(true)
        sessionStorage.setItem('exitShown', '1')
      }
    }
    document.addEventListener('mouseleave', onLeave)
    return () => document.removeEventListener('mouseleave', onLeave)
  }, [])

  const close = () => setVisible(false)

  return (
    <div className={`exit-modal${visible ? ' visible' : ''}`}>
      <div className="exit-modal__box">
        <button className="exit-modal__close" onClick={close}>×</button>
        <span className="label-tag">Espera un momento</span>
        <h2 className="exit-modal__title">¿Tienes dudas sobre si<br />el ENS te afecta?</h2>
        <p className="exit-modal__text">Déjanos tu email y te enviamos en 24h un análisis gratuito sobre si tu empresa necesita la certificación ENS y qué categoría le corresponde.</p>
        <div className="exit-modal__form">
          <input type="email" className="exit-modal__input" placeholder="tu@empresa.com" />
          <input type="text" className="exit-modal__input" placeholder="Nombre de tu empresa" />
          <Link to="/contacto" className="btn-primary" style={{textAlign:'center',justifyContent:'center'}}>Enviar y recibir análisis gratuito →</Link>
        </div>
        <button className="exit-modal__skip" onClick={close}>No me interesa por ahora</button>
      </div>
    </div>
  )
}
