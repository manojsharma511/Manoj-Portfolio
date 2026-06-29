"use client"

import { motion } from "framer-motion"
import { EXPERIENCES } from "@/data/portfolio"
import { Briefcase, Calendar, Check } from "lucide-react"

export function Experience({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="experience" className="relative w-full bg-slate-950 py-24 sm:py-32 border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          {isPage ? (
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Professional <span className="text-gradient-primary">Experience | Manoj Kumar Sharma</span>
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Professional <span className="text-gradient-primary">Experience</span>
            </h2>
          )}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </motion.div>


        {/* Timeline List */}
        <div className="relative border-l-2 border-white/5 ml-4 sm:ml-6 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-xl bg-slate-900 border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
                <Briefcase size={12} className="text-blue-400" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-blue-500/25 transition-all">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <p className="text-sm font-semibold text-blue-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 font-medium w-fit">
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-cyan-400" />
                      </div>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900/80 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
