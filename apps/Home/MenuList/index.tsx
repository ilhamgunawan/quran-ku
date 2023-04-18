import ArabManIcon from '@/components/ArabManIcon';
import BookmarkIcon from '@/components/BookmarkIcon';
import InfoIcon from '@/components/InfoIcon';
import QuranBookIcon from '@/components/QuranBookIcon';
import QuranIcon from '@/components/QuranIcon';

import type { IMenuItem } from './MenuItem';
import MenuItem from './MenuItem';

const menus: IMenuItem[] = [
  {
    url: '/surat',
    title: "Baca Al-Qur'an",
    icon: <QuranIcon />,
  },
  {
    url: '/tafsir',
    title: 'Baca Tafsir',
    icon: <QuranBookIcon />,
  },
  {
    url: '/murottal',
    title: 'Murottal',
    icon: <ArabManIcon />,
  },
  {
    url: '/penanda',
    title: 'Penanda',
    icon: <BookmarkIcon />,
  },
  {
    url: '/tentang',
    title: 'Tentang',
    icon: <InfoIcon />,
  },
];

const MenuList = () => {
  return (
    <ul className="flex h-48 w-full flex-col items-center">
      {menus.map((menu) => (
        <MenuItem
          key={menu.title}
          url={menu.url}
          title={menu.title}
          icon={menu.icon}
        />
      ))}
    </ul>
  );
};

export default MenuList;
