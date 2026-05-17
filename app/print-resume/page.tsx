'use client'

import { useEffect } from 'react'

const contact = [
  { label: '📧', value: 'mabdullah.ab614@gmail.com' },
  { label: '🔗', value: 'linkedin.com/in/abdullah-javid-b217a2384' },
  { label: '💻', value: 'github.com/mabdullahab614-alt' },
  { label: '📍', value: 'Lahore, Pakistan' },
]

const education = [
  {
    degree: 'BS Artificial Intelligence',
    institution: 'University of Management and Technology (UMT)',
    period: 'Sep 2025 – Present',
    gpa: 'CGPA: 3.64 / 4.0 (1st Semester)',
    highlights: [
      'Currently in 2nd Semester',
      'Certificate: 360 Transformation Boot Camp 2025 — UMT',
      'Strong foundation in Mathematics, ML & Data Structures',
    ],
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Punjab Group of Colleges (PGC)',
    period: '2023 – 2025',
    gpa: 'Score: 1043 / 1200',
    highlights: [
      'Subjects: Mathematics, Physics, Computer Science',
      'Strong analytical and calculation skills',
    ],
  },
]

const experience = [
  {
    role: 'AI Developer & Deployer',
    org: 'Self-Employed / Open Source',
    period: '2024 – Present',
    points: [
      'Built and deployed 10+ production AI models on Hugging Face Spaces used by real users worldwide',
      'Achieved 92.2% validation accuracy on Brain Tumor MRI classifier (7,200 scans, ResNet18 + PyTorch)',
      'Developed Nexus AI — multi-model hub with 4 LLMs (LLaMA, Mixtral, Gemma) powered by Groq API',
      'Built Air Writer: real-time hand gesture drawing app using MediaPipe at 30fps via browser webcam',
      'Deployed games on itch.io and GitHub Pages with Web Audio API and zero external dependencies',
    ],
  },
  {
    role: 'Full-Stack Developer',
    org: 'Portfolio Projects',
    period: '2024 – Present',
    points: [
      'Built portfolio website with Next.js 15, Framer Motion 3D animations, Tailwind CSS, deployed on Vercel',
      'Created ChessMaster — browser chess engine with Minimax + Alpha-Beta Pruning AI and ELO tracking',
      'Integrated static export pipelines for global CDN delivery across 20+ platforms',
    ],
  },
]

const projects = [
  { name: 'Brain Tumor Detector', stat: '92.2% accuracy', tech: 'ResNet18 · PyTorch · Gradio · Hugging Face' },
  { name: 'Nexus AI Assistant', stat: '4 LLMs · Groq API', tech: 'LLaMA · Mixtral · Gemma · Gradio' },
  { name: 'Skin Disease Detector', stat: '71.8% accuracy · 9 conditions', tech: 'ResNet18 · PyTorch · HF Spaces' },
  { name: 'Animal Detector', stat: 'YOLOv8 · 10 species', tech: 'Ultralytics · OpenCV · Gradio' },
  { name: 'Air Writer', stat: '30fps real-time', tech: 'MediaPipe · OpenCV · PyAutoGUI · Gradio' },
  { name: 'ChessMaster', stat: 'Minimax AI + ELO tracking', tech: 'TypeScript · chess.js · Web Audio API' },
  { name: 'Tablet Defect Inspector', stat: 'Binary QC classification', tech: 'ResNet18 · OpenCV · Pygame · HF' },
  { name: 'Galactic Defender', stat: 'WebAssembly browser game', tech: 'Python · Pygame · Pygbag · itch.io' },
]

const skills = [
  { label: 'Languages', items: 'Python · JavaScript · TypeScript · C++ · HTML/CSS' },
  { label: 'Frameworks', items: 'Next.js · React · Tailwind CSS · FastAPI · Gradio · Streamlit' },
  { label: 'AI & ML', items: 'PyTorch · ResNet18 · YOLOv8 · MediaPipe · Groq API · LangChain · Hugging Face' },
  { label: 'Cloud & Deploy', items: 'Vercel · Hugging Face Spaces · GitHub Pages · Firebase · AWS · itch.io' },
  { label: 'Tools', items: 'Git · GitHub · VS Code · Roboflow · OpenCV · Pillow · Pygame' },
]

const achievements = [
  'CGPA 3.64 / 4.0 in 1st Semester — BS Artificial Intelligence, UMT (2025)',
  '360 Transformation Boot Camp Certificate — UMT 2025',
  'FSc Pre-Engineering: 1043 / 1200 marks — Punjab Group of Colleges (2025)',
  '20+ global platform deployments with live production AI models used worldwide',
  'Strong in Mathematics, Calculations, and Analytical Problem Solving',
]

