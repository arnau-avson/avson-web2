import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ── Password protection ──
const SITE_PASSWORD = process.env.SITE_PASSWORD || 'Avson1234'
const AUTH_COOKIE = 'avson_auth'

const loginPage = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Acceso — Avson GRC</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F8F6F1;font-family:'Inter',sans-serif}
    .login-card{background:#fff;padding:48px 40px;max-width:400px;width:90%;box-shadow:0 4px 24px rgba(0,0,0,0.08);text-align:center}
    .login-card h1{font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:300;color:#1A2744;margin-bottom:8px;letter-spacing:-0.5px}
    .login-card p{font-size:14px;color:#6B7280;margin-bottom:32px;line-height:1.5}
    .login-card input{width:100%;padding:14px 18px;border:1.5px solid #D8D8D8;font-family:'Inter',sans-serif;font-size:15px;color:#1A2744;outline:none;transition:border-color 0.2s;box-sizing:border-box}
    .login-card input:focus{border-color:#C9A84C}
    .login-card button{width:100%;padding:14px;margin-top:16px;background:#1A2744;color:#fff;border:none;font-family:'Inter',sans-serif;font-size:14px;font-weight:500;letter-spacing:0.5px;cursor:pointer;transition:background 0.2s}
    .login-card button:hover{background:#2a3a5c}
    .error{color:#dc2626;font-size:13px;margin-top:12px;display:none}
    .logo{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:400;color:#1A2744;letter-spacing:1px;margin-bottom:32px}
    .logo span{color:#C9A84C}
  </style>
</head>
<body>
  <div class="login-card">
    <div class="logo">AVSON <span>&middot;</span> GRC</div>
    <h1>Acceso restringido</h1>
    <p>Introduce la contraseña para acceder al sitio</p>
    <form method="POST" action="/__auth">
      <input type="password" name="password" placeholder="Contraseña" autofocus required>
      <button type="submit">Acceder</button>
      ERRORMSG
    </form>
  </div>
</body>
</html>`

function parseCookies(cookieHeader) {
  const cookies = {}
  if (!cookieHeader) return cookies
  cookieHeader.split(';').forEach(c => {
    const [key, ...val] = c.split('=')
    cookies[key.trim()] = val.join('=').trim()
  })
  return cookies
}

// Auth endpoint
app.post('/__auth', (req, res) => {
  if (req.body.password === SITE_PASSWORD) {
    res.setHeader('Set-Cookie', `${AUTH_COOKIE}=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`)
    return res.redirect(req.query.next || '/')
  }
  const page = loginPage.replace('ERRORMSG', '<p class="error" style="display:block">Contraseña incorrecta</p>')
  res.status(401).send(page)
})

// Auth middleware — skip for favicon and robots.txt
app.use((req, res, next) => {
  if (req.path === '/__auth' || req.path === '/favicon.svg' || req.path === '/robots.txt') return next()
  const cookies = parseCookies(req.headers.cookie)
  if (cookies[AUTH_COOKIE]) return next()
  const page = loginPage.replace('ERRORMSG', '')
  res.status(401).send(page)
})

// ── Static files ──
const publicDir = join(__dirname, '..', 'public')
app.use(express.static(publicDir))

// ── Contact API ──
const TENANT = process.env.AZURE_TENANT_ID
const CLIENT_ID = process.env.AZURE_CLIENT_ID
const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET
const SENDER = process.env.MAIL_SENDER || 'support@avson.eu'
const RECIPIENT = process.env.MAIL_RECIPIENT || 'hello@avson.eu'

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
          toRecipients: [{ emailAddress: { address: to } }],
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

app.post('/api/contact', async (req, res) => {
  const { name, email, org, area, challenges } = req.body

  if (!name || !email || !area || !challenges) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const token = await getToken()

    // 1. Internal notification
    await sendMail(
      token,
      RECIPIENT,
      `[avson.eu] Contacto de ${name} — ${area}`,
      `<h2>Nuevo contacto desde avson.eu</h2>
       <table style="border-collapse:collapse;font-family:sans-serif;">
         <tr><td style="padding:6px 12px;font-weight:bold;">Nombre</td><td style="padding:6px 12px;">${name}</td></tr>
         <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;">${email}</td></tr>
         <tr><td style="padding:6px 12px;font-weight:bold;">Organización</td><td style="padding:6px 12px;">${org || '—'}</td></tr>
         <tr><td style="padding:6px 12px;font-weight:bold;">Área</td><td style="padding:6px 12px;">${area}</td></tr>
         <tr><td style="padding:6px 12px;font-weight:bold;">Desafíos</td><td style="padding:6px 12px;">${challenges}</td></tr>
       </table>`
    )

    // 2. Confirmation to sender
    await sendMail(
      token,
      email,
      'Hemos recibido tu solicitud — avson',
      buildConfirmationEmail(name)
    )

    res.json({ ok: true })
  } catch {
    res.status(500).json({ error: 'Internal server error' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
  process.stdout.write(`Avson GRC running on port ${PORT}\n`)
})
