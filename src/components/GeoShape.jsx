export default function GeoShape({ type, color, size = 40 }) {
  const s = size
  const half = s / 2
  const hex = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2
    return `${half + half * 0.9 * Math.cos(angle)},${half + half * 0.9 * Math.sin(angle)}`
  }).join(' ')

  switch (type) {
    case 'square':
      return <svg width={s} height={s}><rect x="4" y="4" width={s-8} height={s-8} fill={color} /></svg>
    case 'square-outline':
      return <svg width={s} height={s}><rect x="4" y="4" width={s-8} height={s-8} fill="none" stroke={color} strokeWidth="2" /></svg>
    case 'circle':
      return <svg width={s} height={s}><circle cx={half} cy={half} r={half-4} fill={color} /></svg>
    case 'circle-outline':
      return <svg width={s} height={s}><circle cx={half} cy={half} r={half-4} fill="none" stroke={color} strokeWidth="2" /></svg>
    case 'hexagon':
      return <svg width={s} height={s}><polygon points={hex} fill={color} /></svg>
    case 'hexagon-outline':
      return <svg width={s} height={s}><polygon points={hex} fill="none" stroke={color} strokeWidth="2" /></svg>
    default:
      return null
  }
}
