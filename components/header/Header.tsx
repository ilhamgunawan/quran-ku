import { useContext } from 'react';

import { GlobalContext } from '../../state/Store';
import NavMenu from '../nav-menu/NavMenu';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

export type Props = {
  pageTitle: string;
};

export default function Header({ pageTitle }: Props) {
  const { isNavOpen } = useContext(GlobalContext);

  return (
    <header
      style={{ zIndex: '100' }}
      className="fixed inset-x-0 top-0 bg-teal-400 px-2 py-1 shadow-xl"
    >
      <nav className="header-nav relative flex items-center justify-between">
        <LeftButton pageTitle={pageTitle} />
        <h1 className="py-2 text-center text-xl font-bold text-white">
          {pageTitle}
        </h1>
        <RightButton />
        {isNavOpen ? <NavMenu /> : null}
      </nav>
    </header>
  );
}
