'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 29, annual: 24 },
    tagline: 'Perfect for solo agents just getting started',
    generations: '30 generations/month',
    features: [
      '30 AI content generations/month',
      'All 6 content types',
      'Copy & save to library',
      'Basic templates library',
      'Email support',
      '7-day free trial',
    ],
    featured: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    price: { monthly: 59, annual: 49 },
    tagline: 'For agents who list, sell, and market consistently',
    generations: 'Unlimited generations',
    features: [
      'Unlimited AI generations',
      'All 6 content types',
      'Email sequence builder',
      'Priority generation speed',
      'Full templates library',
      'Tone memory',
      'Streak tracker',
      'PDF/CSV export',
      'Priority email support',
      '7-day free trial',
    ],
    featured: true,
    badge: 'Most Popular',
    cta: 'Start Free Trial',
  },
  {
    name: 'Team',
    price: { monthly: 99, annual: 83 },
    tagline: 'For brokerages and teams scaling their marketing',
    generations: 'Unlimited + 5 seats',
    features: [
      'Everything in Pro',
      'Up to 5 agent seats',
      'Shared workspace & library',
      'Team admin dashboard',
      'Brokerage branding',
      'Bulk generation',
      'Usage analytics',
      'Dedicated onboarding call',
      'Slack & priority support',
      '7-day free trial',
    ],
    featured: false,
    cta: 'Start Free Trial',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="mesh-bg"
      style={{ padding: 'clamp(60px, 8vw, 120px) 24px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge-gold" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Simple, transparent pricing
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Invest in your marketing.{' '}
            <span className="gradient-text">Close more deals.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '18px', marginBottom: '32px' }}>
            7-day free trial on all plans. No credit card required.
          </p>

          {/* Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '9999px',
              padding: '6px 6px 6px 20px',
            }}
          >
            <span style={{ color: annual ? 'rgba(255,255,255,0.4)' : 'white', fontWeight: 600, fontSize: '15px' }}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              style={{
                width: '52px',
                height: '28px',
                background: annual ? '#C9A84C' : 'rgba(255,255,255,0.15)',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                transition: 'background 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: 'white',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '3px',
                  left: annual ? '27px' : '3px',
                  transition: 'left 0.3s ease',
                }}
              />
            </button>
            <span style={{ color: annual ? 'white' : 'rgba(255,255,255,0.4)', fontWeight: 600, fontSize: '15px' }}>
              Annual
            </span>
            {annual && (
              <span className="badge-gold" style={{ fontSize: '11px' }}>
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Plans */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="plan-card"
              style={{
                padding: '36px',
                background: plan.featured ? '#0B1437' : 'white',
                border: plan.featured ? '2px solid #C9A84C' : '2px solid transparent',
                color: plan.featured ? 'white' : '#0B1437',
                transform: plan.featured ? 'scale(1.03)' : 'scale(1)',
                boxShadow: plan.featured ? '0 30px 80px rgba(201,168,76,0.25)' : undefined,
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #C9A84C, #DFC06E)',
                    color: '#0B1437',
                    padding: '4px 16px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ✦ {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#C9A84C', marginBottom: '8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {plan.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '48px', fontWeight: 900, letterSpacing: '-0.03em', color: plan.featured ? 'white' : '#0B1437' }}>
                    ${annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span style={{ color: plan.featured ? 'rgba(255,255,255,0.5)' : '#8892A4', fontSize: '15px' }}>
                    /mo
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#C9A84C',
                    background: 'rgba(201,168,76,0.12)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    display: 'inline-block',
                    marginBottom: '12px',
                  }}
                >
                  {plan.generations}
                </div>
                <p style={{ fontSize: '14px', color: plan.featured ? 'rgba(255,255,255,0.55)' : '#8892A4', lineHeight: 1.6 }}>
                  {plan.tagline}
                </p>
              </div>

              <div className="gold-divider" style={{ marginBottom: '24px' }} />

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: plan.featured ? 'rgba(255,255,255,0.8)' : '#374151' }}>
                    <span style={{ color: '#C9A84C', fontWeight: 800, fontSize: '16px', flexShrink: 0, lineHeight: 1.4 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/auth/signup"
                className={plan.featured ? 'btn-gold' : 'btn-outline-gold'}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '14px',
                  fontSize: '15px',
                  textDecoration: 'none',
                  borderColor: plan.featured ? undefined : '#C9A84C',
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.35)', marginTop: '40px', fontSize: '14px' }}>
          All plans include a 7-day free trial. Cancel anytime. Questions?{' '}
          <a href="mailto:hello@propcopyai.com" style={{ color: '#C9A84C', textDecoration: 'none' }}>
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
