import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Shield, Globe, Layers, BookOpen, BarChart2, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TrendSageHub — Tech Intelligence for Builders',
  description:
    'Expert analysis of AI regulation, productivity tools, privacy technology, and business software. No filler, no hype — practical intelligence for people who build things.',
}

const FEATURED_ARTICLES = [
  {
    category: 'AI & Compliance',
    categoryHref: '/ai-compliance',
    categoryColor: 'bg-red-50 text-red-700',
    title: 'EU AI Act: What Companies Actually Need to Do Before August 2026',
    slug: '/ai-compliance/eu-ai-act-business-guide-2026',
    description:
      'The EU AI Act high-risk deadline is August 2, 2026. Conformity assessments take 3–6 months. Here is the practical roadmap — what to do first, what can wait, and what is already banned.',
    readTime: '10 min',
    icon: AlertTriangle,
    featured: true,
  },
  {
    category: 'Privacy',
    categoryHref: '/privacy',
    categoryColor: 'bg-indigo-50 text-indigo-700',
    title: 'The Best Privacy Chrome Extensions in 2026 (We Tested 40)',
    slug: '/privacy/best-privacy-chrome-extensions-2026',
    description:
      'After the 2025 MV3 migration broke most privacy extensions, the market reset. We tested 40 extensions across tracker blocking, email privacy, and ad filtering. Here is what actually works.',
    readTime: '12 min',
    icon: Shield,
    featured: true,
  },
  {
    category: 'Project Management',
    categoryHref: '/project-management',
    categoryColor: 'bg-blue-50 text-blue-700',
    title: 'Primavera P6 Alternatives 2026: Honest Comparison for Construction Teams',
    slug: '/project-management/primavera-p6-alternatives-2026',
    description:
      'P6 costs $3,000+/year and requires dedicated training. We compared 8 alternatives on CPM scheduling, resource loading, and delay analysis. This is who should switch and to what.',
    readTime: '11 min',
    icon: BarChart2,
    featured: false,
  },
  {
    category: 'AI & Compliance',
    categoryHref: '/ai-compliance',
    categoryColor: 'bg-red-50 text-red-700',
    title: 'NYC, Colorado, Illinois: Which US AI Laws Apply to Your Business',
    slug: '/ai-compliance/us-ai-laws-by-state-2026',
    description:
      'No federal AI law exists. What exists is a patchwork of state laws with active enforcement. NYC LL144 is already issuing fines. Colorado AI Act takes effect June 30, 2026. Here is the state-by-state map.',
    readTime: '9 min',
    icon: Globe,
    featured: false,
  },
  {
    category: 'Productivity',
    categoryHref: '/productivity',
    categoryColor: 'bg-green-50 text-green-700',
    title: 'The Privacy-First Productivity Stack for 2026',
    slug: '/productivity/privacy-first-productivity-stack-2026',
    description:
      'Every major productivity tool reads what you type. We built an alternative stack — local-first tools, privacy-respecting alternatives, and browser extensions that never upload your data.',
    readTime: '8 min',
    icon: Layers,
    featured: false,
  },
]

const TOPIC_CARDS = [
  {
    title: 'AI & Compliance',
    href: '/ai-compliance',
    description: 'EU AI Act, US state laws, GDPR — what they require, who they affect, what the fines are.',
    icon: AlertTriangle,
    color: 'border-red-200 hover:border-red-300 bg-red-50',
    iconColor: 'text-red-600',
    articleCount: 12,
  },
  {
    title: 'Privacy Technology',
    href: '/privacy',
    description: 'Browser extensions, privacy tools, and how to stop companies from tracking everything you do.',
    icon: Shield,
    color: 'border-indigo-200 hover:border-indigo-300 bg-indigo-50',
    iconColor: 'text-indigo-600',
    articleCount: 8,
  },
  {
    title: 'Project Management',
    href: '/project-management',
    description: 'Construction scheduling, CPM, Primavera alternatives — practical guides for project teams.',
    icon: BarChart2,
    color: 'border-blue-200 hover:border-blue-300 bg-blue-50',
    iconColor: 'text-blue-600',
    articleCount: 6,
  },
  {
    title: 'Productivity',
    href: '/productivity',
    description: 'Tools that work, software comparisons, and workflows that save time without selling your data.',
    icon: Layers,
    color: 'border-green-200 hover:border-green-300 bg-green-50',
    iconColor: 'text-green-600',
    articleCount: 9,
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-indigo-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
              Expert analysis. No filler.
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Tech intelligence for people who build things
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We cover AI regulation, privacy tools, and project management software —
              with the depth a founder or developer actually needs. No hype. No paid placements.
            </p>
            <div className="flex flex-wrap gap-3">
              {TOPIC_CARDS.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="text-sm font-medium px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
                >
                  {topic.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest analysis</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large featured article */}
          <div className="lg:col-span-2">
            {FEATURED_ARTICLES.filter((a) => a.featured).slice(0, 1).map((article) => {
              const Icon = article.icon
              return (
                <article
                  key={article.slug}
                  className="border border-gray-200 rounded-2xl p-7 h-full hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} read
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    <Link href={article.slug} className="hover:text-indigo-600 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5">{article.description}</p>
                  <Link
                    href={article.slug}
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              )
            })}
          </div>

          {/* Second featured */}
          <div>
            {FEATURED_ARTICLES.filter((a) => a.featured).slice(1, 2).map((article) => {
              const Icon = article.icon
              return (
                <article
                  key={article.slug}
                  className="border border-gray-200 rounded-2xl p-6 h-full hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    <Link href={article.slug} className="hover:text-indigo-600 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{article.description}</p>
                  <Link
                    href={article.slug}
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>

        {/* More articles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {FEATURED_ARTICLES.filter((a) => !a.featured).map((article) => {
            const Icon = article.icon
            return (
              <article
                key={article.slug}
                className="border border-gray-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${article.categoryColor}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                  <Link href={article.slug} className="hover:text-indigo-600 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
                <Link
                  href={article.slug}
                  className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-xs"
                >
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      {/* Topic grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by topic</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOPIC_CARDS.map((topic) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.href}
                href={topic.href}
                className={`border rounded-xl p-5 transition-all ${topic.color}`}
              >
                <Icon className={`w-6 h-6 mb-3 ${topic.iconColor}`} />
                <h3 className="font-bold text-gray-900 mb-1">{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{topic.description}</p>
                <span className="text-xs text-gray-500">{topic.articleCount} articles</span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ComplianceIQ promo — naturally embedded, not an ad */}
      <section className="border-t border-gray-100 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-3">
              Tool we recommend
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Check your AI compliance risk — free, no account needed
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We built ComplianceIQ to solve the problem this publication covers every week.
              Enter what your AI does and where you operate — it maps your obligations across
              108 jurisdictions and tells you what to do first. Free tier requires no signup.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://trycomplianceiq.com"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Try ComplianceIQ free <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/ai-compliance"
                className="inline-flex items-center gap-2 border border-indigo-300 text-indigo-700 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
              >
                Read our AI compliance guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
