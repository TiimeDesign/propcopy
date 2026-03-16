'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '⊞', exact: true },
  { href: '/dashboard/generate', label: 'Generate Content', icon: '✦' },
  { href: '/dashboard/library', label: 'My Library', icon: '📚' },
  { href: '/dashboard/templates', label: 'Templates', icon: '🗂️' },
  { href: '/dashboard/settings', label: 'Account Settings', icon: '⚙️' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string, exact = false) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        style={{
          width: collapsed ? '72px' : '260px',
          background: '#0B1437',
          borderRight: '1px solid rgba(201,168,76,0.1)',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          position: 'sticky',
          top: 0,
          transition: 'width 0.3s ease',
          flexShrink: 0,
          zIndex: 40,
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: collapsed ? '20px 16px' : '24px 20px',
            borderBottom: '1px solid rgba(201,168,76,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'space-between',
            gap: '10px',
          }}
        >
          {!collapsed && (
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #C9A84C, #DFC06E)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 900, color: '#0B1437', flexShrink: 0 }}>P</div>
              <span style={{ color: 'white', fontWeight: 800, fontSize: '17px', letterSpacing: '-0.02em' }}>
                PropCopy <span style={{ color: '#C9A84C' }}>AI</span>
              </span>
            </Link>
          )}
          {collapsed && (
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #C9A84C, #DFC06E)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 900, color: '#0B1437' }}>P</div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', padding: '4px', transition: 'color 0.2s', fontSize: '16px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>

        {/* Usage meter */}
        {!collapsed && (
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 600 }}>Generations Used</span>
              <span style={{ color: '#C9A84C', fontSize: '12px', fontWeight: 700 }}>18 / 30</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '60%' }} />
            </div>
            <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>Resets in 12 days</span>
              <Link href="/dashboard/settings" style={{ color: '#C9A84C', fontSize: '11px', fontWeight: 700, textDecoration: 'none' }}>
                Upgrade ↑
              </Link>
            </div>
          </div>
        )}

        {/* Streak badge */}
        {!collapsed && (
          <div style={{ padding: '12px 20px', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
            <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>🔥</span>
              <div>
                <div style={{ color: '#C9A84C', fontWeight: 800, fontSize: '15px' }}>7-Day Streak!</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>Keep going — you&apos;re on a roll</div>
              </div>
            </div>
          </div>
        )}

        {/* Nav items */}
        <nav style={{ flex: 1, padding: '12px 0', overflowY: 'auto' }}>
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: collapsed ? '13px 0' : '13px 20px',
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  textDecoration: 'none',
                  color: active ? '#C9A84C' : 'rgba(255,255,255,0.55)',
                  fontWeight: active ? 700 : 500,
                  fontSize: '14px',
                  borderLeft: active ? '3px solid #C9A84C' : '3px solid transparent',
                  background: active ? 'rgba(201,168,76,0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                  marginBottom: '2px',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
                title={collapsed ? item.label : undefined}
              >
                <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
                {!collapsed && item.label}
              </Link>
            );
          })}
        </nav>

        {/* Upgrade CTA */}
        {!collapsed && (
          <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
            <Link
              href="/dashboard/settings"
              className="btn-gold"
              style={{ display: 'block', textAlign: 'center', padding: '12px', fontSize: '13px', textDecoration: 'none', marginBottom: '12px' }}
            >
              ↑ Upgrade to Pro
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #C9A84C, #A8893A)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, color: '#0B1437', flexShrink: 0 }}>SC</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: 'white', fontWeight: 600, fontSize: '13px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Sarah Chen</div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px' }}>Starter Plan</div>
              </div>
              <Link href="/auth/login" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', textDecoration: 'none', flexShrink: 0 }} title="Sign out">⇥</Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
