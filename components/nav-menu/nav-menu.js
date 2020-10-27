import Link from 'next/link';
import { useContext } from 'react';
import { Context } from '../../state/store';
import { toggleNav } from '../../state/actions';

import HomeIcon from '../../assets/icons/home-icon';
import QuranIcon from '../../assets/icons/quran-icon';
import QuranBookIcon from '../../assets/icons/quran-book-icon';
import ArabManIcon from '../../assets/icons/arab-man-icon';

const NavMenu = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <ul 
      className='absolute w-48 p-2 rounded-md shadow-lg bg-gray-100'
      style={{
        top: '2.2rem',
        right: '1.5rem'
      }}
    >
      <li>
        <Link href='/'>
          <a onClick={() => dispatch(toggleNav())} className='flex items-center w-full p-3'>
            <HomeIcon />
            <span className='leading-none text-lg ml-2'>Beranda</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/surat'>
          <a onClick={() => dispatch(toggleNav())} className='flex items-center w-full p-3'>
            <QuranIcon />
            <span className='leading-none text-lg ml-2'>Baca Al-Quran</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/tafsir'>
          <a onClick={() => dispatch(toggleNav())} className='flex items-center w-full p-3'>
            <QuranBookIcon />
            <span className='leading-none text-lg ml-2'>Baca Tafsir</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/murottal'>
          <a onClick={() => dispatch(toggleNav())} className='flex items-center w-full p-3'>
            <ArabManIcon />
            <span className='leading-none text-lg ml-2'>Murottal</span>
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;