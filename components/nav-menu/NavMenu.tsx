import ArabManIcon from '../../assets/icons/arab-man-icon';
import BookmarkIcon from '../../assets/icons/bookmark-icon';
import HomeIcon from '../../assets/icons/home-icon';
import InfoIcon from '../../assets/icons/info-icon';
import QuranBookIcon from '../../assets/icons/quran-book-icon';
import QuranIcon from '../../assets/icons/quran-icon';
import NavMenuItem from './NavMenuItem';

const NavMenu = () => {
  return (
    <ul
      className="absolute w-48 rounded-md bg-white p-2 shadow-lg"
      style={{
        top: '2.2rem',
        right: '1.5rem',
      }}
    >
      <NavMenuItem navUrl="/" buttonName="Beranda" icon={<HomeIcon />} />
      <NavMenuItem
        navUrl="/surat"
        buttonName="Baca Al-Qur'an"
        icon={<QuranIcon />}
      />
      <NavMenuItem
        navUrl="/tafsir"
        buttonName="Baca Tafsir"
        icon={<QuranBookIcon />}
      />
      <NavMenuItem
        navUrl="/murottal"
        buttonName="Murottal"
        icon={<ArabManIcon />}
      />
      <NavMenuItem
        navUrl="/penanda"
        buttonName="Penanda"
        icon={<BookmarkIcon />}
      />
      <NavMenuItem
        navUrl="/tentang"
        buttonName="Tentang"
        icon={<InfoIcon fillColor="black" />}
      />
    </ul>
  );
};

export default NavMenu;
