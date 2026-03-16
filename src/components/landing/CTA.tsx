import Link from 'next/link';

export default function CTA() {
  return (
    <section
      className="hero-gradient"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="badge-gold" style={{ marginBottom: '20px', display: 'inline-block' }}>
          Limited time — try free for 7 days
        </div>
        <h2
          style={{
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '20px',
          }}
        >
          Start your{' '}
          <span className="gradient-text">7-day free trial.</span>
          <br />
          No credit card required.
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '18px',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          Join 12,000+ agents who write listings in 10 seconds and close more
          deals every month. Cancel anytime.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          <Link
            href="/auth/signup"
            className="btn-gold animate-pulse-glow"
            style={{ padding: '18px 40px', fontSize: '17px', textDecoration: 'none' }}
          >
            Start Free Trial — No Card Needed →
          </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px' }}>
          {[
            '✓ No credit card required',
            '✓ Cancel anytime',
            '✓ 7-day free trial',
          ].map((item) => (
            <span key={item} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', fontWeight: 600 }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
