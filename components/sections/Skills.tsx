'use client'

import { motion, useInView, useAnimationFrame, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaPython, FaDatabase, FaCloud, FaHtml5 } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiCplusplus, SiJavascript, SiPytorch } from 'react-icons/si'

/* ── Skill bars ── */
const proficiency = [
  { skill: 'Python', level: 90, color: '#00d9ff', icon: '🐍' },
  { skill: 'PyTorch & ML', level: 82, color: '#ff006e', icon: '🔥' },
  { skill: 'Chatbot / NLP', level: 88, color: '#9d4edd', icon: '🤖' },
  { skill: 'Generative AI APIs', level: 85, color: '#00ff88', icon: '✨' },
  { skill: 'HTML / CSS', level: 80, color: '#00d9ff', icon: '🎨' },
  { skill: 'C++', level: 75, color: '#ffaa00', icon: '⚙️' },
  { skill: 'Cloud Deploy', level: 72, color: '#9d4edd', icon: '☁️' },
  { skill: 'JavaScript', level: 68, color: '#ff006e', icon: '⚡' },
]

/* ── Floating icon cards ── */
const techCards = [
  { name: 'Python', icon: FaPython, color: '#3776ab', level: 90, bg: '#3776ab15' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', level: 82, bg: '#EE4C2C15' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 78, bg: '#3178c615' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 75, bg: '#ffffff10' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4', level: 75, bg: '#06b6d415' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 68, bg: '#f7df1e15' },
  { name: 'C++', icon: SiCplusplus, color: '#00599c', level: 75, bg: '#00599c15' },
  { name: 'HTML/CSS', icon: FaHtml5, color: '#e34f26', level: 80, bg: '#e34f2615' },
]

/* ── Globe nodes ── */
const GLOBE_NODES = [
  { label: 'Hugging Face', color: '#9d4edd', lat: 20, lng: 30 },
  { label: 'GitHub Pages', color: '#00d9ff', lat: 50, lng: 120 },
  { label: 'Vercel', color: '#00ff88', lat: -20, lng: -60 },
  { label: 'itch.io', color: '#ff006e', lat: 35, lng: -100 },
  { label: 'Firebase', color: '#ffaa00', lat: -40, lng: 150 },
  { label: 'AWS', color: '#00d9ff', lat: 10, lng: -30 },
  { label: 'Gradio', color: '#ff006e', lat: 60, lng: 80 },
  { label: 'Streamlit', color: '#00ff88', lat: -10, lng: 60 },
]

const platforms = [
  { name: 'Claude AI', color: '#00d9ff' }, { name: 'ChatGPT', color: '#9d4edd' },
  { name: 'Gemini', color: '#ff006e' }, { name: 'Hugging Face', color: '#00ff88' },
  { name: 'AWS', color: '#00d9ff' }, { name: 'Azure', color: '#9d4edd' },
  { name: 'Firebase', color: '#ff006e' }, { name: 'Vercel', color: '#00ff88' },
  { name: 'Streamlit', color: '#00d9ff' }, { name: 'Gradio', color: '#9d4edd' },
  { name: 'LangChain', color: '#ff006e' }, { name: 'FastAPI', color: '#00ff88' },
]

function AnimatedCounter({ target, inView }: { target: number; inView: boolean }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let i = 0
    const steps = 40
    const interval = setInterval(() => {
      i++
      setVal(Math.round((target / steps) * i))
      if (i >= steps) clearInterval(interval)
    }, 25)
    return () => clearInterval(interval)
  }, [inView, target])
  return <>{val}</>
}

