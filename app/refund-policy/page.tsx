import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy — Aegis Digital Systems FZE LLC',
  description: 'Our 14-day refund guarantee for new subscriptions.',
};

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose prose-sm">
      <h1>Refund Policy</h1>
      <p><strong>Last Updated:</strong> April 16, 2026</p>
      <p>
        This Refund Policy describes our refund terms for Aegis Digital Systems FZE
        LLC products, including ComplianceIQ, ScheduleAI, and related SaaS services.
      </p>

      <h2>1. 14-Day Money-Back Guarantee</h2>
      <p>
        All <strong>new paid subscriptions</strong> are eligible for a full refund
        within 14 days of the initial purchase if you are not satisfied with the
        service. To request a refund:
      </p>
      <ul>
        <li>
          Email <a href="mailto:aegisextensions@proton.me">aegisextensions@proton.me</a>
          within 14 days of the original purchase date
        </li>
        <li>Include: account email, product name, date of purchase, and reason for refund</li>
        <li>Refunds are processed within 5-10 business days to the original payment method</li>
      </ul>

      <h2>2. Renewals</h2>
      <p>
        Renewal charges (after the initial 14-day period) are <strong>not refundable</strong>.
        To avoid renewal, cancel your subscription at least 24 hours before the
        renewal date from account settings.
      </p>

      <h2>3. Prorated Refunds</h2>
      <p>
        We do not offer prorated refunds for unused portions of a billing period.
        When you cancel, your subscription remains active until the end of the
        current billing period.
      </p>

      <h2>4. Downgrades</h2>
      <p>
        You may downgrade from a higher tier (e.g., Pro to Starter) at any time. The
        downgrade takes effect at the next renewal. No refund is issued for the
        difference in the current period.
      </p>

      <h2>5. Non-Refundable Items</h2>
      <ul>
        <li>One-time purchases (e.g., Pro license keys for Chrome extensions)</li>
        <li>Add-on services (custom integrations, extra seats beyond included)</li>
        <li>Third-party fees (payment processor fees, currency conversion fees)</li>
        <li>Subscriptions that have been used substantially (e.g., 100+ AI document generations, 20+ schedule diagnostics) — at our discretion</li>
      </ul>

      <h2>6. Free Trial</h2>
      <p>
        Our 7-day free trial (where offered) allows full product testing. If you do
        not cancel before the trial ends, you are billed for the first month. The
        14-day refund guarantee applies from the first billing date, not the trial
        start date.
      </p>

      <h2>7. Chargebacks</h2>
      <p>
        If you believe a charge is unauthorized or incorrect, please contact us
        first before initiating a chargeback with your bank. Chargebacks initiated
        without contacting us may result in immediate account suspension. We will
        always work in good faith to resolve billing issues.
      </p>

      <h2>8. Exceptional Circumstances</h2>
      <p>
        If our service has been substantially unavailable (e.g., extended outage of
        our own making, not third-party infrastructure), we may issue partial
        refunds or service credits at our discretion. Contact us for such cases.
      </p>

      <h2>9. Payment Processor Policies</h2>
      <p>
        Our payment processor (Paddle.com Inc. or LemonSqueezy, acting as Merchant
        of Record) may have additional refund policies that complement ours. In case
        of conflict, the more favorable policy for you applies.
      </p>

      <h2>10. How to Request a Refund</h2>
      <p>
        Email{' '}
        <a href="mailto:aegisextensions@proton.me">aegisextensions@proton.me</a> with
        the subject line "Refund Request". Include:
      </p>
      <ul>
        <li>Your account email</li>
        <li>Product name (ComplianceIQ or ScheduleAI)</li>
        <li>Date of original purchase</li>
        <li>Order or transaction ID (from your receipt)</li>
        <li>Reason for refund (optional but helps us improve)</li>
      </ul>
      <p>Response within 2 business days.</p>

      <h2>11. Contact</h2>
      <p>
        Aegis Digital Systems FZE LLC<br />
        Business Centre, Sharjah Publishing City Free Zone<br />
        Sharjah, United Arab Emirates<br />
        Email: <a href="mailto:aegisextensions@proton.me">aegisextensions@proton.me</a>
      </p>
    </main>
  );
}
