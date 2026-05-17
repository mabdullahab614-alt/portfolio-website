'use client'

import { motion, useInView, useAnimationFrame, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaPython, FaHtml5, FaGithub, FaGamepad, FaRobot, FaFire, FaCloud } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiCplusplus, SiJavascript, SiPytorch, SiReact, SiFirebase, SiVercel, SiOpencv, SiStreamlit, SiFastapi, SiHuggingface } from 'react-icons/si'

/* ─────────────── ALL SKILLS ─────────────── */
const SKILL_GROUPS = [
  {
    category: 'AI & Machine Learning',
    color: '#00d9ff',
    emoji: '🤖',
    skills: [
      { name: 'Python', icon: FaPython, color: '#3776ab', level: 90 },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', level: 85 },
      { name: 'Deep Learning', icon: FaFire, color: '#ff006e', level: 82 },
      { name: 'Machine Learning', icon: FaRobot, color: '#00d9ff', level: 80 },
      { name: 'YOLOv8', icon: FaRobot, color: '#00ff88', level: 78 },
      { name: 'ResNet18', icon: FaRobot, color: '#9d4edd', level: 80 },
      { name: 'Data Analysis', icon: FaPython, color: '#ffaa00', level: 75 },
      { name: 'Computer Vision', icon: SiOpencv, color: '#5C3EE8', level: 78 },
      { name: 'MediaPipe', icon: FaRobot, color: '#00d9ff', level: 75 },
      { name: 'LangChain', icon: FaRobot, color: '#00ff88', level: 72 },
    ],
  },
  {
    category: 'Web Development',
    color: '#9d4edd',
    emoji: '🌐',
    skills: [
      { name: 'HTML / CSS', icon: FaHtml5, color: '#e34f26', level: 85 },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 70 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 75 },
      { name: 'React', icon: SiReact, color: '#61dafb', level: 75 },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 78 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4', level: 80 },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688', level: 70 },
      { name: 'C++', icon: SiCplusplus, color: '#00599c', level: 75 },
    ],
  },
  {
    category: 'Cloud & Platforms',
    color: '#ff006e',
    emoji: '☁️',
    skills: [
      { name: 'Hugging Face', icon: SiHuggingface, color: '#ffd21e', level: 88 },
      { name: 'Gradio', icon: FaCloud, color: '#ff006e', level: 85 },
      { name: 'Streamlit', icon: SiStreamlit, color: '#ff4b4b', level: 80 },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff', level: 82 },
      { name: 'Firebase', icon: SiFirebase, color: '#ffca28', level: 72 },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 88 },
      { name: 'Claude Code', icon: FaRobot, color: '#00d9ff', level: 85 },
      { name: 'AWS', icon: FaCloud, color: '#ff9900', level: 65 },
    ],
  },
  {
    category: 'Specializations',
    color: '#00ff88',
    emoji: '⚡',
    skills: [
      { name: 'Chatbot Dev', icon: FaRobot, color: '#00d9ff', level: 90 },
      { name: 'Game Building', icon: FaGamepad, color: '#ff006e', level: 78 },
      { name: 'Portfolio Dev', icon: SiNextdotjs, color: '#9d4edd', level: 85 },
      { name: 'GUI Development', icon: FaHtml5, color: '#00ff88', level: 72 },
      { name: 'AI APIs', icon: FaRobot, color: '#ffaa00', level: 88 },
      { name: 'Tech Stack', icon: FaCloud, color: '#00d9ff', level: 80 },
    ],
  },
]

const GLOBE_NODES = [
  { label: 'Hugging Face', color: '#9d4edd', lat: 20, lng: 30 },
  { label: 'GitHub', color: '#00d9ff', lat: 50, lng: 120 },
  { label: 'Vercel', color: '#00ff88', lat: -20, lng: -60 },
  { label: 'itch.io', color: '#ff006e', lat: 35, lng: -100 },
  { label: 'Firebase', color: '#ffaa00', lat: -40, lng: 150 },
  { label: 'AWS', color: '#00d9ff', lat: 10, lng: -30 },
  { label: 'Gradio', color: '#ff006e', lat: 60, lng: 80 },
  { label: 'Streamlit', color: '#00ff88', lat: -10, lng: 60 },
]

