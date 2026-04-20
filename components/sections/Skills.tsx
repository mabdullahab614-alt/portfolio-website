'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaPython, FaDatabase, FaGitAlt, FaCloud, FaHtml5,
} from 'react-icons/fa'
import {
  SiTypescript, SiNextdotjs, SiTailwindcss,
  SiCplusplus, SiJavascript,
} from 'react-icons/si'

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

        {/* Floating Platform Badges */}
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
      </div>
    </section>
  )
}