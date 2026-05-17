'use client'

import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCode, FaDownload } from 'react-icons/fa'

export default function Resume() {
  const experience = [
    {
      role: 'AI Developer & Builder',
      company: 'Self-Employed / Open Source',
      period: '2024 - Present',
      description: 'Shipped production-ready AI chatbots, arcade games, and web tools across 20+ global platforms.',
      highlights: [
        'Built and deployed 15+ active AI projects',
        'Integrated Claude AI, ChatGPT, Gemini APIs',
        'Cloud deployment on AWS, Azure, Firebase, Vercel',
        'Created interactive UIs with Streamlit & Gradio',
      ],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Portfolio Projects',
      period: '2024 - Present',
      description: 'Developing end-to-end web applications with Next.js, React, and AI integration.',
      highlights: [
        'Next.js full-stack development',
        'Real-time AI chatbot implementations',
        'RESTful API design with FastAPI',
        'Cloud deployment & DevOps',
      ],
    },
  ]

  const education = [
    {
      degree: 'BS Artificial Intelligence',
      institution: 'University of Management and Technology (UMT)',
      period: '2025 - Present',
      details: 'First-year AI student building production-ready applications.',
    },
    {
      degree: 'FSc Pre-Engineering',
      institution: 'Punjab Group of Colleges',
      period: '2023 - 2025',
      details: 'Mathematics, Physics, and Computer Science specialization.',
    },
  ]

  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'HTML/CSS'],
    frameworks: ['Next.js', 'React', 'Tailwind CSS', 'FastAPI'],
    aiTools: ['Claude AI', 'ChatGPT', 'Gemini', 'Hugging Face', 'LangChain'],
    cloud: ['AWS', 'Azure', 'Firebase', 'Vercel', 'Streamlit', 'Gradio'],
  }

  const certifications = [
    'Claude AI Platform',
    'ChatGPT / OpenAI Ecosystem',
    'Google Gemini',
    'Hugging Face AI Deployment',
    'AWS / Azure / Firebase',
    'Vercel / Streamlit / Gradio',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const downloadResume = () => {
    // This will trigger a download of the CV PDF when available
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Abdullah_Javid_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 px-4 bg-dark-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-between items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Resume</h2>
            <p className="text-gray-400">Professional experience, education, and skills</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg transition-shadow"
          >
            <FaDownload /> Download PDF
          </motion.button>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-neon-blue">
            <FaBriefcase /> Professional Experience
          </h3>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glow-box p-6 rounded-lg mb-6 bg-dark-secondary/40 border border-neon-blue/10"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-2xl font-bold text-neon-blue">{exp.role}</h4>
                  <p className="text-neon-purple">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-400 flex items-start gap-2">
                    <span className="text-neon-blue mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-neon-purple">
            <FaGraduationCap /> Education
          </h3>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glow-box p-6 rounded-lg mb-6 bg-dark-secondary/40 border border-neon-purple/10"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-neon-purple mb-2">{edu.degree}</h4>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-300">{edu.details}</p>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-neon-blue">
            <FaCode /> Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              variants={itemVariants}
              className="glow-box p-6 rounded-lg bg-dark-secondary/40 border border-neon-blue/10"
            >
              <h4 className="text-lg font-bold text-neon-blue mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-neon-blue/10 text-neon-blue border border-neon-blue/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              variants={itemVariants}
              className="glow-box p-6 rounded-lg bg-dark-secondary/40 border border-neon-purple/10"
            >
              <h4 className="text-lg font-bold text-neon-purple mb-4">Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((fw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-neon-purple/10 text-neon-purple border border-neon-purple/30"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* AI Tools */}
            <motion.div
              variants={itemVariants}
              className="glow-box p-6 rounded-lg bg-dark-secondary/40 border border-pink/10"
            >
              <h4 className="text-lg font-bold text-pink-400 mb-4">AI Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {skills.aiTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-pink-400/10 text-pink-400 border border-pink-400/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Cloud */}
            <motion.div
              variants={itemVariants}
              className="glow-box p-6 rounded-lg bg-dark-secondary/40 border border-green-400/10"
            >
              <h4 className="text-lg font-bold text-green-400 mb-4">Cloud & Deployment</h4>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((cloud, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm bg-green-400/10 text-green-400 border border-green-400/30"
                  >
                    {cloud}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-3xl font-bold mb-8 text-neon-purple">Certifications & Platforms</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 rounded-lg bg-dark-secondary/40 border border-neon-purple/20 flex items-center gap-3 hover:border-neon-purple/50 transition-colors"
              >
                <span className="text-neon-purple text-xl">✓</span>
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:hidden mt-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg transition-shadow"
          >
            <FaDownload /> Download PDF
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
