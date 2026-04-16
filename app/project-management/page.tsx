import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, HardHat, BarChart2, FileText, Calculator, AlertTriangle, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Construction & Project Management — TrendSageHub',
  description:
    'Practical guides on CPM scheduling, Primavera P6 alternatives, delay claims, and construction project management. For PMs, schedulers, and claims consultants.',
  alternates: { canonical: 'https://trendsagehub.com/project-management' },
}

const ARTICLES = [
  {
    title: 'Best Free Primavera P6 Alternatives 2026 (Ranked & Compared)',
    href: '/project-management/primavera-p6-alternatives-2026',
    description: 'P6 costs $3,000+/year and requires weeks of training. We tested 8 alternatives — free and paid — that handle CPM scheduling, critical path calculation, and P6-compatible XER export.',
    readTime: '11 min',
    icon: BarChart2,
    badge: 'Top Pick',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Construction Delay Claims: A Step-by-Step Guide for Contractors',
    href: '/project-management/construction-delay-claims-guide',
    description: 'How to build a winning delay claim — giving notice on time, proving critical path impact with CPM analysis, quantifying prolongation costs, and avoiding the 5 mistakes that sink most claims.',
    readTime: '14 min',
    icon: AlertTriangle,
    badge: 'Delay Claims',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'FIDIC Programme Requirements for UAE Construction Projects',
    href: '/project-management/fidic-programme-guide-uae-contractors',
    description: 'FIDIC Red Book Clause 8 programme compliance for UAE and GCC contractors — what to submit, how the Engineer reviews it, float ownership, UAE calendar rules, and the 28-day notice trap.',
    readTime: '13 min',
    icon: Globe,
    badge: 'UAE/GCC',
    badgeColor: 'bg-indigo-100 text-indigo-700',
  },
]

export default function ProjectManagementPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">TrendSageHub</Link>
        <span>›</span>
        <span className="text-gray-700">Project Management</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <HardHat className="w-5 h-5 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Construction & Project Management</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl">
          CPM scheduling, delay claims, Primavera P6 alternatives, and earned value — practical guides
          for project managers, schedulers, and claims consultants.
        </p>
      </header>

      <div className="space-y-5 mb-12">
        {ARTICLES.map((article) => {
          const Icon = article.icon
          return (
            <article key={article.href} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
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
                    <Link href={article.href} className="hover:text-blue-600 transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-3">{article.description}</p>
                  <Link href={article.href} className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700">
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* ScheduleAI promo */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-3 mb-4">
          <BarChart2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-blue-900 mb-1">Free CPM scheduling — no P6 license needed</p>
            <p className="text-blue-800 text-sm">
              ScheduleAI handles CPM scheduling, critical path calculation, and exports P6-compatible XER files.
              2 free projects. No credit card required.
            </p>
          </div>
        </div>
        <a
          href="https://getscheduleai.com"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
        >
          Try ScheduleAI free <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
