'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

const contact = [
  { icon: FaEnvelope, label: 'mabdullah.ab614@gmail.com', href: 'mailto:mabdullah.ab614@gmail.com', color: '#ff006e' },
  { icon: FaLinkedin, label: 'linkedin.com/in/abdullah-javid-b217a2384', href: 'https://linkedin.com/in/abdullah-javid-b217a2384', color: '#00d9ff' },
  { icon: FaGithub, label: 'github.com/mabdullahab614-alt', href: 'https://github.com/mabdullahab614-alt', color: '#9d4edd' },
  { icon: FaMapMarkerAlt, label: 'Lahore, Pakistan', href: null, color: '#00ff88' },
]

const education = [
  {
    degree: 'BS Artificial Intelligence',
    institution: 'University of Management and Technology (UMT)',
    period: 'Sep 2025 – Present',
    location: 'Lahore, Pakistan',
    gpa: '3.64 / 4.0',
    sem: '2nd Semester',
    highlights: [
      'CGPA 3.64/4.0 in 1st Semester',
      'Certificate: 360 Transformation Boot Camp 2025',
      'Strong foundation in ML, Data Structures & Mathematics',
    ],
    color: '#00d9ff',
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Punjab Group of Colleges',
    period: '2023 – 2025',
    location: 'Lahore, Pakistan',
    gpa: '1043 / 1200',
    sem: 'Marks',
    highlights: [
      '1043/1200 marks — strong in Mathematics & Physics',
      'Subjects: Mathematics, Physics, Computer Science',
      'Foundation for AI & engineering studies',
    ],
    color: '#9d4edd',
  },
]

const experience = [
  {
    role: 'AI Developer & Deployer',
    org: 'Self-Employed / Open Source',
    period: '2024 – Present',
    color: '#00d9ff',
    points: [
      'Built and deployed 10+ production AI models on Hugging Face Spaces with real users worldwide',
      'Achieved 92.2% validation accuracy on Brain Tumor MRI classifier (7,200 scans, ResNet18)',
      'Developed Nexus AI — multi-model hub combining 4 LLMs (LLaMA, Mixtral, Gemma) with Groq',
      'Shipped real-time hand gesture drawing app (Air Writer) using MediaPipe at 30fps via webcam',
      'Deployed games on itch.io and GitHub Pages with Web Audio API and zero dependencies',
    ],
  },
  {
    role: 'Full-Stack Developer',
    org: 'Portfolio Projects',
    period: '2024 – Present',
    color: '#9d4edd',
    points: [
      'Built this portfolio with Next.js 15, Framer Motion 3D animations, and Tailwind CSS',
      'Created ChessMaster — browser chess engine with Minimax + Alpha-Beta Pruning AI, ELO tracking',
      'Integrated static export pipelines for global CDN delivery across 20+ platforms',
    ],
  },
]

const projects = [
  { name: 'Brain Tumor Detector', stat: '92.2% accuracy', tech: 'ResNet18 · PyTorch · Gradio · HF', color: '#00d9ff' },
  { name: 'Nexus AI Assistant', stat: '4 LLMs · Groq API', tech: 'LLaMA · Mixtral · Gemma · Gradio', color: '#9d4edd' },
  { name: 'Skin Disease Detector', stat: '71.8% accuracy', tech: 'ResNet18 · 9 conditions · HF', color: '#ff006e' },
  { name: 'Animal Detector', stat: '10 species', tech: 'YOLOv8 · OpenCV · Gradio', color: '#00ff88' },
  { name: 'Air Writer', stat: '30fps real-time', tech: 'MediaPipe · OpenCV · Gradio', color: '#ffaa00' },
  { name: 'ChessMaster', stat: 'Minimax AI + ELO', tech: 'TypeScript · chess.js · Web Audio', color: '#00d9ff' },
]

const skillGroups = [
  { label: 'Languages', color: '#00d9ff', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'HTML/CSS'] },
  { label: 'Frameworks', color: '#9d4edd', items: ['Next.js', 'React', 'Tailwind CSS', 'FastAPI', 'Gradio'] },
  { label: 'AI & ML', color: '#ff006e', items: ['PyTorch', 'ResNet18', 'YOLOv8', 'MediaPipe', 'Groq API', 'LangChain', 'Hugging Face'] },
  { label: 'Cloud & Deploy', color: '#00ff88', items: ['Vercel', 'Hugging Face Spaces', 'GitHub Pages', 'Firebase', 'AWS', 'Streamlit'] },
]

