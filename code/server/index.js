import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

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

const PORT = process.env.PORT || 3011
app.listen(PORT, '0.0.0.0', () => {
  process.stdout.write(`Contact API running on port ${PORT}\n`)
})
