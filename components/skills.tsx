"use client"

import { motion } from "framer-motion"
import { SKILLS } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"

const iconMap: Record<string, string> = {
  code: "⌨️",
  leaf: "🍃",
  server: "🖥️",
  zap: "⚡",
  network: "🌐",
  grid: "📊",
  react: "⚛️",
  database: "🗄️",
  smartphone: "📱",
  lock: "🔐",
  "wifi-off": "📡",
  app: "📦",
  "file-code": "📄",
  box: "📦",
  "git-branch": "🌳",
  package: "📦",
  tool: "🔧",
  "layers": "📚",
  "trending-up": "📈",
  lightbulb: "💡",
  users: "👥",
  eye: "👁️",
  "file-text": "📝",
  "message-circle": "💬",
  move: "🎬",
}

export function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="heading-secondary text-white">Skills & Technologies</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
          <p className="text-slate-400 text-lg">Enterprise technologies and production tools</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-slate-800/50">
                {skillGroup.category}
              </h3>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="card-premium p-3 text-center group"
                  >
                    <div className="text-2xl mb-2">{iconMap[skill.icon || "code"] || "💻"}</div>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 card-premium"
        >
          <h3 className="text-lg font-bold text-white mb-4">Key Expertise Areas</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Enterprise Systems",
              "Backend Architecture",
              "Full Stack Development",
              "Database Design",
              "RBAC Implementation",
              "Offline-First Architecture",
              "Microservices",
              "RESTful APIs",
              "Performance Optimization",
              "System Scalability",
            ].map((expertise) => (
              <motion.div
                key={expertise}
                whileHover={{ scale: 1.05 }}
                className="badge bg-blue-500/20 border-blue-500/30 text-blue-300 hover:bg-blue-500/30 transition-colors cursor-pointer"
              >
                {expertise}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
