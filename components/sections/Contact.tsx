'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload, FaPaperPlane } from 'react-icons/fa'

const socials = [
  {
    icon: FaEnvelope, label: 'Email', value: 'mabdullah.ab614@gmail.com',
    href: 'mailto:mabdullah.ab614@gmail.com', color: '#ff006e',
    desc: 'Best for project inquiries',
  },
  {
    icon: FaLinkedin, label: 'LinkedIn', value: 'abdullah-javid-b217a2384',
    href: 'https://linkedin.com/in/abdullah-javid-b217a2384', color: '#00d9ff',
    desc: 'Professional network',
  },
  {
    icon: FaGithub, label: 'GitHub', value: 'mabdullahab614-alt',
    href: 'https://github.com/mabdullahab614-alt', color: '#9d4edd',
    desc: '10+ live repositories',
  },
]

const qrItems = [
  {
    label: 'Email QR', subtitle: 'Send an email', color: '#ff006e',
    src: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=mailto%3Amabdullah.ab614%40gmail.com',
  },
  {
    label: 'LinkedIn QR', subtitle: 'Open my profile', color: '#00d9ff',
    src: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Flinkedin.com%2Fin%2Fabdullah-javid-b217a2384',
  },
  {
    label: 'GitHub QR', subtitle: 'Visit my repos', color: '#9d4edd',
    src: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fgithub.com%2Fmabdullahab614-alt',
  },
]

function SocialCard({ s, i }: { s: typeof socials[0]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useTransform(useSpring(y, { stiffness: 200, damping: 20 }), [-0.5, 0.5], [10, -10])
  const ry = useTransform(useSpring(x, { stiffness: 200, damping: 20 }), [-0.5, 0.5], [-10, 10])
  const Icon = s.icon

  return (
    <motion.a
      ref={ref}
      href={s.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
      style={{
        rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', perspective: 800,
        background: `linear-gradient(135deg, ${s.color}12, ${s.color}04)`,
        border: `1px solid ${s.color}25`,
        boxShadow: `0 8px 30px ${s.color}10`,
        textDecoration: 'none',
      }}
      onMouseMove={e => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      whileHover={{ scale: 1.04 }}
      className="flex items-center gap-4 p-4 rounded-2xl relative overflow-hidden group cursor-pointer"
    >
      {/* Corner glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 0% 50%, ${s.color}15, transparent 60%)` }}
      />

      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${s.color}25, ${s.color}08)`, border: `1px solid ${s.color}35` }}
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.4 }}
      >
        <Icon size={22} style={{ color: s.color, filter: `drop-shadow(0 0 6px ${s.color})` }} />
      </motion.div>

      <div className="relative z-10 min-w-0">
        <div className="font-bold text-white text-sm">{s.label}</div>
        <div className="text-xs text-gray-500 truncate font-mono">{s.value}</div>
        <div className="text-xs mt-0.5" style={{ color: s.color }}>{s.desc}</div>
      </div>

      <motion.div
        className="ml-auto text-gray-600 group-hover:text-white transition-colors relative z-10"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        →
      </motion.div>
    </motion.a>
  )
}

function GlowInput({ type, name, placeholder, value, onChange, required }: {
  type: string; name: string; placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{ opacity: focused ? 1 : 0 }}
        style={{ background: 'linear-gradient(135deg, rgba(0,217,255,0.08), rgba(157,78,221,0.05))', border: '1px solid rgba(0,217,255,0.4)' }}
      />
      <input
        type={type} name={name} placeholder={placeholder} value={value}
        onChange={onChange} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none relative z-10"
        style={{
          background: focused ? 'rgba(0,217,255,0.04)' : 'rgba(26,31,58,0.8)',
          border: `1px solid ${focused ? 'rgba(0,217,255,0.3)' : 'rgba(255,255,255,0.06)'}`,
          transition: 'border-color 0.3s, background 0.3s',
          fontSize: 14,
        }}
      />
    </div>
  )
}

function GlowTextarea({ name, placeholder, value, onChange, rows, required }: {
  name: string; placeholder: string; value: string; rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; required?: boolean
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{ opacity: focused ? 1 : 0 }}
        style={{ background: 'linear-gradient(135deg, rgba(0,217,255,0.08), rgba(157,78,221,0.05))', border: '1px solid rgba(0,217,255,0.4)' }}
      />
      <textarea
        name={name} placeholder={placeholder} value={value}
        onChange={onChange} rows={rows} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none resize-none relative z-10"
        style={{
          background: focused ? 'rgba(0,217,255,0.04)' : 'rgba(26,31,58,0.8)',
          border: `1px solid ${focused ? 'rgba(0,217,255,0.3)' : 'rgba(255,255,255,0.06)'}`,
          transition: 'border-color 0.3s, background 0.3s',
          fontSize: 14,
        }}
      />
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('https://formspree.io/f/mojbapny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-dark-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text-pink">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Open to internships, collaborations, and AI projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: Social cards + QR */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h3 className="text-xl font-bold mb-6 text-neon-blue">Connect With Me</h3>
            <div className="space-y-4 mb-8">
              {socials.map((s, i) => <SocialCard key={i} s={s} i={i} />)}
            </div>

            {/* Download CV */}
            <motion.a
              href="/Abdullah_Javid_CV.pdf" download
              whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 p-4 rounded-2xl mb-8"
              style={{ background: 'linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,255,136,0.04))', border: '1px solid rgba(0,255,136,0.25)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,255,136,0.15)' }}>
                <FaFileDownload style={{ color: '#00ff88' }} />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Download CV</div>
                <div className="text-xs text-gray-500">Get my resume PDF</div>
              </div>
            </motion.a>

            {/* QR codes */}
            <div className="grid grid-cols-3 gap-3">
              {qrItems.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="rounded-xl p-3 text-center"
                  style={{ background: `${q.color}08`, border: `1px solid ${q.color}25` }}
                >
                  <img src={q.src} alt={q.label} className="mx-auto mb-2 w-full rounded-lg" style={{ border: `1px solid ${q.color}20` }} />
                  <div className="text-xs font-bold" style={{ color: q.color }}>{q.label}</div>
                  <div className="text-xs text-gray-600">{q.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Animated form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h3 className="text-xl font-bold mb-6 text-neon-purple">Send a Message</h3>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(26,31,58,0.8), rgba(10,14,39,0.9))', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <GlowInput type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <GlowInput type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <GlowTextarea name="message" placeholder="Your Message..." value={formData.message} onChange={handleChange} rows={5} required />

              <motion.button
                type="submit"
                disabled={sending || submitted}
                whileHover={!sending && !submitted ? { scale: 1.03, y: -2 } : {}}
                whileTap={!sending && !submitted ? { scale: 0.97 } : {}}
                className="w-full py-3.5 rounded-xl font-bold text-dark-bg flex items-center justify-center gap-3 relative overflow-hidden"
                style={{
                  background: submitted
                    ? 'linear-gradient(135deg, #00ff88, #00d9ff)'
                    : 'linear-gradient(135deg, #00d9ff, #9d4edd)',
                  boxShadow: submitted ? '0 0 20px rgba(0,255,136,0.4)' : '0 0 20px rgba(0,217,255,0.3)',
                  transition: 'background 0.4s, box-shadow 0.4s',
                }}
              >
                {sending ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-dark-bg/30 border-t-dark-bg rounded-full" />
                    Sending...
                  </>
                ) : submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <><FaPaperPlane size={16} /> Send Message</>
                )}

                {/* Animated shimmer */}
                {!sending && !submitted && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                  />
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
