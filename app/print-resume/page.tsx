'use client'

import { useEffect, useRef, useState } from 'react'

const contact = [
  { icon: '✉', label: 'mabdullah.ab614@gmail.com' },
  { icon: '🔗', label: 'linkedin.com/in/abdullah-javid-b217a2384' },
  { icon: '⌨', label: 'github.com/mabdullahab614-alt' },
  { icon: '📍', label: 'Lahore, Pakistan' },
]

const education = [
  {
    degree: 'BS Artificial Intelligence',
    institution: 'University of Management and Technology (UMT)',
    period: 'Sep 2025 – Present',
    gpa: 'CGPA: 3.64 / 4.0 (1st Semester)',
    highlights: [
      'Currently in 2nd Semester — strong in Mathematics, ML & Data Structures',
      'Certificate: 360 Transformation Boot Camp 2025 — UMT',
    ],
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Punjab Group of Colleges (PGC)',
    period: '2023 – 2025',
    gpa: 'Score: 1043 / 1200',
    highlights: ['Subjects: Mathematics, Physics, Computer Science · Excellent analytical skills'],
  },
]

const experience = [
  {
    role: 'AI Developer & Deployer',
    org: 'Self-Employed / Open Source · 2024 – Present',
    points: [
      'Built 10+ production AI models on Hugging Face Spaces with global real users',
      '92.2% val accuracy on Brain Tumor MRI classifier (7,200 scans, ResNet18 + PyTorch)',
      'Nexus AI: multi-model hub with 4 LLMs (LLaMA, Mixtral, Gemma) powered by Groq API',
      'Air Writer: real-time hand gesture drawing app using MediaPipe at 30fps via webcam',
    ],
  },
  {
    role: 'Full-Stack Developer',
    org: 'Portfolio Projects · 2024 – Present',
    points: [
      'Portfolio: Next.js 15, Framer Motion 3D, Tailwind CSS — deployed on Vercel',
      'ChessMaster: browser chess engine with Minimax + Alpha-Beta Pruning + ELO tracking',
    ],
  },
]

const projects = [
  { name: 'Brain Tumor Detector', stat: '92.2% acc', tech: 'ResNet18 · PyTorch · Gradio · HF' },
  { name: 'Nexus AI Assistant', stat: '4 LLMs', tech: 'LLaMA · Mixtral · Gemma · Groq' },
  { name: 'Skin Disease Detector', stat: '71.8% acc', tech: 'ResNet18 · 9 conditions · HF' },
  { name: 'Animal Detector', stat: 'YOLOv8', tech: 'Ultralytics · OpenCV · Gradio' },
  { name: 'Air Writer', stat: '30fps', tech: 'MediaPipe · OpenCV · Gradio' },
  { name: 'ChessMaster', stat: 'Minimax AI', tech: 'TypeScript · chess.js · Web Audio' },
]

const skills = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'HTML/CSS'] },
  { label: 'Frameworks', items: ['Next.js', 'React', 'Tailwind', 'FastAPI', 'Gradio'] },
  { label: 'AI & ML', items: ['PyTorch', 'ResNet18', 'YOLOv8', 'MediaPipe', 'Groq API', 'LangChain', 'HuggingFace'] },
  { label: 'Cloud', items: ['Vercel', 'HF Spaces', 'GitHub Pages', 'Firebase', 'AWS'] },
]

const achievements = [
  '🏆 CGPA 3.64 / 4.0 — BS AI, UMT (1st Semester, 2025)',
  '📜 360 Transformation Boot Camp Certificate — UMT 2025',
  '📊 FSc Score: 1043 / 1200 — Punjab Group of Colleges (2025)',
  '🌍 20+ global deployments — live AI models used worldwide',
]

const blue = '#1d4ed8'
const gray = '#374151'
const light = '#6b7280'
const bg = '#f8fafc'

