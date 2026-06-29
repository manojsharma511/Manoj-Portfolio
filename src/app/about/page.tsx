import { About } from "@/sections/about"
import { Achievements } from "@/sections/achievements"
import { Education } from "@/sections/education"

export const metadata = {
  title: "About Manoj Kumar Sharma | Enterprise Software Engineer",
  description: "Learn more about Manoj Kumar Sharma, an Enterprise Software Engineer specializing in Java Spring Boot, SAP ERP integrations, and high-performance backend systems. Check out his academic achievements and technical background.",
  alternates: {
    canonical: "https://manojkumarsharma.vercel.app/about",
  },
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About isPage />
      <Achievements />
      <Education />
    </div>
  )
}
