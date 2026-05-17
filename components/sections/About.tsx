'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const FLOAT_STATS = [
  { label: 'UMT — BS AI', sub: '2025 → Present', color: '#00d9ff', x: '-55%', y: '-30%' },
  { label: '20+ Platforms', sub: 'Globally Deployed', color: '#9d4edd', x: '55%', y: '-20%' },
  { label: '92.2% Accuracy', sub: 'Brain Tumor Model', color: '#00ff88', x: '-50%', y: '55%' },
  { label: '10+ Projects', sub: 'Live in Production', color: '#ff006e', x: '50%', y: '50%' },
]

function HolographicCard() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 120, damping: 18 })
  const sy = useSpring(y, { stiffness: 120, damping: 18 })
  const rx = useTransform(sy, [-0.5, 0.5], [18, -18])
  const ry = useTransform(sx, [-0.5, 0.5], [-18, 18])
  const glowX = useTransform(sx, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(sy, [-0.5, 0.5], [0, 100])

  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: 380 }}>
      {/* Floating stat badges */}
      {FLOAT_STATS.map((stat, i) => (
        <motion.div
          key={i}
          className="absolute z-20 px-3 py-2 rounded-xl text-center pointer-events-none"
          style={{
            left: '50%', top: '50%',
            transform: `translate(${stat.x}, ${stat.y})`,
            background: `linear-gradient(135deg, ${stat.color}18, ${stat.color}06)`,
            border: `1px solid ${stat.color}35`,
            backdropFilter: 'blur(8px)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.15 + 0.4, type: 'spring', stiffness: 200 }}
          animate={{ y: [0, -6, 0] }}
        >
          <div className="text-sm font-bold font-mono whitespace-nowrap" style={{ color: stat.color }}>{stat.label}</div>
          <div className="text-xs text-gray-500 whitespace-nowrap">{stat.sub}</div>
        </motion.div>
      ))}

      {/* Main 3D Card */}
      <motion.div
        ref={ref}
        style={{
          rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 1000,
          background: 'linear-gradient(135deg, rgba(0,217,255,0.12), rgba(157,78,221,0.08))',
          border: '1px solid rgba(0,217,255,0.25)',
          boxShadow: '0 25px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,217,255,0.1)',
        }}
        onMouseMove={e => {
          const r = ref.current?.getBoundingClientRect()
          if (!r) return
          x.set((e.clientX - r.left) / r.width - 0.5)
          y.set((e.clientY - r.top) / r.height - 0.5)
        }}
        onMouseLeave={() => { x.set(0); y.set(0) }}
        className="relative w-56 h-56 rounded-2xl cursor-pointer"
      >
        {/* Spotlight */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0,217,255,0.12), transparent 60%)`,
          }}
        />

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, #00d9ff, transparent)' }}
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ transform: 'translateZ(30px)' }}>
          <motion.div
            className="text-5xl"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            🤖
          </motion.div>
          <div className="text-center">
            <div className="text-neon-blue font-bold text-lg">Abdullah Javid</div>
            <div className="text-gray-400 text-sm">AI Developer</div>
          </div>
          {/* Animated ring */}
          <motion.div
            className="w-16 h-16 rounded-full absolute"
            style={{ border: '1px solid rgba(0,217,255,0.2)' }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Corner accents */}
        {[
          'top-2 left-2 border-t border-l',
          'top-2 right-2 border-t border-r',
          'bottom-2 left-2 border-b border-l',
          'bottom-2 right-2 border-b border-r',
        ].map((cls, i) => (
          <div key={i} className={`absolute w-4 h-4 ${cls}`} style={{ borderColor: '#00d9ff60' }} />
        ))}
      </motion.div>

      {/* Orbiting dot */}
      <motion.div
        className="absolute w-3 h-3 rounded-full pointer-events-none"
        style={{
          background: '#00d9ff',
          boxShadow: '0 0 12px #00d9ff',
          top: '50%', left: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        transformTemplate={({ rotate }) =>
          `translate(-50%, -50%) rotate(${rotate}) translateX(110px)`
        }
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full pointer-events-none"
        style={{ background: '#ff006e', boxShadow: '0 0 10px #ff006e', top: '50%', left: '50%' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        transformTemplate={({ rotate }) =>
          `translate(-50%, -50%) rotate(${rotate}) translateX(140px)`
        }
      />
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-dark-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-blue/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 neon-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              Abdullah Javid is a first-year{' '}
              <span className="text-neon-blue font-semibold">BS Artificial Intelligence</span> student at UMT Lahore (2025 – present), actively open to internships and collaborations.
            </p>
            <p className="text-lg leading-relaxed">
              I identify as an <span className="text-neon-purple font-semibold">AI Developer, Builder, and Deployer</span> — shipping production-ready AI chatbots, arcade games, and web tools across <span className="text-neon-blue font-semibold">20+ global platforms</span> while still in my first year.
            </p>
            <p className="text-lg leading-relaxed">
              Before UMT, I completed FSc Pre-Engineering from Punjab Group of Colleges (2023–2025) — Mathematics, Physics, and Computer Science.
            </p>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { n: '20+', l: 'Platforms', c: '#00d9ff' },
                { n: '10+', l: 'Live Projects', c: '#9d4edd' },
                { n: '92.2%', l: 'Best Accuracy', c: '#00ff88' },
                { n: '1st', l: 'Year @ UMT', c: '#ff006e' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="p-4 rounded-xl text-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${s.c}12, ${s.c}04)`,
                    border: `1px solid ${s.c}30`,
                    boxShadow: `0 4px 20px ${s.c}10`,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${s.c}15, transparent)` }}
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="text-2xl font-bold font-mono relative z-10" style={{ color: s.c, textShadow: `0 0 20px ${s.c}` }}>{s.n}</div>
                  <div className="text-xs text-gray-400 relative z-10 mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Holographic Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HolographicCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
