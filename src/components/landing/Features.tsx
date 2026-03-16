'use client';

const features = [
  {
    icon: '🏠',
    title: 'Listing Descriptions',
    description:
      'Generate MLS-ready listing descriptions in full (250 words), short (100 words), and teaser (50 words) formats. Every word crafted to sell.',
    color: '#C9A84C',
  },
  {
    icon: '📱',
    title: 'Social Media Posts',
    description:
      'Create platform-optimized captions for Instagram, Facebook, LinkedIn, and X/Twitter — with hashtags that actually get reach.',
    color: '#8B9CF4',
  },
  {
    icon: '✉️',
    title: 'Buyer Follow-up Emails',
    description:
      'Personalized follow-up emails for every buyer. Professional, warm, or urgent tone — with compelling subject lines included.',
    color: '#52C97A',
  },
  {
    icon: '🌆',
    title: 'Neighborhood Bios',
    description:
      'Rich neighborhood descriptions that help buyers fall in love with the area before they even visit. Perfect for websites and listings.',
    color: '#F48B3B',
  },
  {
    icon: '🎉',
    title: 'Open House Announcements',
    description:
      'Multi-channel open house promos: social post, email blast, and SMS-length message — all in one generation.',
    color: '#E04F7B',
  },
  {
    icon: '🏆',
    title: 'Just Sold Posts',
    description:
      'Celebrate your wins with compelling Just Listed and Just Sold announcements for social and email — build your brand with every close.',
    color: '#7EC8E3',
  },
];

const highlights = [
  { icon: '⚡', text: '10-second generations' },
  { icon: '🔄', text: 'Unlimited regenerations' },
  { icon: '📋', text: 'Copy with one click' },
  { icon: '💾', text: 'Save to your library' },
  { icon: '🎨', text: 'Multiple tone options' },
  { icon: '📱', text: 'Mobile-first design' },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        background: '#F5F6FA',
        padding: 'clamp(60px, 8vw, 120px) 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
          <div className="badge-navy" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Everything you need to market listings
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 900,
              color: '#0B1437',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Six content types.{' '}
            <span style={{ color: '#C9A84C' }}>One platform.</span>
          </h2>
          <p style={{ color: '#8892A4', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Everything a real estate agent needs to market properties and nurture
            clients — generated in seconds, not hours.
          </p>
        </div>

        {/* Feature grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '72px',
          }}
        >
          {features.map((feat) => (
            <div
              key={feat.title}
              className="content-card card-hover"
              style={{ padding: '32px' }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: `${feat.color}15`,
                  border: `1px solid ${feat.color}30`,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  marginBottom: '20px',
                  transition: 'transform 0.3s ease',
                }}
              >
                {feat.icon}
              </div>
              <h3
                style={{
                  fontSize: '19px',
                  fontWeight: 800,
                  color: '#0B1437',
                  marginBottom: '10px',
                  letterSpacing: '-0.02em',
                }}
              >
                {feat.title}
              </h3>
              <p style={{ color: '#8892A4', fontSize: '15px', lineHeight: 1.7 }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights strip */}
        <div
          style={{
            background: '#0B1437',
            borderRadius: '20px',
            padding: '32px 40px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '24px 48px',
          }}
        >
          {highlights.map((h) => (
            <div key={h.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '18px' }}>{h.icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: '15px' }}>
                {h.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
