import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'
import App from './App.jsx'
import GrcPage from './pages/GrcPage.jsx'
import AiPage from './pages/AiPage.jsx'
import CyberPage from './pages/CyberPage.jsx'
import IntelPage from './pages/IntelPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/grc" element={<GrcPage />} />
        <Route path="/ai" element={<AiPage />} />
        <Route path="/cyber" element={<CyberPage />} />
        <Route path="/intel" element={<IntelPage />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
)
