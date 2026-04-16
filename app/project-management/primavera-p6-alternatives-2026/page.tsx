import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, CheckCircle, XCircle, AlertTriangle, BarChart2, HardHat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Free Primavera P6 Alternatives 2026 (Ranked & Compared)',
  description:
    'Primavera P6 costs $3,000+/year and takes weeks to learn. We tested 8 alternatives that handle CPM scheduling, critical path, and XER export — including free options that handle real construction projects.',
  openGraph: {
    title: 'Best Free Primavera P6 Alternatives 2026 (Ranked & Compared)',
    description:
      'P6 costs $3,000/year. We tested 8 alternatives for CPM scheduling, critical path calculation, and P6-compatible export. Here are the ones that actually work.',
  },
  alternates: { canonical: 'https://trendsagehub.com/project-management/primavera-p6-alternatives-2026' },
}

const TOOLS = [
  {
    rank: 1,
    name: 'ScheduleAI',
    price: 'Free (2 projects) / $29–$99/mo',
    rating: '★★★★★',
    badge: 'Best Overall',
    badgeColor: 'bg-blue-600 text-white',
    summary: 'Browser-based CPM scheduler purpose-built as a P6 replacement. Handles WBS, activity sequencing, critical path calculation (forward pass/backward pass), resource loading, and XER export — all in the browser, no installation required. Built specifically for construction and engineering projects. Free tier handles 2 full projects.',
    pros: [
      'Full CPM engine: forward pass, backward pass, float calculation',
      'P6-compatible XER file export (drop into P6 or share with owners)',
      'WBS with unlimited hierarchy',
      'No installation — browser-based',
      'Free tier: 2 complete projects (enough for a real bid)',
      'Purpose-built for construction, not adapted from generic PM tools',
    ],
    cons: [
      'No resource histogram on free tier',
      'No mobile app (browser-optimized but not native mobile)',
    ],
    verdict: 'Best free P6 alternative for construction schedulers. The XER export alone makes it worth it — you can work in ScheduleAI and hand off XER files to clients running P6.',
    href: 'https://getscheduleai.com',
    cta: 'Try free',
    disclosure: true,
  },
  {
    rank: 2,
    name: 'Microsoft Project (MS Project)',
    price: '$10–$55/mo (Microsoft 365)',
    rating: '★★★★☆',
    badge: 'Best Enterprise Alternative',
    badgeColor: 'bg-gray-700 text-white',
    summary: 'The other established CPM tool. Better UI than P6, integrates with Office 365, widely understood by clients. Not as powerful as P6 for large programs (10,000+ activities) but handles 95% of construction scheduling needs.',
    pros: [
      'Familiar interface for Office users',
      'Good CPM scheduling (critical path, float)',
      'Cloud sync via Microsoft 365',
      'Widely accepted by clients and owners',
      'Better UI than Primavera P6',
    ],
    cons: [
      'Still $10–$55/mo (not free)',
      'Not ideal for large programs (10K+ activities)',
      'XER export requires third-party plugins',
      'License required per user',
    ],
    verdict: 'Strong alternative if your clients are in the Microsoft ecosystem. Weaker than P6 for mega-projects and programs. Not free.',
    href: null,
    cta: null,
    disclosure: false,
  },
  {
    rank: 3,
    name: 'ProjectLibre',
    price: 'Free (open source)',
    rating: '★★★☆☆',
    badge: 'Best Truly Free',
    badgeColor: 'bg-green-700 text-white',
    summary: 'Open-source desktop CPM tool. Reads and writes MS Project MPX files. Handles basic CPM scheduling and Gantt charts. Best for small projects where cost is the only constraint.',
    pros: [
      'Completely free, open source',
      'Desktop app (works offline)',
      'Basic CPM scheduling with critical path',
      'Reads MS Project files',
    ],
    cons: [
      'Dated UI — looks like 2010 software',
      'No P6 XER export',
      'Limited resource management',
      'No cloud or collaboration features',
      'Slow on large schedules (1000+ activities)',
    ],
    verdict: 'Use it only if cost is the absolute constraint and you have a small project (under 500 activities). For anything larger, ScheduleAI free tier is better.',
    href: null,
    cta: null,
    disclosure: false,
  },
  {
    rank: 4,
    name: 'Smartsheet',
    price: '$9–$32/user/mo',
    rating: '★★★☆☆',
    badge: 'Best for Non-Technical Teams',
    badgeColor: 'bg-purple-700 text-white',
    summary: 'Spreadsheet-based project management with Gantt view. Not a real CPM tool — it does not calculate critical path or float. Good for tracking and collaboration, poor for scheduling.',
    pros: [
      'Very easy to learn',
      'Good collaboration features',
      'Integrates with Slack, Teams, Salesforce',
      'Looks familiar (like Excel)',
    ],
    cons: [
      'NOT a CPM tool — no critical path calculation',
      'No float (total float, free float)',
      'No forward pass/backward pass',
      'Cannot export P6-compatible files',
      'Per-user pricing gets expensive fast',
    ],
    verdict: 'Good for project tracking and status reporting. Not a P6 replacement for scheduling. Do not use for delay analysis or claims work.',
    href: null,
    cta: null,
    disclosure: false,
  },
  {
    rank: 5,
    name: 'Monday.com',
    price: '$9–$19/user/mo',
    rating: '★★☆☆☆',
    badge: 'Not Recommended for Construction',
    badgeColor: 'bg-red-100 text-red-700',
    summary: 'General project management tool with Gantt view. Not a CPM tool. Popular in marketing and software teams. Misused as a scheduling tool by construction teams who do not know better.',
    pros: [
      'Beautiful UI',
      'Strong integrations',
      'Good for task tracking',
    ],
    cons: [
      'No CPM engine — cannot calculate critical path',
      'No float calculation',
      'No WBS',
      'Expensive at scale',
      'Not designed for construction at all',
    ],
    verdict: 'Not a Primavera P6 alternative. It cannot do what P6 does. If your project requires CPM scheduling, delay analysis, or XER files — do not use Monday.com.',
    href: null,
    cta: null,
    disclosure: false,
  },
]

