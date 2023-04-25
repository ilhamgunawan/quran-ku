import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { IAyatBookmark } from '@/types/bookmark';

export interface BookmarkState {
  bookmarkList: IAyatBookmark[];
  saveAyat: (ayat: IAyatBookmark) => void;
  removeAyatById: (id: string) => void;
  getAyatById: (id: string) => IAyatBookmark | null;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarkList: [],
      saveAyat: (ayat) => {
        const isAyatExist = Boolean(get().getAyatById(ayat.id));
        if (isAyatExist) return;
        set({
          bookmarkList: [ayat, ...get().bookmarkList],
        });
      },
      removeAyatById: (id) => {
        set({
          bookmarkList: get().bookmarkList.filter(
            (bookrmark) => bookrmark.id !== id
          ),
        });
      },
      getAyatById: (id) => {
        return (
          get().bookmarkList.find((bookmark) => bookmark.id === id) || null
        );
      },
    }),
    {
      name: 'bookmark-storage',
    }
  )
);
