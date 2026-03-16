'use client';

import Link from 'next/link';

const recentGenerations = [
  { id: 1, type: 'Listing', title: '147 Sunset Ridge Drive, Malibu CA', time: '2 hours ago', icon: '🏠', color: '#C9A84C' },
  { id: 2, type: 'Social', title: 'Instagram post — 3 BR Craftsman, Austin TX', time: '5 hours ago', icon: '📱', color: '#8B9CF4' },
  { id: 3, type: 'Email', title: 'Follow-up to Marcus & Lisa Johnson', time: 'Yesterday', icon: '✉️', color: '#52C97A' },
  { id: 4, type: 'Just Sold', title: '2451 Oak Creek Blvd — SOLD', time: 'Yesterday', icon: '🏆', color: '#F48B3B' },
  { id: 5, type: 'Open House', title: 'Open House — 892 Lakeview Drive', time: '2 days ago', icon: '🎉', color: '#E04F7B' },
];

const quickActions = [
  { label: 'New Listing', icon: '🏠', href: '/dashboard/generate?tab=listing', color: '#C9A84C' },
  { label: 'Social Post', icon: '📱', href: '/dashboard/generate?tab=social', color: '#8B9CF4' },
  { label: 'Buyer Email', icon: '✉️', href: '/dashboard/generate?tab=email', color: '#52C97A' },
  { label: 'Just Sold', icon: '🏆', href: '/dashboard/generate?tab=announcement', color: '#F48B3B' },
  { label: 'Neighborhood', icon: '🌆', href: '/dashboard/generate?tab=neighborhood', color: '#7EC8E3' },
  { label: 'Open House', icon: '🎉', href: '/dashboard/generate?tab=openhouse', color: '#E04F7B' },
];

export default function DashboardPage() {
  return (
    <div style={{ padding: 'clamp(20px, 3vw, 36px)', maxWidth: '1100px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
          <h1 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 900, color: '#0B1437', letterSpacing: '-0.02em' }}>
            Good morning, Sarah 👋
          </h1>
          <div style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '9999px', padding: '3px 10px', fontSize: '12px', fontWeight: 700, color: '#C9A84C' }}>
            🔥 7-day streak
          </div>
        </div>
        <p style={{ color: '#8892A4', fontSize: '15px' }}>
          Ready to create some listing magic? You&apos;ve saved{' '}
          <strong style={{ color: '#0B1437' }}>4.5 hours</strong> this week with PropCopy AI.
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {[
          { label: 'Generations Used', value: '18', sub: 'of 30 this month', icon: '✦', color: '#C9A84C' },
          { label: 'Time Saved', value: '4.5h', sub: 'this week', icon: '⏱', color: '#52C97A' },
          { label: 'Content Saved', value: '47', sub: 'in your library', icon: '📚', color: '#8B9CF4' },
          { label: 'Day Streak', value: '7', sub: 'keep it going!', icon: '🔥', color: '#F48B3B' },
        ].map((stat) => (
          <div key={stat.label} className="content-card" style={{ padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#8892A4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</span>
              <span style={{ fontSize: '18px' }}>{stat.icon}</span>
            </div>
            <div style={{ fontSize: '32px', fontWeight: 900, color: stat.color, letterSpacing: '-0.03em', lineHeight: 1 }}>{stat.value}</div>
            <div style={{ fontSize: '12px', color: '#8892A4', marginTop: '4px' }}>{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Usage meter card */}
      <div className="content-card" style={{ padding: '24px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ fontWeight: 800, color: '#0B1437', fontSize: '16px', marginBottom: '2px' }}>Monthly Usage</h3>
            <p style={{ color: '#8892A4', fontSize: '13px' }}>Starter Plan — resets March 28</p>
          </div>
          <Link href="/dashboard/settings" className="btn-gold" style={{ padding: '10px 20px', fontSize: '13px', textDecoration: 'none' }}>
            Upgrade to Unlimited ↑
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="progress-bar" style={{ flex: 1 }}>
            <div className="progress-fill" style={{ width: '60%' }} />
          </div>
          <span style={{ color: '#0B1437', fontWeight: 700, fontSize: '14px', whiteSpace: 'nowrap' }}>18 / 30</span>
        </div>
        <p style={{ color: '#8892A4', fontSize: '12px', marginTop: '8px' }}>12 generations remaining this month</p>
      </div>

      {/* Quick Actions */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1437', marginBottom: '16px' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              style={{ textDecoration: 'none' }}
            >
              <div
                className="content-card card-hover"
                style={{ padding: '20px 16px', textAlign: 'center', cursor: 'pointer' }}
              >
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{action.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0B1437' }}>{action.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Generations */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0B1437' }}>Recent Generations</h2>
          <Link href="/dashboard/library" style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
            View all →
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {recentGenerations.map((gen) => (
            <div
              key={gen.id}
              className="content-card"
              style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}
            >
              <div style={{ width: '40px', height: '40px', background: `${gen.color}18`, border: `1px solid ${gen.color}30`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                {gen.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, color: '#0B1437', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{gen.title}</div>
                <div style={{ color: '#8892A4', fontSize: '12px', marginTop: '2px' }}>{gen.type} · {gen.time}</div>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                <button style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '7px', padding: '6px 12px', color: '#C9A84C', fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'Inter, sans-serif' }}>
                  Copy
                </button>
                <Link href="/dashboard/library" style={{ background: 'rgba(11,20,55,0.06)', border: '1px solid rgba(11,20,55,0.1)', borderRadius: '7px', padding: '6px 12px', color: '#0B1437', fontSize: '12px', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral card */}
      <div
        style={{
          marginTop: '32px',
          background: 'linear-gradient(135deg, #0B1437, #112155)',
          borderRadius: '16px',
          padding: '24px 28px',
          border: '1px solid rgba(201,168,76,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <div style={{ color: '#C9A84C', fontWeight: 800, fontSize: '16px', marginBottom: '4px' }}>🎁 Give 1 month free, Get 1 month free</div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px' }}>Share your referral link. Both you and your friend get a free month when they subscribe.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', padding: '10px 14px', color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontFamily: 'monospace' }}>
            propcopyai.com/ref/SARAH-1A2B
          </div>
          <button
            onClick={() => navigator.clipboard.writeText('propcopyai.com/ref/SARAH-1A2B')}
            className="btn-gold"
            style={{ padding: '10px 18px', fontSize: '13px' }}
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}
