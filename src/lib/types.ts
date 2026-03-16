export type ContentType =
  | 'listing'
  | 'social'
  | 'email'
  | 'announcement'
  | 'neighborhood'
  | 'openhouse';

export type Platform = 'Instagram' | 'Facebook' | 'LinkedIn' | 'X/Twitter';

export type Tone =
  | 'Luxury'
  | 'Friendly'
  | 'Investment-focused'
  | 'First-time buyer'
  | 'Professional'
  | 'Warm'
  | 'Urgent';

export interface GeneratedContent {
  id: string;
  type: ContentType;
  title: string;
  content: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  saved?: boolean;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  brokerageName: string;
  licenseNumber: string;
  preferredTone: Tone;
  headshotUrl?: string;
  agentBio?: string;
  plan: 'starter' | 'pro' | 'team';
  generationsUsed: number;
  generationsLimit: number;
  streakDays: number;
  referralCode: string;
}

export interface Plan {
  name: string;
  price: number;
  generations: string;
  features: string[];
  highlighted?: boolean;
  stripePriceId?: string;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  fields: Record<string, string>;
  contentType: ContentType;
}
