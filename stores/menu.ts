import { create } from 'zustand';

import type { IMenu } from '@/types/menu';

interface MenuState {
  menus: IMenu[];
  isHeaderMenuOpen: boolean;
  setIsHeaderMenuOpen: (isOpen: boolean) => void;
  toggleHeaderMenu: () => void;
}

const MENUS: IMenu[] = [
  {
    url: '/surat',
    title: "Baca Al-Qur'an",
    icon: 'quran',
  },
  {
    url: '/tafsir',
    title: 'Baca Tafsir',
    icon: 'quran-book',
  },
  {
    url: '/murottal',
    title: 'Murottal',
    icon: 'arab-man',
  },
  {
    url: '/penanda',
    title: 'Penanda',
    icon: 'bookmark',
  },
  {
    url: '/tentang',
    title: 'Tentang',
    icon: 'info',
  },
];

export const useMenuStore = create<MenuState>()((set, get) => ({
  menus: MENUS,
  isHeaderMenuOpen: false,
  setIsHeaderMenuOpen: (isOpen) => set({ isHeaderMenuOpen: isOpen }),
  toggleHeaderMenu: () => set({ isHeaderMenuOpen: !get().isHeaderMenuOpen }),
}));
