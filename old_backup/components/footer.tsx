"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-slate-950 border-t border-slate-800/50">
      <div className="section-container py-12">
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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">MS</span>
              </div>
              <span className="text-xl font-bold text-white">Manoj</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enterprise Full Stack Engineer building scalable systems with Java, Spring Boot, React, and PostgreSQL.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-white">Navigation</h4>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-white">Built With</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                "Next.js 15",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Shadcn/ui",
                "PostgreSQL",
              ].map((tech) => (
                <div key={tech} className="text-slate-400 hover:text-cyan-400 transition-colors">
                  • {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400"
        >
          {/* Left - Copyright */}
          <div className="flex items-center gap-1">
            <span>© {currentYear} Manoj Kumar Sharma. Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and NextJS.</span>
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-6">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Source
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
            <a
              href="/robots.txt"
              className="hover:text-blue-400 transition-colors"
            >
              Robots
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
