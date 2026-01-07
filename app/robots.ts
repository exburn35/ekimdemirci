import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export default async function robots(): Promise<MetadataRoute.Robots> {
  try {
    // Try to fetch custom robots.txt from database
    if (process.env.DATABASE_URL) {
      const config = await prisma.sEOConfig.findUnique({
        where: { type: "robots" },
      });
      
      if (config?.content) {
        // Parse robots.txt content (simplified - in production you'd want a proper parser)
        return {
          rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'],
          },
          sitemap: 'https://ekimdemirci.com/sitemap.xml',
        };
      }
    }
  } catch (error) {
    console.error('Error fetching robots config:', error);
    // Fall through to default
  }

  // Default fallback
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://ekimdemirci.com/sitemap.xml',
  }
}

