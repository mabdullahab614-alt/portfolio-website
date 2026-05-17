'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaGraduationCap, FaAward, FaTrophy } from 'react-icons/fa'

function AnimatedNumber({ target, decimals = 0, suffix = '' }: { target: number; decimals?: number; suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const steps = 60
    const increment = target / steps
    const interval = setInterval(() => {
      start += increment
      if (start >= target) { setDisplay(target); clearInterval(interval) }
      else setDisplay(start)
    }, duration / steps)
    return () => clearInterval(interval)
  }, [inView, target])

  return (
    <span ref={ref}>{display.toFixed(decimals)}{suffix}</span>
  )
}

const timeline = [
  {
    year: '2023',
    end: '2025',
    icon: '📚',
    color: '#9d4edd',
    degree: 'FSc Pre-Engineering',
    institution: 'Punjab Group of Colleges (PGC)',
    location: 'Lahore, Pakistan',
    stat: { label: 'Score', value: 1043, max: 1200, suffix: '', decimals: 0 },
    badge: '1043 / 1200',
    tags: ['Mathematics', 'Physics', 'Computer Science'],
    desc: 'Built strong analytical foundation in mathematics and physics — the base for AI & engineering.',
  },
  {
    year: '2025',
    end: 'Present',
    icon: '🎓',
    color: '#00d9ff',
    degree: 'BS Artificial Intelligence',
    institution: 'University of Management and Technology (UMT)',
    location: 'Lahore, Pakistan',
    stat: { label: 'CGPA', value: 3.64, max: 4.0, suffix: '/4.0', decimals: 2 },
    badge: 'CGPA 3.64 / 4.0',
    tags: ['Machine Learning', 'Data Structures', 'Mathematics', 'AI'],
    desc: 'First-year AI student shipping production-ready models to 20+ global platforms while studying.',
  },
]

const certs = [
  { icon: '🏆', label: '360 Transformation Boot Camp', sub: 'UMT — 2025', color: '#00d9ff' },
  { icon: '🌍', label: '20+ Global Deployments', sub: 'Hugging Face · Vercel · GitHub', color: '#9d4edd' },
  { icon: '🧠', label: '92.2% Medical AI Accuracy', sub: 'Brain Tumor Detector', color: '#ff006e' },
  { icon: '⚡', label: 'Real-time CV at 30fps', sub: 'Air Writer — MediaPipe', color: '#00ff88' },
  { icon: '🎮', label: 'WebAssembly Game Dev', sub: 'Galactic Defender — itch.io', color: '#ffaa00' },
  { icon: '♟️', label: 'Minimax Chess Engine', sub: 'ChessMaster — GitHub Pages', color: '#00d9ff' },
]

function TimelineCard({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(useSpring(y, { stiffness: 200, damping: 20 }), [-0.5, 0.5], [8, -8])
  const ry = useTransform(useSpring(x, { stiffness: 200, damping: 20 }), [-0.5, 0.5], [-8, 8])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, scale: 0.9 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
      style={{
        rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 1000,
        background: `linear-gradient(135deg, ${item.color}12, ${item.color}04)`,
        border: `1px solid ${item.color}30`,
        boxShadow: `0 20px 60px ${item.color}15`,
      }}
      onMouseMove={e => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className="relative rounded-2xl p-6 flex-1"
    >
      {/* Glow corner */}
      <motion.div
        className="absolute top-0 left-0 w-24 h-24 rounded-tl-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 0% 0%, ${item.color}20, transparent 70%)` }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="flex items-start gap-4 mb-4 relative z-10">
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${item.color}25, ${item.color}08)`, border: `1px solid ${item.color}40` }}
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          {item.icon}
        </motion.div>
        <div>
          <div className="text-xs font-mono mb-1" style={{ color: item.color }}>{item.year} — {item.end}</div>
          <h3 className="text-lg font-bold text-white">{item.degree}</h3>
          <p className="text-sm text-gray-400">{item.institution}</p>
          <p className="text-xs text-gray-600">{item.location}</p>
        </div>
      </div>

      {/* Animated stat */}
      <div className="relative z-10 mb-4 p-3 rounded-xl text-center"
        style={{ background: `${item.color}10`, border: `1px solid ${item.color}25` }}>
        <div className="text-3xl font-black font-mono" style={{ color: item.color, textShadow: `0 0 20px ${item.color}` }}>
          {inView ? <AnimatedNumber target={item.stat.value} decimals={item.stat.decimals} suffix={item.stat.suffix} /> : `0${item.stat.suffix}`}
        </div>
        <div className="text-xs text-gray-500 mt-1">{item.stat.label} — out of {item.stat.max}</div>
        {/* Progress bar */}
        <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${(item.stat.value / item.stat.max) * 100}%` } : {}}
            transition={{ duration: 1.8, ease: 'easeOut', delay: index * 0.2 + 0.3 }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`, boxShadow: `0 0 8px ${item.color}` }}
          />
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-4 relative z-10">{item.desc}</p>

      <div className="flex flex-wrap gap-2 relative z-10">
        {item.tags.map((tag, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.2 + i * 0.07 + 0.5 }}
            className="px-2.5 py-1 text-xs rounded-full font-medium"
            style={{ background: `${item.color}12`, border: `1px solid ${item.color}30`, color: item.color }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Education() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true })

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4"
            style={{ background: 'rgba(0,217,255,0.08)', border: '1px solid rgba(0,217,255,0.2)', color: '#00d9ff' }}>
            <FaGraduationCap /> Academic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">Education & Achievements</h2>
          <p className="text-gray-400 text-lg">Real scores, real milestones — from FSc to BS AI</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden">
            <motion.div
              ref={lineRef}
              initial={{ height: '0%' }}
              animate={lineInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{ background: 'linear-gradient(180deg, #00d9ff, #9d4edd)', width: '1px' }}
            />
          </div>

          {/* Timeline dots + cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
            {timeline.map((item, i) => (
              <div key={i} className="flex-1 relative">
                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                  className="hidden md:flex absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center z-10"
                  style={{ background: item.color, boxShadow: `0 0 16px ${item.color}` }}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </motion.div>
                <TimelineCard item={item} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications / achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
            <FaTrophy style={{ color: '#ffaa00' }} /> Achievements & Milestones
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-xl p-4 flex items-start gap-3 cursor-default relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${cert.color}10, ${cert.color}04)`,
                border: `1px solid ${cert.color}25`,
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}12, transparent)` }}
                whileHover={{ opacity: 1 }}
              />
              <span className="text-2xl flex-shrink-0">{cert.icon}</span>
              <div className="relative z-10">
                <div className="font-bold text-sm text-white">{cert.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{cert.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}