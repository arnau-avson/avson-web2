import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 3000

function noise3D(x, y, z) {
  return (
    Math.sin(x * 1.2 + y * 0.9) * 0.5 +
    Math.sin(y * 1.1 + z * 0.8) * 0.5 +
    Math.sin(z * 1.3 + x * 0.7) * 0.5 +
    Math.sin(x * 2.1 + z * 1.4) * 0.25 +
    Math.sin(y * 2.3 + x * 1.6) * 0.25
  )
}

function ParticleCloud() {
  const pointsRef = useRef()
  const basePositions = useRef()

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const col = new Float32Array(PARTICLE_COUNT * 3)
    const color = new THREE.Color()

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.3 + (Math.random() - 0.5) * 0.5

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      // Cold/white tones
      const t = Math.random()
      if (t < 0.5) {
        color.setHSL(0, 0, 0.6 + Math.random() * 0.3) // white/gray
      } else if (t < 0.8) {
        color.setHSL(0.6, 0.2, 0.6 + Math.random() * 0.2) // light blue
      } else {
        color.setHSL(0.75, 0.3, 0.5 + Math.random() * 0.2) // soft purple
      }

      col[i * 3] = color.r
      col[i * 3 + 1] = color.g
      col[i * 3 + 2] = color.b
    }

    basePositions.current = new Float32Array(pos)
    return { positions: pos, colors: col }
  }, [])

  useFrame(({ clock }) => {
    const points = pointsRef.current
    if (!points) return

    const time = clock.getElapsedTime()
    const posAttr = points.geometry.attributes.position
    const base = basePositions.current

    // Stretch factor: oscillates between compact and elongated
    const stretchX = 1 + Math.sin(time * 0.25) * 0.6
    const stretchY = 1 + Math.sin(time * 0.3 + 1) * 0.3
    const stretchZ = 1 + Math.cos(time * 0.2) * 0.4

    const morphTime = time * 0.3

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const bx = base[i * 3]
      const by = base[i * 3 + 1]
      const bz = base[i * 3 + 2]

      // Morph displacement
      const n = noise3D(bx * 0.5 + morphTime, by * 0.5 + morphTime * 0.7, bz * 0.5 + morphTime * 0.5)
      const displacement = n * 0.35
      const len = Math.sqrt(bx * bx + by * by + bz * bz) || 1

      const px = (bx + (bx / len) * displacement) * stretchX
      const py = (by + (by / len) * displacement) * stretchY
      const pz = (bz + (bz / len) * displacement) * stretchZ

      posAttr.array[i * 3] = px
      posAttr.array[i * 3 + 1] = py
      posAttr.array[i * 3 + 2] = pz
    }

    posAttr.needsUpdate = true

    // Levitate
    points.position.y = Math.sin(time * 0.4) * 0.3
    points.position.x = Math.sin(time * 0.15) * 0.2
    // Slow rotation
    points.rotation.y = time * 0.06
    points.rotation.x = Math.sin(time * 0.2) * 0.08
  })

  return (
    <points ref={pointsRef} position={[5, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={PARTICLE_COUNT} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={PARTICLE_COUNT} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function ShieldBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ParticleCloud />
      </Canvas>
    </div>
  )
}
