const API_BASE = import.meta.env.DEV ? 'http://localhost:3001' : ''

export async function sendContactEmail({ name, email, org, area, challenges }) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, org, area, challenges }),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(err)
  }
}