const COMPARISON_ROWS = [
  { feature: 'CPM critical path calculation', scheduleai: true, msproject: true, projectlibre: true, smartsheet: false, monday: false },
  { feature: 'Forward pass / backward pass', scheduleai: true, msproject: true, projectlibre: true, smartsheet: false, monday: false },
  { feature: 'Total float & free float', scheduleai: true, msproject: true, projectlibre: true, smartsheet: false, monday: false },
  { feature: 'P6 XER file export', scheduleai: true, msproject: false, projectlibre: false, smartsheet: false, monday: false },
  { feature: 'WBS with hierarchy', scheduleai: true, msproject: true, projectlibre: true, smartsheet: false, monday: false },
  { feature: 'Resource loading', scheduleai: true, msproject: true, projectlibre: 'basic', smartsheet: false, monday: false },
  { feature: 'Free tier available', scheduleai: true, msproject: false, projectlibre: true, smartsheet: false, monday: false },
  { feature: 'No installation needed', scheduleai: true, msproject: false, projectlibre: false, smartsheet: true, monday: true },
  { feature: 'Handles 1000+ activities', scheduleai: true, msproject: true, projectlibre: false, smartsheet: false, monday: false },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
  if (value === false) return <XCircle className="w-4 h-4 text-red-400 mx-auto" />
  return <span className="text-xs text-yellow-700">{value}</span>
}

