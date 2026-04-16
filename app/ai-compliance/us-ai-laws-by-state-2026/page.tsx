import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Clock, Shield, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'US AI Laws by State 2026: Active Enforcement and What\'s Coming',
  description:
    'No federal AI law exists. What does exist: NYC Local Law 144 actively fining companies, Colorado AI Act in 108 days, Illinois AIVIA enforced since 2020. State-by-state enforcement map for 2026.',
  openGraph: {
    title: 'US AI Laws by State 2026: Active Enforcement and What\'s Coming',
    description:
      'NYC Local Law 144 is actively enforcing. Colorado AI Act is in 108 days. Here is the US AI law enforcement map — which states, what they regulate, and what the fines are.',
  },
  alternates: { canonical: 'https://trendsagehub.com/ai-compliance/us-ai-laws-by-state-2026' },
}

const ACTIVE_LAWS = [
  {
    state: 'New York City',
    law: 'Local Law 144 (LL144)',
    inForce: 'July 5, 2023',
    scope: 'Employers using automated employment decision tools (AEDTs) for NYC positions',
    requirements: [
      'Annual independent bias audit by approved auditor',
      'Publish bias audit summary on company website',
      'Notify candidates at least 10 days before AI-based assessment',
      'Post notice of AI use at all NYC locations',
    ],
    fine: '$1,500/day per violation',
    enforcement: 'ACTIVE — NYC DCWP has sent enforcement letters',
    urgency: 'critical',
  },
  {
    state: 'Illinois',
    law: 'AI Video Interview Act (AIVIA)',
    inForce: 'January 1, 2020 (amended 2024)',
    scope: 'Employers using AI to analyse video interviews of Illinois-based candidates',
    requirements: [
      'Disclose AI use before the interview',
      'Obtain written or electronic consent',
      'Explain what characteristics the AI evaluates',
      'Do not share video with third parties without written consent',
    ],
    fine: 'Private right of action — litigation risk',
    enforcement: 'ACTIVE — class actions have been filed',
    urgency: 'high',
  },
  {
    state: 'Federal (EEOC)',
    law: 'Title VII guidance on AI hiring (2023)',
    inForce: 'Ongoing — new guidance published 2023',
    scope: 'All US employers using AI in hiring decisions',
    requirements: [
      'Employers are responsible for disparate impact from vendor AI tools',
      '"The vendor built it" is not a defence',
      'Request and review bias audit results from AI vendors',
      'Test for disparate impact across protected classes',
    ],
    fine: 'Title VII civil liability — uncapped compensatory damages',
    enforcement: 'ACTIVE — EEOC has issued enforcement guidance and is accepting complaints',
    urgency: 'high',
  },
  {
    state: 'Federal (CFPB/FCRA)',
    law: 'Fair Credit Reporting Act — AI credit decisions',
    inForce: 'Ongoing — CFPB AI guidance published 2023',
    scope: 'Lenders using AI credit models',
    requirements: [
      'Adverse action notices must identify specific AI factors — not "algorithmic model"',
      'Disparate impact testing across protected classes required under ECOA',
      'AI acting as consumer reporting agency triggers full FCRA requirements',
    ],
    fine: 'FCRA: up to $1,000 per violation + punitive damages',
    enforcement: 'ACTIVE — Workday class action, CFPB investigations ongoing',
    urgency: 'high',
  },
]

