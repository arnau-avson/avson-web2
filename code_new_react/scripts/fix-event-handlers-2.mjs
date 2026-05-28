/**
 * Fix remaining string event handlers - phase 2
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

  // onSubmit="heroSubmit(event)" and similar
  content = content.replace(
    /onSubmit="heroSubmit\(event\)"/g,
    `onSubmit={(e) => { e.preventDefault(); window.location.href = '/contacto.html' }}`
  )

  // onSubmit="handleSubmit(event)"
  content = content.replace(
    /onSubmit="handleSubmit\(event\)"/g,
    `onSubmit={(e) => { e.preventDefault(); /* TODO: implement form submit */ }}`
  )

  // Compound onMouseOver with borderColor + color
  content = content.replace(
    /onMouseOver="this\.style\.borderColor='([^']*)';this\.style\.color='([^']*)'" /g,
    `onMouseOver={(e) => { e.currentTarget.style.borderColor = '$1'; e.currentTarget.style.color = '$2' }} `
  )
  content = content.replace(
    /onMouseOver="this\.style\.borderColor='([^']*)';this\.style\.color='([^']*)'"(?=[/ >])/g,
    `onMouseOver={(e) => { e.currentTarget.style.borderColor = '$1'; e.currentTarget.style.color = '$2' }}`
  )

  // Compound onMouseOut with borderColor + color
  content = content.replace(
    /onMouseOut="this\.style\.borderColor='([^']*)';this\.style\.color='([^']*)'" /g,
    `onMouseOut={(e) => { e.currentTarget.style.borderColor = '$1'; e.currentTarget.style.color = '$2' }} `
  )
  content = content.replace(
    /onMouseOut="this\.style\.borderColor='([^']*)';this\.style\.color='([^']*)'"(?=[/ >])/g,
    `onMouseOut={(e) => { e.currentTarget.style.borderColor = '$1'; e.currentTarget.style.color = '$2' }}`
  )

  if (content !== original) {
    fs.writeFileSync(filePath, content)
    console.log(`✓ ${name}`)
    totalChanges++
  }
}

console.log(`\nTotal files modified: ${totalChanges}`)

// Final verify
let remaining = 0
for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const matches = content.match(/ on[A-Z][a-zA-Z]*="[^{][^"]*"/g) || []
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
