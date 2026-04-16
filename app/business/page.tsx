import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Business Software & Tools — TrendSageHub',
  description: 'Honest reviews and guides for service business software: field service management, CRM for tradespeople, invoicing, scheduling, and business compliance.',
  alternates: { canonical: 'https://trendsagehub.com/business' },
}

const ARTICLES = [
  {
    slug: 'best-import-export-management-software-2026',
    title: 'Best Service Business Management Software 2026',
    excerpt: 'Comparing the top CRM and field service management tools for tradespeople: plumbers, electricians, pool cleaners, HVAC, and cleaning services. Which tool handles quoting, scheduling, invoicing, and customer communication without costing $500/month?',
    date: '2026-04-16',
    readTime: '12 min read',
    category: 'Tools Comparison',
  },
  {
    slug: 'trade-compliance-management-guide',
    title: 'Trade Business Compliance 2026: Licensing, Insurance, and Legal Requirements',
    excerpt: 'The compliance requirements for running a trade service business in 2026. Contractor licensing by state, liability insurance minimums, worker classification (1099 vs W-2), and the software that tracks it all without burying you in paperwork.',
    date: '2026-04-16',
    readTime: '11 min read',
    category: 'Business Guide',
  },
]

export default function BusinessPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Business Software & Tools</h1>
        <p className="text-lg text-gray-600">
          Honest guides for service business owners: field service management software,
          CRM tools, invoicing, compliance, and how to run a trade business without the
          enterprise price tag.
        </p>
      </div>

      <div className="space-y-6">
        {ARTICLES.map(article => (
          <Link
            key={article.slug}
            href={`/business/${article.slug}`}
            className="block border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                {article.category}
              </span>
              <span className="text-xs text-gray-400">{article.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                Read article →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
