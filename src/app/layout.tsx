import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Onest } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-onest",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#030712",
}

export const metadata: Metadata = {
  title: "Manoj Kumar Sharma | Software Engineer | Java Spring Boot & SAP ERP Developer",
  description:
    "Enterprise Software Engineer (Manoj Kumar Sharma) building high-performance backend systems, SAP ERP workflow automation, Java Spring Boot APIs, and Liferay portal extensions.",
  keywords: [
    "Manoj",
    "Manoj Kumar",
    "Manoj Kumar Sharma",
    "Manoj Kumar Sharma Software Engineer",
    "Manoj Software Engineer",
    "Manoj Software Developer",
    "Java Developer Portfolio",
    "Spring Boot Developer Portfolio",
    "Liferay Developer Portfolio",
    "SAP ERP Developer Portfolio",
    "Full Stack Developer Portfolio",
    "Best Software Engineer Portfolio",
    "Best Resume Developer",
    "Good Portfolio Developer",
    "Software Engineer",
    "Java Developer",
    "SAP ERP Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Liferay Developer"
  ],
  authors: [{ name: "Manoj Kumar Sharma" }],
  creator: "Manoj Kumar Sharma",
  publisher: "Manoj Kumar Sharma",
  metadataBase: new URL("https://manojkumarsharma.vercel.app"),
  alternates: {
    canonical: "/",
  },
  other: {
    "google-site-verification": "Csau_Z8jgnSOxN8LUubbMZAp0PiGK3dP_4lWRtEm4Yc",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Manoj Kumar Sharma | Software Engineer | Java Spring Boot & SAP ERP Developer",
    description:
      "Enterprise Software Engineer (Manoj Kumar Sharma) building high-performance backend systems, SAP ERP workflow automation, Java Spring Boot APIs, and Liferay portal extensions.",
    type: "website",
    siteName: "Manoj Kumar Sharma Portfolio",
    url: "https://manojkumarsharma.vercel.app/",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manoj Kumar Sharma - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Kumar Sharma | Software Engineer | Java Spring Boot & SAP ERP Developer",
    description: "Enterprise Software Engineer building scalable backend systems, SAP ERP integrations, and Spring Boot REST APIs.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Schema for Person (JSON-LD)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manoj Kumar Sharma",
    "jobTitle": "Software Engineer",
    "description": "Enterprise Software Engineer specializing in SAP ERP, Java Spring Boot, PostgreSQL, Vaadin Flow, and scalable backend systems.",
    "url": "https://manojkumarsharma.vercel.app/",
    "sameAs": [
      "https://www.linkedin.com/in/manoj-kumar-sharma-m511/",
      "https://github.com/manojkumarsharma511"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Enola Tech Pvt. Ltd."
    },
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "SAP ERP",
      "Liferay DXP",
      "Vaadin Flow",
      "PostgreSQL",
      "Docker",
      "Full Stack Development",
      "REST APIs"
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden bg-background text-foreground`}>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
