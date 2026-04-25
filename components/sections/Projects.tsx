'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useRef } from 'react'

const ICONS: Record<string, string> = {
  'Nexus AI Assistant': '🤖',
  'Skin Disease Detector': '🔬',
  'Animal Detector': '🐾',
  'Brain Tumor Detector': '🧠',
  'Galactic Defender Absolute Zero': '🎮',
}

const TAG_COLORS: Record<string, string> = {
  'AI': 'rgba(0,217,255,0.15)',
  'Hugging Face': 'rgba(157,78,221,0.15)',
  'Gradio': 'rgba(255,0,110,0.15)',
  'NLP': 'rgba(0,255,136,0.15)',
  'Computer Vision': 'rgba(157,78,221,0.15)',
  'Medical': 'rgba(255,0,110,0.15)',
  'Image Classification': 'rgba(0,217,255,0.15)',
  'Animals': 'rgba(0,255,136,0.15)',
  'Medical Imaging': 'rgba(255,0,110,0.15)',
  'Brain Tumor': 'rgba(157,78,221,0.15)',
  'Game Dev': 'rgba(0,217,255,0.15)',
  'Space Shooter': 'rgba(157,78,221,0.15)',
  'Action': 'rgba(255,0,110,0.15)',
}

const TAG_TEXT: Record<string, string> = {
  'AI': '#00d9ff',
  'Hugging Face': '#9d4edd',
  'Gradio': '#ff006e',
  'NLP': '#00ff88',
  'Computer Vision': '#9d4edd',
  'Medical': '#ff006e',
  'Image Classification': '#00d9ff',
  'Animals': '#00ff88',
  'Medical Imaging': '#ff006e',
  'Brain Tumor': '#9d4edd',
  'Game Dev': '#00d9ff',
  'Space Shooter': '#9d4edd',
  'Action': '#ff006e',
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])
  const glowX = useTransform(springX, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(springY, [-0.5, 0.5], [0, 100])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleMouseLeave = () => { x.set(0); y.set(0) }

  const colors = ['#00d9ff', '#9d4edd', '#ff006e', '#00ff88']
  const color = colors[index % colors.length]

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="relative flex flex-col rounded-xl overflow-hidden cursor-pointer group"
    >
      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}40, transparent, ${color}20)`,
          padding: '1px',
        }}
      />

      {/* Card body */}
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
        {/* Spotlight effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${color}08 0%, transparent 60%)`,
          }}
        />

        {/* Icon + Title */}
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

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {project.tags.map((tag: string, i: number) => (
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

        {/* Buttons */}
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
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = `${color}20`
              ;(e.currentTarget as HTMLElement).style.borderColor = `${color}60`
              ;(e.currentTarget as HTMLElement).style.color = color
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
              ;(e.currentTarget as HTMLElement).style.color = '#fff'
            }}
          >
            <FaGithub size={16} /> Code
          </motion.a>

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
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${color}50, ${color}20)`
              ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}40`
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${color}30, ${color}10)`
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            <FaExternalLinkAlt size={14} /> Live Demo
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const projects = [
    {
      title: 'Nexus AI Assistant',
      description: 'An intelligent AI assistant built with Hugging Face Spaces, capable of handling various queries and providing helpful responses using advanced natural language processing.',
      tags: ['AI', 'Hugging Face', 'Gradio', 'NLP'],
      github: 'https://github.com/mabdullahab614-alt/nexus-ai-assistant',
      live: 'https://huggingface.co/spaces/BUDDDY2894830/nexus-ai-assistant',
    },
    {
      title: 'Skin Disease Detector',
      description: 'A machine learning model for detecting skin diseases from uploaded images, using computer vision and deep learning techniques for medical assistance.',
      tags: ['AI', 'Computer Vision', 'Medical', 'Hugging Face'],
      github: 'https://github.com/mabdullahab614-alt/skin-disease-detector',
      live: 'https://huggingface.co/spaces/BUDDDY2894830/skin-disease-detector',
    },
    {
      title: 'Animal Detector',
      description: 'An image classification tool that identifies different animal species from photos, powered by advanced AI models and deployed on Hugging Face Spaces.',
      tags: ['AI', 'Image Classification', 'Animals', 'Hugging Face'],
      github: 'https://github.com/mabdullahab614-alt/animal-detector',
      live: 'https://huggingface.co/spaces/BUDDDY2894830/animal-detector',
    },
    {
      title: 'Brain Tumor Detector',
      description: 'A medical AI application for detecting brain tumors in MRI scans, assisting in early diagnosis and medical analysis using deep learning.',
      tags: ['AI', 'Medical Imaging', 'Brain Tumor', 'Hugging Face'],
      github: 'https://github.com/mabdullahab614-alt/brain-tumor-detector',
      live: 'https://huggingface.co/spaces/BUDDDY2894830/brain-tumor-detector',
    },
    {
      title: 'Galactic Defender Absolute Zero',
      description: 'An action-packed space shooter game where you defend the galaxy from incoming threats. Playable directly in your browser on itch.io.',
      tags: ['Game Dev', 'Space Shooter', 'Action'],
      github: 'https://github.com/mabdullahab614-alt/galactic-defender-absolute-zero',
      live: 'https://aabdullah2894830.itch.io/galactic-defender-absolute-zero',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
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
            Real AI tools deployed and used by people worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}