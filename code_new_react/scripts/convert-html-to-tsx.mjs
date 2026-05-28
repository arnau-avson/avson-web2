/**
 * Converts static HTML pages from code_new/ to React TSX page components.
 * Extracts content between nav and footer, converts HTML→JSX syntax.
 *
 * Usage: node scripts/convert-html-to-tsx.mjs
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CODE_NEW = join(__dirname, '..', '..', 'code_new')
const PAGES_DIR = join(__dirname, '..', 'src', 'pages')
const BLOG_DIR = join(PAGES_DIR, 'blog')

if (!existsSync(BLOG_DIR)) mkdirSync(BLOG_DIR, { recursive: true })

// ── Page mapping: [source html, target tsx, component name] ──
const PAGES = [
  // Root pages
  ['index.html', 'HomePage.tsx', 'HomePage'],
  ['ens.html', 'EnsPage.tsx', 'EnsPage'],
  ['iso27001.html', 'Iso27001Page.tsx', 'Iso27001Page'],
  ['iso22301.html', 'Iso22301Page.tsx', 'Iso22301Page'],
  ['dora.html', 'DoraPage.tsx', 'DoraPage'],
  ['nis2.html', 'Nis2Page.tsx', 'Nis2Page'],
  ['tisax.html', 'TisaxPage.tsx', 'TisaxPage'],
  ['otras.html', 'OtrasPage.tsx', 'OtrasPage'],
  ['packs.html', 'PacksPage.tsx', 'PacksPage'],
  ['ens-express.html', 'EnsExpressPage.tsx', 'EnsExpressPage'],
  ['ens-basico.html', 'EnsBasicoPage.tsx', 'EnsBasicoPage'],
  ['ens-medio.html', 'EnsMedioPage.tsx', 'EnsMedioPage'],
  ['ens-alto.html', 'EnsAltoPage.tsx', 'EnsAltoPage'],
  ['equipo.html', 'EquipoPage.tsx', 'EquipoPage'],
  ['contacto.html', 'ContactoPage.tsx', 'ContactoPage'],
  ['consultoria-ens-espana.html', 'ConsultoriaEnsPage.tsx', 'ConsultoriaEnsPage'],
  ['diagnostico.html', 'DiagnosticoPage.tsx', 'DiagnosticoPage'],
  ['calculadora-roi.html', 'CalculadoraRoiPage.tsx', 'CalculadoraRoiPage'],
  ['webinars.html', 'WebinarsPage.tsx', 'WebinarsPage'],
  ['precio.html', 'PrecioPage.tsx', 'PrecioPage'],
  ['praesys.html', 'PraesysPage.tsx', 'PraesysPage'],
  ['gracias.html', 'GraciasPage.tsx', 'GraciasPage'],
  ['cookies.html', 'CookiesPage.tsx', 'CookiesPage'],
  ['privacidad.html', 'PrivacidadPage.tsx', 'PrivacidadPage'],
  ['404.html', 'NotFoundPage.tsx', 'NotFoundPage'],
  ['ens-madrid.html', 'EnsMadridPage.tsx', 'EnsMadridPage'],
  ['ens-barcelona.html', 'EnsBarcelonaPage.tsx', 'EnsBarcelonaPage'],
  ['ens-bilbao.html', 'EnsBilbaoPage.tsx', 'EnsBilbaoPage'],
  ['ens-sevilla.html', 'EnsSevillaPage.tsx', 'EnsSevillaPage'],
  ['ens-valencia.html', 'EnsValenciaPage.tsx', 'EnsValenciaPage'],
]

const BLOG_PAGES = [
  ['blog/index.html', 'blog/BlogIndexPage.tsx', 'BlogIndexPage'],
  ['blog/que-es-el-ens.html', 'blog/QueEsElEns.tsx', 'QueEsElEns'],
  ['blog/ens-vs-iso27001.html', 'blog/EnsVsIso27001.tsx', 'EnsVsIso27001'],
  ['blog/cuanto-cuesta-certificado-ens.html', 'blog/CuantoCuestaCertificadoEns.tsx', 'CuantoCuestaCertificadoEns'],
  ['blog/certificado-ens-obligatorio.html', 'blog/CertificadoEnsObligatorio.tsx', 'CertificadoEnsObligatorio'],
  ['blog/certificado-ens-media-alta.html', 'blog/CertificadoEnsMediaAlta.tsx', 'CertificadoEnsMediaAlta'],
  ['blog/auditoria-ens-proceso.html', 'blog/AuditoriaEnsProceso.tsx', 'AuditoriaEnsProceso'],
  ['blog/declaracion-conformidad-ens.html', 'blog/DeclaracionConformidadEns.tsx', 'DeclaracionConformidadEns'],
  ['blog/gap-analysis-ens.html', 'blog/GapAnalysisEns.tsx', 'GapAnalysisEns'],
  ['blog/ens-basico-guia-empresas.html', 'blog/EnsBasicoGuiaEmpresas.tsx', 'EnsBasicoGuiaEmpresas'],
  ['blog/ens-sector-salud.html', 'blog/EnsSectorSalud.tsx', 'EnsSectorSalud'],
  ['blog/renovacion-certificado-ens.html', 'blog/RenovacionCertificadoEns.tsx', 'RenovacionCertificadoEns'],
  ['blog/iso27001-pymes.html', 'blog/Iso27001Pymes.tsx', 'Iso27001Pymes'],
  ['blog/iso27001-requisitos-certificacion.html', 'blog/Iso27001RequisitosCertificacion.tsx', 'Iso27001RequisitosCertificacion'],
  ['blog/que-es-iso22301.html', 'blog/QueEsIso22301.tsx', 'QueEsIso22301'],
  ['blog/plan-continuidad-negocio.html', 'blog/PlanContinuidadNegocio.tsx', 'PlanContinuidadNegocio'],
  ['blog/que-es-dora-reglamento.html', 'blog/QueEsDoraReglamento.tsx', 'QueEsDoraReglamento'],
  ['blog/dora-entidades-financieras.html', 'blog/DoraEntidadesFinancieras.tsx', 'DoraEntidadesFinancieras'],
  ['blog/que-es-nis2-directiva.html', 'blog/QueEsNis2Directiva.tsx', 'QueEsNis2Directiva'],
  ['blog/que-es-tisax.html', 'blog/QueEsTisax.tsx', 'QueEsTisax'],
]

// ── Extract body content between nav and footer ──
function extractContent(html) {
  // Remove everything before the page content starts
  // Find end of nav-overlay or after announce+nav block
  let content = html

  // Remove doctype, head, opening body
  content = content.replace(/<!DOCTYPE[^>]*>/i, '')
  content = content.replace(/<html[^>]*>/i, '')
  content = content.replace(/<\/html>/i, '')
  content = content.replace(/<head>[\s\S]*?<\/head>/i, '')
  content = content.replace(/<body[^>]*>/i, '')
  content = content.replace(/<\/body>/i, '')

  // Remove noscript GTM
  content = content.replace(/<!--\s*Google Tag Manager[^-]*-->[\s\S]*?<!--\s*End Google Tag Manager[^-]*-->/gi, '')
  content = content.replace(/<noscript>[\s\S]*?<\/noscript>/gi, '')

  // Remove announce bar
  content = content.replace(/<!--\s*ANNOUNCE BAR\s*-->[\s\S]*?<\/div>\s*/i, '')
  // If no comment, remove by class
  content = content.replace(/<div\s+class="announce-bar"[\s\S]*?<\/div>\s*/i, '')

  // Remove nav
  content = content.replace(/<!--\s*NAV\s*-->[\s\S]*?<\/nav>\s*/i, '')
  content = content.replace(/<nav\s+class="nav"[\s\S]*?<\/nav>\s*/i, '')

  // Remove nav-overlay
  content = content.replace(/<div\s+class="nav-overlay"[\s\S]*?<\/div>\s*/i, '')

  // Remove footer
  content = content.replace(/<!--\s*FOOTER\s*-->[\s\S]*?<\/footer>\s*/i, '')
  content = content.replace(/<footer\s+class="footer"[\s\S]*?<\/footer>\s*/i, '')

  // Remove floating CTA
  content = content.replace(/<!--\s*FLOATING CTA\s*-->[\s\S]*?(?=<!--|<div|<script|\s*$)/i, '')
  content = content.replace(/<a[^>]*class="floating-cta"[^>]*>[\s\S]*?<\/a>\s*/i, '')

  // Remove cookie banner
  content = content.replace(/<!--\s*COOKIE BANNER\s*-->[\s\S]*?<\/div>\s*<\/div>\s*/i, '')
  content = content.replace(/<div\s+class="cookie-banner"[\s\S]*?<\/div>\s*<\/div>\s*/i, '')

  // Remove exit modal
  content = content.replace(/<!--\s*EXIT INTENT MODAL\s*-->[\s\S]*?<\/div>\s*<\/div>\s*/i, '')
  content = content.replace(/<div\s+class="exit-modal"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/i, '')

  // Remove sticky CTA bar
  content = content.replace(/<!--\s*STICKY BOTTOM CTA[^>]*-->[\s\S]*?(?=<script|$)/i, '')
  content = content.replace(/<div\s+class="sticky-cta-bar"[\s\S]*?<\/div>\s*/i, '')

  // Remove inline script tags
  content = content.replace(/<script[\s\S]*?<\/script>\s*/gi, '')

  // Remove script src tags
  content = content.replace(/<script\s+src[^>]*>\s*<\/script>\s*/gi, '')

  // Remove HTML comments (but not JSX ones we've already converted)
  content = content.replace(/<!--[\s\S]*?-->/g, '')

  return content.trim()
}

