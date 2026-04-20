'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

const ROLES = [
  'AI Developer',
  'Builder',
  'Deployer',
  'ML Engineer',
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

    for (let i = 0; i < 80; i++) {
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
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = '#00d9ff'
            ctx.globalAlpha = (1 - dist / 100) * 0.15
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
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

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <ParticleCanvas />

      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl relative z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          Available for internships & collaborations
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{ textShadow: '0 0 40px rgba(0,217,255,0.3)' }}
        >
          <span className="neon-text">Hi, I'm Abdullah Javid</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-6 h-10">
          <TypewriterText />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I ship production-ready AI chatbots, arcade games, and web tools across{' '}
          <span className="text-neon-blue font-semibold">20+ global platforms</span> while still in my first year at UMT.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap mb-12">
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

        <motion.div variants={itemVariants} className="flex gap-8 justify-center flex-wrap mb-12">
          {[['20+', 'Platforms'], ['15+', 'Projects'], ['5+', 'AI APIs'], ['1st', 'Year @ UMT']].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-neon-blue">{num}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
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

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 text-gray-500 text-sm"
        >
          ↓ Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  )
}