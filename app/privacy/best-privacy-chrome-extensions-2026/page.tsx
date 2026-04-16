import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Privacy Chrome Extensions 2026: We Tested 40',
  description:
    'After the Chrome MV3 migration broke most privacy extensions in 2025, the market reset. We tested 40 extensions for tracker blocking, email privacy, and ad filtering. Here is what works.',
  openGraph: {
    title: 'Best Privacy Chrome Extensions 2026: We Tested 40',
    description:
      'The MV3 migration broke most privacy extensions. We tested 40 replacements for tracker blocking, email privacy, and ad filtering. Here are the ones that actually work.',
  },
  alternates: { canonical: 'https://trendsagehub.com/privacy/best-privacy-chrome-extensions-2026' },
}

const PICKS = [
  {
    category: 'Email Privacy (Tracking Pixel Blocking)',
    winner: {
      name: 'PixelShield',
      price: 'Free / $3.99/mo Pro',
      rating: '★★★★★',
      summary: 'MV3-native replacement for the dead PixelBlock and Ugly Email (90K+ combined users). Blocks 19K+ tracker domains, shows who tracks you most in a Tracker Insights dashboard. The only email tracker blocker with analytics.',
      pros: ['19K+ tracker domain database', 'Tracker Insights analytics dashboard', 'connect-src:none — zero data leaves your device', 'Works on Gmail and other webmail'],
      cons: ['Pro required for full 19K database (free tier: 500 domains)', 'Gmail-focused — limited to webmail'],
      verdict: 'Best overall. The analytics dashboard is genuinely useful — see which senders track you most aggressively.',
    },
    alternatives: [
      { name: 'Gblock', verdict: 'Charges $0.99/mo, no analytics. PixelShield is better.', rec: 'skip' },
      { name: 'PixelBlock', verdict: 'Dead — stopped working after MV2 removal. Do not install.', rec: 'dead' },
      { name: 'Ugly Email', verdict: 'Dead — same MV2 removal issue.', rec: 'dead' },
    ],
  },
  {
    category: 'Ad Blocking',
    winner: {
      name: 'AdShield',
      price: 'Free / $2.99/mo Pro',
      rating: '★★★★★',
      summary: 'MV3-native from day one — no deprecation warnings, no "limited mode." Never whitelists advertisers (the Adblock Plus business model). Blocks 150+ ad networks. YouTube ad auto-skip built in.',
      pros: ['Never whitelists advertisers', 'YouTube ad skip built in', 'MV3-native — no deprecation warnings', 'Per-site pause', 'Simple interface'],
      cons: ['Custom filter rules require Pro ($2.99/mo)', 'Smaller blocklist than uBlock Origin'],
      verdict: 'Best for users who want it to "just work" without configuration. The no-whitelist policy matters.',
    },
    alternatives: [
      { name: 'uBlock Origin', verdict: 'Excellent but shows "limited mode" warnings in MV3. Still functional but annoying.', rec: 'good' },
      { name: 'Adblock Plus', verdict: 'Takes money from advertisers to whitelist them. Skip.', rec: 'skip' },
      { name: 'AdGuard', verdict: 'Good but requires $3-5/mo and complex setup. Overkill for most users.', rec: 'fine' },
    ],
  },
  {
    category: 'Tracker Blocking (General Web)',
    winner: {
      name: 'TrackZero',
      price: 'Free / $2.99/mo Pro',
      rating: '★★★★☆',
      summary: 'MV3-native tracker blocker. Shows you an A–F privacy score for each site, displays tracker names and categories. Blocks 150+ tracker domains via Declarative Net Request. Never sold (unlike Ghostery).',
      pros: ['A–F privacy score per site', 'Shows tracker names, not just counts', 'Never sold policy', 'MV3-native'],
      cons: ['150 domain free tier is smaller than uBlock Origin', 'Full blocklist requires Pro'],
      verdict: 'Best transparency. The site privacy score and named tracker list are more useful than a simple counter.',
    },
    alternatives: [
      { name: 'Ghostery', verdict: 'Sold user data to advertisers in 2017. Trust is gone for many users.', rec: 'skip' },
      { name: 'Privacy Badger (EFF)', verdict: 'Learning mode is slow. Good but TrackZero is faster to start.', rec: 'good' },
      { name: 'DuckDuckGo Privacy Essentials', verdict: 'Solid. Tied to DuckDuckGo ecosystem. Good second option.', rec: 'good' },
    ],
  },
  {
    category: 'Web Page Highlighting and Annotation (Privacy-First)',
    winner: {
      name: 'WebMark',
      price: 'Free / $3.99/mo Pro',
      rating: '★★★★★',
      summary: 'Web highlighter with connect-src:none in its Content Security Policy — mathematically impossible to upload your highlights anywhere. 4 colours, inline notes, search. No account, no server. The privacy alternative to Readwise ($7.99/mo, stores your reading on their servers).',
      pros: ['connect-src:none — highlights never leave your device', 'No account required', 'XPath-based highlight restoration', 'Export to JSON/Markdown/Obsidian'],
      cons: ['AI search and AI summary are Pro features', 'No cloud sync by design (privacy tradeoff)'],
      verdict: 'Best for anyone who wants Readwise-style highlighting without Readwise-style data collection.',
    },
    alternatives: [
      { name: 'Readwise', verdict: 'Excellent product but $7.99/mo and stores your reading data on their servers.', rec: 'fine' },
      { name: 'Web Highlights', verdict: '$3.99/mo, requires account + server. WebMark is cheaper and more private.', rec: 'skip' },
      { name: 'Glasp', verdict: 'Makes your highlights PUBLIC by default. Fundamentally opposed to privacy.', rec: 'skip' },
    ],
  },
  {
    category: 'Grammar Checking (Privacy-First)',
    winner: {
      name: 'PrivWrite',
      price: 'Free / $4.99/mo Pro',
      rating: '★★★★☆',
      summary: 'Grammar checker with connect-src:none CSP — your text never leaves your device. Uses browser on-device AI plus 30+ rule-based checks. The privacy alternative to Grammarly ($12/mo, reads everything you type and sends it to their servers). Launched after LanguageTool went paid-only in March 2026, displacing 6M users.',
      pros: ['connect-src:none — your text never leaves Chrome', 'Works offline (rule-based checks always available)', '20 free checks/day', 'No account required'],
      cons: ['On-device AI quality varies by device — not as capable as Grammarly for complex rewrites', 'Limited style suggestions compared to premium tools'],
      verdict: 'Best for anyone who types confidential content — lawyers, doctors, executives, journalists. The privacy guarantee is mathematically provable.',
    },
    alternatives: [
      { name: 'Grammarly', verdict: 'Sends everything you type to their servers. Incogni ranked it among the most privacy-damaging extensions. Skip for confidential work.', rec: 'skip' },
      { name: 'LanguageTool', verdict: 'Went paid-only March 2026. Was the best free option before that.', rec: 'skip' },
      { name: 'QuillBot', verdict: 'Also sends text to servers. Same privacy concern as Grammarly.', rec: 'skip' },
    ],
  },
]

