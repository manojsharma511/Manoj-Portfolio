export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  description: string
  highlights: string[]
  technologies: string[]
  projects?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  overview: string
  highlights: string[]
  technologies: string[]
  github?: string
  caseStudy?: string
  image?: string
}

export interface Skill {
  category: string
  skills: {
    name: string
    icon?: string
  }[]
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}
