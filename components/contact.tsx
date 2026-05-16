"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Briefcase, ExternalLink } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

export function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center"
        >
          <h2 className="heading-secondary text-white">Let's Connect</h2>
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Open to opportunities, collaborations, and technical discussions. Reach out anytime!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Email */}
            <motion.a
              href={`mailto:${CONTACT_INFO.email}`}
              whileHover={{ x: 4 }}
              className="card-premium group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <Mail size={24} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-slate-300 break-all">{CONTACT_INFO.email}</p>
                  <p className="text-xs text-slate-500 mt-2">Feel free to reach out anytime</p>
                </div>
                <ExternalLink size={18} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ x: 4 }}
              className="card-premium"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/20">
                  <MapPin size={24} className="text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-slate-300">{CONTACT_INFO.location}</p>
                  <p className="text-xs text-slate-500 mt-2">India, IST timezone</p>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              whileHover={{ x: 4 }}
              className="card-premium"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-500/20">
                  <Briefcase size={24} className="text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Availability</h3>
                  <p className="text-slate-300">Currently available for opportunities</p>
                  <p className="text-xs text-slate-500 mt-2">Open to full-time and contract roles</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* GitHub */}
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium group flex items-center justify-between p-6 hover:border-blue-500/50"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-blue-500/20 transition-colors">
                  <Github size={24} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub</h3>
                  <p className="text-sm text-slate-400">manojkumarsharma511</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium group flex items-center justify-between p-6 hover:border-cyan-500/50"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-cyan-500/20 transition-colors">
                  <Linkedin size={24} className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <p className="text-sm text-slate-400">manoj-kumar-sharma</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Resume */}
            <a
              href={`${CONTACT_INFO.github}/resume`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium group flex items-center justify-between p-6 hover:border-purple-500/50"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-purple-500/20 transition-colors">
                  <Mail size={24} className="text-slate-300 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Download Resume</h3>
                  <p className="text-sm text-slate-400">Latest CV & credentials</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-300 mb-6">
            Have a project in mind or just want to say hi?
          </p>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 group"
          >
            <Mail size={20} />
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ArrowRight(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )
}
