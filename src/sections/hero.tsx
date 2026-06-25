"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Download, FileText, ArrowRight, Github, Linkedin, Mail, MessageSquare, Terminal } from "lucide-react"
import { CONTACT_INFO } from "@/data/portfolio"

const roles = [
  "Enterprise ERP Architect",
  "Java Backend Engineer",
  "Retail Platforms Designer",
  "Scalable Systems Developer"
]

const floatingIcons = [
  { name: "Java", color: "text-red-500", bg: "bg-red-500/10", top: "15%", left: "10%" },
  { name: "Spring", color: "text-green-500", bg: "bg-green-500/10", top: "25%", right: "15%" },
  { name: "Docker", color: "text-blue-400", bg: "bg-blue-400/10", bottom: "30%", left: "15%" },
  { name: "Postgres", color: "text-sky-500", bg: "bg-sky-500/10", bottom: "20%", right: "10%" },
  { name: "SAP ERP", color: "text-amber-500", bg: "bg-amber-500/10", top: "50%", right: "25%" },
  { name: "Vaadin", color: "text-orange-500", bg: "bg-orange-500/10", bottom: "45%", left: "30%" }
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timer: NodeJS.Timeout

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1))
        }, 60)
      } else {
        timer = setTimeout(() => setIsTyping(false), 2500)
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1))
        }, 40)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, isTyping, roleIndex])

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]"
          style={{ backgroundSize: "4rem 4rem" }}
        />
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-600/15 rounded-full blur-[100px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-cyan-600/15 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      </div>

      {/* Floating Tech Badges */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block">
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={icon.name}
            className={`absolute px-3 py-1.5 rounded-xl border border-white/5 glass-panel ${icon.bg} flex items-center gap-1.5 text-xs font-semibold`}
            style={{ top: icon.top, left: icon.left, right: icon.right, bottom: icon.bottom }}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 4, 0]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <span className={`w-2 h-2 rounded-full ${icon.color.replace("text", "bg")}`} />
            <span className="text-slate-300">{icon.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="section-container relative z-20 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/5 px-4.5 py-1.5 w-fit"
            >
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping" />
              <span className="text-xs font-semibold tracking-wider text-blue-300 uppercase">Enterprise Systems Specialist</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
              >
                Hi, I’m <span className="text-gradient-primary">Manoj Kumar Sharma</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-10 text-xl sm:text-2xl font-bold text-gradient-accent"
              >
                {displayedText}
                <span className="text-cyan-400 animate-pulse ml-0.5">_</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-xl"
              >
                Software Engineer building Enterprise ERP Systems, Retail Platforms, and Scalable Backend Architectures.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed"
              >
                Currently working at <span className="font-semibold text-white">Enola Tech</span> on enterprise-grade Retail OS and SAP ERP systems using Java 21, Spring Boot, PostgreSQL, Vaadin Flow, Docker, and Apache Ant.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* Download Resume Button */}
              <a
                href={CONTACT_INFO.resumeDownload}
                download
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm inline-flex items-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download size={16} />
                Download Resume
              </a>

              {/* View Resume Button */}
              <a
                href={CONTACT_INFO.resumePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 text-slate-200 hover:text-white font-semibold text-sm inline-flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <FileText size={16} />
                View Resume
              </a>

              {/* View Projects Button */}
              <Link
                href="#projects"
                className="px-6 py-3 rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 text-slate-300 hover:text-white font-semibold text-sm inline-flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                Projects
              </Link>

              {/* Contact Me Button */}
              <Link
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/5 text-slate-300 hover:text-white font-semibold text-sm inline-flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                Contact
              </Link>

              {/* LinkedIn Button */}
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Production Console Visualizer */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-cyan-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">ERP-SERVER-CONSOLE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
              </div>

              {/* Console Body */}
              <div className="p-6 font-mono text-[11px] text-slate-300 space-y-4 bg-slate-950/40">
                <div className="space-y-1">
                  <p className="text-slate-500"># System diagnostic checklist</p>
                  <p className="text-green-400">$ systemctl status enolatech-retail-os</p>
                  <p className="text-slate-400">● retail-os-service.service - EnolaTech Retail Core</p>
                  <p className="text-slate-400">   Loaded: loaded (/etc/systemd/system/retail-os-service.service; enabled)</p>
                  <p className="text-slate-400">   Active: <span className="text-green-400 font-bold">active (running)</span> since Thu 2026-06-25</p>
                </div>

                <div className="space-y-1">
                  <p className="text-slate-500"># SAP ERP synchronization node logs</p>
                  <p className="text-slate-300">[15:59:02] <span className="text-blue-400">INFO</span> Connected to SAP Endpoint RFC_DEST_SYS</p>
                  <p className="text-slate-300">[15:59:03] <span className="text-green-400">SUCCESS</span> Migrated 14 financial snapshots safely (atomic transaction)</p>
                  <p className="text-slate-300">[15:59:04] <span className="text-purple-400">SECURE</span> RBAC token audit completed. 0 warnings.</p>
                </div>

                <div className="space-y-1">
                  <p className="text-slate-500"># PostgreSQL connection state</p>
                  <p className="text-cyan-400">postgres=# SELECT count(*) FROM sessions_active;</p>
                  <p className="text-slate-400"> count: 1,489 sessions optimized using clustered indexing</p>
                </div>

                <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-semibold font-mono uppercase tracking-wider">
                  <span>JVM: Java 21</span>
                  <span>Port: 8080 (secured)</span>
                  <span>SSL: ACTIVE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
