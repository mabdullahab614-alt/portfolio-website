'use client'

import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const STEPS = [
  {
    id: 1,
    icon: '🏗️',
    title: 'Build Structure',
    subtitle: 'Architecture Design',
    color: '#00d9ff',
    tags: ['ResNet18', 'YOLOv8', 'PyTorch', 'Gradio UI'],
    stat: '4+ Architectures',
    desc: 'Define the model skeleton — choose the right architecture, framework, and input/output pipeline before writing a single training line.',
  },
  {
    id: 2,
    icon: '📦',
    title: 'Pick Dataset',
    subtitle: 'Data Collection',
    color: '#9d4edd',
    tags: ['7,200 MRI scans', '959 tablet images', '10 animal species', '9 skin conditions'],
    stat: '10,000+ samples',
    desc: 'Collect and label real-world domain-specific data. Quality and diversity of data determines the ceiling of model performance.',
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Train It',
    subtitle: 'Deep Learning',
    color: '#ff006e',
    tags: ['Transfer Learning', 'Data Augmentation', 'Adam Optimizer', '50+ Epochs'],
    stat: '50+ epochs/run',
    desc: 'Fine-tune pretrained weights on domain data. Augment to prevent overfitting. Monitor loss curves in real time.',
  },
  {
    id: 4,
    icon: '🎯',
    title: 'Get Best Model',
    subtitle: 'Validation & Tuning',
    color: '#00ff88',
    tags: ['92.2% Brain Tumor', '71.8% Skin Disease', 'mAP Score', 'Precision/Recall'],
    stat: '92.2% accuracy',
    desc: 'Evaluate on held-out validation sets. Tune hyperparameters. Pick the checkpoint with highest val accuracy.',
  },
  {
    id: 5,
    icon: '🚀',
    title: 'Run It',
    subtitle: 'Inference & Testing',
    color: '#ffaa00',
    tags: ['~2s per scan', '30fps real-time', 'Drag & drop UI', 'Mobile-friendly'],
    stat: '~2s inference',
    desc: 'Test live inference on unseen images. Build interactive Gradio interfaces. Profile speed and memory usage.',
  },
  {
    id: 6,
    icon: '🌐',
    title: 'Deploy Live',
    subtitle: 'Global Production',
    color: '#00d9ff',
    tags: ['Hugging Face Spaces', 'GitHub Pages', 'itch.io', 'Vercel'],
    stat: '20+ platforms',
    desc: 'Ship to global platforms. Zero install. Runs in any browser. Used by real people worldwide from day one.',
  },
]

function StepCard({ step, index, active, onClick }: {
  step: typeof STEPS[0]
  index: number
  active: boolean
  onClick: () => void
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })
  const rx = useTransform(sy, [-0.5, 0.5], [10, -10])
  const ry = useTransform(sx, [-0.5, 0.5], [-10, 10])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 800 }}
      onMouseMove={e => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      onClick={onClick}
      className="cursor-pointer relative rounded-2xl p-6 flex flex-col gap-3 select-none"
      style={{
        background: active
          ? `linear-gradient(135deg, ${step.color}20, ${step.color}08)`
          : 'linear-gradient(135deg, rgba(26,31,58,0.9), rgba(10,14,39,0.95))',
        border: `1px solid ${active ? step.color + '60' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: active ? `0 0 40px ${step.color}25, 0 20px 60px rgba(0,0,0,0.3)` : '0 4px 24px rgba(0,0,0,0.3)',
        transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Step number + icon */}
      <div className="flex items-center gap-3">
        <motion.div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black"
          style={{
            background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
            border: `1px solid ${step.color}40`,
            boxShadow: active ? `0 0 20px ${step.color}40` : 'none',
          }}
          animate={active ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {step.icon}
        </motion.div>
        <div>
          <div className="text-xs font-mono" style={{ color: step.color }}>Step {step.id}</div>
          <div className="text-xs text-gray-500">{step.subtitle}</div>
        </div>
        {active && (
          <motion.div
            className="ml-auto w-2 h-2 rounded-full"
            style={{ background: step.color }}
            animate={{ opacity: [1, 0, 1], scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white">{step.title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-1">
        {step.tags.map((tag, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.12 + i * 0.07 + 0.3 }}
            className="text-xs px-2 py-0.5 rounded-full font-mono"
            style={{
              background: `${step.color}12`,
              border: `1px solid ${step.color}30`,
              color: step.color,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Stat badge */}
      <motion.div
        className="mt-auto pt-3 border-t flex items-center gap-2"
        style={{ borderColor: `${step.color}20` }}
      >
        <span className="text-xs text-gray-500">Real result:</span>
        <span className="text-sm font-bold font-mono" style={{ color: step.color }}>
          {step.stat}
        </span>
      </motion.div>

      {/* 3D depth layer */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${step.color}08, transparent 60%)`,
          transform: 'translateZ(20px)',
        }}
      />
    </motion.div>
  )
}

function FlowConnector({ color, vertical }: { color: string; vertical?: boolean }) {
  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} items-center justify-center ${vertical ? 'h-6' : 'w-full'}`}>
      <motion.div
        className={vertical ? 'w-px flex-1' : 'h-px flex-1'}
        style={{ background: `linear-gradient(${vertical ? '180deg' : '90deg'}, transparent, ${color}, transparent)` }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className="w-2 h-2 rounded-full mx-1 my-1"
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className={vertical ? 'w-px flex-1' : 'h-px flex-1'}
        style={{ background: `linear-gradient(${vertical ? '180deg' : '90deg'}, ${color}, transparent)` }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      />
    </div>
  )
}

export default function AIProcess() {
  const [active, setActive] = useState(0)

  return (
    <section id="process" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4"
            style={{ background: 'rgba(0,217,255,0.08)', border: '1px solid rgba(0,217,255,0.2)', color: '#00d9ff' }}>
            ⚙️ Real ML workflow from Abdullah's deployed projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold neon-text-pink mb-4">
            AI Development Pipeline
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Every project follows this exact process — from blank file to live global deployment with real users.
          </p>
        </motion.div>

        {/* Active step detail bar */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 p-4 rounded-xl flex items-center gap-4"
          style={{
            background: `linear-gradient(135deg, ${STEPS[active].color}10, transparent)`,
            border: `1px solid ${STEPS[active].color}25`,
          }}
        >
          <span className="text-2xl">{STEPS[active].icon}</span>
          <div>
            <span className="text-sm font-mono" style={{ color: STEPS[active].color }}>
              Step {STEPS[active].id} of 6 — {STEPS[active].title}
            </span>
            <div className="text-xs text-gray-500 mt-0.5">{STEPS[active].subtitle} · Click any card to explore</div>
          </div>
          <div className="ml-auto hidden md:flex gap-1">
            {STEPS.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className="w-6 h-1.5 rounded-full transition-all"
                style={{
                  background: i === active ? STEPS[active].color : 'rgba(255,255,255,0.1)',
                  boxShadow: i === active ? `0 0 8px ${STEPS[active].color}` : 'none',
                }}
                whileHover={{ scaleY: 2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* 3×2 Grid with flow connectors */}
        <div className="grid md:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <StepCard
              key={step.id}
              step={step}
              index={i}
              active={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Bottom flow line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.3), rgba(157,78,221,0.3), rgba(255,0,110,0.3), transparent)' }} />
          <motion.div
            className="px-4 py-2 rounded-full text-xs font-mono text-gray-400"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌍 Result: Live on 20+ global platforms
          </motion.div>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.3), transparent)' }} />
        </motion.div>
      </div>
    </section>
  )
}
