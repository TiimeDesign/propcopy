'use client';

const testimonials = [
  {
    quote:
      "PropCopy AI has completely transformed how I market my listings. I used to spend 2 hours writing every description — now it takes me 10 seconds. My listings get more views and sell faster. This tool pays for itself every single deal.",
    name: 'Sarah Chen',
    title: 'Luxury Agent, Compass Real Estate',
    location: 'Beverly Hills, CA',
    rating: 5,
    avatar: 'SC',
    stat: 'Saves 12 hrs/week',
  },
  {
    quote:
      "I was skeptical at first, but the quality blew me away. The listing descriptions sound like they were written by a professional copywriter. My open house attendance is up 40% since I started using PropCopy AI for my social posts.",
    name: 'Marcus Williams',
    title: 'Top Producer, Keller Williams',
    location: 'Atlanta, GA',
    rating: 5,
    avatar: 'MW',
    stat: '+40% open house turnout',
  },
  {
    quote:
      "As a team lead, I set my whole team up on the Team plan. Everyone's marketing content is now consistent, professional, and branded. Our brokerage has never looked better online. It's like having a marketing department for $99/month.",
    name: 'Jennifer Rodriguez',
    title: 'Team Lead, RE/MAX Gold',
    location: 'Miami, FL',
    rating: 5,
    avatar: 'JR',
    stat: 'Team of 5 agents',
  },
  {
    quote:
      "I close 3x more buyer leads now because my follow-up emails are actually compelling. PropCopy AI writes emails that get responses. The buyer follow-up feature alone is worth the subscription.",
    name: 'David Park',
    title: 'Buyer Specialist, Coldwell Banker',
    location: 'Seattle, WA',
    rating: 5,
    avatar: 'DP',
    stat: '3x buyer conversions',
  },
  {
    quote:
      "The neighborhood bio feature is a game-changer. I used to spend hours researching and writing — now I have beautiful, accurate neighborhood descriptions on every listing page. Clients love it.",
    name: 'Amanda Foster',
    title: 'Independent Broker',
    location: 'Austin, TX',
    rating: 5,
    avatar: 'AF',
    stat: '50+ listings/year',
  },
  {
    quote:
      "No credit card required for the trial — I was sold in day one. The tone options are incredible. I select 'Luxury' for my high-end listings and 'Friendly' for first-time buyers. It's like having a marketing assistant who knows real estate.",
    name: 'Robert Kim',
    title: 'Realtor, Sotheby\'s International',
    location: 'Honolulu, HI',
    rating: 5,
    avatar: 'RK',
    stat: '$50M+ in sales',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-navy"
      style={{ padding: 'clamp(60px, 8vw, 120px) 24px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 72px)' }}>
          <div className="badge-gold" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Loved by 12,000+ agents nationwide
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
            Real agents.{' '}
            <span className="gradient-text">Real results.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px' }}>
            Don&apos;t take our word for it — hear from agents closing more deals.
          </p>
        </div>

        {/* Testimonials grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px',
          }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card" style={{ padding: '28px' }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {Array(t.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} style={{ color: '#C9A84C', fontSize: '16px' }}>★</span>
                  ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '15px',
                  lineHeight: 1.75,
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #C9A84C, #A8893A)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#0B1437',
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '15px' }}>{t.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>{t.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>{t.location}</div>
                </div>
                <div
                  style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#C9A84C',
                    textAlign: 'center',
                    flexShrink: 0,
                  }}
                >
                  {t.stat}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div
          style={{
            marginTop: '64px',
            textAlign: 'center',
            borderTop: '1px solid rgba(201,168,76,0.1)',
            paddingTop: '48px',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', marginBottom: '24px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Trusted by agents at leading brokerages
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '32px 48px' }}>
            {['Keller Williams', 'RE/MAX', 'Coldwell Banker', 'Compass', 'Sotheby\'s', 'Century 21', 'eXp Realty'].map((b) => (
              <span key={b} style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.01em' }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
