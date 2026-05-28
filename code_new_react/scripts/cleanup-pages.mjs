/**
 * Cleanup script for React pages converted from HTML.
 * Phase 2: Fix onClick handlers, remove blog popups, exit modals, etc.
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
  const changes = []

  // 1. Remove blog popup overlay blocks (entire <div id="blogPopup" ...>...</div> including nested content)
  // These are handled by ExitModal in Layout
  const blogPopupRegex = /\n?\s*<div\s+id="blogPopup"[\s\S]*?(?:<\/div>\s*){2,4}/g
  if (blogPopupRegex.test(content)) {
    content = content.replace(blogPopupRegex, '')
    changes.push('removed blogPopup')
  }

  // 2. Remove exit modal blocks (handled by Layout)
  const exitModalRegex = /\n?\s*<div\s+(?:id="exitModal"|className="exit-modal")[\s\S]*?(?:<\/div>\s*){2,4}/g
  if (exitModalRegex.test(content)) {
    content = content.replace(exitModalRegex, '')
    changes.push('removed exitModal')
  }

  // 3. Convert FAQ onClick handlers
  // onClick="this.closest('.faq-item').classList.toggle('open')"
  content = content.replace(
    /onClick="this\.closest\('\.faq-item'\)\.classList\.toggle\('open'\)"/g,
    `onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}`
  )

  // onClick="toggleFaq(this)"
  content = content.replace(
    /onClick="toggleFaq\(this\)"/g,
    `onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}`
  )

  // 4. Convert dismiss handlers
  // onClick="this.parentElement.parentElement.style.display='none'"
  content = content.replace(
    /onClick="this\.parentElement\.parentElement\.style\.display='none'"/g,
    `onClick={(e) => { const el = (e.currentTarget as HTMLElement).parentElement?.parentElement; if (el) el.style.display = 'none' }}`
  )

  // 5. Convert exit modal close
  // onClick="document.getElementById('exitModal').style.display='none'"
  content = content.replace(
    /onClick="document\.getElementById\('exitModal'\)\.style\.display='none'"/g,
    `onClick={() => document.getElementById('exitModal')?.style.setProperty('display','none')}`
  )

  // 6. Convert closeBlogPopup() calls
  content = content.replace(
    /onClick="closeBlogPopup\(\)"/g,
    `onClick={() => { const el = document.getElementById('blogPopup'); if (el) el.style.display = 'none' }}`
  )

  // 7. Convert simple alert handlers
  content = content.replace(
    /onClick="alert\('([^']*)'\)"/g,
    `onClick={() => alert('$1')}`
  )

  // 8. Convert CalculadoraRoi handlers - these need special handling
  // selectPill(this, 'category')
  content = content.replace(
    /onClick="selectPill\(this,'(\w+)'\)"/g,
    `onClick={(e) => selectPill(e.currentTarget as HTMLElement, '$1')}`
  )

  // goStep(n)
  content = content.replace(
    /onClick="goStep\((\d+)\)"/g,
    `onClick={() => goStep($1)}`
  )

  // calcular()
  content = content.replace(
    /onClick="calcular\(\)"/g,
    `onClick={() => calcular()}`
  )

  // reiniciar()
  content = content.replace(
    /onClick="reiniciar\(\)"/g,
    `onClick={() => reiniciar()}`
  )

  if (content !== original) {
    // Detect remaining changes
    if (content !== original && !changes.length) changes.push('onClick fixes')
    fs.writeFileSync(filePath, content)
    console.log(`✓ ${name}: ${changes.join(', ') || 'onClick fixes'}`)
    totalChanges++
  }
}

console.log(`\nTotal files modified: ${totalChanges}`)

// Check for any remaining onClick="..." strings
let remaining = 0
for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const matches = content.match(/onClick="[^"]+"/g)
  if (matches) {
    const name = path.relative(pagesDir, filePath)
    console.log(`⚠ Remaining onClick in ${name}:`)
    matches.forEach(m => console.log(`   ${m}`))
    remaining += matches.length
  }
}
if (remaining === 0) console.log('✅ No remaining string onClick handlers!')
else console.log(`\n⚠ ${remaining} string onClick handlers still remain.`)
