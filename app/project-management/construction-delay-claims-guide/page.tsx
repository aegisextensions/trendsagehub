import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Delay Claims: A Step-by-Step Guide for Contractors | TrendSageHub',
  description:
    'How contractors win construction delay claims — documenting the delay, identifying the critical path impact, calculating time and money, and avoiding the mistakes that sink claims.',
  alternates: { canonical: 'https://trendsagehub.com/project-management/construction-delay-claims-guide' },
  openGraph: {
    title: 'Construction Delay Claims: A Step-by-Step Guide for Contractors',
    description: 'A practical guide for contractors: how to document, analyse, and win a construction delay claim.',
    type: 'article',
  },
}

export default function ConstructionDelayClaimsGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">TrendSageHub</Link>
        <span>›</span>
        <Link href="/project-management" className="hover:text-indigo-600">Project Management</Link>
        <span>›</span>
        <span className="text-gray-700">Construction Delay Claims Guide</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Delay Claims</span>
          <span className="text-gray-400 text-sm">14 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Construction Delay Claims: A Step-by-Step Guide for Contractors
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Most contractors who deserve delay compensation never get it — not because they don&apos;t have a valid claim, but because they didn&apos;t document it correctly while the project was running. This guide explains how to build a winning delay claim from day one.
        </p>
        <p className="text-xs text-gray-400 mt-4 italic">TrendSageHub is an independent publication. We recommend <a href="https://getscheduleai.com" className="underline">ScheduleAI</a> for CPM scheduling and delay analysis because it&apos;s the best tool we&apos;ve found at the price point accessible to mid-market contractors.</p>
      </header>

      <div className="text-gray-700 leading-relaxed space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Difference Between a Delay and a Delay Claim</h2>
          <p className="mb-4">
            A delay is an event that causes work to take longer than planned. A delay claim is the legal argument that a specific party (usually the employer/owner) caused a specific delay that entitles the contractor to additional time, money, or both.
          </p>
          <p className="mb-4">
            Most delays on construction projects are caused by a mix of events from both sides — some employer-caused, some contractor-caused, some force majeure. A delay claim requires you to separate these causes and prove that the employer&apos;s events caused specific, demonstrable harm to your project completion date.
          </p>
          <p className="mb-4">
            The three things every winning delay claim must prove:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li><strong>Entitlement:</strong> The contract or law gives you the right to claim for this type of event. (Not all delays are compensable — some are excusable but not compensable.)</li>
            <li><strong>Causation:</strong> The employer&apos;s event actually caused the delay you experienced — you must prove the causal link through critical path analysis.</li>
            <li><strong>Quantum:</strong> You can quantify the time and money impact with evidence — contemporaneous records, not retrospective estimates.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Delay: What Can You Claim?</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Delay Type</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Time Extension?</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Money Claim?</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-green-50">
                  <td className="px-4 py-2 font-medium">Employer-caused, compensable</td>
                  <td className="px-4 py-2 text-green-700">✓ Yes</td>
                  <td className="px-4 py-2 text-green-700">✓ Yes</td>
                  <td className="px-4 py-2">Late drawings, access denial, scope change</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Force majeure, excusable</td>
                  <td className="px-4 py-2 text-green-700">✓ Yes</td>
                  <td className="px-4 py-2 text-red-600">✗ No</td>
                  <td className="px-4 py-2">Flood, earthquake, pandemic</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 font-medium">Weather (above baseline)</td>
                  <td className="px-4 py-2 text-green-700">✓ Yes</td>
                  <td className="px-4 py-2 text-gray-500">Depends on contract</td>
                  <td className="px-4 py-2">Rainfall exceeding historical average</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Contractor-caused</td>
                  <td className="px-4 py-2 text-red-600">✗ No</td>
                  <td className="px-4 py-2 text-red-600">✗ No</td>
                  <td className="px-4 py-2">Labour shortage, equipment failure</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-4 py-2 font-medium">Concurrent delay</td>
                  <td className="px-4 py-2 text-amber-600">~ Partial</td>
                  <td className="px-4 py-2 text-red-600">✗ Often no</td>
                  <td className="px-4 py-2">Employer and contractor both causing delay at same time</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4">
            The most common compensable delay events: late information (drawings, specifications, approvals), late access to the site or work areas, employer-directed variations that extend the programme, late delivery of employer-supplied materials or equipment, and engineer/architect review periods that exceed the contractually allowed time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Give Notice — Before It&apos;s Too Late</h2>
          <p className="mb-4">
            The most common reason contractors lose delay claims is failing to give notice on time. Most construction contracts — FIDIC, NEC, JCT, AIA — require you to notify the employer of a delay event within a fixed period (typically 14–28 days) of the event occurring or of you becoming aware of it.
          </p>
          <p className="mb-4">
            Under FIDIC 2017, Sub-Clause 20.2 makes the 28-day notice a <strong>condition precedent</strong> — missing the deadline extinguishes your entitlement entirely, even if the claim is completely valid. NEC4 is similarly strict. Miss the notice and you may have no claim at all.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-amber-900 mb-2">Practical rule: Give notice early and often</p>
            <p className="text-sm text-amber-800">It costs nothing to send a notice letter. Write it, send it, track it. &apos;Without prejudice&apos; or &apos;reservation of rights&apos; language is fine if the full extent of the delay is not yet known — what matters is that you flagged the event within the deadline. You can quantify and substantiate later.</p>
          </div>
          <p className="mb-4">
            Keep a <strong>claims register</strong>: a spreadsheet logging every potential delay event with (a) the event, (b) the date it occurred/was discovered, (c) the notice deadline, (d) whether notice was given, and (e) the reference number of your notice letter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Prove Critical Path Impact</h2>
          <p className="mb-4">
            The most important question in any delay claim is: did this event actually push the project completion date? Float is the key concept here. If an activity has 15 days of float and the employer delays it by 10 days, the project completion date is not affected — you don&apos;t have a claim for time extension (you might still have a disruption claim for costs).
          </p>
          <p className="mb-4">
            The standard tool for proving critical path impact is the Critical Path Method (CPM) schedule. Every delay claim must be supported by a CPM analysis showing:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The baseline (approved) programme showing the as-planned critical path</li>
            <li>The as-built schedule showing what actually happened and when</li>
            <li>The delay events mapped onto the critical path</li>
            <li>The calculated extension to the completion date caused by the employer&apos;s events</li>
          </ul>
          <p className="mb-4">
            The four delay analysis methodologies accepted in international arbitration — from most to least defensible:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><strong>Time Impact Analysis (TIA):</strong> Each delay event is modelled prospectively at the time it occurred, using the schedule as it stood at that point. Most defensible, requires contemporaneous records.</li>
            <li><strong>Windows Analysis:</strong> The project period is divided into windows; the critical path is calculated within each window. Good for projects with multiple delay events.</li>
            <li><strong>Collapsed As-Built (But-For):</strong> Start with the as-built schedule and remove the employer&apos;s delay events to model what would have happened without them. Less preferred, subject to hindsight bias.</li>
            <li><strong>Global Impact / Total Time:</strong> Simply calculate the total delay and attribute it to the employer. Rarely accepted in arbitration without strong supporting evidence.</li>
          </ol>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-blue-900 mb-2">Why you need a CPM schedule — not just a Gantt chart</p>
            <p className="text-sm text-blue-800">A Gantt bar chart does not calculate critical path or float. An employer who challenges your delay claim will immediately attack any claim based on a bar chart as not meeting the standard for delay analysis. You need a CPM schedule with forward pass/backward pass calculations, float values, and logic links between activities.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Quantify the Money — Time-Related Costs</h2>
          <p className="mb-4">
            A time extension only protects you from liquidated damages. To recover money for prolongation — the cost of being on site longer than planned — you need to quantify the time-related costs attributable to the employer&apos;s delay.
          </p>
          <p className="mb-4">
            The standard categories of prolongation costs:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Site overheads:</strong> Site manager, site office, temporary utilities, welfare facilities, security — the daily running cost of the site during the delay period.</li>
            <li><strong>Plant and equipment on standby:</strong> Cranes, hoists, formwork, scaffolding held on-site because work cannot proceed.</li>
            <li><strong>Head office overhead contribution:</strong> The delay prevents you from freeing up management resources for other work. Typically calculated using the Hudson, Emden, or Eichleay formula.</li>
            <li><strong>Loss of profit:</strong> In some jurisdictions and contracts, you can claim the profit you would have earned on other work during the delay period.</li>
            <li><strong>Finance charges:</strong> Interest on delayed payment and the cost of financing extended project overhead.</li>
            <li><strong>Escalation:</strong> On long delays, the cost of materials and labour increases.</li>
          </ul>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">The Hudson Formula (head office overhead)</h3>
            <p className="text-sm text-gray-600 mb-2">
              Head Office Overhead Claim = (Head Office % ÷ 100) × (Contract Sum ÷ Contract Period in weeks) × Delay Period in weeks
            </p>
            <p className="text-sm text-gray-500">Where Head Office % is your historic overhead recovery rate from your accounts (typically 5–15%). Must be proven from audited accounts — not an estimate.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Build the Evidence File</h2>
          <p className="mb-4">
            A delay claim is only as strong as its documentary evidence. You need contemporaneous records — documents created at the time, not retrospective reconstructions. The evidence file you should be building from day one:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Daily site reports:</strong> Activities performed, manpower on site, equipment in use, weather conditions, visitors, instructions received. A good daily report proves what was happening on every day of the project.</li>
            <li><strong>RFI/submittal log:</strong> Every request for information with the date submitted, date responded, and any comments. Late responses become your evidence of employer delay.</li>
            <li><strong>Programme updates:</strong> Monthly schedule updates submitted to the engineer, each showing progress against the baseline. These become the &apos;as-built&apos; record for delay analysis.</li>
            <li><strong>Correspondence:</strong> Every letter, email, and meeting minute where a delay event was raised. These establish that the employer was aware of the delay and its impact.</li>
            <li><strong>Site photographs:</strong> Dated photographs of actual conditions — access problems, incomplete areas, sequencing issues.</li>
            <li><strong>Cost records:</strong> Payroll records, plant hire invoices, subcontractor applications — the raw data that supports your quantum calculation.</li>
          </ul>
          <p className="mb-4">
            <strong>Critical point:</strong> Many contractors keep good records for the first 6 months of a project and then let the discipline slip as the project gets busy. The delay that eventually gives rise to the claim often happens in month 14. If months 10–16 have no daily reports, you have a serious evidentiary gap.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The 5 Mistakes That Sink Delay Claims</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Failing to give notice on time.</strong> The most common. Even if your claim is 100% valid, a missed notice can extinguish your entitlement under FIDIC, NEC, and most bespoke contracts.
            </li>
            <li>
              <strong>Submitting a claim without CPM analysis.</strong> A narrative claim with a Gantt chart will be challenged and likely rejected. Critical path analysis is not optional on any claim above $100K.
            </li>
            <li>
              <strong>Confusing delay with disruption.</strong> A delay claim is for extension of time (and prolongation costs). A disruption claim is for loss of productivity — work that cost more than planned because the employer&apos;s actions made the work harder, not just longer. These require different analysis and must be clearly separated.
            </li>
            <li>
              <strong>Ignoring your own concurrent delays.</strong> If the employer proves that a contractor-caused delay was running concurrently with the employer-caused delay, your time extension may be reduced or eliminated (depending on jurisdiction). Identify and address concurrent delays proactively — don&apos;t pretend they don&apos;t exist.
            </li>
            <li>
              <strong>Submitting a claim too late.</strong> Most contracts have a final claims deadline (often 28–56 days after substantial completion or the end of the defects period). Submitting after this deadline may bar your claim entirely.
            </li>
          </ol>
        </section>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-10">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Build the CPM schedule your delay claim needs</h3>
          <p className="text-blue-800 mb-4 text-sm">
            ScheduleAI builds CPM schedules with full forward pass/backward pass calculation, float analysis, and P6-compatible XER export. Start your baseline schedule now — before you need it for a claim. Free for 2 projects.
          </p>
          <a
            href="https://getscheduleai.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Try ScheduleAI free →
          </a>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Reading</h2>
          <ul className="space-y-2">
            <li><Link href="/project-management/primavera-p6-alternatives-2026" className="text-indigo-600 hover:underline">Best Free Primavera P6 Alternatives 2026</Link></li>
            <li><a href="https://getscheduleai.com/blog/delay-claim-construction-guide" className="text-indigo-600 hover:underline">How to Win a Construction Delay Claim — ScheduleAI</a></li>
            <li><a href="https://getscheduleai.com/blog/concurrent-delay-construction-guide" className="text-indigo-600 hover:underline">Concurrent Delay in Construction — ScheduleAI</a></li>
            <li><a href="https://getscheduleai.com/blog/time-impact-analysis-construction" className="text-indigo-600 hover:underline">Time Impact Analysis (TIA) Explained — ScheduleAI</a></li>
          </ul>
        </section>

      </div>
    </div>
  )
}
