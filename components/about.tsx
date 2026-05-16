"use client"

import { motion } from "framer-motion"
import { Code2, Database, Package, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Enterprise Backend",
    description:
      "Building scalable backend systems with Java 21, Spring Boot, and microservices architecture for retail and HRMS platforms.",
  },
  {
    icon: Package,
    title: "Full Stack Systems",
    description:
      "Complete end-to-end development from REST APIs to React frontends, ensuring seamless integration and performance.",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description:
      "Designing robust PostgreSQL schemas, implementing RBAC, offline-first sync, and complex business logic at scale.",
  },
  {
    icon: Zap,
    title: "Production Engineering",
    description:
      "Deploying to production, performance tuning, CI/CD pipelines, monitoring, and maintaining system reliability.",
  },
]

export function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <h2 className="heading-secondary text-white">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a full-stack engineer passionate about building enterprise-grade systems that scale. With experience
              in Java, Spring Boot, React, and PostgreSQL, I specialize in creating production-ready software for retail,
              HRMS, and complex business applications.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My approach combines solid system design principles with practical engineering. I focus on creating
              maintainable, performant solutions that solve real business problems - from offline-first POS systems to
              RBAC-driven enterprise platforms.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Currently at Enola Tech, I'm architecting the EnolaTech Retail OS - an offline-first, scalable retail
              operating system handling inventory, procurement, and business analytics for enterprise retail chains.
            </p>

            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800/50">
              <div>
                <p className="text-3xl font-bold text-blue-400">6+</p>
                <p className="text-slate-400">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">15+</p>
                <p className="text-slate-400">Technologies</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="card-premium space-y-3 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