function SkillBar({ skill, level, color, icon, index }: { skill: string; level: number; color: string; icon: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group mb-5"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{skill}</span>
        </div>
        <span className="text-sm font-bold font-mono" style={{ color }}>
          {inView ? <AnimatedCounter target={level} inView={inView} /> : 0}%
        </span>
      </div>
      <div className="w-full rounded-full h-2 overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.4, ease: 'easeOut', delay: index * 0.07 + 0.2 }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}80)`, boxShadow: `0 0 12px ${color}60` }}
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

function TechCard({ card, index }: { card: typeof techCards[0]; index: number }) {
  const Icon = card.icon
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(useSpring(y, { stiffness: 200, damping: 20 }), [-0.5, 0.5], [12, -12])
  const ry = useTransform(useSpring(x, { stiffness: 200, damping: 20 }), [-0.5, 0.5], [-12, 12])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.07, type: 'spring', stiffness: 200 }}
      style={{
        rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 600,
        background: card.bg,
        border: `1px solid ${card.color}20`,
        boxShadow: `0 4px 20px ${card.color}10`,
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseMove={e => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className="p-5 rounded-xl flex flex-col items-center gap-3 cursor-default relative overflow-hidden group"
      whileHover={{
        borderColor: `${card.color}60`,
        boxShadow: `0 12px 40px ${card.color}25`,
      }}
    >
      <motion.div
        style={{ filter: `drop-shadow(0 0 10px ${card.color}80)` }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon size={36} style={{ color: card.color }} />
      </motion.div>
      <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">{card.name}</span>
      <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${card.level}%` }}
          transition={{ duration: 1.2, delay: index * 0.07 }}
          style={{ height: '100%', background: card.color, boxShadow: `0 0 6px ${card.color}` }}
        />
      </div>
    </motion.div>
  )
}

function DeployGlobe() {
  const [rot, setRot] = useState(0)
  useAnimationFrame((_, delta) => setRot(r => r + delta * 0.02))

  const toXY = (lat: number, lng: number, r: number, rotDeg: number) => {
    const latR = (lat * Math.PI) / 180
    const lngR = ((lng + rotDeg) * Math.PI) / 180
    return {
      x: r * Math.cos(latR) * Math.sin(lngR),
      y: -r * Math.sin(latR),
      z: r * Math.cos(latR) * Math.cos(lngR),
    }
  }

  const R = 110, cx = 140, cy = 140

  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }} className="relative mx-auto" style={{ width: 280, height: 280 }}>
      <svg width="280" height="280" className="absolute inset-0">
        <defs>
          <radialGradient id="gGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,217,255,0.08)" />
            <stop offset="100%" stopColor="rgba(0,217,255,0)" />
          </radialGradient>
          <filter id="nGlow"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <circle cx={cx} cy={cy} r={R} fill="url(#gGrad)" stroke="rgba(0,217,255,0.15)" strokeWidth="1" />
        {[-60, -30, 0, 30, 60].map((lat, i) => {
          const lr = (lat * Math.PI) / 180
          return <ellipse key={i} cx={cx} cy={cy - R * Math.sin(lr)} rx={R * Math.cos(lr)} ry={R * Math.cos(lr) * 0.15}
            fill="none" stroke="rgba(0,217,255,0.08)" strokeWidth="0.5" />
        })}
        {GLOBE_NODES.map((node, i) => {
          const { x, y, z } = toXY(node.lat, node.lng, R, rot)
          if (z < -20) return null
          const op = Math.max(0, (z + R) / (2 * R))
          const size = 4 + (z / R) * 3
          return <g key={i} filter="url(#nGlow)">
            <circle cx={cx + x} cy={cy + y} r={size + 4} fill={node.color} fillOpacity={op * 0.15} />
            <circle cx={cx + x} cy={cy + y} r={size} fill={node.color} fillOpacity={op * 0.9} />
          </g>
        })}
        <ellipse cx={cx} cy={cy} rx={R} ry={R * 0.15} fill="none" stroke="rgba(0,217,255,0.2)" strokeWidth="1" />
      </svg>
      {GLOBE_NODES.map((node, i) => {
        const { x, y, z } = toXY(node.lat, node.lng, R, rot)
        if (z < 10) return null
        return <div key={i} className="absolute pointer-events-none font-mono font-bold"
          style={{ left: cx + x + 8, top: cy + y - 6, color: node.color, opacity: (z / R) * 0.9,
            textShadow: `0 0 8px ${node.color}`, transform: 'translate(0,-50%)', whiteSpace: 'nowrap', fontSize: 10 }}>
          {node.label}
        </div>
      })}
      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 45% 40%, rgba(0,217,255,0.06), transparent 60%)' }} />
      <div className="absolute bottom-0 left-0 right-0 text-center text-xs font-mono text-gray-500">
        20+ global deployments · live
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg">Real proficiency levels — tools I ship with daily</p>
        </motion.div>

        {/* 3D Tech Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {techCards.map((card, i) => <TechCard key={i} card={card} index={i} />)}
        </div>

        {/* Skill bars + Globe */}
        <div className="grid lg:grid-cols-2 gap-14 mb-14 items-center">
          <div>
            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xl font-bold text-white mb-6">
              Proficiency Levels
            </motion.h3>
            {proficiency.map((item, i) => <SkillBar key={i} {...item} index={i} />)}
          </div>
          <div className="flex flex-col items-center">
            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xl font-bold text-white mb-6 text-center">
              🌍 Live Deployments Worldwide
            </motion.h3>
            <DeployGlobe />
          </div>
        </div>

        {/* Platform badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-xl font-bold mb-6 text-white">Platforms & Ecosystems</h3>
          <div className="flex flex-wrap gap-3">
            {platforms.map((p, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.12, y: -4 }}
                animate={{ y: [0, -4, 0] }}
                style={{
                  animationDelay: `${i * 0.3}s`, padding: '8px 18px', borderRadius: '30px',
                  fontSize: '12px', fontWeight: 600, cursor: 'default',
                  background: `${p.color}10`, border: `1px solid ${p.color}40`, color: p.color,
                  boxShadow: `0 0 10px ${p.color}10`,
                }}>{p.name}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}