import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const texts = {
  es: { title: 'Uso de cookies', desc: 'Usamos cookies para mejorar tu experiencia en el sitio. Al continuar, aceptas nuestro uso de cookies.', accept: 'Aceptar' },
  en: { title: 'Cookie usage', desc: 'We use cookies to improve your experience on the site. By continuing, you accept our use of cookies.', accept: 'Accept' },
  ca: { title: 'Ús de cookies', desc: 'Utilitzem cookies per millorar la teva experiència al lloc. Si continues, acceptes el nostre ús de cookies.', accept: 'Acceptar' },
  eu: { title: 'Cookieen erabilera', desc: 'Cookieak erabiltzen ditugu zure esperientzia hobetzeko. Jarraitzen baduzu, gure cookieen erabilera onartzen duzu.', accept: 'Onartu' },
  he: { title: 'שימוש בעוגיות', desc: 'אנו משתמשים בעוגיות כדי לשפר את חוויית השימוש שלך. בהמשך הגלישה, אתה מסכים לשימוש בעוגיות.', accept: 'אישור' },
  ar: { title: 'استخدام ملفات تعريف الارتباط', desc: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بالاستمرار، فإنك توافق على استخدامنا لملفات تعريف الارتباط.', accept: 'قبول' },
  pl: { title: 'Użycie plików cookie', desc: 'Używamy plików cookie, aby poprawić Twoje doświadczenie. Kontynuując, akceptujesz nasze użycie plików cookie.', accept: 'Akceptuj' },
}

export default function CookieBanner() {
  const { lang } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('avson-cookies-accepted')) return
    // Wait for splash to finish, then slide in
    const timer = setTimeout(() => {
      setVisible(true)
      requestAnimationFrame(() => setSliding(true))
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    setSliding(false)
    setTimeout(() => {
      setVisible(false)
      localStorage.setItem('avson-cookies-accepted', '1')
    }, 500)
  }

  if (!visible) return null

  const t = texts[lang.toLowerCase()] || texts.es

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] transition-transform duration-500 ease-out"
      style={{ transform: sliding ? 'translateX(0)' : 'translateX(110%)' }}
    >
      <div className="bg-white text-black px-6 py-5 max-w-sm shadow-2xl">
        <h3 className="font-semibold text-sm mb-2">{t.title}</h3>
        <p className="text-xs text-gray-600 leading-relaxed mb-4">{t.desc}</p>
        <button
          onClick={accept}
          className="bg-black text-white text-xs font-medium px-6 py-2 hover:bg-gray-800 transition-colors w-full cursor-pointer"
        >
          {t.accept}
        </button>
      </div>
    </div>
  )
}