/* ─────────────── Animated counter ─────────────── */
function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let i = 0; const steps = 40
    const id = setInterval(() => {
      i++; setVal(Math.round((target / steps) * i))
      if (i >= steps) clearInterval(id)
    }, 25)
    return () => clearInterval(id)
  }, [inView, target])
  return <>{val}</>
}

/* ─────────────── 3D Skill Card ─────────────── */
function SkillCard({ skill, groupColor, index }: { skill: typeof SKILL_GROUPS[0]['skills'][0]; groupColor: string; index: number }) {
  const Icon = skill.icon
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(useSpring(y, { stiffness: 300, damping: 25 }), [-0.5, 0.5], [15, -15])
  const ry = useTransform(useSpring(x, { stiffness: 300, damping: 25 }), [-0.5, 0.5], [-15, 15])
  const glowX = useTransform(useSpring(x, { stiffness: 300, damping: 25 }), [-0.5, 0.5], [0, 100])
  const glowY = useTransform(useSpring(y, { stiffness: 300, damping: 25 }), [-0.5, 0.5], [0, 100])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 180 }}
      style={{
        rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 700,
        background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)`,
        border: `1px solid ${skill.color}25`,
        boxShadow: `0 8px 30px ${skill.color}10`,
      }}
      onMouseMove={e => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className="relative rounded-2xl p-4 cursor-default group flex flex-col items-center gap-2"
      whileHover={{ boxShadow: `0 20px 50px ${skill.color}30`, borderColor: `${skill.color}60` }}
    >
      {/* Spotlight */}
      <motion.div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${skill.color}15, transparent 60%)` }} />

      {/* Icon with 3D float */}
      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10"
        style={{ background: `linear-gradient(135deg, ${skill.color}25, ${skill.color}08)`, border: `1px solid ${skill.color}30` }}
        animate={{ y: [0, -5, 0], rotateZ: [0, 3, -3, 0] }}
        transition={{ duration: 3 + index * 0.1, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon size={24} style={{ color: skill.color, filter: `drop-shadow(0 0 8px ${skill.color})` }} />
      </motion.div>

      {/* Name */}
      <span className="text-xs font-bold text-center text-white relative z-10 leading-tight">{skill.name}</span>

      {/* Level bar */}
      <div className="w-full relative z-10">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-600 font-mono text-xs">
            {inView ? <CountUp target={skill.level} inView={inView} /> : 0}%
          </span>
        </div>
        <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.05 + 0.3 }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}60)`, boxShadow: `0 0 8px ${skill.color}` }}
          />
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────── 3D Globe ─────────────── */
function DeployGlobe() {
  const [rot, setRot] = useState(0)
  useAnimationFrame((_, delta) => setRot(r => r + delta * 0.02))
  const toXY = (lat: number, lng: number, r: number, rd: number) => {
    const latR = (lat * Math.PI) / 180
    const lngR = ((lng + rd) * Math.PI) / 180
    return { x: r * Math.cos(latR) * Math.sin(lngR), y: -r * Math.sin(latR), z: r * Math.cos(latR) * Math.cos(lngR) }
  }
  const R = 100, cx = 120, cy = 120
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }} className="relative mx-auto" style={{ width: 240, height: 240 }}>
      <svg width="240" height="240" className="absolute inset-0">
        <defs>
          <radialGradient id="gG"><stop offset="0%" stopColor="rgba(0,217,255,0.1)" /><stop offset="100%" stopColor="rgba(0,217,255,0)" /></radialGradient>
          <filter id="nG"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <circle cx={cx} cy={cy} r={R} fill="url(#gG)" stroke="rgba(0,217,255,0.15)" strokeWidth="1" />
        {[-60,-30,0,30,60].map((lat, i) => {
          const lr = (lat * Math.PI)/180
          return <ellipse key={i} cx={cx} cy={cy - R*Math.sin(lr)} rx={R*Math.cos(lr)} ry={R*Math.cos(lr)*0.15} fill="none" stroke="rgba(0,217,255,0.08)" strokeWidth="0.5" />
        })}
        {GLOBE_NODES.map((n, i) => {
          const { x, y, z } = toXY(n.lat, n.lng, R, rot)
          if (z < -20) return null
          const op = Math.max(0, (z+R)/(2*R)), sz = 4+(z/R)*3
          return <g key={i} filter="url(#nG)"><circle cx={cx+x} cy={cy+y} r={sz+4} fill={n.color} fillOpacity={op*0.15} /><circle cx={cx+x} cy={cy+y} r={sz} fill={n.color} fillOpacity={op*0.9} /></g>
        })}
        <ellipse cx={cx} cy={cy} rx={R} ry={R*0.15} fill="none" stroke="rgba(0,217,255,0.2)" strokeWidth="1" />
      </svg>
      {GLOBE_NODES.map((n, i) => {
        const { x, y, z } = toXY(n.lat, n.lng, R, rot)
        if (z < 10) return null
        return <div key={i} className="absolute pointer-events-none font-mono font-bold"
          style={{ left: cx+x+6, top: cy+y-5, color: n.color, opacity: (z/R)*0.9, textShadow: `0 0 8px ${n.color}`, transform: 'translate(0,-50%)', whiteSpace: 'nowrap', fontSize: 9 }}>{n.label}</div>
      })}
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle at 45% 40%, rgba(0,217,255,0.05), transparent 60%)' }} />
    </motion.div>
  )
}

/* ─────────────── Main Export ─────────────── */
export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(0)

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold neon-text-purple mb-3">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg">30+ technologies across AI, Web, Cloud & Game Development</p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {SKILL_GROUPS.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveGroup(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
              style={{
                background: activeGroup === i ? `linear-gradient(135deg, ${g.color}30, ${g.color}15)` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${activeGroup === i ? g.color + '60' : 'rgba(255,255,255,0.08)'}`,
                color: activeGroup === i ? g.color : '#9ca3af',
                boxShadow: activeGroup === i ? `0 0 20px ${g.color}25` : 'none',
              }}
            >
              {g.emoji} {g.category}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-14"
        >
          {SKILL_GROUPS[activeGroup].skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} groupColor={SKILL_GROUPS[activeGroup].color} index={i} />
          ))}
        </motion.div>

        {/* All skill counts */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {SKILL_GROUPS.map((g, i) => (
            <motion.div key={i} whileHover={{ scale: 1.04, y: -4 }}
              className="rounded-xl p-4 text-center cursor-pointer"
              style={{ background: `${g.color}10`, border: `1px solid ${g.color}25` }}
              onClick={() => setActiveGroup(i)}>
              <div className="text-2xl mb-1">{g.emoji}</div>
              <div className="font-bold text-sm text-white">{g.category}</div>
              <div className="text-xs mt-1 font-mono" style={{ color: g.color }}>{g.skills.length} skills</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Globe + platforms */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col items-center">
            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xl font-bold text-white mb-6 text-center">
              🌍 Live Deployments Worldwide
            </motion.h3>
            <DeployGlobe />
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-bold mb-6 text-white">All Platforms & Ecosystems</h3>
            <div className="flex flex-wrap gap-2">
              {['Claude AI', 'ChatGPT', 'Gemini', 'Hugging Face', 'AWS', 'Firebase', 'Vercel', 'Streamlit', 'Gradio', 'LangChain', 'FastAPI', 'GitHub', 'VS Code', 'Roboflow', 'OpenCV', 'Pygame', 'Pygbag', 'itch.io', 'chess.js', 'Web Audio API', 'MediaPipe', 'PyAutoGUI', 'Ultralytics', 'Pillow', 'Claude Code'].map((p, i) => (
                <motion.span key={i}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }} whileHover={{ scale: 1.1, y: -3 }}
                  className="px-3 py-1 rounded-full text-xs font-semibold cursor-default"
                  style={{
                    background: `${['#00d9ff','#9d4edd','#ff006e','#00ff88','#ffaa00'][i % 5]}12`,
                    border: `1px solid ${['#00d9ff','#9d4edd','#ff006e','#00ff88','#ffaa00'][i % 5]}35`,
                    color: ['#00d9ff','#9d4edd','#ff006e','#00ff88','#ffaa00'][i % 5],
                  }}
                >{p}</motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
