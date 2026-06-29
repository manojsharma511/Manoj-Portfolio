import { ResumeSection } from "@/sections/resume"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

export const metadata = {
  title: "Manoj Kumar Sharma Resume | Best Resume Developer | Java Software Engineer",
  description: "Download and view the professional Software Engineer resume of Manoj Kumar Sharma, highlighting enterprise retail OS, SAP ERP workflows, Java, and Spring Boot skills.",
  alternates: {
    canonical: "https://manojkumarsharma.vercel.app/resume",
  },
}

export default function ResumePage() {
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
        "name": "Resume",
        "item": "https://manojkumarsharma.vercel.app/resume"
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
        <ResumeSection isPage />
      </div>
      
      {/* Internal Linking Banner (Resume -> Contact) */}
      <div className="bg-slate-900/50 border-t border-white/5 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Work With Me</p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Have a business need, project, or role to discuss?</h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/25"
          >
            <Mail size={16} />
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
