import { useState, useEffect, useRef, useCallback } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'
const RESOLVE_SPEED = 40
const SCRAMBLE_SPEED = 30
const PAUSE_RESOLVED = 3000
const SCRAMBLE_CYCLES = 12

export default function Typewriter({ words, className = '' }) {
  const [display, setDisplay] = useState('')
  const wordIndex = useRef(0)
  const frameRef = useRef(null)

  const scrambleAndResolve = useCallback(() => {
    const word = words[wordIndex.current]
    let cycle = 0

    // Phase 1: scramble in (build up random chars to target length)
    const scrambleIn = () => {
      if (cycle < SCRAMBLE_CYCLES) {
        cycle++
        const len = Math.min(word.length, Math.ceil((cycle / SCRAMBLE_CYCLES) * word.length))
        let text = ''
        for (let i = 0; i < len; i++) {
          text += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
        setDisplay(text)
        frameRef.current = setTimeout(scrambleIn, SCRAMBLE_SPEED)
      } else {
        // Phase 2: resolve letter by letter
        let resolved = 0
        const resolve = () => {
          if (resolved <= word.length) {
            let text = ''
            for (let i = 0; i < word.length; i++) {
              text += i < resolved ? word[i] : CHARS[Math.floor(Math.random() * CHARS.length)]
            }
            setDisplay(text)
            resolved++
            frameRef.current = setTimeout(resolve, RESOLVE_SPEED)
          } else {
            // Phase 3: hold
            frameRef.current = setTimeout(() => {
              // Phase 4: scramble out
              let outCycle = 0
              const scrambleOut = () => {
                if (outCycle < SCRAMBLE_CYCLES) {
                  outCycle++
                  const len = Math.max(0, word.length - Math.ceil((outCycle / SCRAMBLE_CYCLES) * word.length))
                  let text = ''
                  for (let i = 0; i < len; i++) {
                    text += CHARS[Math.floor(Math.random() * CHARS.length)]
                  }
                  setDisplay(text)
                  frameRef.current = setTimeout(scrambleOut, SCRAMBLE_SPEED)
                } else {
                  setDisplay('')
                  wordIndex.current = (wordIndex.current + 1) % words.length
                  frameRef.current = setTimeout(scrambleAndResolve, 300)
                }
              }
              scrambleOut()
            }, PAUSE_RESOLVED)
          }
        }
        resolve()
      }
    }

    scrambleIn()
  }, [words])

  useEffect(() => {
    scrambleAndResolve()
    return () => clearTimeout(frameRef.current)
  }, [scrambleAndResolve])

  return (
    <div className={`flex items-center justify-start ${className}`}>
      <span className="font-mono">{display}</span>
      <span className="ml-0.5 w-[2px] h-[1em] bg-white/40 animate-pulse" />
    </div>
  )
}
