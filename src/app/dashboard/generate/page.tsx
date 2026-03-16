'use client';

import { useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import GeneratorOutput from '@/components/dashboard/GeneratorOutput';
import { useToast } from '@/components/ui/Toast';

const TABS = [
  { id: 'listing', label: 'Listing Description', icon: '🏠' },
  { id: 'social', label: 'Social Media', icon: '📱' },
  { id: 'email', label: 'Buyer Email', icon: '✉️' },
  { id: 'announcement', label: 'Just Listed/Sold', icon: '🏆' },
  { id: 'neighborhood', label: 'Neighborhood Bio', icon: '🌆' },
  { id: 'openhouse', label: 'Open House', icon: '🎉' },
];

const KEY_FEATURES = [
  'Pool', 'New Kitchen', 'Hardwood Floors', 'Smart Home', 'Garage',
  'Ocean View', 'Mountain View', 'Open Floor Plan', 'Fireplace', 'Home Office',
  'Guest Suite', 'Rooftop Deck', 'Wine Cellar', 'Solar Panels', 'EV Charger',
  'Updated Baths', 'Gourmet Kitchen', 'Walk-in Closet', 'Backyard Oasis', 'City Views',
];

const TONES = ['Luxury', 'Friendly', 'Investment-focused', 'First-time buyer'];
const EMAIL_TONES = ['Professional', 'Warm', 'Urgent'];
const PLATFORMS = ['Instagram', 'Facebook', 'LinkedIn', 'X/Twitter'];

// Mock AI outputs
const MOCK_LISTING = [
  {
    label: 'Full Description (250 words)',
    content: `Welcome to 4 Sunset Ridge Drive — where modern luxury meets effortless living. This stunning 4-bedroom, 3-bath residence spans 2,847 square feet of thoughtfully designed space, featuring an open floor plan that flows seamlessly from the chef-inspired kitchen to the expansive living area.

Entertain in style with the resort-style pool and spa, or retreat to the state-of-the-art smart home sanctuary where every detail has been curated for your comfort. Gleaming hardwood floors, soaring ceilings, and walls of glass frame breathtaking mountain views that will take your breath away morning and evening.

The gourmet kitchen boasts quartz countertops, premium stainless appliances, and a waterfall island perfect for hosting. The primary suite is a private retreat with a spa-like bath and custom walk-in closet. Three additional bedrooms offer flexible space for family, guests, or a productive home office.

Step outside to your private backyard oasis — the perfect setting for summer entertaining, morning coffee with a view, or peaceful evenings under the stars. The 3-car garage accommodates your vehicles and provides additional storage.

Located minutes from top-rated schools, world-class dining, and premier shopping, this exceptional home offers the lifestyle you've always envisioned. Properties of this caliber rarely come to market. Schedule your private tour today before it's gone.`,
  },
  {
    label: 'Short Version (100 words)',
    content: `Stunning 4BR/3BA luxury residence in the heart of Sunset Ridge. Spanning 2,847 sq ft, this meticulously designed home features an open floor plan, chef's kitchen, and breathtaking mountain views. The resort-style pool and spa create a private backyard oasis, while hardwood floors and a smart home system elevate everyday living. The primary suite is a true sanctuary with spa bath and custom walk-in closet. 3-car garage. Minutes from top schools and dining. This is the dream home you've been waiting for — schedule your private showing today.`,
  },
  {
    label: 'Teaser (50 words)',
    content: `✨ 4 Bed | 3 Bath | 2,847 Sq Ft | Mountain Views

Resort-style pool, smart home tech, chef's kitchen, and hardwood floors throughout. This is the luxury lifestyle you deserve. 📍 Sunset Ridge Drive — schedule your private showing before it's gone!`,
  },
];

const MOCK_SOCIAL_INSTAGRAM = [
  {
    label: 'Instagram Caption 1',
    content: `✨ JUST LISTED ✨

This is the one you've been waiting for. 🏡

4 beds | 3 baths | 2,847 sq ft
🌄 Mountain Views
🏊 Resort Pool & Spa
🍳 Chef's Kitchen
🏠 Smart Home Tech

Luxury living meets effortless California style at Sunset Ridge Drive.

Comment "TOUR" below or DM me to schedule your private showing! 📩

#JustListed #LuxuryRealEstate #DreamHome #RealEstate #HomesForSale #LuxuryHomes #MountainViews #CaliforniaRealEstate #RealtorLife #OpenHouse`,
  },
  {
    label: 'Instagram Caption 2',
    content: `The pool life is calling. 🌊☀️

4BR luxury home with resort-style pool, mountain views, and chef's kitchen just listed in Sunset Ridge!

These views? They never get old. 😍

✅ 4 Bedrooms
✅ 3 Bathrooms
✅ 2,847 Sq Ft
✅ Smart Home
✅ 3-Car Garage

Drop a 🏠 if you'd love to call this home!

#LuxuryLiving #PoolHome #RealEstatePhotography #HomeGoals #JustListed #LuxuryLifestyle`,
  },
  {
    label: 'Instagram Caption 3',
    content: `Imagine waking up to THIS every morning. 🌄

Your dream home just hit the market and it won't last long. Stunning 4-bedroom luxury residence with mountain views, resort pool, and every upgrade you could dream of.

📍 Sunset Ridge Drive
💰 Priced to sell
📅 Private tours available NOW

Hit the link in my bio to learn more! ⬆️

#NewListing #LuxuryHome #RealEstateSunsetRidge #HomesForSale #MountainViews #CaliforniaLiving`,
  },
];

const MOCK_EMAIL = `Subject: Thank You for Touring These Properties, Marcus & Lisa

Hi Marcus and Lisa,

It was such a pleasure showing you properties this weekend! I could see your eyes light up at the Sunset Ridge home — those mountain views are truly something special, and I think it checks a lot of your boxes.

Based on what you shared with me, here's what I'm keeping top of mind as we continue your search:

✓ Open floor plan (perfect for entertaining)
✓ Home office space
✓ Top-rated school district
✓ Mountain or nature views
✓ 3+ bedrooms with room to grow

I've already set up a custom search to notify us the moment anything matching your criteria hits the market. In this market, being the first to know is everything.

I'd love to circle back with you this week and share 2-3 other properties I think you'll love. Would Thursday or Friday work for a quick call?

Looking forward to finding your perfect home together! 🏡

Warmly,
Sarah Chen
Compass Real Estate | BRE# CA12345678
📱 (310) 555-0192 | sarah@compassre.com`;

const MOCK_ANNOUNCEMENT = `🏆 JUST SOLD — 2451 Oak Creek Blvd 🏆

After 3 days on market and multiple offers, this beautiful home found its perfect family. Congratulations to my incredible clients on their new chapter! 🎉

✅ Listed: $1,195,000
✅ Sold: $1,247,000 (OVER ASKING!)
✅ Days on Market: 3
✅ Multiple offers received

If you're thinking about selling your home, NOW is the time. Let's get you top dollar too.

📩 DM me or call (310) 555-0192 for a free home valuation.

#JustSold #SoldOverAsking #RealEstate #HomeSold #OakCreek #CaliforniaRealEstate #RealtorSuccess`;

const MOCK_NEIGHBORHOOD = `Nestled in the rolling hills above the city, Sunset Ridge is one of the area's most coveted residential neighborhoods — a perfect blend of natural beauty, community warmth, and urban convenience. Tree-lined streets wind past beautifully maintained homes ranging from charming craftsman bungalows to sprawling contemporary estates, each reflecting the pride of ownership that defines this sought-after community.

Residents of Sunset Ridge enjoy world-class amenities at their doorstep: award-winning schools including Ridgeview Elementary (rated 9/10), boutique dining and shopping along Main Street just 8 minutes away, and over 12 miles of hiking and biking trails within the adjacent nature preserve. The community is known for its friendly atmosphere, annual neighborhood events, and a deep sense of belonging. Whether you're raising a family, working from home, or simply seeking a peaceful retreat from the city's pace, Sunset Ridge delivers a quality of life that's genuinely hard to find.`;

const MOCK_OPENHOUSE = {
  social: `🏡 OPEN HOUSE THIS SATURDAY! 🏡

Come see this stunning 4BR luxury home in person!

📅 Saturday, March 22
⏰ 11:00 AM – 2:00 PM
📍 147 Sunset Ridge Drive, Malibu CA

✨ Mountain Views | Resort Pool | Chef's Kitchen | Smart Home

No appointment needed — just show up and fall in love!

See you there! 🗓️

#OpenHouse #JustListed #LuxuryRealEstate #OpenHouseMalibu #HomesForSale`,
  email: `Subject: Open House This Saturday — 147 Sunset Ridge Drive

Hi [First Name],

I'd love for you to come see this incredible property in person this weekend!

📅 Open House: Saturday, March 22 | 11:00 AM – 2:00 PM
📍 147 Sunset Ridge Drive, Malibu, CA

This stunning 4-bedroom, 3-bath home features resort-style pool, mountain views, and a chef's kitchen that will take your breath away. No appointment necessary — just stop by!

Light refreshments will be served. I look forward to seeing you there.

Best,
Sarah Chen | (310) 555-0192`,
  sms: `Open House Sat 3/22 | 11am-2pm | 147 Sunset Ridge Dr, Malibu | 4BR luxury home w/ pool & mountain views. Come see it! -Sarah (310)555-0192`,
};

function GeneratePageInner() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'listing';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [loading, setLoading] = useState(false);
  const [outputs, setOutputs] = useState<{ label: string; content: string }[]>([]);
  const { showToast } = useToast();

  // Listing form state
  const [listingForm, setListingForm] = useState({
    address: '', beds: '', baths: '', sqft: '', tone: 'Luxury', notes: '',
    features: [] as string[],
  });

  // Social form state
  const [socialForm, setSocialForm] = useState({
    address: '', beds: '', baths: '', sqft: '', platform: 'Instagram', notes: '',
  });

  // Email form state
  const [emailForm, setEmailForm] = useState({
    buyerName: '', propertiesViewed: '', preferences: '', agentName: 'Sarah Chen', tone: 'Warm',
  });

  // Announcement
  const [announcementForm, setAnnouncementForm] = useState({
    address: '', listPrice: '', soldPrice: '', daysOnMarket: '', type: 'just-sold',
  });

  // Neighborhood
  const [neighborhoodForm, setNeighborhoodForm] = useState({
    name: '', city: '', highlights: '',
  });

  // Open house
  const [openHouseForm, setOpenHouseForm] = useState({
    date: '', time: '', address: '', highlights: '',
  });

  const toggleFeature = (f: string) => {
    setListingForm((prev) => ({
      ...prev,
      features: prev.features.includes(f) ? prev.features.filter((x) => x !== f) : [...prev.features, f],
    }));
  };

  const generate = useCallback(async () => {
    setLoading(true);
    setOutputs([]);
    await new Promise((r) => setTimeout(r, 2500));

    switch (activeTab) {
      case 'listing': setOutputs(MOCK_LISTING); break;
      case 'social': setOutputs(MOCK_SOCIAL_INSTAGRAM); break;
      case 'email': setOutputs([{ label: 'Follow-up Email', content: MOCK_EMAIL }]); break;
      case 'announcement': setOutputs([{ label: 'Just Sold Announcement', content: MOCK_ANNOUNCEMENT }]); break;
      case 'neighborhood': setOutputs([{ label: 'Neighborhood Bio', content: MOCK_NEIGHBORHOOD }]); break;
      case 'openhouse':
        setOutputs([
          { label: 'Social Post', content: MOCK_OPENHOUSE.social },
          { label: 'Email Blast', content: MOCK_OPENHOUSE.email },
          { label: 'SMS Message', content: MOCK_OPENHOUSE.sms },
        ]);
        break;
    }
    setLoading(false);
  }, [activeTab]);

  const handleSave = useCallback((content: string, label: string) => {
    // In real app, save to Supabase
    console.log('Saving to library:', { content, label, type: activeTab });
  }, [activeTab]);

  return (
    <div style={{ padding: 'clamp(20px, 3vw, 36px)' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 900, color: '#0B1437', letterSpacing: '-0.02em', marginBottom: '6px' }}>
          Generate Content ✦
        </h1>
        <p style={{ color: '#8892A4', fontSize: '15px' }}>Select a content type and fill in your property details.</p>
      </div>

      {/* Tab bar */}
      <div
        style={{
          background: '#0B1437',
          borderRadius: '14px',
          padding: '6px',
          display: 'flex',
          gap: '4px',
          marginBottom: '28px',
          overflowX: 'auto',
          flexWrap: 'nowrap',
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setOutputs([]); }}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}
          >
            <span style={{ fontSize: '15px' }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
        {/* Input panel */}
        <div className="content-card" style={{ padding: '28px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0B1437', marginBottom: '20px' }}>
            {TABS.find((t) => t.id === activeTab)?.icon} {TABS.find((t) => t.id === activeTab)?.label}
          </h2>

          {/* LISTING TAB */}
          {activeTab === 'listing' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField label="Property Address" placeholder="147 Sunset Ridge Drive, Malibu CA" value={listingForm.address} onChange={(v) => setListingForm({ ...listingForm, address: v })} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <InputField label="Beds" placeholder="4" value={listingForm.beds} onChange={(v) => setListingForm({ ...listingForm, beds: v })} />
                <InputField label="Baths" placeholder="3" value={listingForm.baths} onChange={(v) => setListingForm({ ...listingForm, baths: v })} />
                <InputField label="Sq Ft" placeholder="2,847" value={listingForm.sqft} onChange={(v) => setListingForm({ ...listingForm, sqft: v })} />
              </div>

              <div>
                <label style={labelStyle}>Key Features</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {KEY_FEATURES.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggleFeature(f)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: listingForm.features.includes(f) ? '1.5px solid #C9A84C' : '1.5px solid rgba(11,20,55,0.12)',
                        background: listingForm.features.includes(f) ? 'rgba(201,168,76,0.12)' : 'rgba(11,20,55,0.04)',
                        color: listingForm.features.includes(f) ? '#C9A84C' : '#0B1437',
                        transition: 'all 0.2s',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <SelectField label="Tone" value={listingForm.tone} options={TONES} onChange={(v) => setListingForm({ ...listingForm, tone: v })} />
              <TextareaField label="Special Notes (optional)" placeholder="Describe anything unique about this property..." value={listingForm.notes} onChange={(v) => setListingForm({ ...listingForm, notes: v })} />
            </div>
          )}

          {/* SOCIAL TAB */}
          {activeTab === 'social' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField label="Property Address" placeholder="147 Sunset Ridge Drive, Malibu CA" value={socialForm.address} onChange={(v) => setSocialForm({ ...socialForm, address: v })} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <InputField label="Beds" placeholder="4" value={socialForm.beds} onChange={(v) => setSocialForm({ ...socialForm, beds: v })} />
                <InputField label="Baths" placeholder="3" value={socialForm.baths} onChange={(v) => setSocialForm({ ...socialForm, baths: v })} />
                <InputField label="Sq Ft" placeholder="2,847" value={socialForm.sqft} onChange={(v) => setSocialForm({ ...socialForm, sqft: v })} />
              </div>
              <SelectField label="Platform" value={socialForm.platform} options={PLATFORMS} onChange={(v) => setSocialForm({ ...socialForm, platform: v })} />
              <TextareaField label="Key Highlights" placeholder="Pool, mountain views, just renovated kitchen..." value={socialForm.notes} onChange={(v) => setSocialForm({ ...socialForm, notes: v })} />
            </div>
          )}

          {/* EMAIL TAB */}
          {activeTab === 'email' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField label="Buyer Name(s)" placeholder="Marcus & Lisa Johnson" value={emailForm.buyerName} onChange={(v) => setEmailForm({ ...emailForm, buyerName: v })} />
              <TextareaField label="Properties They Viewed" placeholder="147 Sunset Ridge Dr, 892 Lakeview Blvd, 2451 Oak Creek..." value={emailForm.propertiesViewed} onChange={(v) => setEmailForm({ ...emailForm, propertiesViewed: v })} />
              <TextareaField label="Their Preferences & Needs" placeholder="3+ bedrooms, home office, top school district, mountain views, budget $1.2M..." value={emailForm.preferences} onChange={(v) => setEmailForm({ ...emailForm, preferences: v })} />
              <InputField label="Your Name (Agent)" placeholder="Sarah Chen" value={emailForm.agentName} onChange={(v) => setEmailForm({ ...emailForm, agentName: v })} />
              <SelectField label="Email Tone" value={emailForm.tone} options={EMAIL_TONES} onChange={(v) => setEmailForm({ ...emailForm, tone: v })} />
            </div>
          )}

          {/* ANNOUNCEMENT TAB */}
          {activeTab === 'announcement' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Announcement Type</label>
                <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                  {['just-listed', 'just-sold'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setAnnouncementForm({ ...announcementForm, type })}
                      style={{
                        flex: 1, padding: '10px', borderRadius: '10px', fontSize: '14px', fontWeight: 700,
                        cursor: 'pointer', border: announcementForm.type === type ? '2px solid #C9A84C' : '2px solid rgba(11,20,55,0.1)',
                        background: announcementForm.type === type ? 'rgba(201,168,76,0.1)' : 'white',
                        color: announcementForm.type === type ? '#C9A84C' : '#8892A4', transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {type === 'just-listed' ? '🏷️ Just Listed' : '🏆 Just Sold'}
                    </button>
                  ))}
                </div>
              </div>
              <InputField label="Property Address" placeholder="2451 Oak Creek Blvd, Austin TX" value={announcementForm.address} onChange={(v) => setAnnouncementForm({ ...announcementForm, address: v })} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <InputField label="List Price" placeholder="$1,195,000" value={announcementForm.listPrice} onChange={(v) => setAnnouncementForm({ ...announcementForm, listPrice: v })} />
                {announcementForm.type === 'just-sold' && <InputField label="Sold Price" placeholder="$1,247,000" value={announcementForm.soldPrice} onChange={(v) => setAnnouncementForm({ ...announcementForm, soldPrice: v })} />}
                <InputField label="Days on Market" placeholder="3" value={announcementForm.daysOnMarket} onChange={(v) => setAnnouncementForm({ ...announcementForm, daysOnMarket: v })} />
              </div>
            </div>
          )}

          {/* NEIGHBORHOOD TAB */}
          {activeTab === 'neighborhood' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField label="Neighborhood Name" placeholder="Sunset Ridge" value={neighborhoodForm.name} onChange={(v) => setNeighborhoodForm({ ...neighborhoodForm, name: v })} />
              <InputField label="City & State" placeholder="Malibu, California" value={neighborhoodForm.city} onChange={(v) => setNeighborhoodForm({ ...neighborhoodForm, city: v })} />
              <TextareaField label="Key Highlights" placeholder="Top-rated schools, walkable to shopping, hiking trails, low crime, great restaurants, family-friendly..." value={neighborhoodForm.highlights} onChange={(v) => setNeighborhoodForm({ ...neighborhoodForm, highlights: v })} />
            </div>
          )}

          {/* OPEN HOUSE TAB */}
          {activeTab === 'openhouse' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <InputField label="Property Address" placeholder="147 Sunset Ridge Drive, Malibu CA" value={openHouseForm.address} onChange={(v) => setOpenHouseForm({ ...openHouseForm, address: v })} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <InputField label="Date" type="date" value={openHouseForm.date} onChange={(v) => setOpenHouseForm({ ...openHouseForm, date: v })} />
                <InputField label="Time" placeholder="11:00 AM – 2:00 PM" value={openHouseForm.time} onChange={(v) => setOpenHouseForm({ ...openHouseForm, time: v })} />
              </div>
              <TextareaField label="Key Property Highlights" placeholder="4BR, resort pool, mountain views, chef kitchen, smart home..." value={openHouseForm.highlights} onChange={(v) => setOpenHouseForm({ ...openHouseForm, highlights: v })} />
            </div>
          )}

          <button onClick={generate} disabled={loading} className="btn-gold" style={{ width: '100%', padding: '15px', fontSize: '15px', marginTop: '20px' }}>
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#0B1437" strokeWidth="3" strokeOpacity="0.25" />
                  <path d="M12 2a10 10 0 0110 10" stroke="#0B1437" strokeWidth="3" strokeLinecap="round" />
                </svg>
                Generating...
              </span>
            ) : '✦ Generate with PropCopy AI'}
          </button>
        </div>

        {/* Output panel */}
        <div>
          {loading || outputs.length > 0 ? (
            <GeneratorOutput
              outputs={outputs}
              onRegenerate={generate}
              onSave={handleSave}
              loading={loading}
            />
          ) : (
            <div
              style={{
                background: 'white',
                border: '2px dashed rgba(201,168,76,0.2)',
                borderRadius: '16px',
                padding: '60px 32px',
                textAlign: 'center',
                color: '#8892A4',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✦</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0B1437', marginBottom: '8px' }}>
                Your content will appear here
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7 }}>
                Fill in the form on the left and click Generate to create professional content in seconds.
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .generate-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// Helper components
const labelStyle: React.CSSProperties = { fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' };

function InputField({ label, placeholder, value, onChange, type = 'text' }: { label: string; placeholder?: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="input-light" style={{ width: '100%', padding: '11px 14px', fontSize: '14px' }} />
    </div>
  );
}

function TextareaField({ label, placeholder, value, onChange }: { label: string; placeholder?: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <textarea placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="input-light" rows={3} style={{ width: '100%', padding: '11px 14px', fontSize: '14px', resize: 'vertical' }} />
    </div>
  );
}

function SelectField({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="input-light select-gold" style={{ width: '100%', padding: '11px 14px', fontSize: '14px' }}>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function GeneratePage() {
  return (
    <Suspense fallback={<div style={{ padding: '36px' }}>Loading...</div>}>
      <GeneratePageInner />
    </Suspense>
  );
}
