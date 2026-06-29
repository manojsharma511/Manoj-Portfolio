import { Projects } from "@/sections/projects"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"

export const metadata = {
  title: "Featured Projects | Manoj Kumar Sharma | Java & SAP ERP Developer Portfolio",
  description: "Explore technical projects built by Manoj Kumar Sharma, including a high-performance Retail ERP Platform, Krowd HRMS, and full-stack Hotel Management systems.",
  alternates: {
    canonical: "https://manojkumarsharma.vercel.app/projects",
  },
}

export default function ProjectsPage() {
  // Projects Schema (JSON-LD)
  const projectsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Retail ERP Platform",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": "Enterprise-grade Retail ERP system supporting procurement, inventory, billing, POS operations, and secure transactional workflows integrated with SAP ERP.",
        "url": "https://manojkumarsharma.vercel.app/",
        "author": {
          "@type": "Person",
          "name": "Manoj Kumar Sharma"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Krowd HRMS Portal",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": "Enterprise HRMS platform with salary slip generation, automated salary calculation, approval workflows, and Liferay client extensions.",
        "url": "https://github.com/manojkumarsharma511",
        "author": {
          "@type": "Person",
          "name": "Manoj Kumar Sharma"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Hotel Management System",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": "Full-stack Hotel Management System with room booking, meal management, multi-hotel support, role-based permissions, and SEO optimization.",
        "url": "https://github.com/manojkumarsharma511",
        "author": {
          "@type": "Person",
          "name": "Manoj Kumar Sharma"
        }
      }
    ]
  }

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
        "name": "Projects",
        "item": "https://manojkumarsharma.vercel.app/projects"
      }
    ]
  }

  return (
    <div className="pt-16 min-h-screen bg-slate-950 flex flex-col justify-between">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div>
        <Projects isPage />
      </div>
      
      {/* Internal Linking Banner (Projects -> Resume) */}
      <div className="bg-slate-900/50 border-t border-white/5 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Next Steps</p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Interested in my career details & professional journey?</h3>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/25"
          >
            <FileText size={16} />
            View Full Resume
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
