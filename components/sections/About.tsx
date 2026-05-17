'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const TERMINAL_LINES = [
  { text: '$ python train.py --model resnet18 --epochs 50', color: '#00d9ff', delay: 0 },
  { text: 'Loading 7,200 MRI scans...', color: '#6b7280', delay: 600 },
  { text: 'Epoch 48/50 | loss: 0.142 | val_acc: 91.4%', color: '#6b7280', delay: 1200 },
  { text: 'Epoch 49/50 | loss: 0.118 | val_acc: 92.1%', color: '#6b7280', delay: 1800 },
  { text: '✓ Epoch 50/50 | val_acc: 92.2% ← Best!', color: '#00ff88', delay: 2400 },
  { text: 'Saving checkpoint: brain_tumor_v3.pth', color: '#6b7280', delay: 3000 },
  { text: '$ gradio deploy --hf-token ***', color: '#00d9ff', delay: 3800 },
  { text: 'Uploading model to Hugging Face...', color: '#6b7280', delay: 4400 },
  { text: '✓ Live → hf.co/spaces/BUDDDY2894830/brain-tumor-detector', color: '#00ff88', delay: 5000 },
  { text: '$ git push origin main', color: '#00d9ff', delay: 5800 },
  { text: '✓ Vercel deployed in 58s → portfolio live', color: '#00ff88', delay: 6400 },
  { text: '█', color: '#00d9ff', delay: 7000 },
]

function TerminalLine({ line, startTyping }: { line: typeof TERMINAL_LINES[0]; startTyping: boolean }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!startTyping) return
    const timer = setTimeout(() => {
      if (line.text === '█') { setDisplayed('█'); setDone(true); return }
      let i = 0
      const speed = line.text.startsWith('$') ? 40 : 18
      const interval = setInterval(() => {
        i++
        setDisplayed(line.text.slice(0, i))
        if (i >= line.text.length) { clearInterval(interval); setDone(true) }
      }, speed)
      return () => clearInterval(interval)
    }, line.delay)
    return () => clearTimeout(timer)
  }, [startTyping, line])

  if (!displayed) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-mono text-xs leading-5 whitespace-nowrap overflow-hidden"
      style={{ color: line.color }}
    >
      {line.text === '█' ? (
        <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
          █
        </motion.span>
      ) : displayed}
    </motion.div>
  )
}

function LiveTerminal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (inView) setTimeout(() => setStarted(true), 400)
  }, [inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative rounded-xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(6,9,20,0.98), rgba(10,14,39,0.95))',
        border: '1px solid rgba(0,217,255,0.2)',
        boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,217,255,0.06)',
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5"
        style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-500 font-mono">abdullah@ai-dev ~ brain-tumor-detector</span>
        <motion.div
          className="ml-auto w-2 h-2 rounded-full bg-green-400"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>

      {/* Terminal body */}
      <div className="p-4 space-y-0.5 min-h-[280px]">
        {TERMINAL_LINES.map((line, i) => (
          <TerminalLine key={i} line={line} startTyping={started} />
        ))}
      </div>

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.15), transparent)' }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* Glow edge */}
      <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,217,255,0.04), transparent)' }} />
    </motion.div>
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
                  }}
                >
                  <div className="text-2xl font-bold font-mono" style={{ color: s.c, textShadow: `0 0 20px ${s.c}` }}>{s.n}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Live Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <LiveTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
