'use client'

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useRef } from 'react'

const ICONS: Record<string, string> = {
  'Nexus AI Assistant': '🤖',
  'Skin Disease Detector': '🔬',
  'Animal Detector': '🐾',
  'Brain Tumor Detector': '🧠',
  'Galactic Defender: Absolute Zero': '🎮',
  'Tablet Defect Inspector': '💊',
  'Snake Strike': '🐍',
  'Air Writer': '✍️',
  'ChessMaster': '♟️',
  'Portfolio Website': '🌐',
}

const TAG_COLORS: Record<string, string> = {
  'AI': 'rgba(0,217,255,0.15)',
  'Hugging Face': 'rgba(157,78,221,0.15)',
  'Gradio': 'rgba(255,0,110,0.15)',
  'NLP': 'rgba(0,255,136,0.15)',
  'Computer Vision': 'rgba(157,78,221,0.15)',
  'Medical AI': 'rgba(255,0,110,0.15)',
  'Image Classification': 'rgba(0,217,255,0.15)',
  'YOLOv8': 'rgba(0,255,136,0.15)',
  'Medical Imaging': 'rgba(255,0,110,0.15)',
  'Brain Tumor': 'rgba(157,78,221,0.15)',
  'Game Dev': 'rgba(0,217,255,0.15)',
  'Space Shooter': 'rgba(157,78,221,0.15)',
  'Pygame': 'rgba(255,0,110,0.15)',
  'JavaScript': 'rgba(0,255,136,0.15)',
  'HTML5': 'rgba(255,0,110,0.15)',
  'Canvas API': 'rgba(0,217,255,0.15)',
  'Web Audio': 'rgba(157,78,221,0.15)',
  'MediaPipe': 'rgba(0,217,255,0.15)',
  'OpenCV': 'rgba(0,255,136,0.15)',
  'Gesture Control': 'rgba(157,78,221,0.15)',
  'TypeScript': 'rgba(0,217,255,0.15)',
  'Chess AI': 'rgba(157,78,221,0.15)',
  'Minimax': 'rgba(255,0,110,0.15)',
  'Quality Control': 'rgba(0,217,255,0.15)',
  'PyTorch': 'rgba(255,0,110,0.15)',
  'Groq': 'rgba(0,255,136,0.15)',
  'Multi-Model': 'rgba(157,78,221,0.15)',
  'Next.js': 'rgba(0,217,255,0.15)',
  'React': 'rgba(0,255,136,0.15)',
  'Tailwind': 'rgba(157,78,221,0.15)',
}

const TAG_TEXT: Record<string, string> = {
  'AI': '#00d9ff',
  'Hugging Face': '#9d4edd',
  'Gradio': '#ff006e',
  'NLP': '#00ff88',
  'Computer Vision': '#9d4edd',
  'Medical AI': '#ff006e',
  'Image Classification': '#00d9ff',
  'YOLOv8': '#00ff88',
  'Medical Imaging': '#ff006e',
  'Brain Tumor': '#9d4edd',
  'Game Dev': '#00d9ff',
  'Space Shooter': '#9d4edd',
  'Pygame': '#ff006e',
  'JavaScript': '#00ff88',
  'HTML5': '#ff006e',
  'Canvas API': '#00d9ff',
  'Web Audio': '#9d4edd',
  'MediaPipe': '#00d9ff',
  'OpenCV': '#00ff88',
  'Gesture Control': '#9d4edd',
  'TypeScript': '#00d9ff',
  'Chess AI': '#9d4edd',
  'Minimax': '#ff006e',
  'Quality Control': '#00d9ff',
  'PyTorch': '#ff006e',
  'Groq': '#00ff88',
  'Multi-Model': '#9d4edd',
  'Next.js': '#00d9ff',
  'React': '#00ff88',
  'Tailwind': '#9d4edd',
}

