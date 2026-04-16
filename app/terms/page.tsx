import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Aegis Digital Systems FZE LLC',
  description: 'Terms of service for ComplianceIQ, ScheduleAI, and other Aegis Digital Systems FZE LLC products.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose prose-sm">
      <h1>Terms of Service</h1>
      <p><strong>Last Updated:</strong> April 16, 2026</p>
      <p>
        These Terms of Service ("Terms") govern your use of services provided by
        Aegis Digital Systems FZE LLC ("Aegis", "we", "our", "us"), a Free Zone
        Establishment licensed by Sharjah Publishing City Free Zone, United Arab
        Emirates (License No. 4429288.01).
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using any Aegis product or service (including ComplianceIQ,
        ScheduleAI, TrendSageHub, and our Chrome extensions), you agree to be bound
        by these Terms and our Privacy Policy. If you do not agree, do not use our
        services.
      </p>

      <h2>2. Services</h2>
      <p>
        We provide Software-as-a-Service (SaaS) tools for regulatory compliance and
        construction project scheduling. Services include cloud-hosted applications,
        downloadable browser extensions, and related documentation. Services may
        change over time as we improve them.
      </p>

      <h2>3. Account Registration</h2>
      <p>
        You must provide accurate information when creating an account. You are
        responsible for maintaining the confidentiality of your credentials and for
        all activity under your account. You must be at least 18 years old and
        legally able to enter into contracts.
      </p>

      <h2>4. Subscription and Payment</h2>
      <p>
        Paid subscriptions are billed monthly or annually in advance. Payments are
        processed by our Merchant of Record (Paddle.com Inc. or LemonSqueezy) who
        handles taxes, VAT, and compliance. You authorize automatic renewal until
        cancellation. Prices are in USD unless otherwise stated.
      </p>

      <h2>5. Cancellation</h2>
      <p>
        You may cancel your subscription at any time from your account settings.
        Cancellation stops future billing. Access continues until the end of the
        current billing period. See our <a href="/refund-policy">Refund Policy</a>
        for refund terms.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>
        You may not: (a) use our services for illegal activity; (b) attempt to
        circumvent security; (c) resell or white-label our services without written
        agreement; (d) upload malicious content; (e) violate export control laws;
        (f) use services in connection with weapons, nuclear facilities, or
        sanctioned entities.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        All Aegis software, content, trademarks, and branding are owned by Aegis
        Digital Systems FZE LLC. You retain ownership of data you upload. You grant
        us a limited license to process your data solely to provide the services.
      </p>

      <h2>8. AI-Generated Content Disclaimer</h2>
      <p>
        Some outputs from our services include AI-generated or AI-assisted content.
        Such outputs are labeled "DRAFT" and are provided for informational purposes
        only. They do not constitute legal, financial, medical, or professional
        advice. You are responsible for reviewing outputs with qualified
        professionals before relying on them.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, our total liability for any claim is
        limited to the amount you paid for the services in the twelve months
        preceding the event giving rise to the claim. We are not liable for
        indirect, consequential, incidental, or punitive damages.
      </p>

      <h2>10. Warranty Disclaimer</h2>
      <p>
        Services are provided "AS IS" without warranty of any kind, express or
        implied. We do not warrant that services will be uninterrupted, error-free,
        or meet your specific requirements.
      </p>

      <h2>11. Termination</h2>
      <p>
        We may suspend or terminate your access for violation of these Terms, at our
        discretion. You may terminate your account at any time by cancelling
        subscription and deleting your account from settings.
      </p>

      <h2>12. Changes to Terms</h2>
      <p>
        We may update these Terms. Material changes will be notified 30 days in
        advance by email to your account. Continued use after the effective date
        constitutes acceptance.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Emirate of Sharjah, United Arab
        Emirates. Disputes shall be resolved in the competent courts of Sharjah,
        UAE, unless otherwise required by mandatory consumer protection laws in
        your jurisdiction.
      </p>

      <h2>14. Contact</h2>
      <p>
        Aegis Digital Systems FZE LLC<br />
        Business Centre, Sharjah Publishing City Free Zone<br />
        Sharjah, United Arab Emirates<br />
        Email: <a href="mailto:aegisextensions@proton.me">aegisextensions@proton.me</a>
      </p>
    </main>
  );
}