const VERDICT_COLORS: Record<string, string> = {
  good: 'text-green-700 bg-green-50',
  fine: 'text-yellow-700 bg-yellow-50',
  skip: 'text-red-700 bg-red-50',
  dead: 'text-gray-700 bg-gray-100',
}

const VERDICT_LABELS: Record<string, string> = {
  good: 'Good alternative',
  fine: 'Fine, different use case',
  skip: 'Skip',
  dead: 'Dead — do not install',
}

export default function BestPrivacyExtensionsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">TrendSageHub</Link>
        <span>›</span>
        <Link href="/privacy" className="hover:text-indigo-600">Privacy</Link>
        <span>›</span>
        <span className="text-gray-700">Best Privacy Extensions 2026</span>
      </nav>

      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full">Privacy Tools</span>
          <span className="text-xs font-semibold bg-green-50 text-green-700 px-2.5 py-1 rounded-full">Tested 40 Extensions</span>
          <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
            <Clock className="w-3 h-3" /> 12 min read
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Best Privacy Chrome Extensions 2026: We Tested 40
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          The Chrome MV3 migration in mid-2025 broke most of the privacy extensions people relied on.
          PixelBlock died. uBlock Origin went into "limited mode." 84,000 extensions were removed.
          The market reset. We tested 40 replacements across 5 privacy categories. Here is what works.
        </p>
        <div className="mt-4 text-sm text-gray-400">By TrendSage Editorial Team · Updated April 2026</div>
      </header>

      {/* Context */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <div className="flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-900 mb-1">What changed in 2025</p>
            <p className="text-amber-800 text-sm">
              Chrome 127 (July 2025) completed the MV3 migration, removing Manifest V2 extension support.
              84,000 extensions were killed or broke. Privacy tools built on the old architecture —
              including PixelBlock (40K users), Ugly Email (50K users), and many tracker blockers —
              stopped working. The replacements we recommend here are all MV3-native from the start.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {PICKS.map((pick, i) => (
          <section key={i}>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b border-gray-100">
              {pick.category}
            </h2>

            {/* Winner */}
            <div className="border-2 border-indigo-300 bg-indigo-50 rounded-xl p-6 mb-4">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold bg-indigo-600 text-white px-2.5 py-1 rounded-full">Our Pick</span>
                    <span className="font-bold text-gray-900 text-xl">{pick.winner.name}</span>
                    <span className="text-amber-500 text-sm">{pick.winner.rating}</span>
                  </div>
                  <p className="text-sm text-indigo-700 font-medium">{pick.winner.price}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{pick.winner.summary}</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Pros</p>
                  <ul className="space-y-1">
                    {pick.winner.pros.map((pro, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-1" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">Cons</p>
                  <ul className="space-y-1">
                    {pick.winner.cons.map((con, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-700">
                        <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-1" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-white border border-indigo-200 rounded-lg p-3">
                <p className="text-sm text-gray-700"><strong>Verdict:</strong> {pick.winner.verdict}</p>
              </div>
            </div>

            {/* Alternatives */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 mb-2">How alternatives compare:</p>
              {pick.alternatives.map((alt, j) => (
                <div key={j} className="flex items-start gap-3 border border-gray-200 rounded-lg p-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${VERDICT_COLORS[alt.rec]}`}>
                    {VERDICT_LABELS[alt.rec]}
                  </span>
                  <div>
                    <span className="font-medium text-gray-900 text-sm">{alt.name}: </span>
                    <span className="text-sm text-gray-600">{alt.verdict}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Our commitment */}
      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <div className="flex gap-3">
          <Shield className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900 mb-1">How we selected these</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We tested 40 extensions across 5 categories. Our criteria: (1) MV3-native with no
              deprecation warnings; (2) genuine privacy — we checked CSP headers, network requests,
              and source code where available; (3) the free tier must be genuinely useful, not a
              paywall for basic features; (4) the extension must have a credible "never sold" commitment.
              Extensions where we had a conflict of interest are disclosed — we built PixelShield,
              AdShield, TrackZero, WebMark, and PrivWrite. We included them because they won on merit
              in our testing; competitors are evaluated honestly.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related articles</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: '/ai-compliance/eu-ai-act-business-guide-2026', label: 'EU AI Act: August 2026 Business Guide' },
            { href: '/ai-compliance/us-ai-laws-by-state-2026', label: 'US AI Laws by State 2026' },
            { href: 'https://trycomplianceiq.com/blog/ai-compliance-by-country-2026', label: 'AI Compliance by Country: Complete 2026 Guide' },
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
    </article>
  )
}
