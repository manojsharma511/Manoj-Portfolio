"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"
import { motion } from "framer-motion"

const roles = [
  "Enterprise Full Stack Engineer",
  "Backend Architect",
  "System Designer",
  "Production Engineer",
]

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let index = 0
    let timer: NodeJS.Timeout

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1))
        }, 50)
      } else {
        timer = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1))
        }, 30)
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, isTyping, currentRoleIndex])

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950 pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.05) 75%, rgba(59, 130, 246, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.05) 75%, rgba(59, 130, 246, 0.05) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Gradient Blurs */}
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-300">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="heading-primary text-white">Manoj Kumar Sharma</h1>
              <div className="h-12">
                <p className="text-xl sm:text-2xl font-semibold text-blue-400">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Enterprise Full Stack Software Engineer specializing in scalable retail systems, HRMS platforms, and
              production-grade backend architecture. Currently building{" "}
              <span className="font-semibold text-blue-300">EnolaTech Retail OS</span> with Java 21, Spring Boot, and
              PostgreSQL.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`${CONTACT_INFO.github}/resume`}
                className="btn-primary inline-flex gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Resume
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex gap-2"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="btn-secondary inline-flex gap-2"
              >
                <Mail size={18} />
                Email
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
              <span className="text-sm text-slate-400">Connect:</span>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-blue-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-blue-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-2 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-blue-400 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Dashboard Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="card-premium space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Engineering Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400" />
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    <div className="w-3 h-3 rounded-full bg-slate-600" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-lg bg-slate-800/50 border border-slate-700/50 p-4 space-y-2"
                  >
                    <p className="text-sm text-slate-400">Years Experience</p>
                    <p className="text-2xl font-bold text-blue-400">1.5+</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-lg bg-slate-800/50 border border-slate-700/50 p-4 space-y-2"
                  >
                    <p className="text-sm text-slate-400">Projects Built</p>
                    <p className="text-2xl font-bold text-cyan-400">6+</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-lg bg-slate-800/50 border border-slate-700/50 p-4 space-y-2"
                  >
                    <p className="text-sm text-slate-400">Tech Stack</p>
                    <p className="text-2xl font-bold text-blue-400">15+</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-lg bg-slate-800/50 border border-slate-700/50 p-4 space-y-2"
                  >
                    <p className="text-sm text-slate-400">Deployments</p>
                    <p className="text-2xl font-bold text-cyan-400">12+</p>
                  </motion.div>
                </div>

                {/* Architecture Info */}
                <div className="border-t border-slate-700/50 pt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Backend Services</span>
                    <span className="badge">Spring Boot</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Frontend Stack</span>
                    <span className="badge">React / Next.js</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Database</span>
                    <span className="badge">PostgreSQL</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
