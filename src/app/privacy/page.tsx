import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div style={{ background: '#F5F6FA', minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{ background: '#0B1437', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #C9A84C, #DFC06E)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 900, color: '#0B1437' }}>P</div>
          <span style={{ color: 'white', fontWeight: 800, fontSize: '18px' }}>PropCopy <span style={{ color: '#C9A84C' }}>AI</span></span>
        </Link>
        <Link href="/" style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>← Back to Home</Link>
      </nav>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#0B1437', letterSpacing: '-0.03em', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ color: '#8892A4', fontSize: '15px', marginBottom: '48px' }}>Last updated: March 1, 2025</p>

        {[
          { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes your name, email address, brokerage information, and content you generate using PropCopy AI. We also collect usage data automatically, including log data, device information, and cookies.' },
          { title: '2. How We Use Your Information', content: 'We use the information we collect to provide, maintain, and improve our services; personalize your experience; process transactions; send you technical notices and support messages; and respond to your comments and questions. We also use your information to send you marketing communications about PropCopy AI (you can opt out at any time).' },
          { title: '3. Information Sharing', content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.' },
          { title: '4. Data Security', content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption (TLS/SSL) for data transmission and store data in secure, SOC 2 certified facilities.' },
          { title: '5. Your Rights', content: 'You have the right to access, correct, or delete your personal information at any time. You can do this through your Account Settings or by contacting us at privacy@propcopyai.com. You also have the right to opt out of marketing communications and request a copy of your data in a portable format.' },
          { title: '6. Cookies', content: 'We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.' },
          { title: '7. Contact Us', content: 'If you have any questions about this Privacy Policy, please contact us at privacy@propcopyai.com or by mail at PropCopy AI, Inc., 123 Innovation Drive, San Francisco, CA 94105.' },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0B1437', marginBottom: '12px' }}>{section.title}</h2>
            <p style={{ color: '#374151', fontSize: '16px', lineHeight: 1.8 }}>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
