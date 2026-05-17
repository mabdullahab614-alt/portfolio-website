'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      degree: 'BS Artificial Intelligence',
      institution: 'University of Management and Technology (UMT)',
      year: '2025 - Present',
      description: 'First-year AI student building production-ready chatbots, web tools, and cloud deployments.',
    },
    {
      degree: 'FSc Pre-Engineering',
      institution: 'Punjab Group of Colleges',
      year: '2023 - 2025',
      description: 'Studied Mathematics, Physics, and Computer Science with a strong foundation in engineering and computation.',
    },
  ]

  const certifications = [
    { name: 'Claude AI', issuer: 'Global AI Platform' },
    { name: 'ChatGPT', issuer: 'OpenAI Ecosystem' },
    { name: 'Gemini', issuer: 'Google AI' },
    { name: 'Hugging Face', issuer: 'AI Deployment Ecosystem' },
    { name: 'AWS / Azure / Firebase', issuer: 'Cloud Deployment Platforms' },
    { name: 'Vercel / Streamlit / Gradio', issuer: 'Web App Deployment' },
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

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 neon-text"
        >
          Education & Ecosystems
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-neon-blue">
              <FaGraduationCap /> Education
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glow-box p-6 rounded-lg mb-6 bg-dark-secondary/40"
              >
                <h4 className="text-xl font-bold text-neon-blue mb-2">
                  {edu.degree}
                </h4>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-neon-purple text-sm mb-3">{edu.year}</p>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-neon-purple">
              <FaAward /> Platforms
            </h3>

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glow-box p-6 rounded-lg mb-6 bg-dark-secondary/40 border-l-4 border-neon-purple"
              >
                <h4 className="text-lg font-bold text-neon-purple mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