const achievements = [
  { icon: '🏆', title: 'CGPA 3.64 / 4.0', sub: '1st Semester — BS Artificial Intelligence, UMT', color: '#00d9ff' },
  { icon: '📜', title: '360 Transformation Boot Camp', sub: 'Certificate — UMT 2025', color: '#9d4edd' },
  { icon: '📊', title: '1043 / 1200 in FSc', sub: 'Pre-Engineering — Punjab Group of Colleges', color: '#00ff88' },
  { icon: '🌍', title: '20+ Global Deployments', sub: 'Live AI models used by real users worldwide', color: '#ff006e' },
]

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-sm font-bold uppercase tracking-widest font-mono" style={{ color }}>{title}</h3>
        <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${color}50, transparent)` }} />
      </div>
      {children}
    </motion.div>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 bg-dark-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-between items-start mb-12 flex-wrap gap-4"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold neon-text mb-2">Resume</h2>
            <p className="text-gray-400">Full professional profile</p>
          </div>
          <motion.a
            href="/Abdullah_Javid_CV.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-dark-bg"
            style={{ background: 'linear-gradient(135deg, #00d9ff, #9d4edd)', boxShadow: '0 0 20px rgba(0,217,255,0.3)' }}
          >
            <FaDownload /> Download PDF
          </motion.a>
        </motion.div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: '#ffffff',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
          }}
        >
          {/* Resume header */}
          <div className="p-8 border-b border-gray-100 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0a0e27, #1a1f3a)' }}>
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #00d9ff, #9d4edd, #ff006e)' }}
            />
            <div className="relative z-10">
              <h1 className="text-4xl font-black mb-1 text-white" style={{ letterSpacing: '-0.02em' }}>
                Abdullah Javid
              </h1>
              <p className="text-base font-mono mb-5" style={{ color: '#00d9ff' }}>
                AI Developer · ML Engineer · Builder & Deployer
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {contact.map((c, i) => {
                  const Icon = c.icon
                  const content = (
                    <div key={i} className="flex items-center gap-2">
                      <Icon style={{ color: c.color }} size={13} />
                      <span className="text-gray-300 font-mono text-xs">{c.label}</span>
                    </div>
                  )
                  return c.href ? (
                    <a key={i} href={c.href} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                      <Icon style={{ color: c.color }} size={13} />
                      <span className="text-gray-300 font-mono text-xs">{c.label}</span>
                    </a>
                  ) : content
                })}
              </div>
            </div>
          </div>

          <div className="p-8" style={{ background: '#fff' }}>
            {/* Education */}
            <Section title="Education" color="#00d9ff">
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl p-5 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${edu.color}08, transparent)`,
                      border: `1px solid ${edu.color}20`,
                    }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full" style={{ background: edu.color }} />
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2 pl-3">
                      <div>
                        <h4 className="font-bold text-gray-900 text-base">{edu.degree}</h4>
                        <p className="text-sm text-gray-500">{edu.institution} · {edu.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-gray-500">{edu.period}</div>
                        <div className="text-sm font-bold font-mono mt-1" style={{ color: edu.color }}>
                          {edu.sem}: {edu.gpa}
                        </div>
                      </div>
                    </div>
                    <ul className="pl-3 space-y-1">
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                          <span style={{ color: edu.color }}>▸</span> {h}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* Experience */}
            <Section title="Experience" color="#9d4edd">
              <div className="space-y-5">
                {experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl p-5 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${exp.color}08, transparent)`,
                      border: `1px solid ${exp.color}20`,
                    }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full" style={{ background: exp.color }} />
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3 pl-3">
                      <div>
                        <h4 className="font-bold text-gray-900">{exp.role}</h4>
                        <p className="text-sm" style={{ color: exp.color }}>{exp.org}</p>
                      </div>
                      <span className="text-xs font-mono text-gray-500">{exp.period}</span>
                    </div>
                    <ul className="pl-3 space-y-1.5">
                      {exp.points.map((p, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                          <span style={{ color: exp.color }} className="mt-0.5 flex-shrink-0">▸</span> {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section title="Key Projects" color="#ff006e">
              <div className="grid sm:grid-cols-2 gap-3">
                {projects.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07 }}
                    whileHover={{ y: -3 }}
                    className="rounded-xl p-4"
                    style={{
                      background: `linear-gradient(135deg, ${p.color}10, ${p.color}04)`,
                      border: `1px solid ${p.color}25`,
                    }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-sm text-gray-900">{p.name}</span>
                      <span className="text-xs font-mono font-bold" style={{ color: p.color }}>{p.stat}</span>
                    </div>
                    <p className="text-xs text-gray-500 font-mono">{p.tech}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* Skills */}
            <Section title="Technical Skills" color="#00ff88">
              <div className="grid sm:grid-cols-2 gap-4">
                {skillGroups.map((g, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="text-xs font-mono font-bold mb-2 uppercase tracking-wider" style={{ color: g.color }}>
                      {g.label}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((item, j) => (
                        <span key={j} className="text-xs px-2.5 py-1 rounded-full font-mono"
                          style={{
                            background: `${g.color}10`,
                            border: `1px solid ${g.color}30`,
                            color: g.color,
                          }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* Achievements */}
            <Section title="Achievements & Certifications" color="#ffaa00">
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 rounded-xl p-4"
                    style={{
                      background: `linear-gradient(135deg, ${a.color}10, ${a.color}04)`,
                      border: `1px solid ${a.color}25`,
                    }}
                  >
                    <span className="text-xl flex-shrink-0">{a.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-gray-900">{a.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{a.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>

          {/* Footer bar */}
          <div className="px-8 py-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-3"
            style={{ background: 'rgba(0,0,0,0.02)' }}>
            <span className="text-xs text-gray-400 font-mono">Abdullah Javid · AI Developer · Lahore, Pakistan · 2025</span>
            <motion.a
              href="/Abdullah_Javid_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg"
              style={{ background: 'rgba(0,217,255,0.08)', border: '1px solid rgba(0,217,255,0.2)', color: '#00d9ff' }}
            >
              <FaDownload size={10} /> Download PDF
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}