import Link from 'next/link';
import BackIcon from '../../assets/icons/back-icon';
import SearchIcon from '../../assets/icons/search-icon';
import InfoIcon from '../../assets/icons/info-icon';

const LeftButton = ({ pageTitle }) => {
  if (pageTitle.includes('ayat')) {
    return (
      <Link href='/surat'>
        <button className='focus:outline-none h-10 w-10 pl-1 rounded-full leading-none'>
          <BackIcon />
        </button>
      </Link>
    );
  } else if (pageTitle.includes('Tafsir Surat')) {
    return (
      <Link href='/tafsir'>
        <button className='focus:outline-none h-10 w-10 pl-1 rounded-full leading-none'>
          <BackIcon />
        </button>
      </Link>
    );
  } else if (pageTitle.includes('Beranda')) {
    return (
      <Link href='/tentang'>
        <button className='focus:outline-none h-10 w-10 rounded-full flex items-center justify-center'>
          <InfoIcon  />
        </button>
      </Link>
    );
  } else {
    return (
      <Link href='/'>
        <button className='focus:outline-none h-10 w-10 pl-1 rounded-full leading-none'>
          <BackIcon />
        </button>
      </Link>
    );
  }
};

export default LeftButton;