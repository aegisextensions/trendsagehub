import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Productivity Software — TrendSageHub',
  description:
    'Project scheduling, Gantt chart software, and productivity tools — honest reviews focused on whether they actually work for construction, engineering, and small teams.',
  alternates: { canonical: 'https://trendsagehub.com/productivity' },
}

const articles = [
  {
    href: '/productivity/best-gantt-chart-software-2026',
    icon: BarChart3,
    badge: '6 Tools Compared',
    readTime: '14 min',
    title: 'Best Gantt Chart Software 2026: What Actually Does CPM Scheduling',
    excerpt:
      'Most "Gantt chart" tools don\'t actually do CPM scheduling. We tested 6 tools that claim to — here\'s which ones calculate forward pass, backward pass, float, and critical path correctly.',
  },
  {
    href: '/productivity/cpm-scheduling-small-contractors',
    icon: Clock,
    badge: 'Guide',
    readTime: '11 min',
    title: 'CPM Scheduling for Small Contractors: Getting Started Without Primavera P6',
    excerpt:
      'A step-by-step guide to building your first CPM schedule if you\'ve never used P6 — what activities to include, how to set up logic, and how to meet owner XER submittal requirements on a small-team budget.',
  },
]

export default function ProductivityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">TrendSageHub</Link>
        <span>›</span>
        <span className="text-gray-700">Productivity</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Productivity Software</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Project scheduling, Gantt chart tools, and productivity software — reviewed for
          whether they actually work for construction PMs, engineers, and small teams.
          We test what matters: CPM correctness, export formats, and real-world usability.
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
          We test productivity tools hands-on, with real project data. Our focus is on tools
          used by construction project managers, engineers, and scheduling teams — where correctness
          matters more than aesthetics. When we recommend a tool, it&apos;s because we tested it,
          not because someone paid us to.
        </p>
      </div>
    </div>
  )
}
