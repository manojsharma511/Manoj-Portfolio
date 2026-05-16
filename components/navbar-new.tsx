"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useScrollActive } from "@/hooks/useScrollActive"
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants"
import { cn } from "@/lib/utils"

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
      {/* Desktop Navbar */}
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolling ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50" : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">MS</span>
              </div>
              <span className="text-lg font-bold text-white hidden sm:inline group-hover:text-blue-400 transition-colors">
                Manoj
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    activeSection === link.href.replace("#", "")
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-600 text-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                Contact
              </Link>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
              >
                GitHub
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 pt-16 md:hidden">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />

          <div className="relative h-screen overflow-y-auto bg-slate-950/95 border-t border-slate-800/50">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation */}
              <div className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg font-medium transition-all duration-300",
                      activeSection === link.href.replace("#", "")
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="border-t border-slate-800/50 pt-4 space-y-3">
                <Link
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="block px-4 py-3 rounded-lg border border-slate-600 text-center text-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                >
                  Contact Me
                </Link>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-lg bg-blue-600 text-center text-white hover:bg-blue-700 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
