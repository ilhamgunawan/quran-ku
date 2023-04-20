import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { ISurah, ISurahMetaData } from '@/types/surah';

interface SurahState {
  surahAll: ISurah[] | null;
  filteredSurah: ISurah[];
  setSurahAll: (surahAll: ISurah[]) => void;
  initFilteredSurah: (surahAll: ISurah[]) => void;
  onSearchInputChanged: (keyword: string) => void;
  getSurahMetaData: (currentSurahNumber: string) => ISurahMetaData;
}

export const useSurahStore = create<SurahState>()(
  devtools(
    persist(
      (set, get) => ({
        surahAll: null,
        filteredSurah: [],
        setSurahAll: (surahAll) => set({ surahAll }),
        initFilteredSurah: (surahAll) => set({ filteredSurah: surahAll }),
        onSearchInputChanged: (keyword) => {
          const searchValueLoweredCase = keyword.toLowerCase().trim();
          const { surahAll } = get();

          if (surahAll) {
            const filteredSearch = surahAll.filter(({ nama, arti }) => {
              const surahNameLoweredCase = nama.toLowerCase().trim();
              const surahTranslateLoweredCase = arti.toLowerCase().trim();
              return (
                surahNameLoweredCase.match(searchValueLoweredCase) ||
                surahTranslateLoweredCase.match(searchValueLoweredCase)
              );
            });

            set({ filteredSurah: filteredSearch });
          }
        },
        getSurahMetaData: (currentSurahNumber) => {
          const current = parseInt(currentSurahNumber, 10);
          const { surahAll } = get();
          return {
            nextSurahName: surahAll?.[current]?.nama || undefined,
            nextSurahNumber: surahAll?.[current]?.nomor || undefined,
            previourSurahName: surahAll?.[current - 2]?.nama || undefined,
            previousSurahNumber: surahAll?.[current - 2]?.nomor || undefined,
          };
        },
      }),
      {
        name: 'surah-storage',
      }
    )
  )
);
