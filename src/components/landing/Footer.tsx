'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#070d26',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        padding: 'clamp(48px, 6vw, 80px) 24px 32px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '56px',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #C9A84C, #DFC06E)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 900,
                  color: '#0B1437',
                }}
              >
                P
              </div>
              <span style={{ color: 'white', fontWeight: 800, fontSize: '20px', letterSpacing: '-0.02em' }}>
                PropCopy <span style={{ color: '#C9A84C' }}>AI</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
              Listing copy that closes.
              <br />
              In 10 seconds.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { label: 'X/Twitter', icon: '𝕏', href: '#' },
                { label: 'Instagram', icon: '📷', href: '#' },
                { label: 'LinkedIn', icon: 'in', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '14px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#C9A84C';
                    e.currentTarget.style.color = '#C9A84C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: '14px', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Features', 'Pricing', 'Templates', 'Integrations', 'Roadmap'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: '14px', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About', 'Blog', 'Careers', 'Contact', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: '14px', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Cookie Policy', href: '#' },
                { label: 'DMCA', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider" style={{ marginBottom: '28px' }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>
            © 2025 PropCopy AI. All rights reserved. Not affiliated with any MLS.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>
            Powered by{' '}
            <span style={{ color: 'rgba(201,168,76,0.5)' }}>Claude AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
