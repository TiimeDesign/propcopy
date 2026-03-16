'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GeneratedContent, Tone } from './types';

interface AppState {
  preferredTone: Tone;
  setPreferredTone: (tone: Tone) => void;

  library: GeneratedContent[];
  addToLibrary: (item: GeneratedContent) => void;
  removeFromLibrary: (id: string) => void;
  clearLibrary: () => void;

  onboardingComplete: boolean;
  setOnboardingComplete: (val: boolean) => void;

  lastUsedDate: string | null;
  streakDays: number;
  updateStreak: () => void;

  generationsUsed: number;
  incrementGenerations: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      preferredTone: 'Friendly' as Tone,
      setPreferredTone: (tone: Tone) => set({ preferredTone: tone }),

      library: [],
      addToLibrary: (item: GeneratedContent) =>
        set((state) => ({
          library: [{ ...item, saved: true }, ...state.library],
        })),
      removeFromLibrary: (id: string) =>
        set((state) => ({
          library: state.library.filter((item) => item.id !== id),
        })),
      clearLibrary: () => set({ library: [] }),

      onboardingComplete: false,
      setOnboardingComplete: (val: boolean) => set({ onboardingComplete: val }),

      lastUsedDate: null,
      streakDays: 0,
      updateStreak: () => {
        const today = new Date().toDateString();
        const { lastUsedDate, streakDays } = get();
        if (lastUsedDate === today) return;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        set({
          lastUsedDate: today,
          streakDays: lastUsedDate === yesterday ? streakDays + 1 : 1,
        });
      },

      generationsUsed: 18,
      incrementGenerations: () =>
        set((state) => ({ generationsUsed: state.generationsUsed + 1 })),
    }),
    {
      name: 'propcopy-storage',
    }
  )
);
