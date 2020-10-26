import LeftButton from './left-button';
import RightButton from './right-button';

const Header = ({ pageTitle }) => {
  return (
    <header className='fixed top-0 inset-x-0 shadow-lg bg-teal-400 py-1 px-2'>
      <nav className='header-nav flex justify-between items-center'>
        <LeftButton pageTitle={pageTitle} />
        <h1 className='font-bold text-xl py-2 text-white text-center'>{pageTitle}</h1>
        <RightButton />
      </nav>
    </header>
  );
};

export default Header;