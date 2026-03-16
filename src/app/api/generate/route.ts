import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const PROMPTS = {
  listing: (data: Record<string, unknown>) => `You are PropCopy AI, an expert real estate copywriter. Generate three versions of a property listing description.

Property Details:
- Address: ${data.address}
- Bedrooms: ${data.beds}
- Bathrooms: ${data.baths}
- Square Footage: ${data.sqft}
- Key Features: ${(data.features as string[]).join(', ')}
- Tone: ${data.tone}
- Special Notes: ${data.notes || 'None'}

Generate three distinct versions:
1. FULL DESCRIPTION (approximately 250 words): MLS-ready, professional, compelling
2. SHORT VERSION (approximately 100 words): For websites and marketing materials
3. TEASER (approximately 50 words): For social media and quick marketing

Format your response as JSON:
{
  "full": "...",
  "short": "...",
  "teaser": "..."
}

Important:
- Avoid fair housing violations
- Do not discriminate based on race, religion, sex, national origin, familial status, or disability
- Focus on property features, not neighborhood demographics
- Write in the selected tone: ${data.tone}`,

  social: (data: Record<string, unknown>) => `You are PropCopy AI, an expert real estate social media specialist. Generate 3 engaging ${data.platform} captions for this property.

Property:
- Address: ${data.address}
- Bedrooms: ${data.beds}
- Bathrooms: ${data.baths}
- Square Footage: ${data.sqft}
- Platform: ${data.platform}
- Key Highlights: ${data.notes}

Create 3 unique caption variations optimized for ${data.platform} with:
- Platform-appropriate length and style
- Relevant emojis
- Call to action
- Hashtags (10-15 relevant ones)

Format as JSON: {"caption1": "...", "caption2": "...", "caption3": "..."}`,

  email: (data: Record<string, unknown>) => `You are PropCopy AI, creating personalized buyer follow-up emails for real estate agents.

Buyer: ${data.buyerName}
Properties Viewed: ${data.propertiesViewed}
Buyer Preferences: ${data.preferences}
Agent Name: ${data.agentName}
Tone: ${data.tone}

Write a compelling follow-up email with:
- An engaging subject line
- Personal, warm opening referencing what they viewed
- Summary of their preferences showing you listened
- Next steps / call to action
- Professional sign-off

Format as JSON: {"subject": "...", "body": "..."}`,

  announcement: (data: Record<string, unknown>) => `Generate a ${data.type === 'just-sold' ? 'Just Sold' : 'Just Listed'} announcement for social media.

Property: ${data.address}
List Price: ${data.listPrice}
${data.soldPrice ? `Sold Price: ${data.soldPrice}` : ''}
Days on Market: ${data.daysOnMarket}

Create an exciting, celebratory announcement that builds the agent's brand. Include emojis, key stats, and a call to action.

Return as JSON: {"announcement": "..."}`,

  neighborhood: (data: Record<string, unknown>) => `You are PropCopy AI, write a compelling 2-paragraph neighborhood bio for real estate use.

Neighborhood: ${data.name}
City: ${data.city}
Key Highlights: ${data.highlights}

Write 2 rich paragraphs that:
- Paint a vivid picture of life in this neighborhood
- Highlight schools, amenities, lifestyle
- Appeal to potential buyers emotionally
- Sound professional and trustworthy

Return as JSON: {"bio": "..."}`,

  openhouse: (data: Record<string, unknown>) => `Generate open house marketing content for multiple channels.

Property: ${data.address}
Date: ${data.date}
Time: ${data.time}
Highlights: ${data.highlights}

Create:
1. A social media post (with emojis and hashtags)
2. An email blast (with subject line)
3. An SMS-length message (under 160 characters)

Return as JSON: {"social": "...", "emailSubject": "...", "emailBody": "...", "sms": "..."}`,
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json({ error: 'Missing type or data' }, { status: 400 });
    }

    const promptFn = PROMPTS[type as keyof typeof PROMPTS];
    if (!promptFn) {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    const prompt = promptFn(data);

    const message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2048,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== 'text') {
      return NextResponse.json({ error: 'Unexpected response type' }, { status: 500 });
    }

    // Parse JSON from Claude's response
    let parsed;
    try {
      const jsonMatch = content.text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        parsed = { content: content.text };
      }
    } catch {
      parsed = { content: content.text };
    }

    return NextResponse.json({ success: true, data: parsed });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}
