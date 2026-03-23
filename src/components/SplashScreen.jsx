import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function SplashScreen({ onFinish }) {
  const { t } = useLanguage()
  const [city, setCity] = useState(() => t('splash.madrid'))
  const [fade, setFade] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // After 2s, fade out and switch to barcelona
    const switchTimer = setTimeout(() => {
      setFade(false)
      setTimeout(() => {
        setCity(t('splash.barcelona'))
        setFade(true)
      }, 300)
    }, 2000)

    // After 4s, exit
    const exitTimer = setTimeout(() => {
      setExiting(true)
      setTimeout(() => {
        onFinish()
      }, 600)
    }, 4000)

    return () => {
      clearTimeout(switchTimer)
      clearTimeout(exitTimer)
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-600 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          avson
        </span>
        <span className="w-px h-8 md:h-12 bg-white/30" />
        <span
          className={`text-xl md:text-3xl text-gray-400 font-light tracking-wide transition-all duration-300 ${
            fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {city}
        </span>
      </div>
    </div>
  )
}
