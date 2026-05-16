import type { Experience, Project, Skill, NavLink } from "./types"

// Navigation
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

// Contact Information
export const CONTACT_INFO = {
  email: "msharma27096@gmail.com",
  github: "https://github.com/manojkumarsharma511",
  linkedin: "https://linkedin.com/in/manoj-kumar-sharma",
  location: "Sikar, Rajasthan, India",
  phone: "+91 XXXXXXXXXX",
}

// Social Links
export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    url: CONTACT_INFO.github,
    icon: "Github",
  },
  {
    label: "LinkedIn",
    url: CONTACT_INFO.linkedin,
    icon: "Linkedin",
  },
  {
    label: "Email",
    url: `mailto:${CONTACT_INFO.email}`,
    icon: "Mail",
  },
]

// Experience Data
export const EXPERIENCES: Experience[] = [
  {
    id: "enola-tech",
    company: "Enola Tech Pvt. Ltd.",
    role: "Jr. Software Developer",
    duration: "May 2026 – Present",
    description:
      "Building enterprise-grade retail solutions with offline-first architecture and production-level code quality.",
    highlights: [
      "Architected offline-first POS system with real-time synchronization",
      "Implemented RBAC system for retail operations",
      "Designed layered architecture for scalability",
      "Built inventory and procurement management modules",
      "Implemented schema-as-code for database versioning",
      "Created comprehensive reporting and analytics systems",
    ],
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "Vaadin Flow", "Flutter", "Ant"],
    projects: ["EnolaTech Retail OS"],
  },
  {
    id: "khichad-tech",
    company: "Khichad Technologies Pvt. Ltd.",
    role: "Software Developer Trainee",
    duration: "2025 - 2026",
    description:
      "Worked on enterprise HR and logistics platforms, gaining experience with modern enterprise technologies.",
    highlights: [
      "Developed features for Krowd HRMS using Liferay DXP",
      "Collaborated on TruckGPT AI logistics platform",
      "Implemented authentication and authorization systems",
      "Built reusable React components for front-end",
      "Optimized database queries for performance",
      "Participated in code reviews and architecture discussions",
    ],
    technologies: ["Liferay DXP", "Java", "Spring Boot", "React", "PostgreSQL"],
    projects: ["Krowd HRMS", "TruckGPT"],
  },
  {
    id: "cloud-play",
    company: "Cloud Play Solutions",
    role: "Software Developer Intern",
    duration: "2024 - 2025",
    description:
      "Full-stack development on hotel management system, building complete features from backend to frontend.",
    highlights: [
      "Built complete Hotel Management System from scratch",
      "Implemented RESTful APIs with Express.js",
      "Created responsive React frontend with real-time updates",
      "Designed PostgreSQL database schema",
      "Implemented authentication and booking workflows",
      "Deployed to cloud infrastructure",
    ],
    technologies: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    projects: ["Hotel Management System"],
  },
]

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: "enola-retail-os",
    title: "EnolaTech Retail OS",
    description: "Enterprise-grade offline-first retail point-of-sale system",
    overview:
      "A comprehensive retail operating system designed for enterprise retail chains with offline-first capabilities, real-time synchronization, and advanced inventory management.",
    highlights: [
      "Offline-first architecture with real-time cloud sync",
      "RBAC with granular permission management",
      "Layered architecture for scalability and maintainability",
      "Inventory management with procurement workflow",
      "Advanced reporting and business analytics",
      "Multi-tenant support for retail chains",
    ],
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "Vaadin Flow", "Flutter"],
    github: "https://github.com/manojkumarsharma511",
  },
  {
    id: "krowd-hrms",
    title: "Krowd HRMS",
    description: "Enterprise human resource management system",
    overview:
      "A full-featured HRMS platform built on Liferay DXP for managing employee lifecycle, payroll, and organizational workflows.",
    highlights: [
      "Employee management and lifecycle automation",
      "Payroll processing and compliance",
      "Leave management and approval workflows",
      "Performance management system",
      "Organizational hierarchy and reporting",
      "Role-based access control",
    ],
    technologies: ["Liferay DXP", "Java", "Spring Boot", "React", "PostgreSQL"],
  },
  {
    id: "truckgpt",
    title: "TruckGPT",
    description: "AI-powered logistics and transportation platform",
    overview:
      "An intelligent platform for logistics optimization using AI to predict routes, manage fleet, and optimize transportation.",
    highlights: [
      "AI-powered route optimization",
      "Fleet management dashboard",
      "Real-time tracking system",
      "Predictive analytics for logistics",
      "Driver management system",
      "Integration with mapping services",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "AI/ML"],
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    description: "Complete hotel operations and booking management system",
    overview:
      "A full-stack hotel management system handling bookings, room management, billing, and guest communication.",
    highlights: [
      "Room booking and reservation system",
      "Guest check-in/check-out workflows",
      "Billing and invoice generation",
      "Staff and housekeeping management",
      "Real-time availability updates",
      "Integrated reporting system",
    ],
    technologies: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    github: "https://github.com/manojkumarsharma511",
  },
  {
    id: "socialmanu",
    title: "SocialManu",
    description: "Social networking platform with real-time messaging",
    overview:
      "A feature-rich social platform with user profiles, real-time messaging, and community features.",
    highlights: [
      "User authentication and profiles",
      "Real-time messaging system",
      "Feed generation algorithm",
      "Connection and friendship system",
      "Notification system",
      "Community management",
    ],
    technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL"],
  },
  {
    id: "student-task-tracker",
    title: "Student Task Tracker",
    description: "Task management system for students and teams",
    overview:
      "A collaborative task management platform designed for students to organize assignments and project work.",
    highlights: [
      "Task creation and assignment",
      "Collaboration features",
      "Progress tracking",
      "Team management",
      "Deadline reminders",
      "Activity logging",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
]

// Skills Data
export const SKILLS: Skill[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java 21", icon: "code" },
      { name: "Spring Boot", icon: "leaf" },
      { name: "Node.js", icon: "server" },
      { name: "Express.js", icon: "zap" },
      { name: "REST APIs", icon: "network" },
      { name: "Microservices", icon: "grid" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "code" },
      { name: "Next.js", icon: "arrow-right" },
      { name: "Tailwind CSS", icon: "palette" },
      { name: "Framer Motion", icon: "move" },
      { name: "Shadcn/ui", icon: "layers" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter", icon: "smartphone" },
      { name: "Dart", icon: "code" },
      { name: "Cross-platform", icon: "globe" },
      { name: "Native Integration", icon: "link" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "database" },
      { name: "Prisma ORM", icon: "code" },
      { name: "SQL", icon: "database" },
      { name: "Database Design", icon: "grid" },
      { name: "Query Optimization", icon: "zap" },
    ],
  },
  {
    category: "Enterprise Systems",
    skills: [
      { name: "Liferay DXP", icon: "layers" },
      { name: "RBAC", icon: "lock" },
      { name: "Offline-first Architecture", icon: "wifi-off" },
      { name: "Vaadin Flow", icon: "app" },
      { name: "Schema-as-Code", icon: "file-code" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "box" },
      { name: "Git", icon: "git-branch" },
      { name: "CI/CD", icon: "zap" },
      { name: "Maven", icon: "package" },
      { name: "Ant", icon: "tool" },
      { name: "Linux", icon: "terminal" },
    ],
  },
  {
    category: "Architecture",
    skills: [
      { name: "Layered Architecture", icon: "layers" },
      { name: "System Design", icon: "grid" },
      { name: "Scalability", icon: "trending-up" },
      { name: "Performance Tuning", icon: "zap" },
      { name: "Database Optimization", icon: "database" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: "lightbulb" },
      { name: "Team Collaboration", icon: "users" },
      { name: "Code Review", icon: "eye" },
      { name: "Documentation", icon: "file-text" },
      { name: "Technical Communication", icon: "message-circle" },
    ],
  },
]

// Color Scheme
export const COLORS = {
  primary: "#0f172a",
  secondary: "#1e293b",
  accent: "#60a5fa",
  accentLight: "#93c5fd",
  text: "#f1f5f9",
  textSecondary: "#cbd5e1",
  border: "#334155",
  borderLight: "#475569",
}

// Breakpoints
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}
