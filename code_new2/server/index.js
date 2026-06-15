import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'

const app = express()

// ── CORS: solo permitir avson.eu ──
app.use(cors({
  origin: ['https://avson.eu', 'https://www.avson.eu'],
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}))

app.use(express.json())

// ── Rate limiting: max 5 leads por minuto por IP ──
const leadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiadas solicitudes, inténtalo de nuevo en un minuto' }
})

// ── Azure Graph API config ──
const TENANT = process.env.AZURE_TENANT_ID
const CLIENT_ID = process.env.AZURE_CLIENT_ID
const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET
const SENDER = process.env.MAIL_SENDER || 'support@avson.eu'
const RECIPIENT = process.env.MAIL_RECIPIENT || 'arnau@avson.eu'

// ── Email helpers ──
function buildConfirmationEmail(name) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000;padding:60px 20px;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">
          <tr>
            <td style="padding:0 0 48px;">
              <span style="font-size:20px;font-weight:600;color:#ffffff;letter-spacing:-0.5px;">avson</span>
            </td>
          </tr>
          <tr>
            <td>
              <h1 style="margin:0;font-size:42px;font-weight:700;color:#ffffff;letter-spacing:-1.5px;line-height:1.1;">
                Hemos recibido<br>tu solicitud.
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 0 0;">
              <p style="margin:0;font-size:18px;line-height:1.7;color:#71717a;">
                Hola ${name}, gracias por contactarnos.<br>
                Te responderemos en 24–48h.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:48px 0;">
              <div style="border-top:1px solid #27272a;"></div>
            </td>
          </tr>
          <tr>
            <td>
              <span style="font-size:13px;font-weight:600;color:#52525b;letter-spacing:1.5px;text-transform:uppercase;">avson</span>
              <p style="margin:8px 0 0;font-size:13px;color:#3f3f46;">
                hello@avson.eu &middot; Madrid & Barcelona
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function buildQuoteEmail(name, quote, input) {
  const fmt = (n) => n.toLocaleString('es-ES') + ' €'

  let linesHtml = ''
  if (!quote.routeToSales && quote.lines.length) {
    linesHtml = quote.lines.map(l => {
      const factorLabel = l.factor < 1 ? ` <span style="color:#16a34a">(${Math.round(l.factor * 100)}%)</span>` : ''
      return `<tr>
        <td style="padding:10px 16px;border-bottom:1px solid #27272a;color:#e4e4e7">${escapeHtml(l.label)}${factorLabel}</td>
        <td style="padding:10px 16px;border-bottom:1px solid #27272a;color:#ffffff;text-align:right;font-weight:600">${fmt(l.price)}</td>
      </tr>`
    }).join('')
  }

  const expressLabel = quote.expressApplied ? `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #27272a;color:#e4e4e7">Recargo Express (+30%)</td>
      <td style="padding:10px 16px;border-bottom:1px solid #27272a;color:#ffffff;text-align:right;font-weight:600">Incluido</td>
    </tr>` : ''

  const totalRow = !quote.routeToSales ? `
    <tr>
      <td style="padding:14px 16px;color:#ffffff;font-weight:700;font-size:16px">Total orientativo</td>
      <td style="padding:14px 16px;color:#e85838;text-align:right;font-weight:700;font-size:20px">${fmt(quote.base)}</td>
    </tr>` : ''

  let incentivesHtml = ''
  if (!quote.routeToSales && quote.incentives) {
    incentivesHtml = `
    <tr><td colspan="2" style="padding:24px 16px 8px;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Incentivos disponibles</td></tr>
    <tr>
      <td style="padding:6px 16px;color:#a1a1aa;font-size:14px">Reserva en 48h (-5%)</td>
      <td style="padding:6px 16px;color:#16a34a;text-align:right;font-size:14px;font-weight:600">${fmt(quote.incentives.reserva48h)}</td>
    </tr>
    <tr>
      <td style="padding:6px 16px;color:#a1a1aa;font-size:14px">Pago en 48h (-15%)</td>
      <td style="padding:6px 16px;color:#16a34a;text-align:right;font-size:14px;font-weight:600">${fmt(quote.incentives.pago48h)}</td>
    </tr>`
    if (quote.incentives.combinado) {
      incentivesHtml += `
    <tr>
      <td style="padding:6px 16px;color:#a1a1aa;font-size:14px">Reserva + Pago 48h</td>
      <td style="padding:6px 16px;color:#16a34a;text-align:right;font-size:14px;font-weight:600">${fmt(quote.incentives.combinado)}</td>
    </tr>`
    }
  }

  const notesHtml = quote.notes.length ? `<p style="margin:16px 0 0;font-size:13px;color:#71717a;line-height:1.5">${quote.notes.map(n => escapeHtml(n)).join('<br>')}</p>` : ''

  const salesBlock = quote.routeToSales
    ? `<p style="margin:0;font-size:18px;line-height:1.7;color:#71717a;">
        ${escapeHtml(quote.reason || 'Tu caso necesita una valoración personalizada.')}<br><br>
        Un consultor de nuestro equipo te contactará en las próximas 24h para preparar una propuesta a medida.
      </p>`
    : ''

  const tableBlock = !quote.routeToSales ? `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;border-collapse:collapse;background:#18181b;border-radius:10px;overflow:hidden">
      <tr><td colspan="2" style="padding:16px;background:#27272a;color:#a1a1aa;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;font-weight:700">Desglose del presupuesto</td></tr>
      ${linesHtml}
      ${expressLabel}
      ${totalRow}
      ${incentivesHtml}
    </table>` : ''

  const detailsHtml = [
    input.norms.length ? 'Normas: ' + input.norms.join(', ').toUpperCase() : '',
    'Ubicaciones: ' + (input.locations || '1'),
    'Infraestructura: ' + (input.infra || 'cloud'),
    input.express ? 'Modalidad: Express' : ''
  ].filter(Boolean).map(d => escapeHtml(d)).join(' · ')

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000;padding:60px 20px;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">
          <tr>
            <td style="padding:0 0 48px;">
              <span style="font-size:20px;font-weight:600;color:#ffffff;letter-spacing:-0.5px;">avson</span>
            </td>
          </tr>
          <tr>
            <td>
              <h1 style="margin:0;font-size:36px;font-weight:700;color:#ffffff;letter-spacing:-1.5px;line-height:1.15;">
                ${quote.routeToSales ? 'Hemos recibido<br>tu solicitud.' : 'Tu presupuesto<br>orientativo.'}
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 0 0;">
              <p style="margin:0;font-size:18px;line-height:1.7;color:#71717a;">
                Hola ${name}, gracias por tu interés en Avson.
              </p>
              ${salesBlock}
            </td>
          </tr>
          <tr>
            <td>
              ${tableBlock}
              ${notesHtml}
              <p style="margin:24px 0 0;font-size:13px;color:#52525b;line-height:1.5">${detailsHtml}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 0 0;">
              <p style="margin:0;font-size:13px;color:#71717a;line-height:1.6;background:#18181b;border-radius:8px;padding:16px">
                <strong style="color:#a1a1aa">Importante:</strong> Este presupuesto es orientativo y no vinculante.
                El importe final se confirma en la oferta formal tras revisar el alcance con tu equipo.
                Un consultor te contactará en las próximas 24h.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 0;text-align:center">
              <a href="https://avson.eu/contacto.html" style="display:inline-block;background:#e85838;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:14px 32px;border-radius:8px;letter-spacing:0.02em">Hablar con un experto &rarr;</a>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 0 0;">
              <div style="border-top:1px solid #27272a;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 0 0;">
              <span style="font-size:13px;font-weight:600;color:#52525b;letter-spacing:1.5px;text-transform:uppercase;">avson</span>
              <p style="margin:8px 0 0;font-size:13px;color:#3f3f46;">
                hello@avson.eu &middot; Madrid & Barcelona
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

async function getToken() {
  const tokenRes = await fetch(
    `https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        scope: 'https://graph.microsoft.com/.default',
      }),
    }
  )
  if (!tokenRes.ok) throw new Error('Auth failed')
  const { access_token } = await tokenRes.json()
  return access_token
}

async function sendMail(token, to, subject, htmlContent) {
  // to puede ser "a@b.com" o "a@b.com,c@d.com"
  const recipients = String(to).split(',').map(e => e.trim()).filter(Boolean)
    .map(address => ({ emailAddress: { address } }))

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${SENDER}/sendMail`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: 'HTML', content: htmlContent },
          toRecipients: recipients,
        },
        saveToSentItems: true,
      }),
    }
  )
  if (!res.ok) {
    const err = await res.text()
    throw new Error(err)
  }
}

