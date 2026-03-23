import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 4000
const MOUSE_RADIUS = 1
const MOUSE_STRENGTH = 0.8

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
  const mouse3D = useRef(new THREE.Vector3(100, 100, 0))
  const { camera, size } = useThree()

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const col = new Float32Array(PARTICLE_COUNT * 3)
    const siz = new Float32Array(PARTICLE_COUNT)
    const color = new THREE.Color()

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.4 + (Math.random() - 0.5) * 0.5

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      const t = Math.random()
      if (t < 0.4) {
        color.setHSL(0.78, 0.7, 0.55 + Math.random() * 0.2)
      } else if (t < 0.7) {
        color.setHSL(0.52, 0.6, 0.55 + Math.random() * 0.2)
      } else {
        color.setHSL(0.65, 0.4, 0.7 + Math.random() * 0.15)
      }

      col[i * 3] = color.r
      col[i * 3 + 1] = color.g
      col[i * 3 + 2] = color.b
      siz[i] = 0.02 + Math.random() * 0.03
    }

    basePositions.current = new Float32Array(pos)
    return { positions: pos, colors: col, sizes: siz }
  }, [])

  useFrame(({ clock, pointer }) => {
    const points = pointsRef.current
    if (!points) return

    // Convert mouse pointer to 3D world position
    const vec = new THREE.Vector3(pointer.x, pointer.y, 0.5)
    vec.unproject(camera)
    const dir = vec.sub(camera.position).normalize()
    const dist = -camera.position.z / dir.z
    const mouseWorld = camera.position.clone().add(dir.multiplyScalar(dist))
    // Smooth mouse tracking
    mouse3D.current.lerp(mouseWorld, 0.1)

    const time = clock.getElapsedTime() * 0.3
    const posAttr = points.geometry.attributes.position
    const base = basePositions.current
    const mx = mouse3D.current.x
    const my = mouse3D.current.y

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const bx = base[i * 3]
      const by = base[i * 3 + 1]
      const bz = base[i * 3 + 2]

      // Morph displacement
      const n = noise3D(bx * 0.5 + time, by * 0.5 + time * 0.7, bz * 0.5 + time * 0.5)
      const displacement = n * 0.4
      const len = Math.sqrt(bx * bx + by * by + bz * bz) || 1

      let px = bx + (bx / len) * displacement
      let py = by + (by / len) * displacement
      let pz = bz + (bz / len) * displacement

      // Mouse repulsion
      const dx = px - mx
      const dy = py - my
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < MOUSE_RADIUS && d > 0.01) {
        const force = (1 - d / MOUSE_RADIUS) * MOUSE_STRENGTH
        px += (dx / d) * force
        py += (dy / d) * force
        pz += Math.sin(d * 3 + time * 2) * force * 0.3
      }

      posAttr.array[i * 3] = px
      posAttr.array[i * 3 + 1] = py
      posAttr.array[i * 3 + 2] = pz
    }

    posAttr.needsUpdate = true

    points.position.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.3
    points.rotation.y = clock.getElapsedTime() * 0.08
    points.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={PARTICLE_COUNT} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={PARTICLE_COUNT} itemSize={3} />
        <bufferAttribute attach="attributes-size" array={sizes} count={PARTICLE_COUNT} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function BubblesBackground() {
  return (
    <div className="absolute right-0 top-0 w-[60%] h-[40%] md:w-[55%] md:h-full z-0">
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
