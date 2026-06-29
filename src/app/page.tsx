import dynamic from "next/dynamic"
import { Hero } from "@/sections/hero"
import { About } from "@/sections/about"

// Dynamic imports for code-splitting and improved LCP performance
const Experience = dynamic(() => import("@/sections/experience").then((mod) => mod.Experience), {
  loading: () => <div className="min-h-[400px] bg-slate-950" />,
})
const Skills = dynamic(() => import("@/sections/skills").then((mod) => mod.Skills), {
  loading: () => <div className="min-h-[400px] bg-slate-950" />,
})
const Projects = dynamic(() => import("@/sections/projects").then((mod) => mod.Projects), {
  loading: () => <div className="min-h-[400px] bg-slate-950" />,
})
const Achievements = dynamic(() => import("@/sections/achievements").then((mod) => mod.Achievements), {
  loading: () => <div className="min-h-[200px] bg-slate-950" />,
})
const Education = dynamic(() => import("@/sections/education").then((mod) => mod.Education), {
  loading: () => <div className="min-h-[200px] bg-slate-950" />,
})
const ResumeSection = dynamic(() => import("@/sections/resume").then((mod) => mod.ResumeSection), {
  loading: () => <div className="min-h-[300px] bg-slate-950" />,
})
const Contact = dynamic(() => import("@/sections/contact").then((mod) => mod.Contact), {
  loading: () => <div className="min-h-[400px] bg-slate-950" />,
})

export default function Home() {
  // FAQ Schema (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Manoj Kumar Sharma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manoj Kumar Sharma is an Enterprise Software Engineer specializing in building retail operating systems, inventory controls, POS databases, and high-performance backend systems at Enola Tech."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Manoj work on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manoj works on Java (21/17), Spring Boot, SAP ERP, Liferay DXP, Vaadin Flow, PostgreSQL, Docker, React, and DevOps tooling like Maven, Gradle, and GitHub Actions."
        }
      },
      {
        "@type": "Question",
        "name": "What projects has Manoj built?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manoj has developed high-performance projects including a Retail ERP Platform with SAP ERP synchronizations, the Krowd HRMS Portal for automation of payroll approvals, and a full-stack Hotel Management system."
        }
      }
    ]
  }

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
      }
    ]
  }

  return (
    <main className="bg-slate-950 text-white overflow-x-hidden min-h-screen">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <ResumeSection />
      <Contact />
    </main>
  )
}
