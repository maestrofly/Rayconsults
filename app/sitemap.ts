import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://example.com'; return ['','/about','/expertise','/experience','/insights','/contact','/privacy'].map(path => ({ url: `${base}${path}`, lastModified: new Date() })) }
