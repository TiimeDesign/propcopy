'use client';

import { useState } from 'react';
import { useToast } from '@/components/ui/Toast';

interface OutputBlock {
  label: string;
  content: string;
}

interface GeneratorOutputProps {
  outputs: OutputBlock[];
  onRegenerate: () => void;
  onSave: (content: string, label: string) => void;
  loading?: boolean;
}

export default function GeneratorOutput({ outputs, onRegenerate, onSave, loading }: GeneratorOutputProps) {
  const { showToast } = useToast();
  const [saved, setSaved] = useState<Record<number, boolean>>({});

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    showToast('Copied to clipboard! ✓');
  };

  const handleSave = (content: string, label: string, idx: number) => {
    onSave(content, label);
    setSaved((prev) => ({ ...prev, [idx]: true }));
    showToast('Saved to library! 📚');
  };

  if (loading) {
    return (
      <div
        style={{
          background: '#0B1437',
          borderRadius: '16px',
          padding: '48px 32px',
          textAlign: 'center',
          border: '1px solid rgba(201,168,76,0.15)',
        }}
      >
        <div style={{ fontSize: '36px', marginBottom: '16px' }}>
          <svg
            className="animate-spin"
            style={{ display: 'inline-block', color: '#C9A84C' }}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
            <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', fontWeight: 600 }}>
          PropCopy AI is crafting your content...
        </p>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', marginTop: '8px' }}>
          Usually takes 5–10 seconds
        </p>
      </div>
    );
  }

  if (!outputs.length) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Actions header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#52C97A', fontSize: '13px' }}>●</span>
          <span style={{ color: '#0B1437', fontWeight: 700, fontSize: '14px' }}>Generated successfully</span>
        </div>
        <button
          onClick={onRegenerate}
          style={{
            background: 'none',
            border: '1.5px solid rgba(11,20,55,0.15)',
            borderRadius: '9999px',
            padding: '8px 16px',
            color: '#0B1437',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'Inter, sans-serif',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(11,20,55,0.15)'; e.currentTarget.style.color = '#0B1437'; }}
        >
          ↻ Regenerate
        </button>
      </div>

      {/* Output blocks */}
      {outputs.map((output, idx) => (
        <div
          key={idx}
          className="content-card"
          style={{ padding: '24px', position: 'relative' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '6px', padding: '3px 10px' }}>
              {output.label}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => handleCopy(output.content)}
                style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', padding: '7px 14px', color: '#C9A84C', fontSize: '12px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.color = '#0B1437'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.color = '#C9A84C'; }}
              >
                📋 Copy
              </button>
              <button
                onClick={() => handleSave(output.content, output.label, idx)}
                disabled={saved[idx]}
                style={{ background: saved[idx] ? 'rgba(82,201,122,0.12)' : 'rgba(11,20,55,0.06)', border: `1px solid ${saved[idx] ? 'rgba(82,201,122,0.3)' : 'rgba(11,20,55,0.12)'}`, borderRadius: '8px', padding: '7px 14px', color: saved[idx] ? '#52C97A' : '#0B1437', fontSize: '12px', fontWeight: 700, cursor: saved[idx] ? 'default' : 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.2s' }}
              >
                {saved[idx] ? '✓ Saved' : '💾 Save'}
              </button>
            </div>
          </div>
          <div style={{ color: '#374151', fontSize: '15px', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
            {output.content}
          </div>
          <div style={{ marginTop: '12px', color: '#8892A4', fontSize: '12px' }}>
            {output.content.split(/\s+/).length} words
          </div>
        </div>
      ))}
    </div>
  );
}
