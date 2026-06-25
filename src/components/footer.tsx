"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart, MapPin } from "lucide-react"
import { CONTACT_INFO, NAV_LINKS } from "@/data/portfolio"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-slate-950/80 border-t border-white/5 backdrop-blur-md">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/10">
                <span className="text-sm font-bold text-white">MS</span>
              </div>
              <span className="text-lg font-bold text-white">Manoj Kumar Sharma</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Software Engineer building enterprise ERP systems, retail operating systems, and high-performance backend architectures.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 md:pl-12"
          >
            <h4 className="font-semibold text-white tracking-wider text-sm uppercase">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Tech Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-white tracking-wider text-sm uppercase">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "Next.js 15",
                "TypeScript",
                "Tailwind CSS v4",
                "Framer Motion",
                "PostgreSQL",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-400 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400"
        >
          {/* Left - Copyright */}
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Manoj Kumar Sharma. Developed with</span>
            <Heart size={15} className="text-red-500 fill-red-500 animate-pulse" />
            <span>in Rajasthan, India.</span>
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400 text-xs">
              <MapPin size={12} />
              {CONTACT_INFO.location}
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
