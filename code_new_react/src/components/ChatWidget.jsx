import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SERVICE_OPTIONS = [
  'Certificado ENS',
  'ISO 27001',
  'ISO 22301',
  'DORA',
  'NIS2',
  'TISAX',
  'Pack ENS + ISO 27001',
  'Otras normativas',
  'No sé todavía'
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [started, setStarted] = useState(false)
  const [messages, setMessages] = useState([])
  const [step, setStep] = useState('idle')
  const [userName, setUserName] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [inputValue, setInputValue] = useState('')
  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const scrollBottom = () => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }

  useEffect(scrollBottom, [messages, step])

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [step])

  const addBot = (text) => setMessages(prev => [...prev, { type: 'bot', text }])
  const addUser = (text) => setMessages(prev => [...prev, { type: 'user', text }])

  const handleToggle = () => {
    setOpen(v => !v)
    if (!started) {
      setStarted(true)
      addBot('¡Hola! Soy el asistente de Avson GRC.')
      setTimeout(() => {
        addBot('¿Cómo te llamas?')
        setStep('name')
      }, 400)
    }
  }

  const submitName = () => {
    const val = inputValue.trim()
    if (!val) return
    setUserName(val)
    addUser(val)
    setInputValue('')
    setTimeout(() => {
      addBot(`Encantados, ${val}. ¿En qué podemos ayudarte? (selecciona todo lo que necesites)`)
      setStep('services')
    }, 300)
  }

  const toggleService = (svc) => {
    setSelectedServices(prev => prev.includes(svc) ? prev.filter(s => s !== svc) : [...prev, svc])
  }

  const submitServices = () => {
    addUser(selectedServices.join(', '))
    setTimeout(() => {
      addBot('¿Cuál es tu email para que te contactemos?')
      setStep('email')
    }, 300)
  }

  const submitEmail = () => {
    const val = inputValue.trim()
    if (!val || !val.includes('@')) return
    addUser(val)
    setInputValue('')
    setTimeout(() => {
      addBot(`¡Gracias, ${userName}! Te contactamos en menos de 24 horas.`)
      setStep('done')
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'lead_generated', form_type: 'chat_widget', servicios: selectedServices.join(', '), email: val })
      }
      setTimeout(() => navigate(`/gracias?name=${encodeURIComponent(userName)}&email=${encodeURIComponent(val)}`), 2000)
    }, 300)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (step === 'name') submitName()
      if (step === 'email') submitEmail()
    }
  }

  return (
    <>
      <button className={`chat-toggle${open ? ' active' : ''}`} onClick={handleToggle} aria-label="Abrir chat">
        <svg className="chat-toggle__open" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/><path d="M7 9h10v2H7zm0-3h10v2H7z"/></svg>
        <svg className="chat-toggle__close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>

      <div className={`chat-panel${open ? ' open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header__logo">AVSON <span>·</span> GRC</div>
          <div className="chat-header__status">En línea</div>
        </div>
        <div className="chat-body" ref={bodyRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg chat-msg--${msg.type}`}>{msg.text}</div>
          ))}
        </div>
        <div>
          {(step === 'name' || step === 'email') && (
            <div className="chat-input-area">
              <input
                ref={inputRef}
                type={step === 'email' ? 'email' : 'text'}
                placeholder={step === 'name' ? 'Tu nombre...' : 'tu@empresa.com'}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete={step === 'email' ? 'email' : 'off'}
              />
              <button onClick={step === 'name' ? submitName : submitEmail} aria-label="Enviar">
                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </div>
          )}
          {step === 'services' && (
            <div className="chat-options">
              {SERVICE_OPTIONS.map((opt, i) => (
                <label key={i} className={selectedServices.includes(opt) ? 'selected' : ''}>
                  <input type="checkbox" checked={selectedServices.includes(opt)} onChange={() => toggleService(opt)} />
                  {opt}
                </label>
              ))}
              <button className="chat-options__submit" disabled={selectedServices.length === 0} onClick={submitServices}>Continuar →</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