// ── Validation helpers ──
const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/

function isValidEmail(email) {
  if (typeof email !== 'string') return false
  if (email.length > 254) return false
  if (/[\r\n\x00]/.test(email)) return false   // bloquear inyección CRLF
  return EMAIL_RE.test(email)
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  return String(text).replace(/[&<>"']/g, m => map[m])
}

function sanitizeField(val) {
  const s = String(val).trim()
  return s.length > 500 ? s.substring(0, 500) : s
}

// ── Lead endpoint ──
const FIELD_LABELS = {
  nombre: 'Nombre',
  email: 'Email',
  empresa: 'Empresa',
  necesidad: 'Necesidad',
  source: 'Origen',
  page: 'Página',
  ts: 'Fecha'
}

app.post('/api/lead', leadLimiter, async (req, res) => {
  const data = req.body || {}

  if (!isValidEmail(data.email)) {
    return res.status(400).json({ error: 'Valid email is required' })
  }

  try {
    const token = await getToken()

    const rows = Object.entries(data)
      .map(([key, val]) => {
        const label = FIELD_LABELS[key] || key
        const escaped = escapeHtml(sanitizeField(val))
        return `<tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 12px">${escaped}</td></tr>`
      })
      .join('')

    const nombre = sanitizeField(data.nombre || data.email.split('@')[0])
    const source = sanitizeField(data.source || 'web')

    // 1. Internal notification
    await sendMail(
      token,
      RECIPIENT,
      `[avson.eu] Lead de ${escapeHtml(nombre)} — ${escapeHtml(source)}`,
      `<h2>Nuevo lead desde avson.eu</h2>
       <table style="border-collapse:collapse;font-family:sans-serif;">
         ${rows}
       </table>`
    )

    // 2. Confirmation to sender
    await sendMail(
      token,
      data.email,
      'Hemos recibido tu solicitud — avson',
      buildConfirmationEmail(escapeHtml(nombre))
    )

    res.json({ ok: true })
  } catch (err) {
    console.error('[/api/lead] Error:', err.message ? err.message.substring(0, 200) : 'Unknown error')
    res.status(500).json({ error: 'Internal server error' })
  }
})

// ── Quote engine (moved from client-side avson-quote.js) ──
const PRICING = {
  norms: {
    ens:      { label: 'ENS (Básica/Media)', S: 8000,  M: 10000 },
    iso9001:  { label: 'ISO 9001',           S: 5000,  M: 7500  },
    iso14001: { label: 'ISO 14001',          S: 7000,  M: 9000  },
    iso22301: { label: 'ISO 22301',          S: 8000,  M: 10000 },
    iso27001: { label: 'ISO 27001',          S: 8500,  M: 10500 },
    iso42001: { label: 'ISO 42001',          S: 8500,  M: 10500 },
    iso50001: { label: 'ISO 50001',          S: 8000,  M: 10000 },
    dora:     { label: 'DORA',               S: 8500,  M: 10500 }
  },
  ensAltaSurcharge: 0.20,
  expressSurcharge: 0.30,
  multiNormFactors: [1.0, 0.5, 0.4],
  incentives: { reserva48h: 0.05, pago48h: 0.15 },
  stackIncentives: false,
  bumpOnPremToM: false
}

const FREE_EMAIL_DOMAINS = [
  'gmail.com','hotmail.com','hotmail.es','outlook.com','outlook.es',
  'yahoo.com','yahoo.es','live.com','icloud.com','aol.com',
  'protonmail.com','proton.me','mail.com','gmx.com','gmx.es','yandex.com'
]

function isCorporateEmail(email) {
  if (!isValidEmail(email)) return false
  const domain = email.split('@')[1].toLowerCase()
  return !FREE_EMAIL_DOMAINS.includes(domain)
}

function computeQuote(input) {
  const P = PRICING
  const out = { routeToSales: false, reason: '', size: '', lines: [], subtotal: 0,
                expressApplied: false, base: 0, incentives: {}, notes: [] }

  const loc = parseInt(input.locations, 10) || 1
  out.size = loc === 1 ? 'S' : loc === 2 ? 'M' : 'B'
  if (out.size === 'B') {
    out.routeToSales = true
    out.reason = '3 o más ubicaciones — lo valora el equipo de ventas con un alcance a medida.'
    return out
  }

  let effSize = out.size
  if (P.bumpOnPremToM && input.infra === 'onprem' && !input.migra && effSize === 'S') {
    effSize = 'M'
    out.notes.push('Infraestructura on-premise sin migración: tratado como M.')
  }

  if (!input.norms || !input.norms.length) {
    out.routeToSales = true
    out.reason = 'No se ha seleccionado ninguna norma.'
    return out
  }

  const lines = []
  for (const key of input.norms) {
    const n = P.norms[key]
    if (!n) continue
    let base = n[effSize]
    if (base == null) {
      out.routeToSales = true
      out.reason = 'Incluye una norma sin tarifa publicada (' + n.label + ') — lo cierra ventas.'
      return out
    }
    if (key === 'ens' && (input.ensCategoria || '').toLowerCase() === 'alta') {
      base = Math.round(base * (1 + P.ensAltaSurcharge))
      out.notes.push('ENS categoría Alta: +' + (P.ensAltaSurcharge * 100) + '%.')
    }
    lines.push({ key, label: n.label, base })
  }

  lines.sort((a, b) => b.base - a.base)
  lines.forEach((l, i) => {
    l.factor = P.multiNormFactors[Math.min(i, P.multiNormFactors.length - 1)]
    l.price = Math.round(l.base * l.factor)
  })
  out.lines = lines
  out.subtotal = lines.reduce((s, l) => s + l.price, 0)
  out.expressApplied = !!input.express
  out.base = out.expressApplied ? Math.round(out.subtotal * (1 + P.expressSurcharge)) : out.subtotal

  const r = P.incentives.reserva48h, p = P.incentives.pago48h
  out.incentives = {
    reserva48h: Math.round(out.base * (1 - r)),
    pago48h:    Math.round(out.base * (1 - p)),
    combinado:  P.stackIncentives ? Math.round(out.base * (1 - r) * (1 - p)) : null
  }
  return out
}

app.post('/api/quote', leadLimiter, async (req, res) => {
  const data = req.body || {}

  // Gate: solo email corporativo
  if (!isCorporateEmail(data.email)) {
    return res.status(400).json({ error: 'Se requiere un email corporativo válido' })
  }

  const input = {
    norms: Array.isArray(data.norms) ? data.norms : [],
    ensCategoria: sanitizeField(data.ensCategoria || 'media'),
    locations: data.locations || '1',
    infra: sanitizeField(data.infra || 'cloud'),
    migra: data.migra === true || data.migra === 'si',
    express: data.express === true || data.express === 'si'
  }

  const quote = computeQuote(input)

  // Enviar lead + presupuesto al equipo
  try {
    const token = await getToken()
    const nombre = sanitizeField(data.nombre || data.email.split('@')[0])

    const leadData = {
      nombre, email: data.email, normas: input.norms.join(','),
      ubicaciones: input.locations, infra: input.infra,
      express: input.express, ens_categoria: input.ensCategoria,
      size: quote.size, presupuesto_base: quote.base,
      route_to_sales: quote.routeToSales,
      source: 'presupuesto_packs', page: sanitizeField(data.page || ''), ts: new Date().toISOString()
    }
    const rows = Object.entries(leadData)
      .map(([key, val]) => {
        const label = FIELD_LABELS[key] || key
        return `<tr><td style="padding:6px 12px;font-weight:bold">${escapeHtml(label)}</td><td style="padding:6px 12px">${escapeHtml(sanitizeField(String(val)))}</td></tr>`
      }).join('')

    await sendMail(token, RECIPIENT,
      `[avson.eu] Presupuesto de ${escapeHtml(nombre)}`,
      `<h2>Nuevo presupuesto desde avson.eu</h2>
       <table style="border-collapse:collapse;font-family:sans-serif">${rows}</table>`)

    await sendMail(token, data.email,
      quote.routeToSales ? 'Hemos recibido tu solicitud — avson' : 'Tu presupuesto orientativo — avson',
      buildQuoteEmail(escapeHtml(nombre), quote, input))
  } catch (err) {
    console.error('[/api/quote] Mail error:', err.message ? err.message.substring(0, 200) : 'Unknown')
  }

  // Devolver solo routeToSales (sin cifras) al cliente
  res.json({ ok: true, routeToSales: quote.routeToSales, reason: quote.reason })
})

// ── Health check ──
app.get('/health', (req, res) => res.json({ ok: true }))

const PORT = process.env.PORT || 3001
app.listen(PORT, '0.0.0.0', () => {
  process.stdout.write(`Avson mail API running on port ${PORT}\n`)
})
