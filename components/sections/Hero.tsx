'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

const ROLES = [
  'AI Developer',
  'ML Engineer',
  'Builder',
  'Deployer',
  'Open to Internships',
]

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <span className="text-neon-blue">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }[] = []

    const colors = ['#00d9ff', '#9d4edd', '#ff006e']

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let animId: number
    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha
        ctx.fill()
      })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }
    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />
}

const NODES = [
  { x: 50, y: 50, r: 14, color: '#00d9ff', label: 'AI Core' },
  { x: 50, y: 12, r: 7, color: '#9d4edd', label: 'NLP' },
  { x: 82, y: 30, r: 7, color: '#00d9ff', label: 'Vision' },
  { x: 82, y: 70, r: 7, color: '#ff006e', label: 'Deploy' },
  { x: 50, y: 88, r: 7, color: '#00ff88', label: 'Data' },
  { x: 18, y: 70, r: 7, color: '#9d4edd', label: 'Train' },
  { x: 18, y: 30, r: 7, color: '#00d9ff', label: 'API' },
  { x: 65, y: 8,  r: 4, color: '#ff006e', label: '' },
  { x: 92, y: 50, r: 4, color: '#00ff88', label: '' },
  { x: 65, y: 92, r: 4, color: '#9d4edd', label: '' },
  { x: 35, y: 92, r: 4, color: '#00d9ff', label: '' },
  { x: 8,  y: 50, r: 4, color: '#ff006e', label: '' },
  { x: 35, y: 8,  r: 4, color: '#00ff88', label: '' },
]

const EDGES = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
  [1,7],[1,12],[2,7],[2,8],[3,8],[3,9],
  [4,9],[4,10],[5,10],[5,11],[6,11],[6,12],
  [1,2],[2,3],[3,4],[4,5],[5,6],[6,1],
]

const STATS = [
  { label: '92.2%', sub: 'Brain Tumor Acc.', color: '#00d9ff', delay: 0 },
  { label: '10+', sub: 'Live AI Models', color: '#9d4edd', delay: 0.4 },
  { label: '30fps', sub: 'Real-time Vision', color: '#ff006e', delay: 0.8 },
  { label: '4 LLMs', sub: 'Nexus AI Hub', color: '#00ff88', delay: 1.2 },
]

