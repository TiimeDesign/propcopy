'use client';

import { useState } from 'react';
import { useToast } from '@/components/ui/Toast';

const CONTENT_TYPES = ['All', 'Listing', 'Social', 'Email', 'Just Sold', 'Neighborhood', 'Open House'];

const mockLibrary = [
  { id: '1', type: 'Listing', title: '147 Sunset Ridge Drive — Full Description', preview: 'Welcome to 147 Sunset Ridge Drive — where modern luxury meets effortless California living...', date: 'Mar 14, 2025', icon: '🏠', color: '#C9A84C', words: 252 },
  { id: '2', type: 'Social', title: 'Instagram Post — Sunset Ridge', preview: '✨ JUST LISTED ✨ This is the one you\'ve been waiting for. 4 beds | 3 baths | Mountain Views...', date: 'Mar 14, 2025', icon: '📱', color: '#8B9CF4', words: 89 },
  { id: '3', type: 'Email', title: 'Follow-up Email — Marcus & Lisa Johnson', preview: 'Hi Marcus and Lisa, It was such a pleasure showing you properties this weekend!...', date: 'Mar 13, 2025', icon: '✉️', color: '#52C97A', words: 198 },
  { id: '4', type: 'Just Sold', title: 'Just Sold — 2451 Oak Creek Blvd', preview: '🏆 JUST SOLD — 2451 Oak Creek Blvd After 3 days on market and multiple offers...', date: 'Mar 12, 2025', icon: '🏆', color: '#F48B3B', words: 112 },
  { id: '5', type: 'Listing', title: '892 Lakeview Drive — Short Version', preview: 'Stunning 3BR/2BA contemporary residence with panoramic lake views and private dock...', date: 'Mar 11, 2025', icon: '🏠', color: '#C9A84C', words: 98 },
  { id: '6', type: 'Neighborhood', title: 'Sunset Ridge Neighborhood Bio', preview: 'Nestled in the rolling hills above the city, Sunset Ridge is one of the area\'s most coveted...', date: 'Mar 10, 2025', icon: '🌆', color: '#7EC8E3', words: 187 },
  { id: '7', type: 'Open House', title: 'Open House — 147 Sunset Ridge (Social)', preview: '🏡 OPEN HOUSE THIS SATURDAY! Come see this stunning 4BR luxury home in person...', date: 'Mar 9, 2025', icon: '🎉', color: '#E04F7B', words: 74 },
  { id: '8', type: 'Social', title: 'Facebook Post — Oak Creek SOLD', preview: 'Incredible news for my clients! After just 3 days on market, 2451 Oak Creek Blvd is SOLD...', date: 'Mar 8, 2025', icon: '📱', color: '#8B9CF4', words: 95 },
  { id: '9', type: 'Email', title: 'Follow-up Email — The Rodriguez Family', preview: 'Hi Maria and Carlos, Thank you so much for spending Sunday afternoon with me...', date: 'Mar 7, 2025', icon: '✉️', color: '#52C97A', words: 205 },
];

export default function LibraryPage() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const { showToast } = useToast();

  const filtered = mockLibrary.filter((item) => {
    const matchType = filter === 'All' || item.type === filter;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.preview.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const selectedItem = mockLibrary.find((i) => i.id === selected);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast('Copied to clipboard! ✓');
  };

  const handleExport = () => {
    const data = filtered.map((i) => `${i.type} | ${i.title}\n${i.preview}\n---\n`).join('\n');
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'propcopy-library.txt';
    a.click();
    showToast('Library exported! 📥');
  };

  return (
    <div style={{ padding: 'clamp(20px, 3vw, 36px)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 900, color: '#0B1437', letterSpacing: '-0.02em', marginBottom: '4px' }}>
            My Library 📚
          </h1>
          <p style={{ color: '#8892A4', fontSize: '15px' }}>{mockLibrary.length} saved generations</p>
        </div>
        <button onClick={handleExport} className="btn-outline-gold" style={{ padding: '10px 20px', fontSize: '14px' }}>
          ↓ Export All
        </button>
      </div>

      {/* Search + Filter */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="🔍  Search your library..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-light"
          style={{ flex: 1, minWidth: '200px', padding: '11px 16px', fontSize: '14px' }}
        />
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {CONTENT_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              style={{
                padding: '10px 16px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                border: filter === type ? '1.5px solid #C9A84C' : '1.5px solid rgba(11,20,55,0.12)',
                background: filter === type ? 'rgba(201,168,76,0.1)' : 'white',
                color: filter === type ? '#C9A84C' : '#8892A4',
                transition: 'all 0.2s',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : '1fr', gap: '24px' }}>
        {/* Grid */}
        <div>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 24px', color: '#8892A4' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0B1437', marginBottom: '8px' }}>No content found</h3>
              <p style={{ fontSize: '14px' }}>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="content-card card-hover"
                  style={{ padding: '20px', cursor: 'pointer', border: selected === item.id ? '2px solid #C9A84C' : '2px solid transparent' }}
                  onClick={() => setSelected(selected === item.id ? null : item.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: `${item.color}15`, border: `1px solid ${item.color}30`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: item.color, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.type}</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#0B1437', lineHeight: 1.3, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#8892A4', lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', marginBottom: '14px' }}>
                    {item.preview}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', color: '#8892A4' }}>{item.date} · {item.words} words</span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleCopy(item.preview); }}
                        style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '6px', padding: '5px 10px', color: '#C9A84C', fontSize: '11px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                      >
                        Copy
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); /* delete */ showToast('Deleted from library'); }}
                        style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '6px', padding: '5px 10px', color: '#ef4444', fontSize: '11px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selected && selectedItem && (
          <div className="content-card" style={{ padding: '28px', position: 'sticky', top: '20px', alignSelf: 'start' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '20px' }}>{selectedItem.icon}</span>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: selectedItem.color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{selectedItem.type}</div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0B1437' }}>{selectedItem.title}</div>
                </div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8892A4', fontSize: '20px' }}>×</button>
            </div>
            <div style={{ color: '#374151', fontSize: '14px', lineHeight: 1.8, whiteSpace: 'pre-wrap', marginBottom: '20px', maxHeight: '400px', overflowY: 'auto' }}>
              {selectedItem.preview}...
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button onClick={() => handleCopy(selectedItem.preview)} className="btn-gold" style={{ padding: '10px 20px', fontSize: '13px', flex: 1 }}>
                📋 Copy Content
              </button>
              <button style={{ flex: 1, background: 'rgba(11,20,55,0.06)', border: '1px solid rgba(11,20,55,0.1)', borderRadius: '9999px', padding: '10px 20px', color: '#0B1437', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                ↓ Download
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
