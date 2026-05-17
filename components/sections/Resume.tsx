'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaFileAlt } from 'react-icons/fa'

const highlights = [
  { label: 'CGPA', value: '3.64 / 4.0', sub: 'BS AI — UMT 2025', color: '#00d9ff' },
  { label: 'FSc Score', value: '1043 / 1200', sub: 'Pre-Engineering — PGC', color: '#9d4edd' },
  { label: 'Projects', value: '10+', sub: 'Live in Production', color: '#ff006e' },
  { label: 'Platforms', value: '20+', sub: 'Global Deployments', color: '#00ff88' },
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 bg-dark-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">Resume</h2>
          <p className="text-gray-400 text-lg">A quick snapshot — full details inside the PDF</p>
        </motion.div>

        {/* Preview card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(26,31,58,0.95), rgba(10,14,39,0.98))',
            border: '1px solid rgba(0,217,255,0.15)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
          }}
        >
          {/* Card header */}
          <div className="p-6 border-b border-white/5 relative"
            style={{ background: 'linear-gradient(135deg, rgba(0,217,255,0.06), rgba(157,78,221,0.04))' }}>
            <motion.div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #00d9ff, #9d4edd, #ff006e)' }} />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: 'rgba(0,217,255,0.1)', border: '1px solid rgba(0,217,255,0.2)' }}>
                <FaFileAlt style={{ color: '#00d9ff' }} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">Abdullah Javid</h3>
                <p className="text-sm font-mono" style={{ color: '#00d9ff' }}>
                  AI Developer · ML Engineer · Lahore, Pakistan
                </p>
              </div>
              <motion.div
                className="ml-auto w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Highlight stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y divide-white/5">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 text-center"
              >
                <div className="text-2xl font-bold font-mono mb-1" style={{ color: h.color, textShadow: `0 0 15px ${h.color}60` }}>
                  {h.value}
                </div>
                <div className="text-xs font-bold text-white mb-0.5">{h.label}</div>
                <div className="text-xs text-gray-500">{h.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Blurred preview hint */}
          <div className="p-6 relative">
            <div className="space-y-2 blur-sm pointer-events-none select-none opacity-40">
              {['Education  ████████████████  ████████', 'Experience  ██████████  ███████████████', 'Skills  ██████  ████████  ██████████████', 'Projects  ████████████  ████████  ██████'].map((line, i) => (
                <div key={i} className="text-xs font-mono text-gray-400">{line}</div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-mono text-gray-400 bg-dark-bg/80 px-4 py-2 rounded-full border border-white/10">
                🔒 Full details inside the PDF
              </span>
            </div>
          </div>
        </motion.div>

        {/* Download button */}
        <motion.a
          href="/print-resume"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.06, y: -4 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg text-dark-bg"
          style={{
            background: 'linear-gradient(135deg, #00d9ff, #9d4edd)',
            boxShadow: '0 0 30px rgba(0,217,255,0.35), 0 10px 40px rgba(0,0,0,0.3)',
          }}
        >
          <FaDownload size={18} />
          Download Full Resume PDF
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 text-xs font-mono mt-4"
        >
          Opens resume → click "Save / Print as PDF" to download
        </motion.p>
      </div>
    </section>
  )
}
