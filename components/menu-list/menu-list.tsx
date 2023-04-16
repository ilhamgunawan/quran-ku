import ArabManIcon from '../../assets/icons/arab-man-icon';
import BookmarkIcon from '../../assets/icons/bookmark-icon';
import InfoIcon from '../../assets/icons/info-icon';
import QuranBookIcon from '../../assets/icons/quran-book-icon';
import QuranIcon from '../../assets/icons/quran-icon';
import MenuListItem from './menu-list-item';

const MenuList = () => {
  return (
    <ul className="flex h-48 w-full flex-col items-center">
      <MenuListItem
        navigateLink="/surat"
        buttonName="Baca Al-Qur'an"
        icon={<QuranIcon />}
      />
      <MenuListItem
        navigateLink="/tafsir"
        buttonName="Baca Tafsir"
        icon={<QuranBookIcon />}
      />
      <MenuListItem
        navigateLink="/murottal"
        buttonName="Murottal"
        icon={<ArabManIcon />}
      />
      <MenuListItem
        navigateLink="/penanda"
        buttonName="Penanda"
        icon={<BookmarkIcon />}
      />
      <MenuListItem
        navigateLink="/tentang"
        buttonName="Tentang"
        icon={<InfoIcon fillColor={null} />}
      />
    </ul>
  );
};

export default MenuList;
