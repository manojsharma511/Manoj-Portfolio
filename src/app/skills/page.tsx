import { Skills } from "@/sections/skills"
import Link from "next/link"
import { ArrowRight, Code } from "lucide-react"

export const metadata = {
  title: "Technical Skills & Stack | Manoj Kumar Sharma | Spring Boot Developer",
  description: "Deep dive into the developer stack of Manoj Kumar Sharma, featuring Java 21, Spring Boot, SAP ERP integrations, Liferay DXP, Vaadin Flow, and PostgreSQL database tuning.",
  alternates: {
    canonical: "https://manojkumarsharma.vercel.app/skills",
  },
}

export default function SkillsPage() {
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
        "name": "Skills",
        "item": "https://manojkumarsharma.vercel.app/skills"
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
        <Skills isPage />
      </div>
      
      {/* Internal Linking Banner (Skills -> Projects) */}
      <div className="bg-slate-900/50 border-t border-white/5 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Work Showcase</p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">See these technologies deployed in production-ready projects</h3>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/25"
          >
            <Code size={16} />
            View My Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
