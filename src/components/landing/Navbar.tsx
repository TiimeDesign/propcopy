'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled
          ? 'rgba(11,20,55,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
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
              flexShrink: 0,
            }}
          >
            P
          </div>
          <span style={{ color: 'white', fontWeight: 800, fontSize: '20px', letterSpacing: '-0.02em' }}>
            PropCopy <span style={{ color: '#C9A84C' }}>AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          className="mobile-hidden"
          style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
        >
          {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="mobile-hidden"
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <Link
            href="/auth/login"
            style={{
              color: 'rgba(255,255,255,0.75)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '14px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="btn-gold"
            style={{ padding: '10px 24px', fontSize: '14px', textDecoration: 'none' }}
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            padding: '4px',
          }}
          className="mobile-menu-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(11,20,55,0.98)',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
              }}
            >
              {item}
            </a>
          ))}
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/auth/login" style={{ color: '#C9A84C', fontWeight: 600, textDecoration: 'none' }}>
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="btn-gold"
              style={{ padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'block' }}
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-hidden { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
