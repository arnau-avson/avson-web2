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

// ── Health check ──
app.get('/health', (req, res) => res.json({ ok: true }))

const PORT = process.env.PORT || 3001
app.listen(PORT, '0.0.0.0', () => {
  process.stdout.write(`Avson mail API running on port ${PORT}\n`)
})
