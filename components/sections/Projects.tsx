'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'AI Chatbot Suite',
      description: 'Multi-platform chatbots powered by Claude, GPT-4, and Gemini with custom personas and domain knowledge injection, deployed on Streamlit and Gradio.',
      tags: ['Claude', 'GPT-4', 'Gemini', 'Streamlit', 'Gradio'],
      github: 'https://github.com/mabdullahab614-alt',
      live: '#',
    },
    {
      title: 'Arcade Game Engine',
      description: 'Classic arcade games rebuilt with JavaScript Canvas, featuring AI-generated levels and high-score tracking, deployed on Vercel.',
      tags: ['JavaScript', 'Canvas', 'Vercel', 'AI Levels'],
      github: 'https://github.com/mabdullahab614-alt',
      live: '#',
    },
    {
      title: 'Smart Calculator Tools',
      description: 'Engineering and scientific calculators with AI-assisted step-by-step explanations built using Python, Streamlit, and Gradio.',
      tags: ['Python', 'Streamlit', 'Gradio', 'AI'],
      github: 'https://github.com/mabdullahab614-alt',
      live: '#',
    },
    {
      title: 'Web AI Tools',
      description: 'Utility web apps with embedded AI including text summarizers, image analyzers, and content generators deployed on Vercel, Hugging Face, and Azure.',
      tags: ['Vercel', 'Hugging Face', 'Azure', 'AI Utilities'],
      github: 'https://github.com/mabdullahab614-alt',
      live: '#',
    },
    {
      title: 'Cloud AI Deployments',
      description: 'Production infrastructure across AWS, Azure, and Firebase powering AI-driven applications and global deployments.',
      tags: ['AWS', 'Azure', 'Firebase', 'Deployment'],
      github: 'https://github.com/mabdullahab614-alt',
      live: '#',
    },
    {
      title: 'Gen AI Experiments',
      description: 'Multimodal AI experiments involving image generation, voice synthesis, and retrieval-augmented generation pipelines.',
      tags: ['Multimodal', 'Voice', 'RAG', 'AI'],
      github: 'https://github.com/mabdullahab614-alt',
      live: '#',
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 neon-text-pink"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glow-box bg-dark-secondary/50 rounded-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold text-neon-blue mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.github}
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors"
                >
                  <FaGithub size={20} />
                  Code
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={project.live}
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                  Live
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
