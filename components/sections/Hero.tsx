'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl"></div>
        </div>

        {/* Main Text */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="neon-text">Hi, I'm Abdullah Javid</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          AI Developer | Builder | Deployer | Open to internships & collaborations
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          I ship production-ready AI chatbots, arcade games, and web tools across 20+ global platforms while still in my first year at UMT.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-neon-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Abdullah_Javid_CV.pdf"
            className="px-8 py-3 border-2 border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue/10 transition-all"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://github.com/mabdullahab614-alt"
            target="_blank"
            rel="noreferrer"
            className="text-neon-blue hover:text-neon-pink transition-colors"
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="https://linkedin.com/in/abdullah-javid-b217a2384"
            target="_blank"
            rel="noreferrer"
            className="text-neon-blue hover:text-neon-purple transition-colors"
          >
            <FaLinkedin size={32} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            href="mailto:mabdullah.ab614@gmail.com"
            className="text-neon-blue hover:text-neon-pink transition-colors"
          >
            <FaEnvelope size={32} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <p className="text-gray-400">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
