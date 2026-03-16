'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How does PropCopy AI generate content?',
    a: "PropCopy AI uses Claude — Anthropic's state-of-the-art AI — fine-tuned for real estate copywriting. You provide the property details and we handle the rest, generating professional, MLS-ready content in seconds.",
  },
  {
    q: 'Is the content MLS-compliant?',
    a: 'Yes. All listing descriptions are written in professional real estate language and formatted for MLS submission. We avoid fair housing violations and follow industry best practices. Always review before submitting.',
  },
  {
    q: 'Can I customize my agent branding?',
    a: "Absolutely. In Account Settings, you can set up your Agent Bio with your name, brokerage, license number, and preferred tone. This information pre-populates all your future generations, ensuring every piece of content reflects your brand.",
  },
  {
    q: 'What counts as a generation?',
    a: "One generation = one complete AI output. For example, clicking 'Generate' on the Listing Description tab produces three versions (full, short, teaser) — all from a single generation credit.",
  },
  {
    q: 'Can I cancel anytime?',
    a: "Yes, completely. No contracts, no cancellation fees. Cancel anytime from your Account Settings. You'll continue to have access through the end of your current billing period.",
  },
  {
    q: 'Does the free trial require a credit card?',
    a: "No! Your 7-day free trial starts the moment you sign up — no credit card required. We'll ask for payment info when you're ready to continue after the trial.",
  },
  {
    q: 'What if I need more than 30 generations on Starter?',
    a: "You can upgrade to Pro (unlimited) at any time from your Account Settings. Upgrades are instant and prorated — you only pay the difference for the remainder of the month.",
  },
  {
    q: 'Is there a mobile app?',
    a: "PropCopy AI is fully mobile-responsive and works perfectly in any browser on your phone or tablet. Since agents are always on the go, we designed the entire platform with mobile in mind first.",
  },
  {
    q: 'How does the Team plan work?',
    a: "The Team plan gives you 5 agent seats under one account. Each agent gets their own login and profile, but shares the workspace, library, and admin oversight with the team lead. Perfect for brokerages and teams.",
  },
  {
    q: 'Do you offer integrations with MLS platforms?',
    a: "We're building direct integrations with popular MLS platforms. Currently, you can copy content with one click and paste anywhere. Deeper integrations with MLS systems are on our roadmap for Q2 2025.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{ background: '#F5F6FA', padding: 'clamp(60px, 8vw, 120px) 24px' }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="badge-navy" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Frequently asked questions
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#0B1437',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Everything you need to know
          </h2>
          <p style={{ color: '#8892A4', fontSize: '17px' }}>
            Still have questions?{' '}
            <a href="mailto:hello@propcopyai.com" style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: 600 }}>
              We&apos;re happy to help.
            </a>
          </p>
        </div>

        {/* FAQ items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item" style={{ overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: open === i ? '#C9A84C' : '#0B1437',
                    transition: 'color 0.2s',
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    background: open === i ? '#C9A84C' : 'rgba(11,20,55,0.08)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    color: open === i ? '#0B1437' : '#8892A4',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 20px', color: '#4B5563', fontSize: '15px', lineHeight: 1.75 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
