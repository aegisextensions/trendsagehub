import type { MetadataRoute } from 'next'

const BASE_URL = 'https://trendsagehub.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  return [
    // Homepage
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // AI & Compliance category
    { url: `${BASE_URL}/ai-compliance`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/ai-compliance/eu-ai-act-business-guide-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-compliance/us-ai-laws-by-state-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Privacy category
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/privacy/best-privacy-chrome-extensions-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy/stop-email-tracking-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy/on-device-ai-grammar-checkers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Project Management category
    { url: `${BASE_URL}/project-management`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/project-management/primavera-p6-alternatives-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/project-management/construction-delay-claims-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/project-management/fidic-programme-guide-uae-contractors`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Business category
    { url: `${BASE_URL}/business`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/business/best-import-export-management-software-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/business/trade-compliance-management-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Productivity category
    { url: `${BASE_URL}/productivity`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/productivity/best-gantt-chart-software-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/productivity/cpm-scheduling-small-contractors`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
