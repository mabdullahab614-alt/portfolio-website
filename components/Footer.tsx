'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/mabdullahab614-alt', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/abdullah-javid-b217a2384', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-dark-secondary/50 border-t border-neon-blue/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold neon-text mb-4">Abdullah Javid</h3>
            <p className="text-gray-400">
              AI Developer, Builder, and Deployer shipping production-ready chatbots, games, and AI tools across global platforms.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold neon-text mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-neon-blue transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-neon-blue transition-colors">Projects</a></li>
              <li><a href="#education" className="hover:text-neon-blue transition-colors">Education</a></li>
              <li><a href="/Abdullah_Javid_CV.pdf" className="hover:text-neon-blue transition-colors">Download CV</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold neon-text mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href={social.href}
                    className="text-neon-blue hover:text-neon-pink transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-neon-blue/20 pt-8 text-center text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} Abdullah Javid. All rights reserved. | Designed with ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