const projects = [
  {
    title: 'Nexus AI Assistant',
    description: 'An intelligent AI hub powered by Groq combining 4 language models (LLaMA, Mixtral, Gemma) with real-time web search, image vision, 5 AI personas, 10-language support, text-to-speech, and cyberpunk UI themes.',
    tags: ['AI', 'Groq', 'Multi-Model', 'NLP', 'Gradio'],
    github: 'https://github.com/mabdullahab614-alt/nexus-ai-assistant',
    live: 'https://huggingface.co/spaces/BUDDDY2894830/nexus-ai-assistant',
  },
  {
    title: 'Brain Tumor Detector',
    description: 'Medical AI tool classifying brain MRI scans into 4 conditions (Glioma, Meningioma, Pituitary, None) with 92.2% accuracy using ResNet18 transfer learning on 7,200 labeled scans. ~2s inference, mobile-friendly.',
    tags: ['AI', 'Medical Imaging', 'PyTorch', 'Brain Tumor', 'Hugging Face'],
    github: 'https://github.com/mabdullahab614-alt/brain-tumor-detector',
    live: 'https://huggingface.co/spaces/BUDDDY2894830/brain-tumor-detector',
  },
  {
    title: 'Skin Disease Detector',
    description: 'AI diagnostic tool using ResNet18 to classify 9 skin conditions including melanoma, eczema, and ringworm with 71.8% accuracy. Provides confidence scores and medical guidance per prediction.',
    tags: ['AI', 'Medical AI', 'Computer Vision', 'PyTorch', 'Hugging Face'],
    github: 'https://github.com/mabdullahab614-alt/skin-disease-detector',
    live: 'https://huggingface.co/spaces/BUDDDY2894830/skin-disease-detector',
  },
  {
    title: 'Animal Detector',
    description: 'Real-time animal detection using YOLOv8 that identifies and auto-crops up to 10 species from photos with confidence scores. Supports cats, dogs, birds, elephants, bears, and more — no installation needed.',
    tags: ['AI', 'YOLOv8', 'Computer Vision', 'Image Classification', 'Hugging Face'],
    github: 'https://github.com/mabdullahab614-alt/animal-detector',
    live: 'https://huggingface.co/spaces/BUDDDY2894830/animal-detector',
  },
  {
    title: 'Air Writer',
    description: 'Real-time computer vision app that turns hand gestures into digital drawing and PC control. Uses MediaPipe\'s 21-point hand landmark detection at 30fps via any webcam — draw, move, erase without touching hardware.',
    tags: ['AI', 'MediaPipe', 'OpenCV', 'Gesture Control', 'Gradio'],
    github: 'https://github.com/mabdullahab614-alt/air-writer',
    live: 'https://huggingface.co/spaces/Abdullah2894830/air-writer',
  },
  {
    title: 'Tablet Defect Inspector',
    description: 'AI-powered pharmaceutical quality control system classifying tablets as Good or Defective using ResNet18. Features real-time webcam inspection, defect alarm system, and instant confidence scores.',
    tags: ['AI', 'Computer Vision', 'Quality Control', 'PyTorch', 'Hugging Face'],
    github: 'https://github.com/mabdullahab614-alt/tablet-defect-inspector',
    live: 'https://huggingface.co/spaces/BUDDDY2894830/tablet-defect-inspector',
  },
  {
    title: 'ChessMaster',
    description: 'Professional chess engine with Minimax AI + Alpha-Beta Pruning, 20+ opening book positions, live eval bar, 5 board themes, ELO tracking, PGN export, and Web Audio sound effects. Runs in any browser, zero install.',
    tags: ['TypeScript', 'Chess AI', 'Minimax', 'Web Audio', 'Game Dev'],
    github: 'https://github.com/mabdullahab614-alt/chessmaster',
    live: 'https://mabdullahab614-alt.github.io/chessmaster/',
  },
  {
    title: 'Galactic Defender: Absolute Zero',
    description: 'Fast-paced space shooter with three enemy types, a two-phase boss battle, weapon upgrades, shield power-ups, combo multipliers, parallax starfield, and three difficulty modes. Compiled to WebAssembly for the browser.',
    tags: ['Game Dev', 'Pygame', 'Space Shooter', 'JavaScript'],
    github: 'https://github.com/mabdullahab614-alt/galactic-defender-absolute-zero',
    live: 'https://aabdullah2894830.itch.io/galactic-defender-absolute-zero',
  },
  {
    title: 'Snake Strike',
    description: 'Neon arcade Snake game playable in any browser with zero dependencies. Three difficulty modes with independent high scores, procedural Web Audio sound effects, CRT flicker UI, and mobile D-pad support.',
    tags: ['JavaScript', 'HTML5', 'Canvas API', 'Web Audio', 'Game Dev'],
    github: 'https://github.com/mabdullahab614-alt/snake-strike',
    live: 'https://mabdullahab614-alt.github.io/snake-strike/',
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio — a dark neon single-page site built with Next.js 15, Framer Motion 3D card effects, particle canvas, typewriter hero, and Tailwind CSS. Statically exported and deployment-ready.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/mabdullahab614-alt/portfolio-website',
    live: 'https://github.com/mabdullahab614-alt/portfolio-website',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])
  const glowX = useTransform(springX, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(springY, [-0.5, 0.5], [0, 100])

  const colors = ['#00d9ff', '#9d4edd', '#ff006e', '#00ff88']
  const color = colors[index % colors.length]

  const spotlightBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, ${color}08 0%, transparent 60%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  const isPortfolio = project.title === 'Portfolio Website'

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="relative flex flex-col rounded-xl overflow-hidden cursor-pointer group"
    >
      <motion.div
        className="relative flex flex-col h-full rounded-xl p-6"
        style={{
          background: 'linear-gradient(135deg, rgba(26,31,58,0.9), rgba(10,14,39,0.95))',
          border: `1px solid rgba(255,255,255,0.05)`,
          boxShadow: `0 0 0px ${color}00`,
          transition: 'box-shadow 0.3s, border-color 0.3s',
        }}
        whileHover={{
          boxShadow: `0 20px 60px ${color}25, 0 0 40px ${color}10`,
          borderColor: `${color}50`,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
          style={{ background: spotlightBackground }}
        />

        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${color}20, ${color}05)`,
              border: `1px solid ${color}30`,
            }}
          >
            {ICONS[project.title] || '🚀'}
          </div>
          <h3 className="text-lg font-bold" style={{ color }}>
            {project.title}
          </h3>
        </div>

        <p className="text-gray-400 mb-5 flex-grow text-sm leading-relaxed relative z-10">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1 text-xs rounded-full font-medium cursor-default"
              style={{
                background: TAG_COLORS[tag] || 'rgba(0,217,255,0.1)',
                color: TAG_TEXT[tag] || '#00d9ff',
                border: `1px solid ${TAG_TEXT[tag] || '#00d9ff'}30`,
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-3 relative z-10">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = `${color}20`
              e.currentTarget.style.borderColor = `${color}60`
              e.currentTarget.style.color = color
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = '#fff'
            }}
          >
            <FaGithub size={16} /> Code
          </motion.a>

          {!isPortfolio && (
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all"
              style={{
                background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                border: `1px solid ${color}50`,
                color,
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${color}50, ${color}20)`
                e.currentTarget.style.boxShadow = `0 0 20px ${color}40`
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = `linear-gradient(135deg, ${color}30, ${color}10)`
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <FaExternalLinkAlt size={14} /> Live Demo
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text-pink mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            AI models, games, and tools — real projects deployed and live worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
