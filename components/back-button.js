import BackIcon from '../assets/icons/back-icon';
import Link from 'next/link';

const BackButton = ({ pageTitle }) => {
  if (pageTitle.includes('ayat')) {
    return (
      <Link href='/surat'>
        <button className='focus:outline-none h-8 w-8 rounded-full leading-none'>
          <BackIcon />
        </button>
      </Link>
    );
  } else if (pageTitle.includes('Beranda')) {
    return null;
  } else {
    return (
      <Link href='/'>
        <button className='focus:outline-none h-8 w-8 rounded-full leading-none'>
          <BackIcon />
        </button>
      </Link>
    );
  }
};

export default BackButton;