import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing — Aegis Products',
  description: 'Transparent pricing for ComplianceIQ and ScheduleAI. Enterprise-grade software at small-business prices.',
};

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Pricing</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Transparent, flat-fee pricing. No surprises. Cancel anytime.
        </p>
      </header>

      {/* ComplianceIQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-2">ComplianceIQ — AI Compliance Scanner</h2>
        <p className="text-gray-600 mb-6">Know which AI regulations apply to your business. 150+ jurisdictions covered.</p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold">Free</h3>
            <p className="text-3xl font-bold mt-2">$0</p>
            <p className="text-gray-500 text-sm mb-4">Demo tier</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• 1 jurisdiction tracked</li>
              <li>• Basic risk scan</li>
              <li>• 3-task roadmap preview</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold">Starter</h3>
            <p className="text-3xl font-bold mt-2">$49<span className="text-sm text-gray-500">/mo</span></p>
            <p className="text-gray-500 text-sm mb-4">For solo founders</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• 5 jurisdictions</li>
              <li>• Full compliance roadmap</li>
              <li>• 30-day deadline alerts</li>
              <li>• 5 documents/mo (from templates)</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 border-indigo-500 border-2">
            <h3 className="font-semibold">Pro</h3>
            <p className="text-3xl font-bold mt-2">$149<span className="text-sm text-gray-500">/mo</span></p>
            <p className="text-gray-500 text-sm mb-4">For small teams</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• All 150+ jurisdictions</li>
              <li>• Unlimited documents</li>
              <li>• 30/7/1-day alerts</li>
              <li>• Audit trail export</li>
              <li>• 3 team seats</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold">Business</h3>
            <p className="text-3xl font-bold mt-2">$299<span className="text-sm text-gray-500">/mo</span></p>
            <p className="text-gray-500 text-sm mb-4">Growing companies</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Everything in Pro</li>
              <li>• 10 team seats</li>
              <li>• API access</li>
              <li>• Priority support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ScheduleAI */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-2">ScheduleAI — Construction Scheduling</h2>
        <p className="text-gray-600 mb-6">Primavera P6 replacement. DCMA 14-point diagnostic included.</p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold">Free</h3>
            <p className="text-3xl font-bold mt-2">$0</p>
            <p className="text-gray-500 text-sm mb-4">Demo tier</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• 1 project, 20 activities</li>
              <li>• Manual entry only</li>
              <li>• Watermarked exports</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold">Starter</h3>
            <p className="text-3xl font-bold mt-2">$29<span className="text-sm text-gray-500">/mo</span></p>
            <p className="text-gray-500 text-sm mb-4">Solo contractors</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• 5 projects</li>
              <li>• Full CPM engine</li>
              <li>• XER/MPP/Excel import</li>
              <li>• 1 diagnostic/mo</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6 border-indigo-500 border-2">
            <h3 className="font-semibold">Pro</h3>
            <p className="text-3xl font-bold mt-2">$99<span className="text-sm text-gray-500">/mo</span></p>
            <p className="text-gray-500 text-sm mb-4">Mid contractors</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Unlimited projects</li>
              <li>• 10 diagnostics/mo</li>
              <li>• Resource leveling</li>
              <li>• Multi-baseline</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold">Business</h3>
            <p className="text-3xl font-bold mt-2">$199<span className="text-sm text-gray-500">/mo</span></p>
            <p className="text-gray-500 text-sm mb-4">Larger teams</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Unlimited diagnostics</li>
              <li>• 5 team seats</li>
              <li>• Delay analysis</li>
              <li>• API access</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center text-sm text-gray-600 border-t pt-8">
        <p>All prices in USD. 7-day free trial on paid plans. Cancel anytime from account settings.</p>
        <p className="mt-2">Payments processed by Paddle.com as our Merchant of Record. Prices exclude applicable taxes.</p>
        <p className="mt-4">
          Questions? <Link href="/contact" className="text-indigo-600 underline">Contact us</Link>
        </p>
      </section>
    </main>
  );
}
