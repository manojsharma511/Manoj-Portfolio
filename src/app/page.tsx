import { Navbar } from "@/components/navbar"
import { Hero } from "@/sections/hero"
import { About } from "@/sections/about"
import { Experience } from "@/sections/experience"
import { Skills } from "@/sections/skills"
import { Projects } from "@/sections/projects"
import { Achievements } from "@/sections/achievements"
import { Education } from "@/sections/education"
import { ResumeSection } from "@/sections/resume"
import { Contact } from "@/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  )
}
