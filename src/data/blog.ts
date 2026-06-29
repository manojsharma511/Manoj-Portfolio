export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  keywords: string[]
  author: string
  coverImage: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "java-spring-boot",
    title: "Mastering Java Spring Boot for Enterprise Microservices and Backend Architectures",
    excerpt: "Learn how an enterprise Java Developer designs, secures, and scales Spring Boot backend applications with production-grade patterns.",
    date: "June 15, 2026",
    readTime: "8 min read",
    category: "Java Spring Boot",
    author: "Manoj Kumar Sharma",
    coverImage: "/images/project-retail.webp",
    keywords: ["Java Developer", "Spring Boot Developer", "Backend Developer", "Software Engineer"],
    content: `
      <p>As a professional <strong>Java Developer</strong> and <strong>Spring Boot Developer</strong>, building backend systems that can handle thousands of concurrent corporate transactions is a core challenge. Spring Boot is the de facto standard for enterprise Java application development because of its robust ecosystem, dependency injection, and modular structure.</p>
      
      <h3>1. Selecting the Right Java Platform (Java 21)</h3>
      <p>Moving from older JVM versions to Java 21 unlocks major performance features like <em>Virtual Threads</em> (Project Loom). Virtual threads make it cheap to run millions of concurrent tasks, avoiding the classic 'one-thread-per-connection' operating system resource limits. This is a game-changer for high-throughput <strong>Backend Developers</strong>.</p>
      
      <h3>2. Securing APIs with Layered Security (RBAC)</h3>
      <p>Every enterprise backend must implement a strict security layer. Using Spring Security, we configure stateless REST APIs using JWT authentication. Implementing Role-Based Access Control (RBAC) is essential. For instance, in a retail enterprise system, inventory managers should have access to warehouse APIs, but billing clerks should only access Point of Sale (POS) APIs.</p>
      
      <h3>3. Database Optimization & PostgreSQL Profiling</h3>
      <p>A backend is only as fast as its database. To optimize databases like PostgreSQL, we use:</p>
      <ul>
        <li><strong>Clustered Indexing:</strong> Speeding up searches by ordering tables physically on disk.</li>
        <li><strong>Connection Pooling:</strong> Using libraries like HikariCP to reuse connection resources and avoid connection handshake overhead.</li>
        <li><strong>Schema Migration Tools:</strong> Managing database schemas using version-controlled migrations (like Liquibase or Flyway).</li>
      </ul>
      
      <h3>4. Containerization and Docker Deployment</h3>
      <p>To run microservices consistently across staging and production, containerization with Docker is non-negotiable. Docker allows developers to package Spring Boot applications, JVM runtimes, and environment configurations into immutable container images, ensuring 'it works on my machine' applies everywhere.</p>
    `
  },
  {
    slug: "sap-erp",
    title: "Architecting SAP ERP Integrations for Corporate Procurement and Retail Outlets",
    excerpt: "A deep dive into how an SAP ERP Developer bridges enterprise resource planning systems with modern, user-friendly retail operating applications.",
    date: "June 20, 2026",
    readTime: "10 min read",
    category: "SAP ERP",
    author: "Manoj Kumar Sharma",
    coverImage: "/images/project-retail.webp",
    keywords: ["SAP ERP Developer", "Software Engineer", "Backend Developer"],
    content: `
      <p>Modern enterprises rely on core database systems like SAP ERP for supply chain, inventory, and financial ledger data. However, exposing these legacy structures directly to storefronts or internal mobile apps is difficult. This is where an experienced <strong>SAP ERP Developer</strong> and <strong>Software Engineer</strong> comes in to construct high-speed middleware APIs.</p>
      
      <h3>1. Understanding SAP RFCs and BAPIs</h3>
      <p>Integrating with SAP is usually done using Remote Function Calls (RFCs) or Business Application Programming Interfaces (BAPIs). In Spring Boot, we utilize the SAP Java Connector (JCo) to invoke RFC function modules on the SAP server, allowing us to read and write inventory snapshots atomically.</p>
      
      <h3>2. Crafting Immutable Financial Snapshots</h3>
      <p>For corporate auditing and regulatory compliance, transaction histories must be immutable. When a store processes a POS sale, the integration layer must immediately synchronize the sales ledger with SAP, capturing tax, discount, and unit cost codes. Implementing dynamic retry queues with dead-letter queue (DLQ) support ensures zero transaction losses during network interruptions.</p>
      
      <h3>3. Procurement and Inventory Management Workflows</h3>
      <p>A typical enterprise workflow includes automated purchase orders (PO) when stock levels hit low thresholds. The middleware maps real-time database alerts to SAP material requirements planning (MRP) fields, initiating requisition processes without human error.</p>
    `
  },
  {
    slug: "liferay-dxp",
    title: "Leveraging Liferay DXP Client Extensions with React for Enterprise Portals",
    excerpt: "Learn how a Liferay Developer builds modern React micro-frontends and integrates them into Liferay portal portals.",
    date: "June 25, 2026",
    readTime: "7 min read",
    category: "Liferay DXP",
    author: "Manoj Kumar Sharma",
    coverImage: "/images/project-hrms.webp",
    keywords: ["Liferay Developer", "Full Stack Developer", "Software Engineer"],
    content: `
      <p>Liferay DXP is a powerful enterprise content and customer management portal framework. In modern portal design, rather than writing traditional heavy OSGi portlet bundles, a <strong>Liferay Developer</strong> creates React-based Client Extensions to achieve a decoupling of backend services and dynamic user interfaces.</p>
      
      <h3>1. What are Liferay DXP Client Extensions?</h3>
      <p>Liferay Client Extensions (introduced in Liferay 7.4) allow <strong>Full Stack Developers</strong> to register standalone HTML/JS applications. These applications run inside Liferay, accessing Liferay's styling tokens, user context, and secure cookies, but are compiled independently using React, Angular, or Vue.</p>
      
      <h3>2. Connecting React Views with OSGi Services</h3>
      <p>By using Liferay's built-in headless REST APIs and GraphQL endpoints, React client extensions can retrieve user credentials, upload files, and manage HRMS directories. We write Spring Boot REST controllers acting as secure proxy bridges to interact with Liferay OSGi Service Builders behind the scenes.</p>
      
      <h3>3. Optimizing React Portlets for INP (Interaction to Next Paint)</h3>
      <p>Portal pages often load heavy assets. To keep the portal fast and responsive:</p>
      <ul>
        <li>Deploy code splitting in the React build, loading chunks lazily.</li>
        <li>Leverage browser caching for static CSS and javascript client extension files.</li>
        <li>Minimize DOM size by avoiding deeply nested React container elements.</li>
      </ul>
    `
  },
  {
    slug: "software-development",
    title: "Clean Code & Layered System Design: Enterprise Software Engineering Best Practices",
    excerpt: "Explore architectural strategies for maintaining, structuring, and modularizing complex backend services for high reliability.",
    date: "June 28, 2026",
    readTime: "9 min read",
    category: "Software Development",
    author: "Manoj Kumar Sharma",
    coverImage: "/images/project-hotel.webp",
    keywords: ["Software Engineer", "Backend Developer", "Java Developer"],
    content: `
      <p>In modern enterprise technology, code readability and maintenance directly influence business agility. A professional <strong>Software Engineer</strong> writes code that is clear, structured, and easily extendable by team members. Clean code is not just a style; it is an engineering discipline.</p>
      
      <h3>1. The Layered Architecture Pattern</h3>
      <p>Dividing code into distinct, logical layers prevents component tight-coupling:</p>
      <ul>
        <li><strong>Presentation Layer:</strong> Controller classes that capture HTTP inputs, validate payloads (using tools like Zod or Spring Validation), and return responses.</li>
        <li><strong>Service Layer:</strong> The core business logic containing domain rules and workflows. This layer is completely isolated from HTTP frameworks.</li>
        <li><strong>Persistence Layer:</strong> Repository interfaces that interact with the database using ORMs (like Hibernate/Prisma) or raw SQL queries.</li>
      </ul>
      
      <h3>2. The SOLID Principles in Action</h3>
      <p>Adhering to SOLID design principles ensures modules are easy to test and refactor. For example, the <em>Single Responsibility Principle</em> dictates that a class should have exactly one reason to change. Separating billing invoices from email notification generators prevents database updates from breaking communication templates.</p>
      
      <h3>3. Test-Driven Development (TDD) and QA</h3>
      <p>Writing automated unit tests using JUnit, Mockito, and integration tests with Testcontainers secures backend systems against code regression. Maintaining high test coverage is crucial when deploying updates to production daily.</p>
    `
  },
  {
    slug: "full-stack-development",
    title: "Building Production-Ready Full Stack Platforms: MERN, PostgreSQL, and Modern UI",
    excerpt: "Learn the roadmap to full-stack engineering, from schema design to frontend state synchronization.",
    date: "June 29, 2026",
    readTime: "8 min read",
    category: "Full Stack Development",
    author: "Manoj Kumar Sharma",
    coverImage: "/images/project-hotel.webp",
    keywords: ["Full Stack Developer", "Software Engineer", "Backend Developer"],
    content: `
      <p>A skilled <strong>Full Stack Developer</strong> commands both databases and responsive user interfaces. Crafting a production-ready application requires connecting databases, APIs, state management systems, and interactive UI components in a secure pipeline.</p>
      
      <h3>1. Relational vs. Non-Relational Database Modeling</h3>
      <p>Choosing between PostgreSQL and MongoDB depends on data relationships. For transactional platforms like e-commerce or booking portals, PostgreSQL with strict foreign keys and ACID compliance is preferred. For content catalogs or logging streams, MongoDB fits nicely. Modern tools like Prisma ORM make it easy to write type-safe queries on relational databases.</p>
      
      <h3>2. Optimizing the Frontend for Lighthouse & Core Web Vitals</h3>
      <p>To deliver a premium user experience and boost SEO ranking, full-stack websites must be highly optimized:</p>
      <ul>
        <li><strong>Image WebP Formats:</strong> Serving WebP or AVIF images reduces image file sizes by 30% compared to JPG/PNG.</li>
        <li><strong>Lazy Loading:</strong> Deferring loading of offscreen images and components speeds up initial page load metrics.</li>
        <li><strong>Code Splitting:</strong> Dividing large JavaScript assets into routes ensures only necessary code is downloaded.</li>
      </ul>
      
      <h3>3. Real-Time State Sync and Auth</h3>
      <p>Managing security cookies, JWT session storage, and client state requires careful architecture. Setting <code>HttpOnly</code> cookies for access tokens prevents cross-site scripting (XSS) attacks, protecting sensitive user data.</p>
    `
  }
]
