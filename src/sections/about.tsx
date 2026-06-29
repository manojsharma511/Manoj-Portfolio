"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Code2, Cpu, Database, LayoutGrid, CheckCircle } from "lucide-react"
import { STATS } from "@/data/portfolio"

const specializedSkills = [
  "Java (21/17)",
  "Spring Boot",
  "PostgreSQL",
  "SAP ERP",
  "Vaadin Flow",
  "Docker",
  "Enterprise Architecture"
]

function AnimatedCounter({ value, duration = 1.5, decimals = 0 }: { value: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const totalMiliseconds = duration * 1000
    const stepTime = 30 // Update every 30ms
    const totalSteps = totalMiliseconds / stepTime
    const increment = (end - start) / totalSteps

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      } else {
        setCount(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value, duration, isInView])

  return <span ref={ref}>{count.toFixed(decimals)}</span>
}

export function About({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 sm:py-32">
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
              About <span className="text-gradient-accent">Me | Manoj Kumar Sharma</span>
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              About <span className="text-gradient-accent">Me</span>
            </h2>
          )}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio text & Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Profile Image with WebP support and Alt text */}
              <div className="w-28 h-28 relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 flex-shrink-0 shadow-lg shadow-blue-500/5 group">
                <Image
                  src="/images/profile.png"
                  alt="Manoj Kumar Sharma - Software Engineer profile photo"
                  fill
                  sizes="112px"
                  priority={isPage}
                  loading={isPage ? undefined : "lazy"}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 flex-1">
                <p>
                  I am a <span className="font-semibold text-white">Software Engineer</span> with hands-on experience building enterprise-grade ERP systems, retail operating platforms, HRMS solutions, and scalable web applications.
                </p>
                <p>
                  My expertise lies in backend design with <span className="font-semibold text-white">Java & Spring Boot</span>, creating secure, high-throughput architectures, database profiling, and seamless integrations with systems like <span className="font-semibold text-white">SAP ERP</span>. I craft software that ensures high availability, strict security roles (RBAC), and smooth deployments.
                </p>
              </div>
            </div>

            {/* Specialization List */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Specialized In</h3>
              <div className="flex flex-wrap gap-2.5">
                {specializedSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-200"
                  >
                    <CheckCircle size={14} className="text-cyan-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Counters & Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-white/5 hover:border-blue-500/25 transition-all text-center h-40"
              >
                <div className="flex justify-center mb-2">
                  {i === 0 && <Cpu size={20} className="text-blue-400" />}
                  {i === 1 && <Code2 size={20} className="text-cyan-400" />}
                  {i === 2 && <Database size={20} className="text-indigo-400" />}
                  {i === 3 && <LayoutGrid size={20} className="text-teal-400" />}
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    <AnimatedCounter value={stat.value} decimals={stat.decimals} />
                    <span className="text-blue-400 text-2xl font-bold ml-0.5">{stat.prefix}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium mt-2 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
