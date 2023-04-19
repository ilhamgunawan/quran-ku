import type { TMenuIcon } from '@/types/menu';

import ArabManIcon from '../ArabManIcon';
import BookmarkIcon from '../BookmarkIcon';
import HomeIcon from '../HomeIcon';
import type { InfoIconProps } from '../InfoIcon';
import InfoIcon from '../InfoIcon';
import QuranBookIcon from '../QuranBookIcon';
import QuranIcon from '../QuranIcon';

interface MenuIconProps extends InfoIconProps {
  icon: TMenuIcon;
}

const MenuIcon = ({ icon, fillColor }: MenuIconProps) => {
  if (icon === 'arab-man') {
    return <ArabManIcon />;
  }

  if (icon === 'home') {
    return <HomeIcon />;
  }

  if (icon === 'quran') {
    return <QuranIcon />;
  }

  if (icon === 'quran-book') {
    return <QuranBookIcon />;
  }

  if (icon === 'bookmark') {
    return <BookmarkIcon />;
  }

  if (icon === 'info') {
    return <InfoIcon fillColor={fillColor} />;
  }

  return null;
};

export default MenuIcon;
