"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { CONTACT_INFO } from "@/data/portfolio"

export function Contact({ isPage = false }: { isPage?: boolean }) {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error")
      return
    }

    setStatus("sending")

    // Format WhatsApp draft message
    const formattedMessage = `Hello Manoj Kumar Sharma,

I am visiting your developer portfolio website. Here are my contact details:

Name: ${formState.name}
Email: ${formState.email}

Message:
${formState.message}
`
    const whatsappUrl = `https://wa.me/916350542691?text=${encodeURIComponent(formattedMessage)}`

    // Simulate sending progress, then open WhatsApp with the draft
    setTimeout(() => {
      setStatus("success")
      
      // Open WhatsApp tab to send message
      window.open(whatsappUrl, "_blank")

      setFormState({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    }, 1200)
  }

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 sm:py-32 border-t border-white/5">
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
              Get In <span className="text-gradient-primary">Touch | Manoj Kumar Sharma</span>
            </h1>
          ) : (
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
          )}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Have an opportunity, a technical question, or want to discuss enterprise systems? Reach out below.
          </p>
        </motion.div>

        {/* Contact layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email card */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-blue-500/25 block transition-all group"
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-all flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email Address</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-200 mt-1 break-all group-hover:text-blue-400 transition-colors">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </div>
            </a>

            {/* Phone card */}
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-500/25 block transition-all group"
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone Number</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-200 mt-1 group-hover:text-cyan-400 transition-colors">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>
            </a>

            {/* WhatsApp card */}
            <a
              href="https://wa.me/916350542691"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-emerald-500/25 block transition-all group"
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-all flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.503 0 9.973-4.47 9.976-9.974.001-2.667-1.036-5.176-2.917-7.059C16.55 1.705 14.043.665 11.385.665c-5.509 0-9.978 4.47-9.982 9.974-.002 1.706.447 3.37 1.299 4.843L1.656 21.82l6.417-1.683c1.428.777 2.946 1.187 4.549 1.188zM17.07 14.887c-.274-.137-1.62-.8-1.87-.89-.25-.09-.433-.137-.615.137-.183.275-.708.89-.868 1.072-.16.183-.32.206-.594.069-.275-.138-1.16-.427-2.21-1.365-.817-.73-1.37-1.63-1.53-1.905-.16-.275-.017-.424.12-.561.124-.123.275-.32.413-.48.137-.16.183-.275.275-.458.09-.183.046-.343-.023-.48-.069-.138-.615-1.482-.843-2.03-.222-.536-.484-.463-.665-.463-.172 0-.368-.02-.562-.02-.195 0-.51.074-.777.366-.267.293-1.02 1.001-1.02 2.44 0 1.439 1.047 2.83 1.192 3.024.146.195 2.062 3.149 4.994 4.415.698.301 1.243.482 1.668.617.7.223 1.337.192 1.84.117.561-.084 1.62-.663 1.85-1.302.23-.64.23-1.188.16-1.302-.07-.11-.25-.205-.524-.342z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">WhatsApp Chat</p>
                  <p className="text-sm sm:text-base font-semibold text-slate-200 mt-1 group-hover:text-emerald-400 transition-colors font-mono">
                    +91 63505 42691
                  </p>
                </div>
              </div>
            </a>

            {/* Location card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Location</p>
                <p className="text-sm sm:text-base font-semibold text-slate-200 mt-1">
                  {CONTACT_INFO.location}
                </p>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex gap-3 pt-2">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-panel py-3 px-4 rounded-xl border border-white/5 hover:border-cyan-500/25 flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-all font-medium"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-panel py-3 px-4 rounded-xl border border-white/5 hover:border-blue-500/25 flex items-center justify-center gap-2 text-sm text-slate-300 hover:text-blue-400 transition-all font-medium"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Manoj Kumar Sharma"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/5 focus:border-blue-500/50 focus:outline-none text-slate-200 text-sm transition-all focus:ring-1 focus:ring-blue-500/20"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="msharma27096@gmail.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/5 focus:border-blue-500/50 focus:outline-none text-slate-200 text-sm transition-all focus:ring-1 focus:ring-blue-500/20"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Brief project details, opportunities, or suggestions..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/5 focus:border-blue-500/50 focus:outline-none text-slate-200 text-sm transition-all focus:ring-1 focus:ring-blue-500/20 resize-y animate-pulse-once"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer min-h-[48px]"
              >
                {status === "sending" ? (
                  <span>Preparing WhatsApp Draft...</span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message via WhatsApp</span>
                  </>
                )}
              </button>

              {/* Feedback messages */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex gap-2.5 items-center text-green-400 text-xs sm:text-sm font-semibold"
                  >
                    <CheckCircle2 size={16} />
                    <span>Success! Redirecting you to WhatsApp to send your message.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-2.5 items-center text-red-400 text-xs sm:text-sm font-semibold"
                  >
                    <AlertCircle size={16} />
                    <span>Please fill in all inputs before submitting.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
