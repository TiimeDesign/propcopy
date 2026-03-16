'use client';

import { useState } from 'react';
import Link from 'next/link';

const DEMO_OUTPUT = `Welcome to 147 Sunset Ridge Drive — where modern luxury meets effortless California living. This stunning 4-bedroom, 3-bath residence spans 2,847 square feet of thoughtfully designed space, featuring an open floor plan that flows seamlessly from the chef-inspired kitchen to the expansive living area.

Entertain in style with the resort-style pool and spa, or retreat to the state-of-the-art smart home sanctuary where every detail has been curated for your comfort. Gleaming hardwood floors, soaring ceilings, and walls of glass frame breathtaking mountain views that will take your breath away morning and evening.

The gourmet kitchen boasts quartz countertops, premium appliances, and a waterfall island perfect for hosting. The primary suite is a private retreat with spa-like bath and walk-in closet. Three additional bedrooms offer flexible space for family, guests, or a home office.

Located minutes from top-rated schools, dining, and shopping, this exceptional home offers the lifestyle you've always dreamed of. Priced to move — schedule your private tour today.`;

export default function Hero() {
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [demoUsed, setDemoUsed] = useState(false);

  const handleDemo = async () => {
    if (!address.trim()) return;
    setLoading(true);
    // Simulate AI generation delay
    await new Promise((r) => setTimeout(r, 2200));
    setOutput(DEMO_OUTPUT);
    setDemoUsed(true);
    setLoading(false);
  };

  return (
    <section
      className="hero-gradient"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid dots */}
      <div
        className="grid-dots"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
        }}
      />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(17,33,85,0.8) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div className="animate-fade-in" style={{ marginBottom: '24px' }}>
          <span className="badge-gold">
            ✦ Built exclusively for real estate agents
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up"
          style={{
            fontSize: 'clamp(42px, 8vw, 80px)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: 'white',
            letterSpacing: '-0.03em',
            marginBottom: '24px',
          }}
        >
          Stop Writing.{' '}
          <span className="gradient-text">Start Closing.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-in-up"
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto 48px',
            animationDelay: '0.1s',
          }}
        >
          PropCopy AI generates listing descriptions, social posts, buyer emails,
          and more in <strong style={{ color: '#C9A84C' }}>10 seconds</strong> —
          built exclusively for real estate agents.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up"
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '64px',
            animationDelay: '0.2s',
          }}
        >
          <Link
            href="/auth/signup"
            className="btn-gold animate-pulse-glow"
            style={{ padding: '16px 36px', fontSize: '16px', textDecoration: 'none' }}
          >
            Start Free 7-Day Trial →
          </Link>
          <a
            href="#demo"
            className="btn-outline-gold"
            style={{ padding: '16px 36px', fontSize: '16px' }}
          >
            See Live Demo
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="animate-fade-in"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(24px, 5vw, 64px)',
            flexWrap: 'wrap',
            marginBottom: '72px',
            animationDelay: '0.3s',
          }}
        >
          {[
            { num: '12,000+', label: 'Active Agents' },
            { num: '2.4M+', label: 'Listings Generated' },
            { num: '10 sec', label: 'Avg. Generation Time' },
            { num: '4.9★', label: 'Agent Rating' },
          ].map((stat) => (
            <div key={stat.num} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800, color: '#C9A84C' }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Live Demo Widget */}
        <div id="demo" className="glass-card animate-fade-in-up" style={{ padding: 'clamp(24px, 4vw, 40px)', animationDelay: '0.4s' }}>
          <div style={{ marginBottom: '24px' }}>
            <div className="badge-gold" style={{ marginBottom: '12px', display: 'inline-block' }}>
              Try it free — no signup required
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>
              Generate a Listing Description in 10 Seconds
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
              Enter an address and a few details to see PropCopy AI in action
            </p>
          </div>

          {!output ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input
                type="text"
                placeholder="Property address (e.g. 147 Sunset Ridge Drive, Malibu CA)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input-gold"
                style={{ width: '100%', padding: '14px 18px', fontSize: '15px' }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                {[
                  { placeholder: 'Bedrooms (e.g. 4)' },
                  { placeholder: 'Bathrooms (e.g. 3)' },
                  { placeholder: 'Sq ft (e.g. 2,847)' },
                ].map((f) => (
                  <input
                    key={f.placeholder}
                    type="text"
                    placeholder={f.placeholder}
                    className="input-gold"
                    style={{ padding: '12px 14px', fontSize: '14px' }}
                  />
                ))}
              </div>
              <textarea
                placeholder="Key features (e.g. Pool, Mountain Views, New Kitchen, Smart Home, Hardwood Floors)"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="input-gold"
                rows={3}
                style={{ width: '100%', padding: '14px 18px', fontSize: '14px', resize: 'none' }}
              />
              <button
                onClick={handleDemo}
                disabled={!address.trim() || loading}
                className="btn-gold"
                style={{ padding: '16px', fontSize: '16px', width: '100%' }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#0B1437" strokeWidth="3" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0110 10" stroke="#0B1437" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    PropCopy AI is writing your listing...
                  </span>
                ) : (
                  '✦ Generate Free Listing Description →'
                )}
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: '15px' }}>
                  ✓ Generated in 2.1 seconds
                </span>
                <button
                  onClick={() => { setOutput(''); setAddress(''); setDetails(''); setDemoUsed(false); }}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: '13px' }}
                >
                  Try again
                </button>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'left',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '15px',
                  lineHeight: 1.75,
                  maxHeight: '300px',
                  overflowY: 'auto',
                }}
              >
                {output}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigator.clipboard.writeText(output)}
                  className="btn-gold"
                  style={{ padding: '12px 24px', fontSize: '14px' }}
                >
                  Copy to Clipboard
                </button>
                <Link
                  href="/auth/signup"
                  className="btn-outline-gold"
                  style={{ padding: '12px 24px', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                >
                  Sign Up for Unlimited →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