// ── Extract inline <style> blocks ──
function extractInlineStyles(html) {
  const styles = []
  const regex = /<style[^>]*>([\s\S]*?)<\/style>/gi
  let match
  while ((match = regex.exec(html)) !== null) {
    styles.push(match[1].trim())
  }
  return styles
}

// ── Convert inline style="..." to JSX style={{}} ──
function convertInlineStyles(html) {
  return html.replace(/style="([^"]*)"/g, (_, styleStr) => {
    const props = []
    // Split by semicolons, handle edge cases
    const declarations = styleStr.split(';').filter(s => s.trim())
    for (const decl of declarations) {
      const colonIdx = decl.indexOf(':')
      if (colonIdx === -1) continue
      let prop = decl.slice(0, colonIdx).trim()
      let val = decl.slice(colonIdx + 1).trim()

      // Convert CSS property to camelCase
      prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())

      // Clean up value
      val = val.replace(/'/g, "\\'")

      // Handle numeric-only values (keep as string for safety)
      props.push(`${prop}:'${val}'`)
    }
    return `style={{${props.join(',')}}}`
  })
}

// ── Convert HTML attributes to JSX ──
function convertToJsx(html) {
  let jsx = html

  // class → className
  jsx = jsx.replace(/\bclass="/g, 'className="')
  jsx = jsx.replace(/\bclass='/g, "className='")

  // for → htmlFor (on labels)
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="')

  // Convert inline styles
  jsx = convertInlineStyles(jsx)

  // Self-closing tags
  jsx = jsx.replace(/<br\s*>/gi, '<br />')
  jsx = jsx.replace(/<br\s*\/?\s*>/gi, '<br />')
  jsx = jsx.replace(/<hr\s*>/gi, '<hr />')
  jsx = jsx.replace(/<hr\s*\/?\s*>/gi, '<hr />')
  jsx = jsx.replace(/<img\b([^>]*?)(?<!\/)>/gi, '<img$1 />')
  jsx = jsx.replace(/<input\b([^>]*?)(?<!\/)>/gi, '<input$1 />')
  jsx = jsx.replace(/<meta\b([^>]*?)(?<!\/)>/gi, '<meta$1 />')
  jsx = jsx.replace(/<source\b([^>]*?)(?<!\/)>/gi, '<source$1 />')

  // Fix double self-close
  jsx = jsx.replace(/\s*\/\s*\/>/g, ' />')

  // Event handlers
  jsx = jsx.replace(/\bonclick="/g, 'onClick="')
  jsx = jsx.replace(/\bonsubmit="/g, 'onSubmit="')
  jsx = jsx.replace(/\bonchange="/g, 'onChange="')
  jsx = jsx.replace(/\bonfocus="/g, 'onFocus="')
  jsx = jsx.replace(/\bonblur="/g, 'onBlur="')
  jsx = jsx.replace(/\bonmouseover="/g, 'onMouseOver="')
  jsx = jsx.replace(/\bonmouseout="/g, 'onMouseOut="')
  jsx = jsx.replace(/\bonkeydown="/g, 'onKeyDown="')

  // HTML entities
  jsx = jsx.replace(/&middot;/g, '·')
  jsx = jsx.replace(/&mdash;/g, '—')
  jsx = jsx.replace(/&ndash;/g, '–')
  jsx = jsx.replace(/&rarr;/g, '→')
  jsx = jsx.replace(/&larr;/g, '←')
  jsx = jsx.replace(/&amp;/g, '&')
  jsx = jsx.replace(/&lt;/g, '<')
  jsx = jsx.replace(/&gt;/g, '>')
  // Keep &nbsp; as unicode
  jsx = jsx.replace(/&nbsp;/g, '\u00A0')

  // Convert internal links: href="xxx.html" → href="/xxx"
  // Root pages
  jsx = jsx.replace(/href="([\w-]+)\.html"/g, (_, name) => `href="/${name === 'index' ? '' : name}"`)
  // Blog links from blog pages
  jsx = jsx.replace(/href="\.\.\/([\w-]+)\.html"/g, (_, name) => `href="/${name === 'index' ? '' : name}"`)
  // Blog index
  jsx = jsx.replace(/href="blog\/index\.html"/g, 'href="/blog"')
  jsx = jsx.replace(/href="blog\/([\w-]+)\.html"/g, (_, name) => `href="/blog/${name}"`)

  // crossorigin without value
  jsx = jsx.replace(/\bcrossorigin\b(?!=)/g, 'crossOrigin="anonymous"')

  // tabindex
  jsx = jsx.replace(/\btabindex="/g, 'tabIndex="')

  // charset
  jsx = jsx.replace(/\bcharset="/g, 'charSet="')

  // colspan, rowspan
  jsx = jsx.replace(/\bcolspan="/g, 'colSpan="')
  jsx = jsx.replace(/\browspan="/g, 'rowSpan="')

  // autocomplete
  jsx = jsx.replace(/\bautocomplete="/g, 'autoComplete="')

  // novalidate
  jsx = jsx.replace(/\bnovalidate/g, 'noValidate')

  return jsx
}

// ── Build TSX component ──
function buildComponent(name, jsxContent, inlineStyles) {
  const hasLink = /href="\//.test(jsxContent)
  let imports = ''
  if (hasLink) {
    imports = "import { Link } from 'react-router-dom'\n"
  }

  // Convert href="/..." to Link components for internal navigation
  // Only for links that point to our internal pages
  if (hasLink) {
    // Replace <a href="/xxx" ...>...</a> with <Link to="/xxx" ...>...</Link>
    // But only for internal links (starting with /)
    // Skip external links (http, mailto, tel, #)
    jsxContent = jsxContent.replace(
      /<a\s+((?:[^>]*?)href="(\/[^"]*)"(?:[^>]*?))>([\s\S]*?)<\/a>/g,
      (match, attrs, href, inner) => {
        // Skip if it has target="_blank" or is a download link
        if (attrs.includes('target=') || attrs.includes('download')) return match
        // Replace href with to
        const newAttrs = attrs.replace(`href="${href}"`, `to="${href}"`)
        return `<Link ${newAttrs}>${inner}</Link>`
      }
    )
  }

  let styleBlock = ''
  if (inlineStyles.length > 0) {
    const cssText = inlineStyles.join('\n').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
    styleBlock = `\n      <style dangerouslySetInnerHTML={{ __html: \`${cssText}\` }} />`
  }

  return `${imports}
export default function ${name}() {
  return (
    <>${styleBlock}
${jsxContent}
    </>
  )
}
`
}

// ── Process all pages ──
let created = 0
let skipped = 0

for (const [src, dest, name] of [...PAGES, ...BLOG_PAGES]) {
  const srcPath = join(CODE_NEW, src)
  const destPath = join(PAGES_DIR, dest)

  // Skip if already exists (from previous agent conversion)
  if (existsSync(destPath)) {
    console.log(`  SKIP ${dest} (already exists)`)
    skipped++
    continue
  }

  if (!existsSync(srcPath)) {
    console.log(`  MISS ${src} (source not found)`)
    continue
  }

  const html = readFileSync(srcPath, 'utf-8')
  const inlineStyles = extractInlineStyles(html)
  const content = extractContent(html)
  const jsxContent = convertToJsx(content)
  const tsx = buildComponent(name, jsxContent, inlineStyles)

  writeFileSync(destPath, tsx, 'utf-8')
  console.log(`  OK   ${dest}`)
  created++
}

console.log(`\nDone: ${created} created, ${skipped} skipped`)
