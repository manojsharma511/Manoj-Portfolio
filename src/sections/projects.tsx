"use client"

import { motion } from "framer-motion"
import { PROJECTS } from "@/data/portfolio"
import { ExternalLink, Github, Layers, Database, Cpu } from "lucide-react"

export function Projects({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-24 sm:py-32 border-t border-white/5">
      <div className="section-container">
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
              Featured <span className="text-gradient-primary">Projects | Manoj Kumar Sharma</span>
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
          )}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Enterprise platforms, scalable APIs, and robust full-stack solutions.
          </p>
        </motion.div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 flex flex-col justify-between h-[520px] transition-all hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              {/* Card visual header */}
              <div 
                className="h-44 relative bg-slate-900 overflow-hidden flex items-center justify-center"
                role="img"
                aria-label={`Visual presentation banner for ${project.title}`}
              >
                {/* Geometric grid design as premium placeholders */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] opacity-35" style={{ backgroundSize: "16px 16px" }} />
                
                {/* Custom Gradient Overlays based on project */}
                {index === 0 && <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/10" />}
                {index === 1 && <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-indigo-600/10" />}
                {index === 2 && <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/20 to-cyan-600/10" />}

                {/* Animated Icons representing project types */}
                <motion.div
                  className="z-10 w-16 h-16 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-blue-400 shadow-xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  {index === 0 && <Cpu size={28} className="text-blue-400" />}
                  {index === 1 && <Layers size={28} className="text-cyan-400" />}
                  {index === 2 && <Database size={28} className="text-teal-400" />}
                </motion.div>

                {/* Top right tag */}
                <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-lg bg-slate-950/70 text-slate-300 border border-white/5">
                  Production Ready
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] sm:text-xs rounded-lg bg-white/5 text-slate-300 border border-white/5 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2 border-t border-white/5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1.5 transition-all min-h-[40px]"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 text-xs font-semibold rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-all min-h-[40px]"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Github size={13} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