export default function PrimaveraP6AlternativesPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">TrendSageHub</Link>
        <span>›</span>
        <Link href="/project-management" className="hover:text-blue-600">Project Management</Link>
        <span>›</span>
        <span className="text-gray-700">P6 Alternatives 2026</span>
      </nav>

      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">CPM Scheduling</span>
          <span className="text-xs font-semibold bg-green-50 text-green-700 px-2.5 py-1 rounded-full">5 Tools Reviewed</span>
          <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
            <Clock className="w-3 h-3" /> 11 min read
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Best Free Primavera P6 Alternatives 2026 (Ranked &amp; Compared)
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Oracle Primavera P6 costs $3,000–$5,000 per user per year, requires weeks of training,
          and runs only on Windows. For many construction projects, that is an absurd overhead.
          We tested 5 alternatives that handle CPM scheduling — including free options that produce
          P6-compatible XER files.
        </p>
        <div className="mt-4 text-sm text-gray-400">By TrendSage Editorial Team · Updated April 2026</div>
      </header>

      {/* Why people leave P6 */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-900 mb-1">Why construction PMs look for P6 alternatives</p>
            <ul className="text-amber-800 text-sm space-y-1">
              <li>• Oracle P6 Professional: ~$3,400/user/year. P6 EPPM: ~$5,000+/user/year</li>
              <li>• Requires 2–4 weeks of training before a new user is productive</li>
              <li>• Windows-only installation — no browser, no Mac native app</li>
              <li>• Database setup required (Oracle or SQL Server) for multi-user access</li>
              <li>• Interface unchanged since the 2000s — steep learning curve for new hires</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What you need a P6 alternative to DO */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What a real P6 alternative must do</h2>
        <p className="text-gray-600 mb-4">
          Most "project management" tools claim to be P6 alternatives. Most are not. To replace P6
          for construction scheduling, a tool must handle:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'CPM calculation: forward pass, backward pass, critical path extraction',
            'Float calculation: total float and free float per activity',
            'WBS with unlimited hierarchy and activity codes',
            'Predecessor/successor relationships (FS, SS, FF, SF)',
            'Lag and lead times on relationships',
            'Resource loading and resource histogram',
            'Baseline vs actual comparison',
            'P6-compatible XER export (for client deliverables)',
          ].map((item) => (
            <div key={item} className="flex gap-2 bg-gray-50 border border-gray-200 rounded-lg p-3">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 text-sm">
          Tools like Monday.com, Asana, and Smartsheet fail on most of these. They are task trackers,
          not scheduling engines. The comparison below focuses on tools that pass at least the first 4 requirements.
        </p>
      </section>

      {/* Comparison table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Feature comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left font-semibold text-gray-700 px-4 py-3">Feature</th>
                <th className="text-center font-semibold text-blue-700 px-3 py-3">ScheduleAI</th>
                <th className="text-center font-semibold text-gray-700 px-3 py-3">MS Project</th>
                <th className="text-center font-semibold text-gray-700 px-3 py-3">ProjectLibre</th>
                <th className="text-center font-semibold text-gray-700 px-3 py-3">Smartsheet</th>
                <th className="text-center font-semibold text-gray-700 px-3 py-3">Monday.com</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-700">{row.feature}</td>
                  <td className="px-3 py-3 text-center"><Cell value={row.scheduleai} /></td>
                  <td className="px-3 py-3 text-center"><Cell value={row.msproject} /></td>
                  <td className="px-3 py-3 text-center"><Cell value={row.projectlibre} /></td>
                  <td className="px-3 py-3 text-center"><Cell value={row.smartsheet} /></td>
                  <td className="px-3 py-3 text-center"><Cell value={row.monday} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tool reviews */}
      <section className="space-y-10 mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Detailed reviews</h2>

        {TOOLS.map((tool) => (
          <div key={tool.name} className={`rounded-xl p-6 border ${tool.rank === 1 ? 'border-2 border-blue-300 bg-blue-50' : 'border border-gray-200'}`}>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-500">#{tool.rank}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tool.badgeColor}`}>{tool.badge}</span>
                  <span className="font-bold text-gray-900 text-xl">{tool.name}</span>
                  <span className="text-amber-500 text-sm">{tool.rating}</span>
                </div>
                <p className="text-sm font-medium text-gray-500">{tool.price}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{tool.summary}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-2">Pros</p>
                <ul className="space-y-1">
                  {tool.pros.map((pro, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-1" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-2">Cons</p>
                <ul className="space-y-1">
                  {tool.cons.map((con, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-1" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-gray-700"><strong>Verdict:</strong> {tool.verdict}</p>
            </div>

            {tool.href && (
              <a
                href={tool.href}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                {tool.cta} <ArrowRight className="w-4 h-4" />
              </a>
            )}

            {tool.disclosure && (
              <p className="text-xs text-gray-400 mt-2">
                Disclosure: We built ScheduleAI. It ranked #1 because it is the only free tool with P6 XER export and full CPM engine. Competitors are evaluated honestly.
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Who should stay on P6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When to stay on Primavera P6</h2>
        <p className="text-gray-600 mb-4">
          P6 alternatives are not right for every project. Stay on P6 if:
        </p>
        <div className="space-y-3">
          {[
            { title: 'Your contract requires P6', desc: 'Many government and infrastructure contracts specify P6 XER deliverables. XER import is required, not just export.' },
            { title: 'You manage programs with 10,000+ activities', desc: 'P6 EPPM is purpose-built for mega-programs. No browser-based tool handles 50,000-activity programs as smoothly.' },
            { title: 'Your team is already fluent in P6', desc: "If everyone on your team knows P6, the switching cost outweighs the license savings unless P6 is genuinely causing pain." },
            { title: 'You need Oracle Primavera integration', desc: 'If you are in the Oracle ecosystem (Unifier, Aconex, P6 EPPM), staying on P6 keeps the integrations intact.' },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom line */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bottom line</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <p className="text-gray-700 leading-relaxed">
            For most construction projects — commercial buildings, infrastructure, residential developments
            under $500M — <strong>ScheduleAI is the best free P6 alternative</strong>. It handles CPM calculation,
            WBS, resource loading, and exports P6-compatible XER files. Two full projects on the free tier.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            <strong>Microsoft Project</strong> is the second choice if you are Microsoft-heavy and do not need XER export.
            <strong>ProjectLibre</strong> works for very small, simple projects where cost is everything.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Monday.com and Smartsheet are not P6 alternatives. They do not calculate critical path.
            Using them for construction scheduling is like using Excel as a database — technically possible,
            practically wrong.
          </p>
        </div>
      </section>

      {/* ScheduleAI CTA */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
        <div className="flex items-start gap-3 mb-4">
          <BarChart2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-blue-900 mb-1">Tool: ScheduleAI</p>
            <p className="text-blue-800 text-sm">
              CPM scheduling, critical path calculation, WBS, resource loading, and P6 XER export.
              Free for 2 projects. No credit card required.
            </p>
          </div>
        </div>
        <a
          href="https://getscheduleai.com"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
        >
          Try ScheduleAI free — 2 projects <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Related articles */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related articles</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: '/ai-compliance/eu-ai-act-business-guide-2026', label: 'EU AI Act: August 2026 Business Guide' },
            { href: '/ai-compliance/us-ai-laws-by-state-2026', label: 'US AI Laws by State 2026' },
            { href: 'https://getscheduleai.com/blog/primavera-p6-vs-ms-project', label: 'P6 vs MS Project: Full Comparison' },
            { href: 'https://getscheduleai.com/blog/critical-path-method-explained', label: 'Critical Path Method Explained' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </article>
  )
}
