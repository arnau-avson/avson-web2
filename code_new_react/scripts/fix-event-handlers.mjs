/**
 * Fix remaining string event handlers across all pages.
 * Converts onFocus="...", onBlur="...", onMouseOver="...", onMouseOut="...", oninput="...", onSubmit="..."
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pagesDir = path.join(__dirname, '..', 'src', 'pages')

function getAllTsxFiles(dir) {
  let results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) results.push(...getAllTsxFiles(full))
    else if (entry.name.endsWith('.tsx')) results.push(full)
  }
  return results
}

const files = getAllTsxFiles(pagesDir)
let totalChanges = 0

for (const filePath of files) {
  let content = fs.readFileSync(filePath, 'utf-8')
  const original = content
  const name = path.relative(pagesDir, filePath)

  // onFocus="this.style.borderColor='...'"
  content = content.replace(
    /onFocus="this\.style\.borderColor='([^']*)'" /g,
    `onFocus={(e) => (e.currentTarget.style.borderColor = '$1')} `
  )
  // Also without trailing space
  content = content.replace(
    /onFocus="this\.style\.borderColor='([^']*)'"(?=[/ >])/g,
    `onFocus={(e) => (e.currentTarget.style.borderColor = '$1')}`
  )

  // onBlur="this.style.borderColor='...'"
  content = content.replace(
    /onBlur="this\.style\.borderColor='([^']*)'" /g,
    `onBlur={(e) => (e.currentTarget.style.borderColor = '$1')} `
  )
  content = content.replace(
    /onBlur="this\.style\.borderColor='([^']*)'"(?=[/ >])/g,
    `onBlur={(e) => (e.currentTarget.style.borderColor = '$1')}`
  )

  // onMouseOver="this.style.opacity='...'"
  content = content.replace(
    /onMouseOver="this\.style\.opacity='([^']*)'" /g,
    `onMouseOver={(e) => (e.currentTarget.style.opacity = '$1')} `
  )
  content = content.replace(
    /onMouseOver="this\.style\.opacity='([^']*)'"(?=[/ >])/g,
    `onMouseOver={(e) => (e.currentTarget.style.opacity = '$1')}`
  )

  // onMouseOut="this.style.opacity='...'"
  content = content.replace(
    /onMouseOut="this\.style\.opacity='([^']*)'" /g,
    `onMouseOut={(e) => (e.currentTarget.style.opacity = '$1')} `
  )
  content = content.replace(
    /onMouseOut="this\.style\.opacity='([^']*)'"(?=[/ >])/g,
    `onMouseOut={(e) => (e.currentTarget.style.opacity = '$1')}`
  )

  // onMouseOver="this.style.borderColor='...'"
  content = content.replace(
    /onMouseOver="this\.style\.borderColor='([^']*)'" /g,
    `onMouseOver={(e) => (e.currentTarget.style.borderColor = '$1')} `
  )
  content = content.replace(
    /onMouseOver="this\.style\.borderColor='([^']*)'"(?=[/ >])/g,
    `onMouseOver={(e) => (e.currentTarget.style.borderColor = '$1')}`
  )

  // onMouseOut="this.style.borderColor='...'"
  content = content.replace(
    /onMouseOut="this\.style\.borderColor='([^']*)'" /g,
    `onMouseOut={(e) => (e.currentTarget.style.borderColor = '$1')} `
  )
  content = content.replace(
    /onMouseOut="this\.style\.borderColor='([^']*)'"(?=[/ >])/g,
    `onMouseOut={(e) => (e.currentTarget.style.borderColor = '$1')}`
  )

  // oninput="document.getElementById('sliderVal').textContent=this.value+'%'"
  content = content.replace(
    /oninput="document\.getElementById\('(\w+)'\)\.textContent=this\.value\+'([^']*)'"(?=[/ >])/g,
    `onInput={(e) => { const t = document.getElementById('$1'); if (t) t.textContent = (e.target as HTMLInputElement).value + '$2' }}`
  )

  // onSubmit="submitLeadGate(event)" -> needs custom handler
  content = content.replace(
    /onSubmit="submitLeadGate\(event\)"/g,
    `onSubmit={(e) => { e.preventDefault(); /* TODO: implement submitLeadGate */ }}`
  )

  // onMouseOver="this.style.background='...'"
  content = content.replace(
    /onMouseOver="this\.style\.background='([^']*)'" /g,
    `onMouseOver={(e) => (e.currentTarget.style.background = '$1')} `
  )
  content = content.replace(
    /onMouseOver="this\.style\.background='([^']*)'"(?=[/ >])/g,
    `onMouseOver={(e) => (e.currentTarget.style.background = '$1')}`
  )

  // onMouseOut="this.style.background='...'"
  content = content.replace(
    /onMouseOut="this\.style\.background='([^']*)'" /g,
    `onMouseOut={(e) => (e.currentTarget.style.background = '$1')} `
  )
  content = content.replace(
    /onMouseOut="this\.style\.background='([^']*)'"(?=[/ >])/g,
    `onMouseOut={(e) => (e.currentTarget.style.background = '$1')}`
  )

  if (content !== original) {
    fs.writeFileSync(filePath, content)
    console.log(`✓ ${name}`)
    totalChanges++
  }
}

console.log(`\nTotal files modified: ${totalChanges}`)

// Verify no remaining string event handlers
let remaining = 0
for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const matches = content.match(/ on[A-Z][a-zA-Z]*="[^{][^"]*"/g) || []
  // filter out false positives (oninput with lowercase)
  const matchesLower = content.match(/ oninput="[^"]*"/g) || []
  const all = [...matches, ...matchesLower]
  if (all.length) {
    const name = path.relative(pagesDir, filePath)
    console.log(`⚠ Remaining in ${name}:`)
    all.forEach(m => console.log(`   ${m.trim()}`))
    remaining += all.length
  }
}
if (remaining === 0) console.log('✅ No remaining string event handlers!')
else console.log(`\n⚠ ${remaining} string event handlers still remain.`)
