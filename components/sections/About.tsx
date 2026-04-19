'use client'

import { motion } from 'framer-motion'

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 neon-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-4 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              Abdullah Javid is a first-year BS Artificial Intelligence student at the University of Management and Technology (UMT) in Lahore, enrolled since 2025, and actively open to internships and collaborations.
            </p>

            <p className="text-lg leading-relaxed">
              Professionally, I identify as an AI Developer, Builder, and Deployer shipping real, production-ready AI chatbots, arcade games, and web tools across 20+ global platforms while still in my first year.
            </p>

            <p className="text-lg leading-relaxed">
              Prior to UMT, I completed FSc Pre-Engineering from Punjab Group of Colleges (2023–2025), studying Mathematics, Physics, and Computer Science.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '20+', label: 'Platforms & Ecosystems' },
              { number: '15+', label: 'Active Projects' },
              { number: '20+', label: 'GitHub Repos' },
              { number: '1st', label: 'Year AI Student' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glow-box p-6 rounded-lg text-center"
              >
                <h3 className="text-3xl font-bold neon-text mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
