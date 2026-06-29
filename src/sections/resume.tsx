"use client"

import { motion } from "framer-motion"
import { Download, FileText, FileSpreadsheet } from "lucide-react"
import { CONTACT_INFO } from "@/data/portfolio"

export function ResumeSection({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="resume" className="relative w-full bg-slate-950 py-24 sm:py-32 border-t border-white/5">
      {/* Background visual element */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {isPage ? (
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Curriculum <span className="text-gradient-primary">Vitae | Manoj Kumar Sharma</span>
              </h1>
            ) : (
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Curriculum <span className="text-gradient-primary">Vitae</span>
              </h2>
            )}
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto" />
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Review my technical expertise, project histories, and professional capabilities in detailed document format.
            </p>
          </motion.div>

          {/* Premium Card Display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 hover:border-blue-500/20 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between text-left"
          >
            <div className="space-y-4 md:max-w-xl">
              <div className="flex items-center gap-2 text-cyan-400">
                <FileSpreadsheet size={18} />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Software-Engineer-Resume.pdf</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Manoj Kumar Sharma Resume
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Download my latest Software Engineer resume including enterprise ERP systems, SAP ERP, Java Spring Boot, PostgreSQL, Vaadin Flow, Docker, and scalable backend architecture experience.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto flex-shrink-0">
              {/* Preview Button */}
              <a
                href={CONTACT_INFO.resumePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-56 px-6 py-3 rounded-xl border border-white/10 hover:border-blue-500/50 bg-white/5 hover:bg-blue-500/5 text-slate-200 hover:text-white font-semibold text-sm inline-flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] shadow-lg shadow-black/20 min-h-[48px]"
                aria-label="Preview resume in a new tab"
              >
                <FileText size={16} />
                Preview Resume
              </a>

              {/* Direct Download Button */}
              <a
                href={CONTACT_INFO.resumeDownload}
                download
                className="w-full md:w-56 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm inline-flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 min-h-[48px]"
                aria-label="Download resume file directly"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
