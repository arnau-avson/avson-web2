import { useState } from 'react'

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(-1)

  const toggle = (i) => setOpenIndex(prev => prev === i ? -1 : i)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <button className="faq-item__question" onClick={() => toggle(i)}>
            <span>{item.question}</span>
            <span className="faq-item__icon">{openIndex === i ? '×' : '+'}</span>
          </button>
          <div className="faq-item__answer">
            {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
