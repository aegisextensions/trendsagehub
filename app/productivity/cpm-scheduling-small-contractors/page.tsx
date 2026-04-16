import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CPM Scheduling for Small Contractors: Getting Started Without P6 | TrendSageHub',
  description:
    'A step-by-step guide to building your first CPM schedule as a small contractor — what to include, how to set up logic, meet owner XER requirements, and avoid the most common mistakes.',
  alternates: { canonical: 'https://trendsagehub.com/productivity/cpm-scheduling-small-contractors' },
  openGraph: {
    title: 'CPM Scheduling for Small Contractors: Getting Started Without P6',
    description: 'Build your first CPM schedule without Primavera P6. Step-by-step guide for small and mid-market contractors.',
    type: 'article',
  },
}

export default function CPMSchedulingSmallContractors() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">TrendSageHub</Link>
        <span>›</span>
        <Link href="/productivity" className="hover:text-indigo-600">Productivity</Link>
        <span>›</span>
        <span className="text-gray-700">CPM Scheduling for Small Contractors</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Guide</span>
          <span className="text-gray-400 text-sm">11 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          CPM Scheduling for Small Contractors: Getting Started Without Primavera P6
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          If you&apos;re a small contractor bidding on projects that require a CPM schedule, you&apos;re probably facing two problems: you don&apos;t have a $3,500/year P6 licence, and you&apos;ve never built a CPM schedule before. This guide solves both problems.
        </p>
        <p className="text-xs text-gray-400 mt-4 italic">TrendSageHub covers scheduling tools independently. We recommend <a href="https://getscheduleai.com" className="underline">ScheduleAI</a> for small contractors because it&apos;s the best CPM tool we&apos;ve found at this price point.</p>
      </header>

      <div className="text-gray-700 leading-relaxed space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What &ldquo;CPM Schedule&rdquo; Actually Means</h2>
          <p className="mb-4">
            CPM stands for Critical Path Method. It&apos;s a scheduling technique that calculates the minimum project duration based on activity dependencies. The &ldquo;critical path&rdquo; is the sequence of activities that cannot be delayed without pushing the project completion date.
          </p>
          <p className="mb-4">
            When an owner requires a &ldquo;CPM schedule,&rdquo; they&apos;re asking for a schedule that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Lists all activities required to complete the project</li>
            <li>Shows logical dependencies between activities (what must finish before something else starts)</li>
            <li>Calculates early/late start and finish dates for each activity</li>
            <li>Shows &ldquo;float&rdquo; — how much flexibility each activity has</li>
            <li>Identifies which activities are on the critical path (zero float)</li>
          </ul>
          <p className="mb-4">
            A CPM schedule is fundamentally different from a simple bar chart (where you manually place bars on a timeline). In a real CPM, if one activity takes longer than planned, the software automatically recalculates all downstream dates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Choose Your Tool</h2>
          <p className="mb-4">
            For small contractors, the practical options are:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-3">
            <li>
              <strong><a href="https://getscheduleai.com" className="text-indigo-600 hover:underline">ScheduleAI</a> (recommended)</strong> — browser-based, free for 2 projects, $49/month for paid. Exports P6 XER format, which most owners accept as equivalent to a P6 submittal. You don&apos;t need to buy P6 to meet XER requirements.
            </li>
            <li>
              <strong>ProjectLibre</strong> — free, desktop, no XER export. Good if the owner doesn&apos;t require XER format.
            </li>
            <li>
              <strong>Primavera P6 Professional</strong> — the industry standard, but ~$3,500/year. Only worth it if you&apos;re doing multiple large projects per year.
            </li>
          </ul>
          <p className="mb-4">
            The XER export question matters: some owners specifically require P6 XER files for their project management system. If your contract spec says &ldquo;submit schedule in P6 XER format monthly,&rdquo; you need a tool that exports XER — and ScheduleAI does this without requiring a P6 licence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Build Your Work Breakdown Structure</h2>
          <p className="mb-4">
            Before adding a single activity, organise the project into a Work Breakdown Structure (WBS). The WBS is a hierarchical breakdown of the total project scope. For a typical commercial building project:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 font-mono text-sm space-y-1">
            <p className="font-bold text-gray-800">PROJECT: Office Building, 5-Story</p>
            <p>1.0 Preconstruction</p>
            <p className="pl-4">1.1 Submittals</p>
            <p className="pl-4">1.2 Procurement (long-lead items)</p>
            <p>2.0 Civil and Site</p>
            <p>3.0 Foundations</p>
            <p>4.0 Structural Frame (per level)</p>
            <p>5.0 Building Envelope (skin + roof)</p>
            <p>6.0 MEP Rough-in (per floor)</p>
            <p>7.0 Interior Finishes (per floor)</p>
            <p>8.0 Commissioning</p>
            <p>9.0 Closeout</p>
          </div>
          <p className="mb-4">
            Your WBS should match your contract Scope of Work. If the spec lists 10 major scope items, your WBS should cover all 10. Activities you can&apos;t map to a WBS element probably mean you&apos;re missing scope.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Define Your Activities</h2>
          <p className="mb-4">
            Activities should be sized so that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Each activity is 5–20 working days in duration (if under 5 days, it&apos;s probably too granular; if over 20 days, it probably needs subdividing)</li>
            <li>Each activity has a clear start and end (you&apos;ll know definitively when it starts and when it&apos;s done)</li>
            <li>Each activity can be assigned to one responsible party</li>
          </ul>
          <p className="mb-4">
            Common activities contractors miss that cause problems later:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Submittal preparation and review cycles for each major scope item</li>
            <li>Procurement and delivery activities for long-lead materials</li>
            <li>Inspection activities (particularly for concealed work like MEP rough-in)</li>
            <li>Owner review and approval milestones</li>
            <li>Equipment installation (separate from delivery)</li>
            <li>As-built drawing preparation</li>
            <li>Final inspections, testing, commissioning</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Add Logic (Dependencies)</h2>
          <p className="mb-4">
            This is where most first-time CPM builders make mistakes. Dependencies should reflect <em>physical constraints</em> — what must actually be complete before something else can start.
          </p>
          <p className="mb-4">
            The most important rule: if you could start Activity B before Activity A is finished (given unlimited resources), don&apos;t make it a Finish-to-Start dependency. Instead:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>FS (Finish-to-Start)</strong>: B cannot start until A is 100% complete. Use when A&apos;s physical output is literally required to begin B. Concrete foundation must finish before steel erection starts.</li>
            <li><strong>SS (Start-to-Start)</strong>: B can start when A starts, or shortly after. Use when work can overlap. MEP rough-in can start when framing starts (not after it finishes).</li>
            <li><strong>FF (Finish-to-Finish)</strong>: B must finish when A finishes. Use when two items must complete together.</li>
          </ul>
          <p className="mb-4">
            A good rule of thumb: if you connect every activity with FS dependencies, your schedule will be too long. Real construction has extensive parallel work. Use SS+lag to model work that overlaps but requires the predecessor to be somewhat ahead.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Review the Critical Path</h2>
          <p className="mb-4">
            After entering all activities and logic, the CPM tool calculates the critical path. Review it by asking:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Does the critical path run through the most complex/constrained work? Or does it run through something trivial like cleaning?</li>
            <li>Are there activities with very high float (30+ days)? These probably have missing logic connections.</li>
            <li>Does the calculated completion date match your contract date? If not, you either need to add resources or renegotiate the timeline.</li>
          </ul>
          <p className="mb-4">
            Never &ldquo;force&rdquo; a schedule to hit a target date by compressing activity durations unrealistically. A schedule that shows you&apos;ll finish on time but requires impossible productivity is a liability, not an asset.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Export and Submit</h2>
          <p className="mb-4">
            If your owner requires P6 XER format, export from ScheduleAI or P6. Check what the spec says — most Division 01 specifications for schedule submittals list the required file format.
          </p>
          <p className="mb-4">
            Submit with a narrative that explains:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>The critical path description (in plain language, not just activity IDs)</li>
            <li>Key milestones and their planned dates</li>
            <li>Any assumptions the schedule is based on (owner-furnished equipment delivery, permit dates)</li>
            <li>Dates when you require owner information or site access</li>
          </ul>
          <p className="mb-4">
            That last point — owner information and access dates — is the most important from a claims protection perspective. Document it in the baseline, and you have clear evidence of when the owner&apos;s failure to provide something caused you delay.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Most Common Beginner Mistakes</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li><strong>All FS dependencies.</strong> Makes the schedule far too long and hides parallel work capability. Most construction involves substantial parallel execution between zones and floors.</li>
            <li><strong>Missing submittal and procurement chains.</strong> The single most common reason small contractors get into delay disputes — the schedule shows construction starting before the necessary submittals have been reviewed and materials ordered.</li>
            <li><strong>Never updating the schedule.</strong> A CPM schedule is only useful if it&apos;s updated monthly to reflect actual progress. A schedule frozen at baseline is useless for delay analysis and worthless in a dispute.</li>
            <li><strong>Compressing critical path activities to hit the contract date.</strong> If the CPM says 18 months and the contract says 15, don&apos;t just shorten activities — either add crews, identify parallel work, or discuss the schedule with the owner before signing.</li>
          </ol>
        </section>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mt-10">
          <h3 className="text-lg font-bold text-indigo-900 mb-2">Build your first CPM schedule free</h3>
          <p className="text-indigo-800 mb-4">
            <a href="https://getscheduleai.com" className="font-semibold underline">ScheduleAI</a> is designed for exactly this use case: contractors who need real CPM scheduling with P6 XER export, without a $3,500/year P6 licence. 2 free projects. No credit card.
          </p>
          <a href="https://getscheduleai.com/signup" className="inline-flex px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Start free on ScheduleAI →
          </a>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Resources</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/productivity/best-gantt-chart-software-2026" className="text-indigo-600 hover:underline">
                Best Gantt Chart Software 2026: What Actually Does CPM Scheduling
              </Link>{' '}
              — TrendSageHub
            </li>
            <li>
              <a href="https://getscheduleai.com/blog/critical-path-method-explained" className="text-indigo-600 hover:underline">
                Critical Path Method Explained
              </a>{' '}
              — ScheduleAI Blog
            </li>
            <li>
              <a href="https://getscheduleai.com/blog/total-float-vs-free-float" className="text-indigo-600 hover:underline">
                Total Float vs Free Float: What Every PM Must Know
              </a>{' '}
              — ScheduleAI Blog
            </li>
            <li>
              <a href="https://getscheduleai.com/blog/logic-driven-scheduling-guide" className="text-indigo-600 hover:underline">
                Logic-Driven Scheduling: Building a CPM That Holds Up
              </a>{' '}
              — ScheduleAI Blog
            </li>
          </ul>
        </section>

      </div>
    </div>
  )
}
