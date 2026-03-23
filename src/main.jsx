import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import GrcPage from './pages/GrcPage.jsx'
import AiPage from './pages/AiPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/grc" element={<GrcPage />} />
        <Route path="/ai" element={<AiPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
