import type React from "react"
import type { Metadata, Viewport } from "next"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 400, 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-onest",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0f172a",
}

export const metadata: Metadata = {
  title: "Manoj Kumar Sharma | Enterprise Full Stack Engineer",
  description:
    "Enterprise Full Stack Software Engineer specializing in scalable retail systems, HRMS platforms, and production-grade backends. Java • Spring Boot • React • PostgreSQL. Currently building EnolaTech Retail OS.",
  keywords:
    "Manoj Kumar Sharma, Software Engineer, Full Stack Developer, Java, Spring Boot, React, Node.js, Enterprise Development, HRMS, Retail Systems, Backend Architecture, PostgreSQL",
  authors: [{ name: "Manoj Kumar Sharma" }],
  creator: "Manoj Kumar Sharma",
  publisher: "Manoj Kumar Sharma",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Manoj Kumar Sharma | Enterprise Full Stack Engineer",
    description:
      "Enterprise Full Stack Engineer building scalable systems with Java, Spring Boot, React, and modern tech stack.",
    type: "website",
    siteName: "Manoj Kumar Sharma - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Kumar Sharma | Enterprise Full Stack Engineer",
    description: "Enterprise Full Stack Engineer building scalable systems",
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
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
