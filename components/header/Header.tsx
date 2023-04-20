import React from 'react';

import NavMenu from '../NavMenu/NavMenu';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

interface HeaderProps {
  pageTitle: string;
}

const Header = ({ pageTitle }: HeaderProps) => {
  const menuRef = React.useRef<HTMLDivElement>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-teal-400 shadow-xl">
      <nav className="relative mx-auto flex items-center justify-between p-2 md:max-w-[64rem]">
        <LeftButton pageTitle={pageTitle} />
        <h1 className="py-2 text-center text-xl font-bold text-white">
          {pageTitle}
        </h1>
        <div ref={menuRef}>
          <RightButton />
          <NavMenu menuRef={menuRef} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
