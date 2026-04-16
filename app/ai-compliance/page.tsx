import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Clock, Shield, Globe, FileText, BarChart2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI & Compliance — TrendSageHub',
  description:
    'Expert guides to EU AI Act, US state AI laws, GDPR, and global AI compliance. Practical analysis for founders, legal teams, and developers.',
  alternates: { canonical: 'https://trendsagehub.com/ai-compliance' },
}

const ARTICLES = [
  {
    title: 'EU AI Act: What Companies Actually Need to Do Before August 2026',
    href: '/ai-compliance/eu-ai-act-business-guide-2026',
    description: 'The high-risk deadline is 108 days away. Conformity assessments take 3–6 months. Practical guide: what to do first, what is already banned.',
    readTime: '10 min',
    icon: AlertTriangle,
    badge: 'Aug 2 Deadline',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    title: 'US AI Laws by State 2026: Active Enforcement Map',
    href: '/ai-compliance/us-ai-laws-by-state-2026',
    description: 'NYC LL144 is actively fining companies. Colorado AI Act in 108 days. EEOC holds employers responsible for vendor AI bias. The complete US enforcement map.',
    readTime: '9 min',
    icon: Globe,
    badge: 'Active Enforcement',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
]

export default function AiCompliancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">TrendSageHub</Link>
        <span>›</span>
        <span className="text-gray-700">AI & Compliance</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI & Compliance</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          EU AI Act, US state laws, GDPR — what they actually require, who they affect,
          and what the fines are. No lawyer jargon. Practical guidance for builders.
        </p>
      </header>

      <div className="space-y-5 mb-12">
        {ARTICLES.map((article) => {
          const Icon = article.icon
          return (
            <article key={article.href} className="border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {article.badge && (
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${article.badgeColor}`}>
                        {article.badge}
                      </span>
                    )}
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <Link href={article.href} className="hover:text-indigo-600 transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-3">{article.description}</p>
                  <Link href={article.href} className="inline-flex items-center gap-1 text-indigo-600 text-sm font-medium hover:text-indigo-700">
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* ComplianceIQ promo */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
        <div className="flex items-start gap-3 mb-4">
          <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-indigo-900 mb-1">Free AI compliance scanner</p>
            <p className="text-indigo-800 text-sm">
              ComplianceIQ covers 108 jurisdictions. Enter what your AI does and who it affects —
              get a compliance risk report in 2 minutes. No account needed.
            </p>
          </div>
        </div>
        <a
          href="https://trycomplianceiq.com"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
        >
          Try ComplianceIQ free <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
