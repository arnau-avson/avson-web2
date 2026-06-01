import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import ExitModal from './ExitModal'
import FloatingCta from './FloatingCta'
import WhatsAppFloat from './WhatsAppFloat'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.anim-fade-up, .anim-fade').forEach((el) => {
        if (!el.classList.contains('visible')) {
          observer.observe(el)
        }
      })
    }, 50)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <FloatingCta />
      <WhatsAppFloat />
      <CookieBanner />
      <ExitModal />
    </>
  )
}