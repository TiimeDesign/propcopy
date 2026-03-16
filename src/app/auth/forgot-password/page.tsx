'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <div
      className="hero-gradient"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', position: 'relative' }}
    >
      <div className="grid-dots" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div style={{ width: '100%', maxWidth: '440px', position: 'relative', zIndex: 1 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '36px' }}>
          <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #C9A84C, #DFC06E)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 900, color: '#0B1437' }}>P</div>
          <span style={{ color: 'white', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.02em' }}>PropCopy <span style={{ color: '#C9A84C' }}>AI</span></span>
        </Link>

        <div className="glass-card" style={{ padding: 'clamp(28px, 5vw, 44px)' }}>
          {!sent ? (
            <>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔑</div>
                <h1 style={{ fontSize: '24px', fontWeight: 900, color: 'white', marginBottom: '8px', letterSpacing: '-0.02em' }}>Reset your password</h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.6 }}>
                  Enter your email and we&apos;ll send you a secure link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Email Address</label>
                  <input
                    type="email" required placeholder="sarah@realtygroup.com"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="input-gold" style={{ width: '100%', padding: '13px 16px', fontSize: '15px' }}
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-gold" style={{ padding: '15px', fontSize: '15px' }}>
                  {loading ? 'Sending reset link...' : 'Send Reset Link →'}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>✉️</div>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '12px' }}>Check your inbox</h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                We&apos;ve sent a password reset link to <strong style={{ color: '#C9A84C' }}>{email}</strong>.
                Check your spam folder if you don&apos;t see it.
              </p>
              <button onClick={() => setSent(false)} style={{ background: 'none', border: 'none', color: '#C9A84C', cursor: 'pointer', fontWeight: 600, fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>
                Try a different email
              </button>
            </div>
          )}
        </div>

        <p style={{ textAlign: 'center', marginTop: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
          Remembered your password?{' '}
          <Link href="/auth/login" style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: 600 }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
