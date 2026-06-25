"use client"

import { motion } from "react"
import { motion as motionClient } from "framer-motion"
import { EDUCATION } from "@/data/portfolio"
import { GraduationCap, Landmark, Award } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="relative w-full bg-slate-950 py-24 sm:py-32 border-t border-white/5">
      <div className="section-container">
        {/* Section Header */}
        <motionClient.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Academic <span className="text-gradient-accent">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </motionClient.div>

        {/* Education Details Card */}
        <motionClient.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
            {/* Visual glow */}
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            {/* Cap Icon Block */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-lg shadow-blue-500/5">
              <GraduationCap size={32} />
            </div>

            {/* Institution & Grade details */}
            <div className="space-y-6 flex-1">
              <div>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Bachelor of Technology
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-3">
                  {EDUCATION.degree}
                </h3>
                <p className="text-blue-400 font-semibold flex items-center gap-1.5 mt-1">
                  <Landmark size={15} />
                  {EDUCATION.institution}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 border-t border-white/5">
                {/* Duration */}
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Academic Session</p>
                  <p className="text-sm font-semibold text-slate-300">{EDUCATION.duration}</p>
                </div>
                {/* CGPA */}
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Performance</p>
                  <p className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Award size={16} className="text-cyan-400" />
                    {EDUCATION.grade}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motionClient.div>
      </div>
    </section>
  )
}
