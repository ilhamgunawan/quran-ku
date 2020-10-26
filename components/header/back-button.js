import Link from 'next/link';
import BackIcon from '../../assets/icons/back-icon';
import MenuIcon from '../../assets/icons/menu-icon';

const BackButton = ({ pageTitle }) => {
  if (pageTitle.includes('ayat')) {
    return (
      <Link href='/surat'>
        <button className='focus:outline-none h-10 w-10 pl-1 rounded-full leading-none'>
          <BackIcon />
        </button>
      </Link>
    );
  } else if (pageTitle.includes('Beranda')) {
    return (
      <button className='focus:outline-none h-10 w-10 pl-2 rounded-full leading-none'>
        <MenuIcon />
      </button>
    )
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

export default BackButton;