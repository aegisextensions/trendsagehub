import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Mail, FileText, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Technology — TrendSageHub',
  description:
    'Browser privacy extensions, tracker blockers, email privacy tools — honest reviews with a focus on whether tools actually protect your data.',
  alternates: { canonical: 'https://trendsagehub.com/privacy' },
}

const articles = [
  {
    href: '/privacy/best-privacy-chrome-extensions-2026',
    icon: Shield,
    badge: '40 Tested',
    readTime: '12 min',
    title: 'Best Privacy Chrome Extensions 2026: We Tested 40',
    excerpt:
      'After MV3 broke PixelBlock, Ugly Email, and most tracker blockers, we tested 40 replacements across email privacy, ad blocking, tracker blocking, web annotation, and grammar checking.',
  },
  {
    href: '/privacy/stop-email-tracking-guide',
    icon: Mail,
    badge: 'Guide',
    readTime: '13 min',
    title: 'How to Stop Email Tracking Pixels: What Actually Works in 2026',
    excerpt:
      'Every marketing email you open logs your IP address, location, and device. PixelBlock and Ugly Email are dead. We tested 5 replacements and found one that works — with verifiable privacy guarantees.',
  },
  {
    href: '/privacy/on-device-ai-grammar-checkers',
    icon: FileText,
    badge: 'Analysis',
    readTime: '14 min',
    title: 'On-Device vs Cloud Grammar Checkers: Which Is Safe for Confidential Writing?',
    excerpt:
      'Grammarly and QuillBot upload every word you type to their servers. We compare the accuracy and privacy trade-offs of on-device alternatives — and explain who actually needs them.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">TrendSageHub</Link>
        <span>›</span>
        <span className="text-gray-700">Privacy</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Technology</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Extensions and tools that actually protect your data — not just claim to.
          After the MV3 migration broke most privacy tools, we tested what replaced them.
        </p>
      </header>

      <div className="space-y-5">
        {articles.map((article) => {
          const Icon = article.icon
          return (
            <article key={article.href} className="border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">{article.badge}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <Link href={article.href} className="hover:text-indigo-600 transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-3">{article.excerpt}</p>
                  <Link href={article.href} className="inline-flex items-center gap-1 text-indigo-600 text-sm font-medium hover:text-indigo-700">
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-12 bg-indigo-50 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">About these reviews</h2>
        <p className="text-gray-600 max-w-2xl">
          We test privacy tools hands-on, with real tracked email inboxes and verified CSP audits.
          Our focus is on tools that provide verifiable privacy guarantees — not just marketing
          claims. When we say a tool doesn&apos;t upload your data, we&apos;ve verified it at the
          browser network layer, not just read their privacy policy.
        </p>
      </div>
    </div>
  )
}
