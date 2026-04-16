import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TrendSageHub — Tech Intelligence for Builders',
    template: '%s | TrendSageHub',
  },
  description:
    'Expert analysis of AI regulation, productivity tools, privacy technology, and business software. Practical intelligence for founders, developers, and operators.',
  metadataBase: new URL('https://trendsagehub.com'),
  openGraph: { siteName: 'TrendSageHub', type: 'website' },
  robots: { index: true, follow: true },
}

const NAV_LINKS = [
  { href: '/ai-compliance', label: 'AI & Compliance' },
  { href: '/productivity', label: 'Productivity' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/project-management', label: 'Project Management' },
  { href: '/business', label: 'Business' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-white text-gray-900 antialiased`}>
        {/* Header */}
        <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-gray-900 flex items-center gap-2">
              <span className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">T</span>
              TrendSageHub
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-100 mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center text-white text-xs font-bold">T</span>
                  TrendSageHub
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Expert analysis of AI regulation, productivity tools, and privacy technology
                  for founders, developers, and operators.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Topics</h3>
                <ul className="space-y-2">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Products we cover</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>
                    <a href="https://trycomplianceiq.com" className="hover:text-gray-900">
                      ComplianceIQ — AI compliance scanner
                    </a>
                  </li>
                  <li>
                    <a href="https://getscheduleai.com" className="hover:text-gray-900">
                      ScheduleAI — Project scheduling
                    </a>
                  </li>
                  <li>
                    <a href="https://tradeflowapps.com" className="hover:text-gray-900">
                      TradeFlow — Service business CRM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-gray-400">© 2026 TrendSageHub. All rights reserved.</p>
              <div className="flex gap-4 text-xs text-gray-400">
                <Link href="/privacy-policy" className="hover:text-gray-600">Privacy</Link>
                <Link href="/terms" className="hover:text-gray-600">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