function AIIllustration() {
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setPulse(p => (p + 1) % EDGES.length), 400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full flex flex-col items-center gap-6 select-none">
      {/* Neural Network SVG */}
      <div className="relative w-full max-w-sm mx-auto aspect-square">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Outer glow */}
          <motion.circle cx="50" cy="50" r="48" fill="url(#coreGrad)"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }} />

          {/* Edges */}
          {EDGES.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={NODES[a].x} y1={NODES[a].y}
              x2={NODES[b].x} y2={NODES[b].y}
              stroke={pulse === i ? NODES[a].color : NODES[a].color}
              strokeWidth={pulse === i ? '0.8' : '0.3'}
              strokeOpacity={pulse === i ? 1 : 0.25}
              filter={pulse === i ? 'url(#glow)' : undefined}
              animate={{ strokeOpacity: pulse === i ? [0.3, 1, 0.3] : 0.2 }}
              transition={{ duration: 0.4 }}
            />
          ))}

          {/* Data particle flowing along active edge */}
          {EDGES.map(([a, b], i) => pulse === i && (
            <motion.circle
              key={`p${i}`}
              r="1.2"
              fill={NODES[a].color}
              filter="url(#glow)"
              initial={{ cx: NODES[a].x, cy: NODES[a].y, opacity: 1 }}
              animate={{ cx: NODES[b].x, cy: NODES[b].y, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          ))}

          {/* Nodes */}
          {NODES.map((n, i) => (
            <g key={i}>
              <motion.circle
                cx={n.x} cy={n.y} r={n.r + 3}
                fill={n.color} fillOpacity={0.1}
                animate={{ r: [n.r + 2, n.r + 5, n.r + 2] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
              />
              <motion.circle
                cx={n.x} cy={n.y} r={n.r}
                fill={n.color} fillOpacity={0.15}
                stroke={n.color} strokeWidth="0.5"
                animate={{ fillOpacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
                filter="url(#glow)"
              />
              {n.label && (
                <text
                  x={n.x} y={n.y + 0.5}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize="3" fill={n.color} fontWeight="bold" fontFamily="monospace"
                >
                  {n.label}
                </text>
              )}
            </g>
          ))}

          {/* Rotating scan ring */}
          <motion.circle
            cx="50" cy="50" r="45"
            fill="none" stroke="#00d9ff" strokeWidth="0.3"
            strokeDasharray="10 30"
            strokeOpacity={0.4}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '50%', originY: '50%' }}
          />
          <motion.circle
            cx="50" cy="50" r="35"
            fill="none" stroke="#9d4edd" strokeWidth="0.2"
            strokeDasharray="6 20"
            strokeOpacity={0.3}
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ originX: '50%', originY: '50%' }}
          />
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="text-center"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-2xl mb-0.5">🤖</div>
            <div className="text-xs font-mono text-neon-blue font-bold tracking-widest">PROCESSING</div>
          </motion.div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto">
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: s.delay + 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="rounded-xl p-3 text-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${s.color}10, ${s.color}05)`,
              border: `1px solid ${s.color}30`,
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0"
              style={{ background: `linear-gradient(135deg, ${s.color}20, transparent)` }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-xl font-bold relative z-10" style={{ color: s.color, textShadow: `0 0 10px ${s.color}` }}>
              {s.label}
            </div>
            <div className="text-xs text-gray-400 relative z-10 mt-0.5">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 relative overflow-hidden">
      <ParticleCanvas />

      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 py-10">
        {/* Left — text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
            Available for internships & collaborations
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ textShadow: '0 0 40px rgba(0,217,255,0.3)' }}
          >
            <span className="neon-text">Hi, I'm Abdullah Javid</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-6 h-10">
            <TypewriterText />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed"
          >
            I ship production-ready AI chatbots, arcade games, and web tools across{' '}
            <span className="text-neon-blue font-semibold">20+ global platforms</span> while still in my first year at UMT.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap mb-10">
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="relative px-8 py-3 font-bold rounded-lg text-dark-bg overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #00d9ff, #9d4edd)', boxShadow: '0 0 20px rgba(0,217,255,0.3)' }}
            >
              View My Work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="/Abdullah_Javid_CV.pdf"
              download
              className="px-8 py-3 font-bold rounded-lg transition-all"
              style={{ border: '1px solid #00d9ff', color: '#00d9ff', background: 'transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,217,255,0.4)'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,217,255,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              Download CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-8 py-3 font-bold rounded-lg transition-all"
              style={{ border: '1px solid #ff006e', color: '#ff006e', background: 'transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(255,0,110,0.4)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,0,110,0.1)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-8 flex-wrap mb-10">
            {[['20+', 'Platforms'], ['10+', 'Projects'], ['5+', 'AI APIs'], ['1st', 'Year @ UMT']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-neon-blue">{num}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6">
            {[
              { href: 'https://github.com/mabdullahab614-alt', icon: <FaGithub size={28} />, color: '#00d9ff' },
              { href: 'https://linkedin.com/in/abdullah-javid-b217a2384', icon: <FaLinkedin size={28} />, color: '#9d4edd' },
              { href: 'mailto:mabdullah.ab614@gmail.com', icon: <FaEnvelope size={28} />, color: '#ff006e' },
            ].map(({ href, icon, color }) => (
              <motion.a
                key={href}
                whileHover={{ scale: 1.3, y: -5 }}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{ color, filter: 'drop-shadow(0 0 8px currentColor)' }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — AI Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="hidden lg:block"
        >
          <AIIllustration />
        </motion.div>
      </div>
    </section>
  )
}
