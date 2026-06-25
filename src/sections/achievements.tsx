"use client"

import { motion } from "framer-motion"
import { ACHIEVEMENTS } from "@/data/portfolio"
import { Trophy, CheckCircle2 } from "lucide-react"

export function Achievements() {
  return (
    <section id="achievements" className="relative w-full bg-slate-950 py-24 sm:py-32 border-t border-white/5">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering & Academic <span className="text-gradient-primary">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="glass-panel p-10 rounded-3xl border border-white/5 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mx-auto text-blue-400 shadow-lg shadow-blue-500/15">
                <Trophy size={36} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">Key Milestones</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Consistently delivering high reliability and optimized structures across academic and enterprise projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Achievements List */}
          <div className="lg:col-span-7 space-y-4">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-blue-500/20 flex items-start gap-4 transition-all cursor-default"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base font-semibold text-slate-200 leading-snug hover:text-white transition-colors">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
