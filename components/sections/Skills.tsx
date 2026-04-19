'use client'

import { motion } from 'framer-motion'
import {
  FaReact,
  FaNode,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaCloud,
  FaHtml5,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiCplusplus,
  SiJavascript,
} from 'react-icons/si'

export default function Skills() {
  const skills = [
    { name: 'Python', icon: FaPython, color: '#3776ab' },
    { name: 'HTML/CSS', icon: FaHtml5, color: '#e34f26' },
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    { name: 'C++', icon: SiCplusplus, color: '#00599c' },
    { name: 'Chatbot Development', icon: FaCloud, color: '#0ea5e9' },
    { name: 'Generative AI APIs', icon: SiGraphql, color: '#e10098' },
    { name: 'Cloud Deployment', icon: FaCloud, color: '#22c55e' },
    { name: 'Machine Learning', icon: FaDatabase, color: '#14b8a6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 neon-text-purple"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glow-box p-6 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer group"
              >
                <Icon
                  size={40}
                  className="mb-4 text-neon-blue group-hover:text-neon-pink transition-colors"
                  style={{ color: skill.color }}
                />
                <p className="font-semibold text-gray-300 group-hover:text-neon-blue transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-neon-text">Proficiency</h3>
          {[
            { skill: 'Python', level: 90 },
            { skill: 'HTML/CSS', level: 80 },
            { skill: 'C++', level: 75 },
            { skill: 'JavaScript', level: 65 },
            { skill: 'Chatbot Development', level: 90 },
            { skill: 'Generative AI APIs', level: 85 },
            { skill: 'Cloud Deployment', level: 70 },
            { skill: 'Machine Learning', level: 60 },
          ].map((item, index) => (
            <motion.div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">{item.skill}</span>
                <span className="text-neon-blue">{item.level}%</span>
              </div>
              <div className="w-full bg-dark-secondary rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
