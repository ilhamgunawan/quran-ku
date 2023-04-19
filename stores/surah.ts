import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { ISurah } from '@/types/surah';

interface SurahState {
  surahAll: ISurah[] | null;
  setSurahAll: (surahAll: ISurah[]) => void;
}

export const useSurahStore = create<SurahState>()(
  devtools(
    persist(
      (set) => ({
        surahAll: null,
        setSurahAll: (surahAll) => set({ surahAll }),
      }),
      {
        name: 'surah-storage',
      }
    )
  )
);