export default function PrintResume() {
  useEffect(() => {
    document.title = 'Abdullah Javid — Resume'
  }, [])

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #fff; font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          @page { margin: 12mm 14mm; size: A4; }
        }
        @media screen {
          body { max-width: 860px; margin: 0 auto; padding: 24px; }
        }
      `}</style>

      {/* Print button - only visible on screen */}
      <div className="no-print" style={{ textAlign: 'right', marginBottom: 16 }}>
        <button
          onClick={() => window.print()}
          style={{
            background: 'linear-gradient(135deg, #00d9ff, #9d4edd)',
            color: '#fff',
            border: 'none',
            padding: '10px 24px',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          ⬇ Save / Print as PDF
        </button>
      </div>

      {/* Resume content */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ background: '#0a0e27', padding: '28px 32px', borderTop: '3px solid #00d9ff' }}>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', marginBottom: 4 }}>Abdullah Javid</h1>
          <p style={{ fontSize: 13, color: '#00d9ff', fontFamily: 'monospace', marginBottom: 12 }}>
            AI Developer · ML Engineer · Builder & Deployer
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 24px' }}>
            {contact.map((c, i) => (
              <span key={i} style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace' }}>
                {c.label} {c.value}
              </span>
            ))}
          </div>
        </div>

        <div style={{ padding: '24px 32px' }}>

          {/* Education */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#00d9ff', fontFamily: 'monospace' }}>Education</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #00d9ff40, transparent)' }} />
            </div>
            {education.map((e, i) => (
              <div key={i} style={{ marginBottom: 12, paddingLeft: 12, borderLeft: '2px solid #00d9ff40' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#111' }}>{e.degree}</div>
                    <div style={{ fontSize: 12, color: '#6b7280' }}>{e.institution}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace' }}>{e.period}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#00d9ff', fontFamily: 'monospace' }}>{e.gpa}</div>
                  </div>
                </div>
                <ul style={{ marginTop: 4, paddingLeft: 0, listStyle: 'none' }}>
                  {e.highlights.map((h, j) => (
                    <li key={j} style={{ fontSize: 11.5, color: '#4b5563', marginTop: 2 }}>▸ {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#9d4edd', fontFamily: 'monospace' }}>Experience</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #9d4edd40, transparent)' }} />
            </div>
            {experience.map((e, i) => (
              <div key={i} style={{ marginBottom: 12, paddingLeft: 12, borderLeft: '2px solid #9d4edd40' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#111' }}>{e.role}</div>
                    <div style={{ fontSize: 12, color: '#9d4edd' }}>{e.org}</div>
                  </div>
                  <div style={{ fontSize: 11, color: '#9ca3af', fontFamily: 'monospace' }}>{e.period}</div>
                </div>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  {e.points.map((p, j) => (
                    <li key={j} style={{ fontSize: 11.5, color: '#4b5563', marginTop: 2 }}>▸ {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#ff006e', fontFamily: 'monospace' }}>Key Projects</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #ff006e40, transparent)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }}>
              {projects.map((p, i) => (
                <div key={i} style={{ padding: '6px 10px', background: '#f9fafb', borderRadius: 6, borderLeft: '2px solid #ff006e40' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontWeight: 700, fontSize: 12, color: '#111' }}>{p.name}</span>
                    <span style={{ fontSize: 11, color: '#ff006e', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>{p.stat}</span>
                  </div>
                  <div style={{ fontSize: 10.5, color: '#9ca3af', fontFamily: 'monospace', marginTop: 1 }}>{p.tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#00ff88', fontFamily: 'monospace' }}>Technical Skills</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #00ff8840, transparent)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px 20px' }}>
              {skills.map((s, i) => (
                <div key={i} style={{ fontSize: 11.5, color: '#374151' }}>
                  <span style={{ fontWeight: 700, color: '#111' }}>{s.label}: </span>
                  {s.items}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#ffaa00', fontFamily: 'monospace' }}>Achievements & Certifications</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #ffaa0040, transparent)' }} />
            </div>
            <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
              {achievements.map((a, i) => (
                <li key={i} style={{ fontSize: 11.5, color: '#4b5563', marginBottom: 3 }}>🏆 {a}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div style={{ padding: '10px 32px', borderTop: '1px solid #f3f4f6', background: '#fafafa', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'monospace' }}>Abdullah Javid · AI Developer · Lahore, Pakistan · 2025</span>
          <span style={{ fontSize: 10, color: '#9ca3af', fontFamily: 'monospace' }}>github.com/mabdullahab614-alt</span>
        </div>
      </div>
    </>
  )
}
