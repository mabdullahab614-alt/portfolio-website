'use client'

import { motion, useInView, useAnimationFrame } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  FaPython, FaDatabase, FaGitAlt, FaCloud, FaHtml5,
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss,
  SiCplusplus, SiJavascript,
} from 'react-icons/si'

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

function DeployGlobe() {
  const [rot, setRot] = useState(0)
  useAnimationFrame((_, delta) => setRot(r => r + delta * 0.02))

  const toXY = (lat: number, lng: number, r: number, rotDeg: number) => {
    const latR = (lat * Math.PI) / 180
    const lngR = ((lng + rotDeg) * Math.PI) / 180
    const x = r * Math.cos(latR) * Math.sin(lngR)
    const y = -r * Math.sin(latR)
    const z = r * Math.cos(latR) * Math.cos(lngR)
    return { x, y, z }
  }

  const R = 110
  const cx = 140, cy = 140

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto"
      style={{ width: 280, height: 280 }}
    >
      <svg width="280" height="280" className="absolute inset-0">
        <defs>
          <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,217,255,0.08)" />
            <stop offset="100%" stopColor="rgba(0,217,255,0)" />
          </radialGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Globe sphere */}
        <circle cx={cx} cy={cy} r={R} fill="url(#globeGrad)" stroke="rgba(0,217,255,0.15)" strokeWidth="1" />

        {/* Latitude lines */}
        {[-60, -30, 0, 30, 60].map((lat, i) => {
          const latR = (lat * Math.PI) / 180
          const ry2 = R * Math.cos(latR)
          const yOff = -R * Math.sin(latR)
          return (
            <ellipse key={i} cx={cx} cy={cy + yOff} rx={ry2} ry={ry2 * 0.15}
              fill="none" stroke="rgba(0,217,255,0.08)" strokeWidth="0.5" />
          )
        })}

        {/* Longitude lines */}
        {[0, 45, 90, 135].map((lng, i) => {
          const a = ((lng + rot) * Math.PI) / 180
          const x1 = cx + R * Math.sin(a)
          const x2 = cx - R * Math.sin(a)
          return (
            <line key={i} x1={x1} y1={cy - R} x2={x2} y2={cy + R}
              stroke="rgba(0,217,255,0.06)" strokeWidth="0.5" />
          )
        })}

        {/* Deployment nodes */}
        {GLOBE_NODES.map((node, i) => {
          const { x, y, z } = toXY(node.lat, node.lng, R, rot)
          const visible = z > -20
          if (!visible) return null
          const opacity = Math.max(0, (z + R) / (2 * R))
          const nx = cx + x, ny = cy + y
          const size = 4 + (z / R) * 3
          return (
            <g key={i} filter="url(#nodeGlow)">
              <circle cx={nx} cy={ny} r={size + 4} fill={node.color} fillOpacity={opacity * 0.15} />
              <circle cx={nx} cy={ny} r={size} fill={node.color} fillOpacity={opacity * 0.9} />
            </g>
          )
        })}

        {/* Equator highlight */}
        <ellipse cx={cx} cy={cy} rx={R} ry={R * 0.15}
          fill="none" stroke="rgba(0,217,255,0.2)" strokeWidth="1" />
      </svg>

      {/* Node labels */}
      {GLOBE_NODES.map((node, i) => {
        const { x, y, z } = toXY(node.lat, node.lng, R, rot)
        if (z < 10) return null
        const opacity = (z / R) * 0.9
        return (
          <div key={i} className="absolute pointer-events-none text-xs font-mono font-bold"
            style={{
              left: cx + x + 8, top: cy + y - 6,
              color: node.color, opacity,
              textShadow: `0 0 8px ${node.color}`,
              transform: 'translate(0, -50%)',
              whiteSpace: 'nowrap',
              fontSize: 10,
            }}>
            {node.label}
          </div>
        )
      })}

      {/* Center glow */}
      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 45% 40%, rgba(0,217,255,0.06), transparent 60%)' }} />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-xs font-mono text-gray-500">
        20+ global deployments · live
      </div>
    </motion.div>
  )
}

