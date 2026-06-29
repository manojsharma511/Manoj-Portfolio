import { Contact } from "@/sections/contact"
import Link from "next/link"
import { ArrowRight, Cpu } from "lucide-react"

export const metadata = {
  title: "Contact Manoj Kumar Sharma | Hire Java & Spring Boot Developer",
  description: "Get in touch with Manoj Kumar Sharma for contract work, full-time opportunities, or inquiries about enterprise software architectures.",
  alternates: {
    canonical: "https://manojkumarsharma.vercel.app/contact",
  },
}

export default function ContactPage() {
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
        "name": "Contact",
        "item": "https://manojkumarsharma.vercel.app/contact"
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
        <Contact isPage />
      </div>
      
      {/* Internal Linking Banner (Contact -> Skills) */}
      <div className="bg-slate-900/50 border-t border-white/5 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Technical Core</p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Want to review my comprehensive technical stack and tools?</h3>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/25"
          >
            <Cpu size={16} />
            View My Skills
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