const COMING_LAWS = [
  {
    state: 'Colorado',
    law: 'SB 24-205',
    effective: 'June 30, 2026',
    scope: 'Developers and deployers of high-risk AI in consequential decisions',
    keyRequirements: 'Risk assessments, bias testing, candidate/employee disclosure, opportunity to correct errors, annual impact assessments',
    sizeExemption: 'None — applies to all companies regardless of size',
    urgency: 'critical',
  },
  {
    state: 'Virginia',
    law: 'HB 2094',
    effective: 'July 1, 2026',
    scope: 'High-risk AI in consequential decisions affecting Virginians',
    keyRequirements: 'Impact assessments, bias testing, consumer notification, opt-out right',
    sizeExemption: 'Exemptions for small businesses under study',
    urgency: 'high',
  },
  {
    state: 'California',
    law: 'AB 2013 + SB 942',
    effective: 'January 2026 (AB 2013); January 2026 (SB 942)',
    scope: 'AB 2013: AI training data transparency. SB 942: AI content labelling',
    keyRequirements: 'AB 2013: Publish training data disclosures. SB 942: Label AI-generated content',
    sizeExemption: 'AB 2013: >1M users OR >$50M revenue',
    urgency: 'medium',
  },
  {
    state: 'Texas',
    law: 'Texas AI in Employment Decisions Act (pending)',
    effective: 'If passed: 2026',
    scope: 'Employers using AI in employment decisions',
    keyRequirements: 'Bias audits, employee disclosure, similar to NYC LL144',
    sizeExemption: 'Under discussion',
    urgency: 'medium',
  },
  {
    state: 'New York State',
    law: 'Multiple bills (SAFE Act, AI Employment AI Act)',
    effective: 'Under debate — 2026/2027',
    scope: 'Would extend NYC LL144-style rules statewide',
    keyRequirements: 'Bias audits, disclosure, annual impact assessments',
    sizeExemption: 'Under discussion',
    urgency: 'low',
  },
]

const URGENCY_STYLES: Record<string, string> = {
  critical: 'bg-red-50 border-red-200',
  high: 'bg-orange-50 border-orange-200',
  medium: 'bg-yellow-50 border-yellow-200',
  low: 'bg-gray-50 border-gray-200',
}

const URGENCY_BADGE: Record<string, string> = {
  critical: 'bg-red-100 text-red-700',
  high: 'bg-orange-100 text-orange-700',
  medium: 'bg-yellow-100 text-yellow-700',
  low: 'bg-gray-100 text-gray-700',
}

