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
                className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-blue-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Manoj Kumar Sharma GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-cyan-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Manoj Kumar Sharma LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/916350542691"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-emerald-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Manoj Kumar Sharma WhatsApp Chat"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.503 0 9.973-4.47 9.976-9.974.001-2.667-1.036-5.176-2.917-7.059C16.55 1.705 14.043.665 11.385.665c-5.509 0-9.978 4.47-9.982 9.974-.002 1.706.447 3.37 1.299 4.843L1.656 21.82l6.417-1.683c1.428.777 2.946 1.187 4.549 1.188zM17.07 14.887c-.274-.137-1.62-.8-1.87-.89-.25-.09-.433-.137-.615.137-.183.275-.708.89-.868 1.072-.16.183-.32.206-.594.069-.275-.138-1.16-.427-2.21-1.365-.817-.73-1.37-1.63-1.53-1.905-.16-.275-.017-.424.12-.561.124-.123.275-.32.413-.48.137-.16.183-.275.275-.458.09-.183.046-.343-.023-.48-.069-.138-.615-1.482-.843-2.03-.222-.536-.484-.463-.665-.463-.172 0-.368-.02-.562-.02-.195 0-.51.074-.777.366-.267.293-1.02 1.001-1.02 2.44 0 1.439 1.047 2.83 1.192 3.024.146.195 2.062 3.149 4.994 4.415.698.301 1.243.482 1.668.617.7.223 1.337.192 1.84.117.561-.084 1.62-.663 1.85-1.302.23-.64.23-1.188.16-1.302-.07-.11-.25-.205-.524-.342z"/>
                </svg>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-blue-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Manoj Kumar Sharma Email Contact"
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

        {/* Technical Keyword-Rich SEO Section */}
        <div className="mt-8 border-t border-white/5 pt-8 text-[11px] text-slate-500 leading-relaxed text-left">
          <p>
            Manoj Kumar Sharma is an enterprise <strong>Java Developer</strong>, <strong>Spring Boot Developer</strong>, <strong>SAP ERP Developer</strong>, and <strong>Liferay Developer</strong>. Serving as a professional <strong>Software Engineer</strong>, <strong>Backend Developer</strong>, and <strong>Full Stack Developer</strong> at Enola Tech, Manoj is dedicated to creating the best software engineer portfolio and resume. Specializing in retail operating systems, inventory management modules, POS systems, PostgreSQL database query tuning, and Vaadin Flow apps, this developer website is optimized for terms like best resume developer and good portfolio developer.
          </p>
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
