'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Nexus AI Assistant',
      description: 'An intelligent AI assistant built with Hugging Face Spaces, capable of handling various queries and providing helpful responses using advanced natural language processing.',
      tags: ['AI', 'Hugging Face', 'Gradio', 'NLP'],
      github: '#',
      live: 'https://huggingface.co/spaces/BUDDDY2894830/nexus-ai-assistant',
    },
    {
      title: 'Skin Disease Detector',
      description: 'A machine learning model for detecting skin diseases from uploaded images, using computer vision and deep learning techniques for medical assistance.',
      tags: ['AI', 'Computer Vision', 'Medical', 'Hugging Face'],
      github: '#',
      live: 'https://huggingface.co/spaces/BUDDDY2894830/skin-disease-detector',
    },
    {
      title: 'Animal Detector',
      description: 'An image classification tool that identifies different animal species from photos, powered by advanced AI models and deployed on Hugging Face Spaces.',
      tags: ['AI', 'Image Classification', 'Animals', 'Hugging Face'],
      github: '#',
      live: 'https://huggingface.co/spaces/BUDDDY2894830/animal-detector',
    },
    {
      title: 'Brain Tumor Detector',
      description: 'A medical AI application for detecting brain tumors in MRI scans, assisting in early diagnosis and medical analysis using deep learning.',
      tags: ['AI', 'Medical Imaging', 'Brain Tumor', 'Hugging Face'],
      github: '#',
      live: 'https://huggingface.co/spaces/Abdullah2894830/brain-tumor-detector',
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
