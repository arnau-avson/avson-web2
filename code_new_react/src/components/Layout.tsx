import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AnnounceBar from './AnnounceBar'
import NavBar from './NavBar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import ExitModal from './ExitModal'
import ChatWidget from './ChatWidget'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Intersection Observer for fade-in animations (replaces inline script from static HTML)
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

    // Small delay to ensure lazy-loaded page content is in the DOM
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
      <AnnounceBar />
      <NavBar />
      <Outlet />
      <Footer />
      <CookieBanner />
      <ExitModal />
      <ChatWidget />
    </>
  )
}