export default function UsAiLawsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">TrendSageHub</Link>
        <span>›</span>
        <Link href="/ai-compliance" className="hover:text-indigo-600">AI & Compliance</Link>
        <span>›</span>
        <span className="text-gray-700">US AI Laws by State 2026</span>
      </nav>

      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">US Law</span>
          <span className="text-xs font-semibold bg-red-50 text-red-700 px-2.5 py-1 rounded-full">Active Enforcement</span>
          <span className="text-xs font-semibold bg-orange-50 text-orange-700 px-2.5 py-1 rounded-full">2026 Update</span>
          <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
            <Clock className="w-3 h-3" /> 9 min read
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          US AI Laws by State 2026: Active Enforcement Map
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          There is no federal AI law. What exists instead is a patchwork of state and city laws
          — some actively enforcing with real fines, some months away from taking effect.
          Here is the complete picture.
        </p>
        <div className="mt-4 text-sm text-gray-400">By TrendSage Editorial Team · Updated April 2026</div>
      </header>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
        <div className="flex gap-3">
          <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-blue-800 text-sm">
            <strong>No federal law, but active enforcement exists.</strong> NYC LL144 has been
            enforcing since July 2023. EEOC Title VII guidance on AI hiring was issued in 2023.
            CFPB has been examining AI credit models. Don&apos;t wait for a federal law — state-level
            enforcement is real now.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Currently enforced</h2>
          <div className="space-y-5">
            {ACTIVE_LAWS.map((law, i) => (
              <div key={i} className={`border rounded-xl p-6 ${URGENCY_STYLES[law.urgency]}`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{law.state}</p>
                    <p className="text-gray-700 text-sm">{law.law}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${URGENCY_BADGE[law.urgency]}`}>
                    {law.urgency === 'critical' ? 'Enforcing Now' : 'Active'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3"><strong>Scope:</strong> {law.scope}</p>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-800 mb-1">Requirements:</p>
                  <ul className="space-y-1">
                    {law.requirements.map((req, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-gray-400 mt-0.5">·</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-800">Fine: </span>
                    <span className="text-red-700 font-medium">{law.fine}</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">{law.enforcement}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Coming in 2026</h2>
          <div className="space-y-4">
            {COMING_LAWS.map((law, i) => (
              <div key={i} className={`border rounded-xl p-5 ${URGENCY_STYLES[law.urgency]}`}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <p className="font-bold text-gray-900">{law.state}</p>
                    <p className="text-sm text-gray-600">{law.law}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${URGENCY_BADGE[law.urgency]}`}>
                      {law.effective}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1"><strong>Scope:</strong> {law.scope}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Key requirements:</strong> {law.keyRequirements}</p>
                <p className="text-sm text-gray-600"><strong>Size exemption:</strong> {law.sizeExemption}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The most-regulated use case: hiring AI</h2>
          <p>
            If you use AI in any part of hiring — résumé screening, interview scheduling, assessment scoring,
            candidate ranking — you face more explicit US regulation than any other AI use case.
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Jurisdiction</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Law</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Status</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Key requirement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { jx: 'New York City', law: 'Local Law 144', status: 'Enforcing', req: 'Annual bias audit + public posting + candidate notice' },
                  { jx: 'Illinois', law: 'AIVIA', status: 'Enforcing', req: 'Video interview AI: consent + disclosure + restrictions on sharing' },
                  { jx: 'Colorado', law: 'SB 24-205', status: 'June 2026', req: 'Bias assessment + candidate disclosure + error correction' },
                  { jx: 'EU', law: 'EU AI Act Annex III', status: 'Aug 2026', req: 'Conformity assessment + technical docs + human oversight' },
                  { jx: 'All US', law: 'EEOC Title VII', status: 'Ongoing', req: 'Disparate impact testing; employer responsible for vendor AI' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                    <td className="p-3 border border-gray-200 font-medium">{row.jx}</td>
                    <td className="p-3 border border-gray-200">{row.law}</td>
                    <td className="p-3 border border-gray-200">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${row.status === 'Enforcing' ? 'bg-red-100 text-red-700' : row.status === 'Ongoing' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-3 border border-gray-200 text-gray-600">{row.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to do now</h2>
          <ol className="space-y-3">
            {[
              'Determine if NYC LL144 applies. Any employer using AI tools for hiring decisions affecting NYC positions is covered. "We don\'t have an NYC office" doesn\'t matter if you hire people who work in NYC.',
              'If you use AI to analyse video interviews and candidates are in Illinois: AIVIA compliance is required. Add consent language and disclosure immediately.',
              'Run disparate impact analysis on any AI used in US hiring. Even without a specific state law, EEOC Title VII applies nationally.',
              'Prepare for Colorado AI Act by June 30, 2026. If you have customers in Colorado using your AI for employment, housing, credit, healthcare, or education decisions, start planning now.',
              'Get documentation from your AI vendors. Ask for their bias audit results, technical specifications, and compliance attestations. If they can\'t provide them, that is a red flag.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ComplianceIQ callout */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-indigo-900 mb-1">
                Tool: ComplianceIQ — maps which US AI laws apply to your business
              </p>
              <p className="text-indigo-800 text-sm">
                Enter your AI use cases and operating states. ComplianceIQ maps your obligations
                across all US state AI laws plus the EU AI Act, GDPR, and 100+ other jurisdictions.
                Free risk report with no account required.
              </p>
            </div>
          </div>
          <a
            href="https://trycomplianceiq.com"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Check my US AI compliance obligations <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related articles</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/ai-compliance/eu-ai-act-business-guide-2026', label: 'EU AI Act: What Companies Need to Do Before August 2026', internal: true },
              { href: 'https://trycomplianceiq.com/blog/ai-hiring-tool-compliance', label: 'AI Hiring Tool Compliance: NYC, Colorado, Illinois, EU' },
              { href: 'https://trycomplianceiq.com/blog/colorado-ai-act-guide', label: 'Colorado AI Act: What SB 205 Means for Your Business' },
              { href: 'https://trycomplianceiq.com/compliance', label: 'Browse all 108 jurisdiction compliance guides' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 text-sm border border-gray-200 rounded-lg p-3 hover:border-indigo-300 transition-colors"
              >
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                {item.label}
              </a>
            ))}
          </div>
        </section>

      </div>
    </article>
  )
}
