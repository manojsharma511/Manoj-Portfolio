export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  highlights: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Education {
  institution: string
  degree: string
  duration: string
  grade: string
}

export const CONTACT_INFO = {
  name: "Manoj Kumar Sharma",
  email: "msharma27096@gmail.com",
  phone: "+91 6350542691",
  linkedin: "https://www.linkedin.com/in/manoj-kumar-sharma-m511/",
  github: "https://github.com/manojkumarsharma511",
  location: "Sikar, Rajasthan, India",
  portfolio: "https://manojkumarsharma.vercel.app/",
  resumePreview: "https://drive.google.com/file/d/1KxI8EGRw-X83qcOQ4-9MqTlMdqzDbS7p/view",
  resumeDownload: "https://drive.google.com/uc?export=download&id=1KxI8EGRw-X83qcOQ4-9MqTlMdqzDbS7p",
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
]

export const STATS = [
  { label: "Companies Worked", value: 3, prefix: "" },
  { label: "Production Projects", value: 5, prefix: "+" },
  { label: "Enterprise ERP Experience", value: 1.5, prefix: "Yrs+", decimals: 1 },
  { label: "Academic CGPA", value: 9.1, prefix: "/10", decimals: 1 },
]

export const EXPERIENCES: Experience[] = [
  {
    id: "enola-tech",
    company: "Enola Tech Pvt. Ltd.",
    role: "Software Engineer",
    duration: "May 2026 – Present",
    highlights: [
      "Enterprise Retail OS development using modular clean coding patterns",
      "Built and integrated complex SAP ERP workflows for corporate transactions",
      "Designed robust procurement & inventory management systems for retail outlets",
      "Engineered high-performance POS (Point of Sale) operations & customer administration panels",
      "Created scalable billing systems and secure backoffice portals using Vaadin Flow",
      "Dockerized microservices and optimized PostgreSQL indexing and schema versioning",
      "Designed layered architecture with secure RBAC-secured backend APIs"
    ],
    technologies: ["Java 21", "Spring Boot", "SAP ERP", "PostgreSQL", "Vaadin Flow", "Docker", "Apache Ant"],
  },
  {
    id: "khichad-tech",
    company: "Khichad Technologies",
    role: "Software Developer Trainee",
    duration: "June 2025 – Feb 2026",
    highlights: [
      "Contributed to Krowd HRMS and TruckGPT Fleet Tracking enterprise portals",
      "Developed secure, automated salary slip generation and validation workflows",
      "Built custom React client extensions integrated within Liferay DXP workspaces",
      "Engineered Spring Boot RESTful services with strict API security compliance"
    ],
    technologies: ["Liferay DXP", "Java", "Spring Boot", "React", "PostgreSQL", "TruckGPT"],
  },
  {
    id: "cloud-play",
    company: "Cloud Play Solutions",
    role: "Software Developer Intern",
    duration: "Dec 2024 – Jun 2025",
    highlights: [
      "Developed a full-stack Hotel Management System using the MERN stack with Prisma ORM",
      "Built secure multi-tenant authentication, guest roles, and management workflows",
      "Designed robust CRUD operations, full-text search, and server-side pagination",
      "Implemented automated CI/CD pipelines for deployment to staging environments"
    ],
    technologies: ["React", "Node.js", "Express.js", "Prisma ORM", "MySQL", "CI/CD"],
  },
]

export const SKILLS: SkillCategory[] = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Node.js", "Express.js"],
  },
  {
    category: "Enterprise",
    items: ["SAP ERP", "Liferay DXP", "Vaadin Flow", "OSGi", "Service Builder"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "Prisma ORM", "SQL Optimization"],
  },
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Redux", "Angular"],
  },
  {
    category: "Mobile",
    items: ["Flutter"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Apache Ant", "Maven", "Gradle", "GitHub Actions", "AWS EC2"],
  },
  {
    category: "Architecture",
    items: ["Layered Architecture", "RBAC", "System Design", "Microservices", "Clean Code", "Offline-first Architecture"],
  },
]

export const PROJECTS: Project[] = [
  {
    id: "retail-erp",
    title: "Retail ERP Platform",
    description: "Enterprise-grade Retail ERP system supporting procurement, inventory, billing, POS operations, employee workflows, customer management, RBAC-secured APIs, immutable financial snapshots, and scalable transactional workflows.",
    tech: ["Java 21", "Spring Boot", "PostgreSQL", "SAP ERP", "Vaadin Flow", "Docker", "Apache Ant"],
    liveUrl: "https://manojkumarsharma.vercel.app/",
    githubUrl: "https://github.com/manojkumarsharma511",
  },
  {
    id: "krowd-hrms",
    title: "Krowd HRMS Portal",
    description: "Enterprise HRMS platform with salary slip generation, automated salary calculation, approval workflows, email automation, and Liferay client extensions.",
    tech: ["Liferay DXP", "Java", "Spring Boot", "React"],
    githubUrl: "https://github.com/manojkumarsharma511",
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    description: "Full-stack Hotel Management System with room booking, meal management, multi-hotel support, role-based permissions, search, pagination, and SEO optimization.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "Prisma", "MySQL"],
    githubUrl: "https://github.com/manojkumarsharma511",
  },
]

export const ACHIEVEMENTS = [
  "Built enterprise-grade ERP systems handling high-volume transactions",
  "Worked on production SAP ERP integrations and automated workflows",
  "Developed scalable Retail OS architecture featuring layered services",
  "Built HRMS and Fleet Tracking enterprise SaaS applications",
  "Maintained exceptional academic performance with a 9.1/10 CGPA"
]

export const EDUCATION: Education = {
  institution: "Pratap Institute of Technology & Science (PITS)",
  degree: "B.Tech in Computer Science",
  duration: "2022 – 2026",
  grade: "CGPA: 9.1/10",
}
