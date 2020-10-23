import NextIcon from '../assets/icons/next-icon';
import PlayIcon from '../assets/icons/play-icon';
import PreviousIcon from '../assets/icons/previous-icon';
import ListIcon from '../assets/icons/list-icon';
import Link from 'next/link';

const Footer = ({ pageTitle, previousId, nextId, previousName, nextName }) => {
  if (pageTitle.includes('ayat')) {
    return (
      <footer className='w-full fixed bottom-0 inset-x-0 flex bg-gray-900'>
        <div className='w-full flex footer-buttons'>
          {
            previousId
              ? <Link href={`/surat/${previousId}`}>
                  <button className='w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none'>
                    <span><PreviousIcon /></span>
                    <span className='text-white font-light text-xs'>{previousName}</span>
                  </button>
                </Link>
              : null
          }
          <button className='w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none'>
            <span><PlayIcon /></span>
            <span className='text-white font-light text-xs'>Play Murottal</span>
          </button>
          <button className='w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none'>
            <span><ListIcon /></span>
            <span className='text-white font-light text-xs'>Daftar Ayat</span>
          </button>
          {
            nextId
              ? <Link href={`/surat/${nextId}`}>
                  <button className='w-full flex flex-col items-center bg-gray-900 p-1 focus:outline-none'>
                    <span><NextIcon /></span>
                    <span className='text-white font-light text-xs'>{nextName}</span>
                  </button>
                </Link>
              : null
          }
        </div>
      </footer>
    );
  } else {
    return null;
  }
};

export default Footer;