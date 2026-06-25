"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"
import { useScrollActive } from "@/hooks/useScrollActive"
import { NAV_LINKS, CONTACT_INFO } from "@/data/portfolio"
import { cn } from "@/utils/utils"

export function Navbar() {
  const { activeSection, isScrolling } = useScrollActive()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolling
            ? "glass-panel border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all">
                <span className="text-sm font-bold text-white tracking-wide">MS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-none tracking-tight group-hover:text-blue-400 transition-colors">
                  Manoj Kumar Sharma
                </span>
                <span className="text-[10px] text-slate-400 leading-none mt-1 font-medium tracking-wide uppercase">
                  Software Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                    activeSection === link.href.replace("#", "")
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Resume Preview Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={CONTACT_INFO.resumePreview}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border border-white/10 text-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <FileText size={16} />
                Preview CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 pt-20 lg:hidden">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />

          <div className="relative h-screen bg-slate-950/95 border-t border-white/5">
            <div className="px-6 py-8 space-y-6">
              {/* Mobile Navigation */}
              <div className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-medium text-base transition-all duration-200",
                      activeSection === link.href.replace("#", "")
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="border-t border-white/5 pt-6 space-y-3">
                <a
                  href={CONTACT_INFO.resumePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-white/10 text-center text-slate-200 font-medium hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  <FileText size={18} />
                  Preview CV
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
