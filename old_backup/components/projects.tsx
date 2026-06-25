"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PROJECTS } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { Github, BookOpen, ExternalLink } from "lucide-react"

export function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="heading-secondary text-white">Featured Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
          <p className="text-slate-400 text-lg">Enterprise systems and production-grade applications</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="card-premium flex flex-col h-full"
            >
              {/* Project Title */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{project.description}</p>

                {/* Overview */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.overview}</p>

                {/* Highlights */}
                <div className="space-y-1 mb-4">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <p key={i} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-slate-800/50 text-slate-200 border-slate-700/50 text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="secondary" className="bg-slate-800/50 text-slate-200 border-slate-700/50 text-xs">
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-800/50">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-600/50 hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 transition-all duration-300 text-sm"
                    title="View GitHub repository"
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                )}
                {!project.github && (
                  <div className="flex-1 flex items-center justify-center px-3 py-2 rounded-lg border border-slate-600/50 bg-slate-800/30 text-slate-400 text-sm">
                    <span>Private Repo</span>
                  </div>
                )}
                {project.caseStudy && (
                  <a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-600/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 transition-all duration-300 text-sm"
                    title="Read case study"
                  >
                    <BookOpen size={16} />
                    <span className="hidden sm:inline">Study</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-4">More projects coming soon...</p>
          <a
            href="https://github.com/manojkumarsharma511"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 transition-all duration-300"
          >
            <Github size={18} />
            Explore on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
