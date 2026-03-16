'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/Toast';

const CATEGORIES = ['All', 'Luxury Homes', 'Starter Homes', 'Condos', 'Investment Properties', 'Waterfront', 'Foreclosures'];

const templates = [
  {
    id: 'lux-1', category: 'Luxury Homes', icon: '🏰', title: 'Luxury Estate Listing',
    description: 'Premium language for high-end properties with all luxury features pre-filled',
    contentType: 'listing', uses: 1847,
    prefill: { tone: 'Luxury', notes: 'Emphasize premium finishes, exclusivity, and lifestyle' },
  },
  {
    id: 'lux-2', category: 'Luxury Homes', icon: '✨', title: 'Luxury Instagram Campaign',
    description: 'Three aspirational captions designed to attract high-net-worth buyers on Instagram',
    contentType: 'social', uses: 1234,
    prefill: { platform: 'Instagram', notes: 'Use luxury lifestyle imagery and aspirational language' },
  },
  {
    id: 'starter-1', category: 'Starter Homes', icon: '🏡', title: 'First-Time Buyer Listing',
    description: 'Warm, welcoming description perfect for entry-level homes and first-time buyers',
    contentType: 'listing', uses: 2103,
    prefill: { tone: 'First-time buyer', notes: 'Emphasize value, schools, and community feel' },
  },
  {
    id: 'starter-2', category: 'Starter Homes', icon: '💌', title: 'First-Time Buyer Email',
    description: 'Nurturing follow-up email that addresses common first-time buyer concerns and questions',
    contentType: 'email', uses: 987,
    prefill: { tone: 'Warm', notes: 'Address common first-time buyer fears and excitement' },
  },
  {
    id: 'condo-1', category: 'Condos', icon: '🏙️', title: 'Urban Condo Listing',
    description: 'City living focused description highlighting walkability, amenities, and lifestyle',
    contentType: 'listing', uses: 1456,
    prefill: { tone: 'Friendly', notes: 'Focus on urban lifestyle, walkability score, and building amenities' },
  },
  {
    id: 'condo-2', category: 'Condos', icon: '📱', title: 'Condo Social Pack',
    description: 'LinkedIn and Instagram posts for urban professionals looking for city condos',
    contentType: 'social', uses: 876,
    prefill: { platform: 'LinkedIn', notes: 'Professional tone, focus on commute, career-oriented buyers' },
  },
  {
    id: 'invest-1', category: 'Investment Properties', icon: '📈', title: 'Investment ROI Listing',
    description: 'Numbers-focused description highlighting cap rates, rental income potential, and ROI',
    contentType: 'listing', uses: 934,
    prefill: { tone: 'Investment-focused', notes: 'Lead with numbers: cap rate, price per sq ft, rental potential' },
  },
  {
    id: 'invest-2', category: 'Investment Properties', icon: '💰', title: 'Investor Email Outreach',
    description: 'Professional email targeting real estate investors with market data and projections',
    contentType: 'email', uses: 678,
    prefill: { tone: 'Professional', notes: 'Include market data, rental comps, and investment thesis' },
  },
  {
    id: 'water-1', category: 'Waterfront', icon: '🌊', title: 'Waterfront Dream Home',
    description: 'Evocative, sensory description that makes buyers feel the waterfront lifestyle',
    contentType: 'listing', uses: 1123,
    prefill: { tone: 'Luxury', notes: 'Use sensory language — sound of water, sunsets, dock lifestyle' },
  },
  {
    id: 'water-2', category: 'Waterfront', icon: '⛵', title: 'Waterfront Social Campaign',
    description: 'Instagram and Facebook posts designed to go viral with aspirational waterfront imagery',
    contentType: 'social', uses: 789,
    prefill: { platform: 'Instagram', notes: 'Use sunset, water, and boat lifestyle imagery cues' },
  },
  {
    id: 'fore-1', category: 'Foreclosures', icon: '🔑', title: 'Foreclosure Opportunity Listing',
    description: 'Straightforward, opportunity-focused listing that attracts investors and deal hunters',
    contentType: 'listing', uses: 456,
    prefill: { tone: 'Investment-focused', notes: 'Emphasize potential, fixer-upper upside, and price per sq ft value' },
  },
  {
    id: 'fore-2', category: 'Foreclosures', icon: '🏗️', title: 'Fixer-Upper Email',
    description: 'Email for buyers interested in renovation projects with budget estimates and potential',
    contentType: 'email', uses: 345,
    prefill: { tone: 'Professional', notes: 'Appeal to buyers who see potential; include renovation tips' },
  },
];

const contentTypeColors: Record<string, string> = {
  listing: '#C9A84C',
  social: '#8B9CF4',
  email: '#52C97A',
};

const contentTypeLabels: Record<string, string> = {
  listing: 'Listing',
  social: 'Social',
  email: 'Email',
};

export default function TemplatesPage() {
  const [category, setCategory] = useState('All');
  const router = useRouter();
  const { showToast } = useToast();

  const filtered = templates.filter((t) => category === 'All' || t.category === category);

  const useTemplate = (template: typeof templates[0]) => {
    showToast(`Loading "${template.title}" template...`);
    router.push(`/dashboard/generate?tab=${template.contentType}`);
  };

  return (
    <div style={{ padding: 'clamp(20px, 3vw, 36px)' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 900, color: '#0B1437', letterSpacing: '-0.02em', marginBottom: '6px' }}>
          Templates 🗂️
        </h1>
        <p style={{ color: '#8892A4', fontSize: '15px' }}>
          One-click templates for every property type. Click to pre-fill the generator.
        </p>
      </div>

      {/* Category filters */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: '10px 18px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
              border: category === cat ? '1.5px solid #C9A84C' : '1.5px solid rgba(11,20,55,0.12)',
              background: category === cat ? 'rgba(201,168,76,0.1)' : 'white',
              color: category === cat ? '#C9A84C' : '#8892A4', transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Template grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '18px' }}>
        {filtered.map((template) => (
          <div
            key={template.id}
            className="content-card card-hover"
            style={{ padding: '24px', cursor: 'pointer', position: 'relative' }}
            onClick={() => useTemplate(template)}
          >
            {/* Category badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#8892A4', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(11,20,55,0.06)', border: '1px solid rgba(11,20,55,0.08)', borderRadius: '6px', padding: '3px 10px' }}>
                {template.category}
              </span>
              <span
                style={{
                  fontSize: '11px', fontWeight: 700,
                  color: contentTypeColors[template.contentType],
                  background: `${contentTypeColors[template.contentType]}15`,
                  border: `1px solid ${contentTypeColors[template.contentType]}30`,
                  borderRadius: '6px', padding: '3px 10px',
                }}
              >
                {contentTypeLabels[template.contentType]}
              </span>
            </div>

            {/* Icon + title */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '12px' }}>
              <span style={{ fontSize: '28px', flexShrink: 0 }}>{template.icon}</span>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0B1437', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                  {template.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#8892A4', lineHeight: 1.6 }}>
                  {template.description}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(11,20,55,0.06)' }}>
              <span style={{ fontSize: '12px', color: '#8892A4' }}>
                Used {template.uses.toLocaleString()} times
              </span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#C9A84C', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Use Template →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
