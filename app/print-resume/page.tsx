'use client'

import { useEffect } from 'react'

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
    highlights: [
      'Subjects: Mathematics, Physics, Computer Science',
      'Excellent analytical and calculation skills',
    ],
  },
]

const experience = [
  {
    role: 'AI Developer & Deployer',
    org: 'Self-Employed / Open Source',
    period: '2024 – Present',
    points: [
      'Built and deployed 10+ production AI models on Hugging Face Spaces with global users',
      'Achieved 92.2% validation accuracy on Brain Tumor MRI classifier (7,200 scans, ResNet18 + PyTorch)',
      'Developed Nexus AI — multi-model hub with 4 LLMs (LLaMA, Mixtral, Gemma) powered by Groq API',
      'Built Air Writer: real-time hand gesture drawing app using MediaPipe at 30fps via browser webcam',
      'Deployed arcade games on itch.io and GitHub Pages with Web Audio API and zero dependencies',
    ],
  },
  {
    role: 'Full-Stack Developer',
    org: 'Portfolio Projects',
    period: '2024 – Present',
    points: [
      'Built portfolio with Next.js 15, Framer Motion 3D animations, Tailwind CSS, deployed on Vercel',
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

const blue = '#1d4ed8'
const gray = '#374151'
const lightGray = '#6b7280'
const border = '#e5e7eb'

export default function PrintResume() {
  useEffect(() => {
    document.title = 'Abdullah Javid — Resume'
  }, [])

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { background: #fff; color: #111; font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; }

        @media print {
          html, body { background: #fff !important; }
          .no-print { display: none !important; }
          @page {
            size: A4;
            margin: 10mm 12mm;
            /* Remove browser header/footer (date, URL, page number) */
          }
          html {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }

        @media screen {
          body { max-width: 820px; margin: 0 auto; padding: 20px; }
        }

        .section-title {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: ${blue};
          margin-bottom: 8px;
          padding-bottom: 4px;
          border-bottom: 1.5px solid ${blue};
        }

        .card {
          padding: 8px 10px;
          background: #f8fafc;
          border-radius: 5px;
          border-left: 3px solid ${blue};
          margin-bottom: 6px;
        }

        .tag {
          display: inline-block;
          padding: 1px 7px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 999px;
          font-size: 10px;
          color: ${blue};
          margin: 2px 2px 0 0;
        }
      `}</style>

      {/* Screen-only print button */}
      <div className="no-print" style={{ textAlign: 'center', padding: '16px 0 20px', borderBottom: '1px solid #e5e7eb', marginBottom: 20 }}>
        <p style={{ color: lightGray, fontSize: 12, marginBottom: 10 }}>
          Click below — then choose <strong>Save as PDF</strong> in the print dialog
        </p>
        <button
          onClick={() => window.print()}
          style={{
            background: blue,
            color: '#fff',
            border: 'none',
            padding: '10px 28px',
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
            letterSpacing: 0.5,
          }}
        >
          ⬇ Save as PDF
        </button>
      </div>

      {/* ─── RESUME DOCUMENT ─── */}
      <div style={{ background: '#fff', padding: 0 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', paddingBottom: 14, marginBottom: 14, borderBottom: `2px solid ${blue}` }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#111', letterSpacing: -0.5, marginBottom: 4 }}>
            Abdullah Javid
          </h1>
          <p style={{ fontSize: 12, color: blue, fontWeight: 600, marginBottom: 10 }}>
            AI Developer · ML Engineer · Builder & Deployer
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 20px' }}>
            {contact.map((c, i) => (
              <span key={i} style={{ fontSize: 11, color: gray }}>
                {c.icon} {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: 20 }}>

          {/* LEFT COLUMN */}
          <div>

            {/* Education */}
            <div style={{ marginBottom: 16 }}>
              <div className="section-title">Education</div>
              {education.map((e, i) => (
                <div key={i} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 2 }}>
                    <span style={{ fontWeight: 700, fontSize: 12, color: '#111' }}>{e.degree}</span>
                    <span style={{ fontSize: 10.5, color: blue, fontWeight: 600 }}>{e.gpa}</span>
                  </div>
                  <div style={{ fontSize: 11, color: lightGray, marginBottom: 4 }}>
                    {e.institution} &nbsp;·&nbsp; {e.period}
                  </div>
                  {e.highlights.map((h, j) => (
                    <div key={j} style={{ fontSize: 11, color: gray }}>▸ {h}</div>
                  ))}
                </div>
              ))}
            </div>

            {/* Experience */}
            <div style={{ marginBottom: 16 }}>
              <div className="section-title">Experience</div>
              {experience.map((e, i) => (
                <div key={i} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 2 }}>
                    <span style={{ fontWeight: 700, fontSize: 12, color: '#111' }}>{e.role}</span>
                    <span style={{ fontSize: 10.5, color: lightGray }}>{e.period}</span>
                  </div>
                  <div style={{ fontSize: 11, color: blue, fontWeight: 600, marginBottom: 4 }}>{e.org}</div>
                  {e.points.map((p, j) => (
                    <div key={j} style={{ fontSize: 11, color: gray, marginBottom: 2 }}>▸ {p}</div>
                  ))}
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <div className="section-title">Key Projects</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
                {projects.map((p, i) => (
                  <div key={i} style={{ padding: '6px 8px', background: '#f8fafc', borderRadius: 5, borderLeft: `2px solid #bfdbfe` }}>
                    <div style={{ fontWeight: 700, fontSize: 11, color: '#111' }}>{p.name}</div>
                    <div style={{ fontSize: 10.5, color: blue, fontWeight: 600 }}>{p.stat}</div>
                    <div style={{ fontSize: 10, color: lightGray }}>{p.tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>

            {/* Skills */}
            <div style={{ marginBottom: 16 }}>
              <div className="section-title">Technical Skills</div>
              {skills.map((s, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: '#111', marginBottom: 3 }}>{s.label}</div>
                  <div>
                    {s.items.split(' · ').map((item, j) => (
                      <span key={j} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <div className="section-title">Achievements</div>
              {achievements.map((a, i) => (
                <div key={i} style={{
                  fontSize: 10.5, color: gray, marginBottom: 6,
                  padding: '5px 8px', background: '#f8fafc',
                  borderRadius: 4, borderLeft: `2px solid #bfdbfe`
                }}>
                  {a}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 16, paddingTop: 8, borderTop: `1px solid ${border}`, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 9.5, color: '#9ca3af' }}>Abdullah Javid · AI Developer · Lahore, Pakistan</span>
          <span style={{ fontSize: 9.5, color: '#9ca3af' }}>github.com/mabdullahab614-alt · mabdullah.ab614@gmail.com</span>
        </div>
      </div>
    </>
  )
}
