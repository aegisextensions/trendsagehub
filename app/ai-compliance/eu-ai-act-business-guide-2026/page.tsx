import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Clock, Shield, CheckCircle, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'EU AI Act: What Companies Actually Need to Do Before August 2026',
  description:
    'The EU AI Act high-risk compliance deadline is August 2, 2026. Conformity assessments take 3–6 months. This is the practical business guide: what to do first, what can wait, and what is already banned.',
  openGraph: {
    title: 'EU AI Act: What Companies Actually Need to Do Before August 2026',
    description:
      'EU AI Act high-risk compliance deadline is August 2, 2026. The practical guide: what to do first, what is already banned, and how long conformity assessment actually takes.',
  },
  alternates: { canonical: 'https://trendsagehub.com/ai-compliance/eu-ai-act-business-guide-2026' },
}

export default function EuAiActBusinessGuide() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">TrendSageHub</Link>
        <span>›</span>
        <Link href="/ai-compliance" className="hover:text-indigo-600">AI & Compliance</Link>
        <span>›</span>
        <span className="text-gray-700">EU AI Act Business Guide</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-semibold bg-red-50 text-red-700 px-2.5 py-1 rounded-full">EU AI Act</span>
          <span className="text-xs font-semibold bg-red-50 text-red-700 px-2.5 py-1 rounded-full">Aug 2 Deadline</span>
          <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
            <Clock className="w-3 h-3" /> 10 min read
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          EU AI Act: What Companies Actually Need to Do Before August 2026
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          The EU AI Act has multiple deadlines, not one. Some things are already banned.
          Some things require compliance by August 2026. Most companies are focused on
          the wrong things. This guide cuts through the noise.
        </p>
        <div className="mt-4 text-sm text-gray-400">
          By TrendSage Editorial Team · Updated April 2026
        </div>
      </header>

      {/* Deadline callout */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-10">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-red-900 mb-1">August 2, 2026: 108 days away</p>
            <p className="text-red-800 text-sm">
              High-risk AI system compliance requires technical documentation, conformity assessment,
              bias testing, and human oversight implementation. Complex systems need 3–6 months of
              preparation. If you haven't started, you're already behind.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What's already in force (don't skip this)</h2>
          <p>
            Most coverage focuses on the August 2026 deadline. But the EU AI Act is already
            partially in force, and two categories of obligation apply <strong>right now</strong>:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-3">Prohibited AI (in force since February 2025)</h3>
          <p>
            Eight categories of AI are completely banned in the EU. No transition period,
            no exceptions for existing systems. If you have any of these in production,
            you need to disable them before you read another paragraph:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              'Social scoring by governments or public authorities',
              'AI using subliminal techniques to manipulate behaviour against users\' interests',
              'AI that exploits vulnerabilities of children or people with disabilities',
              'Real-time remote biometric identification in public spaces for law enforcement (with narrow exceptions)',
              'Emotion recognition systems in workplaces or education institutions',
              'Biometric categorisation to infer race, political opinions, religious beliefs, or sexuality',
              'AI that predicts crime risk based on profiling (not concrete evidence)',
              'Untargeted scraping of faces from the internet or CCTV to build facial recognition databases',
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm bg-red-50 border border-red-200 rounded-lg p-3 text-red-800">
            Fine for using prohibited AI: up to <strong>€35 million or 7% of global annual turnover</strong>, whichever is higher.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">General Purpose AI transparency (in force August 2025)</h3>
          <p>
            If you make a foundation model or general-purpose AI (GPAI) model available in the EU —
            including via API — you already have transparency obligations:
            technical documentation, copyright compliance policy, and disclosure about what data
            was used for training. Providers of models above 10²⁵ FLOPS in training compute
            ("systemic risk" threshold) have additional requirements including adversarial testing
            and incident reporting.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The August 2, 2026 deadline: high-risk AI</h2>
          <p>
            This is what most companies need to focus on. If your AI falls into the high-risk
            category under Annex III of the Act, you must be compliant by August 2, 2026.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-5 mb-3">What counts as high-risk</h3>
          <p>Annex III lists eight categories of high-risk AI:</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            {[
              { area: 'Biometric systems', examples: 'Face recognition, emotion analysis, biometric categorisation' },
              { area: 'Critical infrastructure', examples: 'Power grids, water systems, transportation safety systems' },
              { area: 'Education', examples: 'AI that determines access to education or vocational training, assessment AI' },
              { area: 'Employment and HR', examples: 'CV screening, interview analysis, hiring decisions, performance monitoring' },
              { area: 'Essential services', examples: 'Credit scoring, insurance underwriting, social benefit eligibility' },
              { area: 'Law enforcement', examples: 'Risk assessment for crime, evidence evaluation, polygraph tools' },
              { area: 'Migration and asylum', examples: 'Risk assessment of people crossing borders' },
              { area: 'Justice administration', examples: 'AI used by courts or arbitration bodies in dispute resolution' },
            ].map((item, i) => (
              <div key={i} className="border border-orange-200 bg-orange-50 rounded-lg p-3">
                <p className="font-semibold text-orange-900 text-sm">{item.area}</p>
                <p className="text-orange-800 text-xs mt-1">{item.examples}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Important:</strong> High-risk classification applies to the AI system, not the company.
            If your SaaS product is used by HR departments for hiring, it is high-risk regardless of
            your company's size or location. If your AI affects EU residents, the Act applies to you.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What compliance actually requires</h3>
          <div className="space-y-3">
            {[
              {
                step: '1. Technical documentation',
                detail: 'A complete record of how the system was designed, trained, tested, and validated. Must include training data description, performance metrics, bias testing methodology, and known limitations. Takes 4–12 weeks to produce properly for a complex system.',
                time: '4–12 weeks',
              },
              {
                step: '2. Risk management system',
                detail: 'An ongoing process for identifying, analysing, evaluating, and mitigating risks throughout the system lifecycle. Must be documented and maintained.',
                time: '2–4 weeks',
              },
              {
                step: '3. Data governance',
                detail: 'Training, validation, and testing data must meet quality criteria. Bias testing across demographic groups must be documented. Data lineage must be traceable.',
                time: '4–8 weeks',
              },
              {
                step: '4. Transparency and user information',
                detail: 'Users must receive clear information about the AI system\'s capabilities, limitations, and how to interpret its outputs. Automated decisions affecting individuals must be explainable.',
                time: '1–2 weeks',
              },
              {
                step: '5. Human oversight design',
                detail: 'The system must be designed for meaningful human oversight — not checkbox rubber-stamping. Humans must be able to understand, monitor, override, and halt the system. This must be built in, not bolted on.',
                time: '4–8 weeks',
              },
              {
                step: '6. Conformity assessment',
                detail: 'For most high-risk systems: self-assessment against the EU AI Act requirements using internal review. For biometric systems and some other categories: mandatory third-party assessment by a notified body.',
                time: '4–8 weeks',
              },
              {
                step: '7. EU AI database registration',
                detail: 'Register the AI system in the EU\'s public AI database before placing it on the market. Requires basic technical information about the system.',
                time: '1–2 weeks',
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 flex gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p className="font-semibold text-gray-900">{item.step}</p>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{item.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How long this actually takes</h2>
          <p>
            For a straightforward high-risk AI system with good existing documentation, a compliance
            program can be completed in 3–4 months. For complex systems — multi-model pipelines,
            systems with significant automated decision-making, biometric components — 6–9 months
            is realistic.
          </p>
          <p className="mt-3">
            August 2, 2026 is 108 days away as of April 2026. That is too short for a 6-month project.
            Companies with complex high-risk AI that have not started are in a difficult position.
            The practical options are:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-sm">Start immediately and prioritise the highest-risk elements (prohibited practices, documentation, human oversight)</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-sm">Consider limiting EU availability of non-compliant systems until compliance is achieved</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
              <span className="text-sm">Engage legal counsel with EU AI Act expertise to scope the work and identify the fastest path to compliance</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who this applies to (the extra-territorial question)</h2>
          <p>
            The EU AI Act applies to:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2 text-sm">
              <span className="text-indigo-600 font-bold mt-0.5">·</span>
              <span>Providers that place AI systems on the EU market or put them into service in the EU</span>
            </li>
            <li className="flex gap-2 text-sm">
              <span className="text-indigo-600 font-bold mt-0.5">·</span>
              <span>Deployers of AI systems located in the EU</span>
            </li>
            <li className="flex gap-2 text-sm">
              <span className="text-indigo-600 font-bold mt-0.5">·</span>
              <span><strong>Providers and deployers in third countries (including the US) where the output of their AI is used in the EU</strong></span>
            </li>
          </ul>
          <p className="mt-4">
            The third point is critical. A US company whose AI product is used by EU businesses — even
            if the US company itself has no EU office — is in scope if the AI's output affects people
            in the EU. This is the same extra-territorial model as GDPR.
          </p>
          <p className="mt-3">
            OpenAI's ChatGPT was suspended in Italy over GDPR compliance. The EU enforces against
            non-EU companies. Don't assume distance provides protection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to do right now (prioritised)</h2>
          <ol className="space-y-3">
            {[
              'Check for prohibited practices immediately. If any of the 8 banned categories apply, disable them. This is the highest urgency.',
              'Take inventory of your AI systems. List every AI your company uses or offers, what decisions it affects, and who it affects.',
              'Classify each system against Annex III. Is it high-risk? If uncertain, legal counsel familiar with the Act is worthwhile here.',
              'For each high-risk system: assign an owner and start technical documentation now. Every week you delay is a week you don\'t have for the other steps.',
              'Check if GPAI transparency obligations apply if you provide foundation models or fine-tuned models via API.',
              'For EU-facing products: appoint an EU representative if required (similar to GDPR representative).',
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

        {/* ComplianceIQ callout — clearly our tool, not hidden */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-indigo-900 mb-1">
                Tool: ComplianceIQ — check your EU AI Act obligations in 2 minutes
              </p>
              <p className="text-indigo-800 text-sm">
                We built ComplianceIQ to answer the question this article raises: which specific
                EU AI Act obligations apply to your AI systems based on what they do?
                The free risk report maps your obligations across 108 jurisdictions — no account required.
              </p>
            </div>
          </div>
          <a
            href="https://trycomplianceiq.com"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
          >
            Get your free EU AI Act risk report <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Further reading</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/ai-compliance/us-ai-laws-by-state-2026', label: 'US AI Laws by State 2026: Active Enforcement Map' },
              { href: 'https://trycomplianceiq.com/blog/eu-ai-act-timeline', label: 'EU AI Act Timeline: Every Deadline Explained' },
              { href: 'https://trycomplianceiq.com/blog/eu-ai-act-annex-iii-high-risk', label: 'EU AI Act Annex III: High-Risk Categories Guide' },
              { href: 'https://trycomplianceiq.com/checklist/eu-ai-act', label: 'EU AI Act Compliance Checklist 2026' },
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