export default function PrintResume() {
  const resumeRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Abdullah Javid — Resume'
  }, [])

  const handleDownload = async () => {
    if (!resumeRef.current) return
    setLoading(true)
    try {
      const html2pdf = (await import('html2pdf.js')).default
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const opt: any = {
        margin: [8, 8, 8, 8],
        filename: 'Abdullah_Javid_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: 'avoid-all' },
      }
      await html2pdf().set(opt).from(resumeRef.current).save()
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { background: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif; }
        @media screen { body { padding: 24px; } }
      `}</style>

      {/* Download button — screen only */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <button
          onClick={handleDownload}
          disabled={loading}
          style={{
            background: loading ? '#93c5fd' : blue,
            color: '#fff',
            border: 'none',
            padding: '12px 32px',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 15,
            cursor: loading ? 'wait' : 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 4px 14px rgba(29,78,216,0.35)',
          }}
        >
          {loading ? '⏳ Generating PDF...' : '⬇ Download Resume PDF'}
        </button>
        <p style={{ marginTop: 8, fontSize: 11, color: light }}>Auto-downloads — no print dialog</p>
      </div>

      {/* Resume — this div is what gets converted to PDF */}
      <div
        ref={resumeRef}
        style={{
          background: '#fff',
          maxWidth: 794,
          margin: '0 auto',
          padding: '24px 28px',
          fontSize: 11,
          lineHeight: 1.45,
          color: '#111',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', borderBottom: `2.5px solid ${blue}`, paddingBottom: 12, marginBottom: 12 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#111', letterSpacing: -0.5, marginBottom: 3 }}>
            Abdullah Javid
          </h1>
          <div style={{ fontSize: 11, color: blue, fontWeight: 600, marginBottom: 7 }}>
            AI Developer · ML Engineer · Builder & Deployer
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3px 18px' }}>
            {contact.map((c, i) => (
              <span key={i} style={{ fontSize: 10.5, color: gray }}>{c.icon} {c.label}</span>
            ))}
          </div>
        </div>

        {/* Two-column body */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 195px', gap: 18 }}>

          {/* LEFT */}
          <div>

            {/* Education */}
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.8, color: blue, borderBottom: `1px solid ${blue}`, paddingBottom: 3, marginBottom: 7 }}>Education</div>
              {education.map((e, i) => (
                <div key={i} style={{ marginBottom: 7, paddingLeft: 8, borderLeft: `2.5px solid #bfdbfe` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, marginBottom: 1 }}>
                    <span style={{ fontWeight: 700, fontSize: 11, color: '#111' }}>{e.degree}</span>
                    <span style={{ fontSize: 10, color: blue, fontWeight: 700 }}>{e.gpa}</span>
                  </div>
                  <div style={{ fontSize: 10, color: light, marginBottom: 2 }}>{e.institution} · {e.period}</div>
                  {e.highlights.map((h, j) => <div key={j} style={{ fontSize: 10, color: gray }}>▸ {h}</div>)}
                </div>
              ))}
            </div>

            {/* Experience */}
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.8, color: blue, borderBottom: `1px solid ${blue}`, paddingBottom: 3, marginBottom: 7 }}>Experience</div>
              {experience.map((e, i) => (
                <div key={i} style={{ marginBottom: 7, paddingLeft: 8, borderLeft: `2.5px solid #bfdbfe` }}>
                  <div style={{ fontWeight: 700, fontSize: 11, color: '#111' }}>{e.role}</div>
                  <div style={{ fontSize: 10, color: blue, fontWeight: 600, marginBottom: 3 }}>{e.org}</div>
                  {e.points.map((p, j) => <div key={j} style={{ fontSize: 10, color: gray, marginBottom: 1 }}>▸ {p}</div>)}
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <div style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.8, color: blue, borderBottom: `1px solid ${blue}`, paddingBottom: 3, marginBottom: 7 }}>Key Projects</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
                {projects.map((p, i) => (
                  <div key={i} style={{ padding: '5px 7px', background: bg, borderRadius: 4, borderLeft: `2px solid #bfdbfe` }}>
                    <div style={{ fontWeight: 700, fontSize: 10.5, color: '#111' }}>{p.name}</div>
                    <div style={{ fontSize: 10, color: blue, fontWeight: 600 }}>{p.stat}</div>
                    <div style={{ fontSize: 9.5, color: light }}>{p.tech}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div>

            {/* Skills */}
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.8, color: blue, borderBottom: `1px solid ${blue}`, paddingBottom: 3, marginBottom: 7 }}>Skills</div>
              {skills.map((s, i) => (
                <div key={i} style={{ marginBottom: 7 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#111', marginBottom: 3 }}>{s.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    {s.items.map((item, j) => (
                      <span key={j} style={{ padding: '1.5px 6px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 999, fontSize: 9.5, color: blue }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <div style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.8, color: blue, borderBottom: `1px solid ${blue}`, paddingBottom: 3, marginBottom: 7 }}>Achievements</div>
              {achievements.map((a, i) => (
                <div key={i} style={{ fontSize: 10, color: gray, marginBottom: 5, padding: '4px 6px', background: bg, borderRadius: 4, borderLeft: `2px solid #bfdbfe` }}>{a}</div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 14, paddingTop: 7, borderTop: `1px solid #e5e7eb`, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 9, color: '#9ca3af' }}>Abdullah Javid · AI Developer · Lahore, Pakistan · 2025</span>
          <span style={{ fontSize: 9, color: '#9ca3af' }}>github.com/mabdullahab614-alt</span>
        </div>
      </div>
    </>
  )
}
