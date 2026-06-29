import { Experience } from "@/sections/experience"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"

export const metadata = {
  title: "Professional Experience | Manoj Kumar Sharma | Java Developer",
  description: "Browse the professional software developer journey of Manoj Kumar Sharma, featuring roles at Enola Tech (Software Engineer) and Khichad Technologies.",
  alternates: {
    canonical: "https://manojkumarsharma.vercel.app/experience",
  },
}

export default function ExperiencePage() {
  // Breadcrumb Schema (JSON-LD)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://manojkumarsharma.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Experience",
        "item": "https://manojkumarsharma.vercel.app/experience"
      }
    ]
  }

  return (
    <div className="pt-16 min-h-screen bg-slate-950 flex flex-col justify-between">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div>
        <Experience isPage />
      </div>
      
      {/* Internal Linking Banner (Experience -> Resume) */}
      <div className="bg-slate-900/50 border-t border-white/5 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Resume</p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Need a document-friendly version of my experience?</h3>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/25"
          >
            <FileText size={16} />
            Go to Resume & Download
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
