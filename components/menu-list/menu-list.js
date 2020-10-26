import MenuListItem from './menu-list-item';

const MenuList = () => {
  return (
    <ul className='flex flex-col items-center h-48 w-full'>
      <MenuListItem navigateLink='/surat' buttonName='Baca Al-Quran' />
      <MenuListItem navigateLink='/tafsir' buttonName='Baca Tafsir' />
      <MenuListItem navigateLink='/murottal' buttonName='Murottal' />
    </ul>
  );
};

export default MenuList;