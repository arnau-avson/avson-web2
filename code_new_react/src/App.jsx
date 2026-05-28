import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Pages — lazy loaded
const HomePage = lazy(() => import('./pages/HomePage'))
const EnsPage = lazy(() => import('./pages/EnsPage'))
const Iso27001Page = lazy(() => import('./pages/Iso27001Page'))
const Iso22301Page = lazy(() => import('./pages/Iso22301Page'))
const DoraPage = lazy(() => import('./pages/DoraPage'))
const Nis2Page = lazy(() => import('./pages/Nis2Page'))
const TisaxPage = lazy(() => import('./pages/TisaxPage'))
const OtrasPage = lazy(() => import('./pages/OtrasPage'))
const PacksPage = lazy(() => import('./pages/PacksPage'))
const EnsExpressPage = lazy(() => import('./pages/EnsExpressPage'))
const EnsBasicoPage = lazy(() => import('./pages/EnsBasicoPage'))
const EnsMedioPage = lazy(() => import('./pages/EnsMedioPage'))
const EnsAltoPage = lazy(() => import('./pages/EnsAltoPage'))
const EquipoPage = lazy(() => import('./pages/EquipoPage'))
const ContactoPage = lazy(() => import('./pages/ContactoPage'))
const ConsultoriaEnsPage = lazy(() => import('./pages/ConsultoriaEnsPage'))
const DiagnosticoPage = lazy(() => import('./pages/DiagnosticoPage'))
const CalculadoraRoiPage = lazy(() => import('./pages/CalculadoraRoiPage'))
const WebinarsPage = lazy(() => import('./pages/WebinarsPage'))
const PrecioPage = lazy(() => import('./pages/PrecioPage'))
const PraesysPage = lazy(() => import('./pages/PraesysPage'))
const GraciasPage = lazy(() => import('./pages/GraciasPage'))
const CookiesPage = lazy(() => import('./pages/CookiesPage'))
const PrivacidadPage = lazy(() => import('./pages/PrivacidadPage'))
const EnsMadridPage = lazy(() => import('./pages/EnsMadridPage'))
const EnsBarcelonaPage = lazy(() => import('./pages/EnsBarcelonaPage'))
const EnsBilbaoPage = lazy(() => import('./pages/EnsBilbaoPage'))
const EnsSevillaPage = lazy(() => import('./pages/EnsSevillaPage'))
const EnsValenciaPage = lazy(() => import('./pages/EnsValenciaPage'))
const BlogIndexPage = lazy(() => import('./pages/blog/BlogIndexPage'))
const QueEsElEns = lazy(() => import('./pages/blog/QueEsElEns'))
const EnsVsIso27001 = lazy(() => import('./pages/blog/EnsVsIso27001'))
const CuantoCuestaCertificadoEns = lazy(() => import('./pages/blog/CuantoCuestaCertificadoEns'))
const CertificadoEnsObligatorio = lazy(() => import('./pages/blog/CertificadoEnsObligatorio'))
const CertificadoEnsMediaAlta = lazy(() => import('./pages/blog/CertificadoEnsMediaAlta'))
const AuditoriaEnsProceso = lazy(() => import('./pages/blog/AuditoriaEnsProceso'))
const DeclaracionConformidadEns = lazy(() => import('./pages/blog/DeclaracionConformidadEns'))
const GapAnalysisEns = lazy(() => import('./pages/blog/GapAnalysisEns'))
const EnsBasicoGuiaEmpresas = lazy(() => import('./pages/blog/EnsBasicoGuiaEmpresas'))
const EnsSectorSalud = lazy(() => import('./pages/blog/EnsSectorSalud'))
const RenovacionCertificadoEns = lazy(() => import('./pages/blog/RenovacionCertificadoEns'))
const Iso27001Pymes = lazy(() => import('./pages/blog/Iso27001Pymes'))
const Iso27001RequisitosCertificacion = lazy(() => import('./pages/blog/Iso27001RequisitosCertificacion'))
const QueEsIso22301 = lazy(() => import('./pages/blog/QueEsIso22301'))
const PlanContinuidadNegocio = lazy(() => import('./pages/blog/PlanContinuidadNegocio'))
const QueEsDoraReglamento = lazy(() => import('./pages/blog/QueEsDoraReglamento'))
const DoraEntidadesFinancieras = lazy(() => import('./pages/blog/DoraEntidadesFinancieras'))
const QueEsNis2Directiva = lazy(() => import('./pages/blog/QueEsNis2Directiva'))
const QueEsTisax = lazy(() => import('./pages/blog/QueEsTisax'))
const Iso27001Pymes2 = lazy(() => import('./pages/blog/Iso27001Pymes'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ens" element={<EnsPage />} />
          <Route path="/iso27001" element={<Iso27001Page />} />
          <Route path="/iso22301" element={<Iso22301Page />} />
          <Route path="/dora" element={<DoraPage />} />
          <Route path="/nis2" element={<Nis2Page />} />
          <Route path="/tisax" element={<TisaxPage />} />
          <Route path="/otras" element={<OtrasPage />} />
          <Route path="/packs" element={<PacksPage />} />
          <Route path="/ens-express" element={<EnsExpressPage />} />
          <Route path="/ens-basico" element={<EnsBasicoPage />} />
          <Route path="/ens-medio" element={<EnsMedioPage />} />
          <Route path="/ens-alto" element={<EnsAltoPage />} />
          <Route path="/equipo" element={<EquipoPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/consultoria-ens-espana" element={<ConsultoriaEnsPage />} />
          <Route path="/diagnostico" element={<DiagnosticoPage />} />
          <Route path="/calculadora-roi" element={<CalculadoraRoiPage />} />
          <Route path="/webinars" element={<WebinarsPage />} />
          <Route path="/precio" element={<PrecioPage />} />
          <Route path="/praesys" element={<PraesysPage />} />
          <Route path="/gracias" element={<GraciasPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/privacidad" element={<PrivacidadPage />} />
          <Route path="/ens-madrid" element={<EnsMadridPage />} />
          <Route path="/ens-barcelona" element={<EnsBarcelonaPage />} />
          <Route path="/ens-bilbao" element={<EnsBilbaoPage />} />
          <Route path="/ens-sevilla" element={<EnsSevillaPage />} />
          <Route path="/ens-valencia" element={<EnsValenciaPage />} />
          {/* Blog */}
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/que-es-el-ens" element={<QueEsElEns />} />
          <Route path="/blog/ens-vs-iso27001" element={<EnsVsIso27001 />} />
          <Route path="/blog/cuanto-cuesta-certificado-ens" element={<CuantoCuestaCertificadoEns />} />
          <Route path="/blog/certificado-ens-obligatorio" element={<CertificadoEnsObligatorio />} />
          <Route path="/blog/certificado-ens-media-alta" element={<CertificadoEnsMediaAlta />} />
          <Route path="/blog/auditoria-ens-proceso" element={<AuditoriaEnsProceso />} />
          <Route path="/blog/declaracion-conformidad-ens" element={<DeclaracionConformidadEns />} />
          <Route path="/blog/gap-analysis-ens" element={<GapAnalysisEns />} />
          <Route path="/blog/ens-basico-guia-empresas" element={<EnsBasicoGuiaEmpresas />} />
          <Route path="/blog/ens-sector-salud" element={<EnsSectorSalud />} />
          <Route path="/blog/renovacion-certificado-ens" element={<RenovacionCertificadoEns />} />
          <Route path="/blog/iso27001-pymes" element={<Iso27001Pymes />} />
          <Route path="/blog/iso27001-requisitos-certificacion" element={<Iso27001RequisitosCertificacion />} />
          <Route path="/blog/que-es-iso22301" element={<QueEsIso22301 />} />
          <Route path="/blog/plan-continuidad-negocio" element={<PlanContinuidadNegocio />} />
          <Route path="/blog/que-es-dora-reglamento" element={<QueEsDoraReglamento />} />
          <Route path="/blog/dora-entidades-financieras" element={<DoraEntidadesFinancieras />} />
          <Route path="/blog/que-es-nis2-directiva" element={<QueEsNis2Directiva />} />
          <Route path="/blog/que-es-tisax" element={<QueEsTisax />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
