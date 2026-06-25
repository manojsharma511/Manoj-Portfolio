"use client"

import { motion } from "framer-motion"
import { ArrowRight, Database, Server, BarChart3, Lock } from "lucide-react"

const architectureLayers = [
  {
    layer: "Presentation",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-400",
    technologies: ["React", "Next.js", "Flutter", "Vaadin"],
    description: "User interfaces across web and mobile platforms",
  },
  {
    layer: "API Layer",
    icon: Server,
    color: "from-cyan-400 to-blue-500",
    technologies: ["REST", "Spring Boot", "Express.js", "WebSockets"],
    description: "RESTful APIs and real-time communication",
  },
  {
    layer: "Business Logic",
    icon: Lock,
    color: "from-purple-500 to-cyan-400",
    technologies: ["Java", "Spring", "RBAC", "Workflows"],
    description: "Enterprise logic with role-based access control",
  },
  {
    layer: "Data Layer",
    icon: Database,
    color: "from-blue-600 to-purple-600",
    technologies: ["PostgreSQL", "Prisma", "Query Optimization"],
    description: "Scalable database and data management",
  },
]

export function Architecture() {
  return (
    <section id="architecture" className="relative w-full bg-slate-950 py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="heading-secondary text-white">Engineering Architecture</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
          <p className="text-slate-400 text-lg">Production-grade system design and architecture patterns</p>
        </motion.div>

        {/* Main Architecture Diagram */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {architectureLayers.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.layer}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  {/* Left Connector */}
                  <div className="hidden md:block flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center">
                    <Icon size={20} className="text-slate-400" />
                  </div>

                  {/* Main Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 8 }}
                    className="flex-1 card-premium"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{item.layer}</h3>
                        <p className="text-slate-300 text-sm mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded text-xs font-medium bg-slate-800/50 text-slate-200 border border-slate-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Indicator */}
                      {index !== architectureLayers.length - 1 && (
                        <div className="hidden lg:flex flex-col items-center gap-2 text-slate-500">
                          <ArrowRight size={16} />
                          <div className="text-xs">connects</div>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Right Arrow (mobile) */}
                  {index !== architectureLayers.length - 1 && (
                    <div className="md:hidden flex-shrink-0">
                      <ArrowRight size={20} className="text-slate-600 rotate-90" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Key Patterns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* System Features */}
          <div className="card-premium space-y-4">
            <h3 className="text-lg font-bold text-white">System Features</h3>
            <div className="space-y-2">
              {[
                "Offline-first synchronization",
                "RBAC with granular permissions",
                "Layered architecture for scalability",
                "Real-time data consistency",
                "Schema-as-code versioning",
                "Multi-tenant support",
              ].map((feature, i) => (
                <motion.div key={i} whileHover={{ x: 4 }} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Best Practices */}
          <div className="card-premium space-y-4">
            <h3 className="text-lg font-bold text-white">Engineering Practices</h3>
            <div className="space-y-2">
              {[
                "Clean code principles and SOLID",
                "Comprehensive testing strategies",
                "Database optimization and indexing",
                "API versioning and documentation",
                "CI/CD pipeline automation",
                "Production monitoring and logging",
              ].map((practice, i) => (
                <motion.div key={i} whileHover={{ x: 4 }} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">→</span>
                  <span className="text-slate-300">{practice}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
