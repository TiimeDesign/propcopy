'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TONES = ['Luxury', 'Friendly', 'Investment-focused', 'First-time buyer'];
const CONTENT_TYPES = [
  { id: 'listing', label: 'Listing Descriptions', icon: '🏠' },
  { id: 'social', label: 'Social Media Posts', icon: '📱' },
  { id: 'email', label: 'Buyer Follow-up Emails', icon: '✉️' },
  { id: 'announcement', label: 'Just Listed/Sold', icon: '🏆' },
  { id: 'neighborhood', label: 'Neighborhood Bios', icon: '🌆' },
  { id: 'openhouse', label: 'Open House Announcements', icon: '🎉' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    brokerageName: '',
    preferredTone: 'Friendly',
    topContentTypes: [] as string[],
  });

  const toggleContentType = (id: string) => {
    setForm((prev) => ({
      ...prev,
      topContentTypes: prev.topContentTypes.includes(id)
        ? prev.topContentTypes.filter((t) => t !== id)
        : [...prev.topContentTypes, id],
    }));
  };

  const handleFinish = () => {
    router.push('/dashboard');
  };

  return (
    <div
      className="hero-gradient"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', position: 'relative' }}
    >
      <div className="grid-dots" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      <div style={{ width: '100%', maxWidth: '560px', position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '36px' }}>
          <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #C9A84C, #DFC06E)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 900, color: '#0B1437' }}>P</div>
          <span style={{ color: 'white', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.02em' }}>PropCopy <span style={{ color: '#C9A84C' }}>AI</span></span>
        </Link>

        {/* Progress */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: s <= step ? '#C9A84C' : 'rgba(255,255,255,0.3)',
                  fontWeight: 700, fontSize: '13px',
                }}
              >
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: s < step ? '#C9A84C' : s === step ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.06)',
                  border: s <= step ? '2px solid #C9A84C' : '2px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: 800, color: s < step ? '#0B1437' : s === step ? '#C9A84C' : 'rgba(255,255,255,0.3)',
                }}>
                  {s < step ? '✓' : s}
                </div>
                <span style={{ display: step === s ? 'block' : 'none' }}>
                  {s === 1 ? 'Your Info' : s === 2 ? 'Your Tone' : 'Your Needs'}
                </span>
              </div>
            ))}
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${((step - 1) / 2) * 100}%` }} />
          </div>
        </div>

        <div className="glass-card" style={{ padding: 'clamp(28px, 5vw, 44px)' }}>
          {step === 1 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>👋</div>
                <h1 style={{ fontSize: '24px', fontWeight: 900, color: 'white', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Let&apos;s set up your account
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                  This takes about 60 seconds and helps PropCopy AI personalize your content.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Your Full Name</label>
                  <input
                    type="text" placeholder="Sarah Chen" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-gold" style={{ width: '100%', padding: '13px 16px', fontSize: '15px' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Brokerage Name</label>
                  <input
                    type="text" placeholder="Compass Real Estate" value={form.brokerageName}
                    onChange={(e) => setForm({ ...form, brokerageName: e.target.value })}
                    className="input-gold" style={{ width: '100%', padding: '13px 16px', fontSize: '15px' }}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🎨</div>
                <h1 style={{ fontSize: '24px', fontWeight: 900, color: 'white', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  Choose your writing tone
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                  We&apos;ll remember this and pre-select it for you every time. You can always change it.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {TONES.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setForm({ ...form, preferredTone: tone })}
                    style={{
                      padding: '16px 20px', borderRadius: '12px', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
                      border: form.preferredTone === tone ? '2px solid #C9A84C' : '2px solid rgba(255,255,255,0.1)',
                      background: form.preferredTone === tone ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)',
                      color: form.preferredTone === tone ? '#C9A84C' : 'rgba(255,255,255,0.7)',
                      transition: 'all 0.2s', fontFamily: 'Inter, sans-serif', textAlign: 'left',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}
                  >
                    <span>{tone}</span>
                    {form.preferredTone === tone && <span style={{ color: '#C9A84C', fontSize: '18px' }}>✓</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>📋</div>
                <h1 style={{ fontSize: '24px', fontWeight: 900, color: 'white', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                  What do you write most often?
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                  Select all that apply. We&apos;ll highlight these in your dashboard.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {CONTENT_TYPES.map((ct) => {
                  const selected = form.topContentTypes.includes(ct.id);
                  return (
                    <button
                      key={ct.id}
                      type="button"
                      onClick={() => toggleContentType(ct.id)}
                      style={{
                        padding: '16px', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                        border: selected ? '2px solid #C9A84C' : '2px solid rgba(255,255,255,0.1)',
                        background: selected ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)',
                        color: selected ? '#C9A84C' : 'rgba(255,255,255,0.7)',
                        transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                      }}
                    >
                      <span style={{ fontSize: '22px' }}>{ct.icon}</span>
                      <span>{ct.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="btn-outline-gold"
                style={{ flex: 1, padding: '14px', fontSize: '15px' }}
              >
                ← Back
              </button>
            )}
            <button
              onClick={step < 3 ? () => setStep(step + 1) : handleFinish}
              className="btn-gold"
              style={{ flex: 2, padding: '14px', fontSize: '15px' }}
            >
              {step < 3 ? 'Continue →' : '🚀 Go to Dashboard →'}
            </button>
          </div>

          {step < 3 && (
            <button
              onClick={() => setStep(step + 1)}
              style={{ width: '100%', background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', fontSize: '13px', marginTop: '12px', fontFamily: 'Inter, sans-serif' }}
            >
              Skip this step
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
