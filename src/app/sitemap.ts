import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://manojkumarsharma.vercel.app'
  const currentDate = new Date()

  const routes = [
    '',
    '/about',
    '/projects',
    '/skills',
    '/experience',
    '/resume',
    '/contact',
    '/blog',
    '/blog/java-spring-boot',
    '/blog/sap-erp',
    '/blog/liferay-dxp',
    '/blog/software-development',
    '/blog/full-stack-development',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/blog/') ? 0.6 : 0.8,
  }))
}
