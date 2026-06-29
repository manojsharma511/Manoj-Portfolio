"use client"

import { motion } from "framer-motion"
import { SKILLS } from "@/data/portfolio"
import { ShieldCheck } from "lucide-react"

export function Skills({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-24 sm:py-32 border-t border-white/5">
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
              Skills & <span className="text-gradient-accent">Technologies | Manoj Kumar Sharma</span>
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skills & <span className="text-gradient-accent">Technologies</span>
            </h2>
          )}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A comprehensive overview of enterprise backend tools, frontend architectures, and cloud DevOps systems.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-blue-500/25 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {category.category}
                </h3>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-blue-600/10 border border-white/5 hover:border-blue-500/30 text-xs sm:text-sm text-slate-300 hover:text-white transition-all cursor-default font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-Level Expertise Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel p-8 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="text-blue-400" size={24} />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Security & Integrity Driven</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Committed to implementing Role-Based Access Control (RBAC), layered service layouts, immutable snapshots, and secure relational databases for transaction safety.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
