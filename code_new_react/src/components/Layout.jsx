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
