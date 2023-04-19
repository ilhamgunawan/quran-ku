import { useContext } from 'react';

import { GlobalContext } from '../../state/Store';
import NavMenu from '../nav-menu/NavMenu';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

interface HeaderProps {
  pageTitle: string;
}

const Header = ({ pageTitle }: HeaderProps) => {
  const { isNavOpen } = useContext(GlobalContext);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-teal-400 shadow-xl">
      <nav className="relative mx-auto flex items-center justify-between p-2 md:max-w-[64rem] md:px-4">
        <LeftButton pageTitle={pageTitle} />
        <h1 className="py-2 text-center text-xl font-bold text-white">
          {pageTitle}
        </h1>
        <RightButton />
        {isNavOpen ? <NavMenu /> : null}
      </nav>
    </header>
  );
};

export default Header;