const skills = [
  { name: 'Python', icon: FaPython, color: '#3776ab', level: 90 },
  { name: 'HTML/CSS', icon: FaHtml5, color: '#e34f26', level: 80 },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 65 },
  { name: 'C++', icon: SiCplusplus, color: '#00599c', level: 75 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 70 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', level: 75 },
  { name: 'Cloud Deploy', icon: FaCloud, color: '#22c55e', level: 70 },
  { name: 'Machine Learning', icon: FaDatabase, color: '#14b8a6', level: 60 },
]

const proficiency = [
  { skill: 'Python', level: 90, color: '#00d9ff' },
  { skill: 'Chatbot Development', level: 90, color: '#9d4edd' },
  { skill: 'Generative AI APIs', level: 85, color: '#ff006e' },
  { skill: 'HTML/CSS', level: 80, color: '#00d9ff' },
  { skill: 'C++', level: 75, color: '#9d4edd' },
  { skill: 'Cloud Deployment', level: 70, color: '#00ff88' },
  { skill: 'JavaScript', level: 65, color: '#ff006e' },
  { skill: 'Machine Learning', level: 60, color: '#00d9ff' },
]

const platforms = [
  { name: 'Claude AI', color: '#00d9ff' },
  { name: 'ChatGPT', color: '#9d4edd' },
  { name: 'Gemini', color: '#ff006e' },
  { name: 'Hugging Face', color: '#00ff88' },
  { name: 'AWS', color: '#00d9ff' },
  { name: 'Azure', color: '#9d4edd' },
  { name: 'Firebase', color: '#ff006e' },
  { name: 'Vercel', color: '#00ff88' },
  { name: 'Streamlit', color: '#00d9ff' },
  { name: 'Gradio', color: '#9d4edd' },
  { name: 'LangChain', color: '#ff006e' },
  { name: 'FastAPI', color: '#00ff88' },
]

function SkillBar({ skill, level, color, index }: { skill: string; level: number; color: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="mb-5"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm font-medium">{skill}</span>
        <span className="text-sm font-bold" style={{ color, fontFamily: 'monospace' }}>
          {inView ? level : 0}%
        </span>
      </div>
      <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.08 + 0.2 }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 10px ${color}60`,
          }}
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{ background: color, boxShadow: `0 0 6px ${color}` }}
          />
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">Tools and technologies I work with daily</p>
        </motion.div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative p-5 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, rgba(26,31,58,0.9), rgba(10,14,39,0.8))',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}50`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 10px 40px ${skill.color}20`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="mb-3"
                  style={{ filter: `drop-shadow(0 0 8px ${skill.color}60)` }}
                >
                  <Icon size={36} style={{ color: skill.color }} />
                </motion.div>
                <p className="font-semibold text-gray-300 text-sm group-hover:text-white transition-colors">
                  {skill.name}
                </p>
                {/* Level indicator */}
                <div className="mt-2 w-full rounded-full overflow-hidden" style={{ height: '2px', background: 'rgba(255,255,255,0.05)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.07 }}
                    style={{ height: '100%', background: skill.color, boxShadow: `0 0 6px ${skill.color}` }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Proficiency Bars */}
        <div className="grid md:grid-cols-2 gap-x-16 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Proficiency Levels</h3>
            {proficiency.slice(0, 4).map((item, i) => (
              <SkillBar key={i} {...item} index={i} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-white opacity-0 select-none">hidden</h3>
            {proficiency.slice(4).map((item, i) => (
              <SkillBar key={i} {...item} index={i + 4} />
            ))}
          </div>
        </div>

        {/* Globe + Platforms */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Platforms & Ecosystems</h3>
          <div className="flex flex-wrap gap-3">
            {platforms.map((p, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                animate={{ y: [0, -4, 0] }}
                style={{
                  animationDelay: `${i * 0.3}s`,
                  padding: '8px 18px',
                  borderRadius: '30px',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  cursor: 'default',
                  background: `${p.color}10`,
                  border: `1px solid ${p.color}40`,
                  color: p.color,
                  boxShadow: `0 0 10px ${p.color}10`,
                }}
              >
                {p.name}
              </motion.span>
            ))}
          </div>
          </motion.div>

          {/* 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="text-sm font-mono text-gray-500 mb-2 text-center">
              🌍 Live deployments worldwide
            </div>
            <DeployGlobe />
          </motion.div>
        </div>
      </div>
    </section>
  )
}