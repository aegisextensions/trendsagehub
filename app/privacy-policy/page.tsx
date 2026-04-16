import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Aegis Digital Systems FZE LLC',
  description: 'How we collect, use, and protect your data. GDPR-aligned, privacy-first.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose prose-sm">
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> April 16, 2026</p>
      <p>
        Aegis Digital Systems FZE LLC ("we", "our", "us") respects your privacy. This
        Privacy Policy describes how we collect, use, and protect your information
        when you use our products (ComplianceIQ, ScheduleAI, TrendSageHub, Chrome
        extensions).
      </p>

      <h2>1. Data Controller</h2>
      <p>
        Aegis Digital Systems FZE LLC, Business Centre, Sharjah Publishing City Free
        Zone, Sharjah, United Arab Emirates. Contact:{' '}
        <a href="mailto:aegisextensions@proton.me">aegisextensions@proton.me</a>.
      </p>

      <h2>2. Data We Collect</h2>
      <ul>
        <li><strong>Account data:</strong> email address, name (if provided), password (hashed via Supabase Auth)</li>
        <li><strong>Organization data:</strong> company name, industry, jurisdictions of operation (you provide this during onboarding)</li>
        <li><strong>Usage data:</strong> features used, frequency, counts for rate limiting</li>
        <li><strong>Content you create:</strong> compliance assessments, project schedules, documents — stored in your dedicated Supabase row</li>
        <li><strong>Payment data:</strong> processed entirely by Paddle.com or LemonSqueezy (Merchant of Record); we never see your card details</li>
        <li><strong>Technical data:</strong> IP address, browser user agent, timestamps — for security and audit logging</li>
      </ul>

      <h2>3. What We Do NOT Collect</h2>
      <p>We do not use Google Analytics, Meta Pixel, Hotjar, or other tracking scripts. We do not sell, rent, or share your data with third parties for advertising. We do not track you across websites.</p>

      <h2>4. Legal Basis for Processing (GDPR)</h2>
      <ul>
        <li><strong>Contract:</strong> processing necessary to provide services you signed up for</li>
        <li><strong>Legitimate interest:</strong> security, fraud prevention, service improvement</li>
        <li><strong>Consent:</strong> optional features like email newsletters (opt-in only)</li>
        <li><strong>Legal obligation:</strong> tax records, compliance with law enforcement requests</li>
      </ul>

      <h2>5. How We Use Your Data</h2>
      <ul>
        <li>To provide and maintain the services</li>
        <li>To process payments through our Merchant of Record</li>
        <li>To send transactional emails (account verification, password reset, payment receipts)</li>
        <li>To enforce rate limits, usage quotas, and prevent abuse</li>
        <li>To respond to support requests you submit via in-app feedback</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>6. Data Sharing</h2>
      <p>We share data only with service providers necessary to operate our services:</p>
      <ul>
        <li><strong>Supabase</strong> (database hosting, EU region)</li>
        <li><strong>Cloudflare</strong> (CDN, hosting, DDoS protection)</li>
        <li><strong>Paddle.com / LemonSqueezy</strong> (payment processing, Merchant of Record)</li>
        <li><strong>Resend</strong> (transactional email delivery)</li>
      </ul>
      <p>Each provider has signed Data Processing Agreements compliant with GDPR.</p>

      <h2>7. Data Retention</h2>
      <p>
        We retain your data while your account is active. Upon account deletion,
        personal data is permanently deleted within 30 days, except where retention
        is required by law (e.g., tax records: 7 years). You can delete your account
        from settings at any time.
      </p>

      <h2>8. International Data Transfers</h2>
      <p>
        Data is primarily stored in the European Union (Supabase EU West — Ireland).
        If you are outside the EU, your data may be processed in the EU. Appropriate
        safeguards (Standard Contractual Clauses) are in place.
      </p>

      <h2>9. Your Rights (GDPR + Similar)</h2>
      <ul>
        <li><strong>Access:</strong> request a copy of your data (available as JSON/CSV export in settings)</li>
        <li><strong>Rectification:</strong> correct inaccurate data in your account settings</li>
        <li><strong>Erasure:</strong> delete your account and all associated data (one-click in settings)</li>
        <li><strong>Portability:</strong> export your data in machine-readable format</li>
        <li><strong>Objection:</strong> object to processing for marketing purposes</li>
        <li><strong>Restriction:</strong> request we limit processing in certain cases</li>
        <li><strong>Complaint:</strong> lodge a complaint with your local data protection authority</li>
      </ul>
      <p>
        To exercise these rights, email{' '}
        <a href="mailto:aegisextensions@proton.me">aegisextensions@proton.me</a>.
      </p>

      <h2>10. Security</h2>
      <p>
        Data in transit is encrypted with TLS 1.3. Data at rest is encrypted via
        Supabase. Row-level security enforces tenant isolation. Access controls,
        audit logs, and regular security reviews are in place.
      </p>

      <h2>11. Cookies</h2>
      <p>
        We use only essential cookies (authentication session). No advertising or
        tracking cookies. No consent banner required as we use no non-essential
        cookies.
      </p>

      <h2>12. Children's Privacy</h2>
      <p>
        Our services are intended for business users aged 18 and over. We do not
        knowingly collect data from children under 16. If you believe a child has
        provided us data, contact us for deletion.
      </p>

      <h2>13. Changes to This Policy</h2>
      <p>
        We may update this policy. Material changes will be notified 30 days in
        advance by email. The "Last Updated" date reflects the most recent change.
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
