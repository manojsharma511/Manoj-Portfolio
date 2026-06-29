import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Onest } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

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
  title: "Manoj Kumar Sharma | Software Engineer | SAP ERP | Java Spring Boot Developer",
  description:
    "Software Engineer specializing in Enterprise ERP Systems, SAP ERP, Java Spring Boot, PostgreSQL, Vaadin Flow, Docker, and scalable backend architectures.",
  keywords:
    "Software Engineer, Java Developer, SAP ERP Developer, Spring Boot Developer, PostgreSQL Developer, Vaadin Developer, Enterprise Software Engineer, Retail ERP Developer",
  authors: [{ name: "Manoj Kumar Sharma" }],
  creator: "Manoj Kumar Sharma",
  publisher: "Manoj Kumar Sharma",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Manoj Kumar Sharma | Software Engineer | SAP ERP | Java Spring Boot Developer",
    description:
      "Software Engineer specializing in Enterprise ERP Systems, SAP ERP, Java Spring Boot, PostgreSQL, Vaadin Flow, Docker, and scalable backend architectures.",
    type: "website",
    siteName: "Manoj Kumar Sharma Portfolio",
    url: "https://manojkumarsharma.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Kumar Sharma | Software Engineer | SAP ERP | Java Spring Boot Developer",
    description: "Enterprise Software Engineer building scalable backend systems.",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
