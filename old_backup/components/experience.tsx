"use client"

import { motion } from "framer-motion"
import { EXPERIENCES } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="relative w-full bg-slate-950 py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="heading-secondary text-white">Experience</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== EXPERIENCES.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-12 h-12 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 relative z-10"
                />
              </div>

              {/* Content */}
              <div className="ml-24 card-premium">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                    <p className="text-blue-400 font-semibold">{experience.company}</p>
                    <p className="text-sm text-slate-400 mt-1">{experience.duration}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-4">{experience.description}</p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {experience.highlights.slice(0, 4).map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-800/50 text-slate-200 border-slate-700/50">
                      {tech}
                    </Badge>
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
