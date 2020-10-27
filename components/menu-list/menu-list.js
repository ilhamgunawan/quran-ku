import MenuListItem from './menu-list-item';
import QuranIcon from '../../assets/icons/quran-icon';
import QuranBookIcon from '../../assets/icons/quran-book-icon';
import ArabManIcon from '../../assets/icons/arab-man-icon';
import InfoIcon from '../../assets/icons/info-icon';

const MenuList = () => {
  return (
    <ul className='flex flex-col items-center h-48 w-full'>
      <MenuListItem navigateLink='/surat' buttonName='Baca Al-Quran' icon={<QuranIcon />} />
      <MenuListItem navigateLink='/tafsir' buttonName='Baca Tafsir' icon={<QuranBookIcon />} />
      <MenuListItem navigateLink='/murottal' buttonName='Murottal' icon={<ArabManIcon />} />
      <MenuListItem navigateLink='/tentang' buttonName='Tentang' icon={<InfoIcon />}/>
    </ul>
  );
};

export default MenuList;