'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'mabdullah.ab614@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/abdullah-javid-b217a2384' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/mabdullahab614-alt' },
  ]

  const qrItems = [
    {
      label: 'Email QR',
      subtitle: 'Send an email',
      src: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=mailto%3Amabdullah.ab614%40gmail.com',
    },
    {
      label: 'LinkedIn QR',
      subtitle: 'Open my profile',
      src: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Flinkedin.com%2Fin%2Fabdullah-javid-b217a2384',
    },
    {
      label: 'GitHub QR',
      subtitle: 'Visit my repo page',
      src: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fgithub.com%2Fmabdullahab614-alt',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 neon-text-pink"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-neon-blue">Contact Info</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 items-start glow-box p-4 rounded-lg"
                  >
                    <Icon className="text-neon-blue text-2xl mt-1" />
                    <div>
                      <h4 className="font-bold text-neon-blue">{info.label}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple">Scan to Connect</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {qrItems.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="glow-box p-4 rounded-lg text-center bg-dark-secondary/50"
                  >
                    <img
                      src={item.src}
                      alt={`${item.label}`}
                      className="mx-auto mb-4 w-40 h-40 rounded-lg border border-neon-blue/20"
                    />
                    <h4 className="font-bold text-neon-blue mb-1">{item.label}</h4>
                    <p className="text-gray-400 text-sm">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-secondary border border-neon-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-secondary border border-neon-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-dark-secondary border border-neon-blue/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
            >
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
