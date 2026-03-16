'use client';

import { useState } from 'react';
import { useToast } from '@/components/ui/Toast';

const TONES = ['Luxury', 'Friendly', 'Investment-focused', 'First-time buyer'];
const BILLING_HISTORY = [
  { date: 'Mar 1, 2025', amount: '$29.00', plan: 'Starter', status: 'Paid', invoice: '#INV-2025-003' },
  { date: 'Feb 1, 2025', amount: '$29.00', plan: 'Starter', status: 'Paid', invoice: '#INV-2025-002' },
  { date: 'Jan 1, 2025', amount: '$29.00', plan: 'Starter', status: 'Paid', invoice: '#INV-2025-001' },
];

export default function SettingsPage() {
  const { showToast } = useToast();
  const [activeSection, setActiveSection] = useState('profile');
  const [profile, setProfile] = useState({
    name: 'Sarah Chen',
    email: 'sarah@compass.com',
    brokerageName: 'Compass Real Estate',
    licenseNumber: 'CA12345678',
    preferredTone: 'Luxury',
    agentBio: 'Top-producing luxury real estate agent in the Beverly Hills and Malibu markets with over 15 years of experience. Specializing in estates over $2M and delivering white-glove service to discerning clients.',
    phone: '(310) 555-0192',
    website: 'sarahchen.compass.com',
  });

  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
    showToast('Settings saved successfully! ✓');
  };

  const sections = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'subscription', label: 'Subscription', icon: '⭐' },
    { id: 'billing', label: 'Billing History', icon: '🧾' },
    { id: 'agentbio', label: 'Agent Bio Builder', icon: '✍️' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'referral', label: 'Referral Program', icon: '🎁' },
  ];

  return (
    <div style={{ padding: 'clamp(20px, 3vw, 36px)' }}>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 900, color: '#0B1437', letterSpacing: '-0.02em', marginBottom: '4px' }}>
          Account Settings ⚙️
        </h1>
        <p style={{ color: '#8892A4', fontSize: '15px' }}>Manage your profile, subscription, and preferences.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px', alignItems: 'start' }}>
        {/* Side nav */}
        <div className="content-card" style={{ padding: '12px' }}>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                width: '100%', padding: '11px 14px', borderRadius: '10px', fontSize: '14px', fontWeight: 600,
                cursor: 'pointer', border: 'none', display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left',
                background: activeSection === s.id ? 'rgba(201,168,76,0.1)' : 'transparent',
                color: activeSection === s.id ? '#C9A84C' : '#8892A4',
                borderLeft: activeSection === s.id ? '3px solid #C9A84C' : '3px solid transparent',
                transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
                marginBottom: '2px',
              }}
            >
              <span style={{ fontSize: '16px' }}>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="content-card" style={{ padding: '28px' }}>
          {/* Profile */}
          {activeSection === 'profile' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1437', marginBottom: '24px' }}>Profile Information</h2>

              {/* Avatar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px' }}>
                <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #C9A84C, #A8893A)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', fontWeight: 800, color: '#0B1437', flexShrink: 0 }}>
                  SC
                </div>
                <div>
                  <button style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '8px', padding: '8px 16px', color: '#C9A84C', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif', marginBottom: '6px', display: 'block' }}>
                    Upload Headshot
                  </button>
                  <p style={{ color: '#8892A4', fontSize: '12px' }}>JPG, PNG up to 5MB</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                {[
                  { label: 'Full Name', key: 'name', placeholder: 'Sarah Chen' },
                  { label: 'Email Address', key: 'email', placeholder: 'sarah@compass.com' },
                  { label: 'Phone', key: 'phone', placeholder: '(310) 555-0192' },
                  { label: 'Website', key: 'website', placeholder: 'yourwebsite.com' },
                  { label: 'Brokerage Name', key: 'brokerageName', placeholder: 'Compass Real Estate' },
                  { label: 'License Number', key: 'licenseNumber', placeholder: 'CA12345678' },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>{field.label}</label>
                    <input
                      type="text"
                      value={profile[field.key as keyof typeof profile] as string}
                      onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="input-light"
                      style={{ width: '100%', padding: '11px 14px', fontSize: '14px' }}
                    />
                  </div>
                ))}
              </div>

              {/* Preferred tone */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>
                  Default Writing Tone (Tone Memory)
                </label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {TONES.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setProfile({ ...profile, preferredTone: tone })}
                      style={{
                        padding: '9px 18px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                        border: profile.preferredTone === tone ? '1.5px solid #C9A84C' : '1.5px solid rgba(11,20,55,0.12)',
                        background: profile.preferredTone === tone ? 'rgba(201,168,76,0.1)' : 'rgba(11,20,55,0.03)',
                        color: profile.preferredTone === tone ? '#C9A84C' : '#8892A4', transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handleSave} disabled={saving} className="btn-gold" style={{ padding: '12px 28px', fontSize: '14px' }}>
                {saving ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          )}

          {/* Subscription */}
          {activeSection === 'subscription' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1437', marginBottom: '24px' }}>Subscription & Usage</h2>

              {/* Current plan */}
              <div style={{ background: 'rgba(11,20,55,0.04)', border: '1.5px solid rgba(11,20,55,0.08)', borderRadius: '14px', padding: '24px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#8892A4', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Current Plan</div>
                    <div style={{ fontSize: '24px', fontWeight: 900, color: '#0B1437' }}>Starter</div>
                    <div style={{ color: '#8892A4', fontSize: '14px' }}>$29/month · 30 generations</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#8892A4', textTransform: 'uppercase', marginBottom: '4px' }}>Next billing</div>
                    <div style={{ color: '#0B1437', fontWeight: 700 }}>April 1, 2025</div>
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', color: '#374151', fontWeight: 600 }}>Generations Used</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#C9A84C' }}>18 / 30</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>

              {/* Upgrade plans */}
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0B1437', marginBottom: '16px' }}>Upgrade Your Plan</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                {[
                  { name: 'Pro', price: '$59', gens: 'Unlimited', features: ['Unlimited generations', 'Email sequences', 'PDF/CSV export', 'Priority speed'], color: '#8B9CF4' },
                  { name: 'Team', price: '$99', gens: 'Unlimited + 5 seats', features: ['Everything in Pro', '5 agent seats', 'Shared workspace', 'Admin dashboard'], color: '#C9A84C' },
                ].map((plan) => (
                  <div key={plan.name} style={{ background: 'rgba(11,20,55,0.04)', border: '1.5px solid rgba(11,20,55,0.08)', borderRadius: '12px', padding: '20px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#0B1437', marginBottom: '4px' }}>{plan.name}</div>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: plan.color, marginBottom: '4px' }}>{plan.price}<span style={{ fontSize: '14px', color: '#8892A4', fontWeight: 600 }}>/mo</span></div>
                    <div style={{ fontSize: '12px', color: '#C9A84C', fontWeight: 700, marginBottom: '12px' }}>{plan.gens}</div>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {plan.features.map((f) => <li key={f} style={{ fontSize: '13px', color: '#374151', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#C9A84C' }}>✓</span>{f}</li>)}
                    </ul>
                    <button className="btn-gold" style={{ width: '100%', padding: '11px', fontSize: '13px' }}>
                      Upgrade to {plan.name}
                    </button>
                  </div>
                ))}
              </div>

              <button style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '13px', cursor: 'pointer', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                Cancel subscription
              </button>
            </div>
          )}

          {/* Billing History */}
          {activeSection === 'billing' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1437', marginBottom: '24px' }}>Billing History</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(11,20,55,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', padding: '12px 20px', background: 'rgba(11,20,55,0.04)', fontSize: '11px', fontWeight: 700, color: '#8892A4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <span>Date</span><span>Amount</span><span>Plan</span><span>Status</span><span>Invoice</span>
                </div>
                {BILLING_HISTORY.map((row) => (
                  <div key={row.invoice} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', padding: '16px 20px', background: 'white', fontSize: '14px', alignItems: 'center' }}>
                    <span style={{ color: '#374151', fontWeight: 600 }}>{row.date}</span>
                    <span style={{ color: '#0B1437', fontWeight: 700 }}>{row.amount}</span>
                    <span style={{ color: '#8892A4' }}>{row.plan}</span>
                    <span style={{ color: '#52C97A', fontWeight: 700, fontSize: '12px' }}>● {row.status}</span>
                    <a href="#" style={{ color: '#C9A84C', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}>{row.invoice} ↓</a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agent Bio Builder */}
          {activeSection === 'agentbio' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1437', marginBottom: '8px' }}>Agent Bio Builder</h2>
              <p style={{ color: '#8892A4', fontSize: '14px', marginBottom: '24px' }}>
                Your bio pre-populates all future generations with your name and branding automatically.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Agent Bio</label>
                  <textarea
                    value={profile.agentBio}
                    onChange={(e) => setProfile({ ...profile, agentBio: e.target.value })}
                    className="input-light"
                    rows={6}
                    placeholder="Tell us about yourself — your experience, specializations, and what makes you unique..."
                    style={{ width: '100%', padding: '14px', fontSize: '14px', resize: 'vertical' }}
                  />
                  <p style={{ color: '#8892A4', fontSize: '12px', marginTop: '6px' }}>{profile.agentBio.length} / 500 characters recommended</p>
                </div>
                <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '12px', padding: '18px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: '#C9A84C', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Preview — How it appears in AI generations</p>
                  <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, fontStyle: 'italic' }}>
                    &ldquo;{profile.agentBio || 'Your bio will appear here...'}&rdquo;<br />
                    <span style={{ color: '#8892A4', fontStyle: 'normal', fontSize: '13px', marginTop: '8px', display: 'block' }}>— {profile.name}, {profile.brokerageName}</span>
                  </p>
                </div>
                <button onClick={handleSave} disabled={saving} className="btn-gold" style={{ padding: '12px 28px', fontSize: '14px', alignSelf: 'flex-start' }}>
                  {saving ? 'Saving...' : 'Save Bio'}
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeSection === 'notifications' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1437', marginBottom: '24px' }}>Notification Preferences</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Weekly Summary Email', desc: 'Get a weekly report of how much time you saved (calculated at ~15 min/generation)', enabled: true },
                  { label: 'Generation Limit Alerts', desc: 'Notify me when I\'ve used 80% of my monthly generations', enabled: true },
                  { label: 'Streak Reminders', desc: 'Daily reminder to use PropCopy AI to maintain your streak', enabled: false },
                  { label: 'New Templates', desc: 'Email when new templates are added to the library', enabled: false },
                  { label: 'Product Updates', desc: 'Learn about new features and improvements', enabled: true },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'rgba(11,20,55,0.03)', border: '1px solid rgba(11,20,55,0.06)', borderRadius: '10px' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0B1437', fontSize: '14px', marginBottom: '3px' }}>{item.label}</div>
                      <div style={{ color: '#8892A4', fontSize: '12px' }}>{item.desc}</div>
                    </div>
                    <div
                      style={{
                        width: '44px', height: '24px', borderRadius: '9999px', cursor: 'pointer', position: 'relative',
                        background: item.enabled ? '#C9A84C' : 'rgba(11,20,55,0.15)', transition: 'background 0.3s', flexShrink: 0,
                      }}
                    >
                      <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: item.enabled ? '23px' : '3px', transition: 'left 0.3s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Referral */}
          {activeSection === 'referral' && (
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1437', marginBottom: '8px' }}>Referral Program 🎁</h2>
              <p style={{ color: '#8892A4', fontSize: '14px', marginBottom: '28px' }}>
                Give your fellow agents 1 month free — and earn a free month yourself when they subscribe!
              </p>
              <div style={{ background: 'linear-gradient(135deg, #0B1437, #112155)', borderRadius: '16px', padding: '28px', marginBottom: '24px', border: '1px solid rgba(201,168,76,0.2)' }}>
                <div style={{ color: '#C9A84C', fontWeight: 800, fontSize: '20px', marginBottom: '8px' }}>Your Referral Link</div>
                <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '10px', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <code style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontFamily: 'monospace' }}>propcopyai.com/ref/SARAH-1A2B3C</code>
                  <button
                    onClick={() => { navigator.clipboard.writeText('propcopyai.com/ref/SARAH-1A2B3C'); showToast('Referral link copied! 🎁'); }}
                    className="btn-gold"
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                  >
                    Copy Link
                  </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                  {[{ label: 'Referrals Sent', value: '7' }, { label: 'Subscribed', value: '3' }, { label: 'Free Months Earned', value: '3' }].map((s) => (
                    <div key={s.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', fontWeight: 900, color: '#C9A84C' }}>{s.value}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ color: '#8892A4', fontSize: '13px', lineHeight: 1.7 }}>
                When someone signs up using your referral link and subscribes to any paid plan, you both receive one free month automatically applied to your accounts.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
