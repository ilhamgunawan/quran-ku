import clsx from 'clsx';
import React from 'react';
import { shallow } from 'zustand/shallow';

import { useMenuStore } from '@/stores/menu';

import NavMenuItem from './NavMenuItem';

interface NavMenuProps {
  menuRef: React.RefObject<HTMLDivElement>;
}

const NavMenu = ({ menuRef }: NavMenuProps) => {
  const { menus, isHeaderMenuOpen, setIsHeaderMenuOpen } = useMenuStore(
    (state) => state,
    shallow
  );

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      if (!menuRef.current?.contains(targetElement)) {
        setIsHeaderMenuOpen(false);
      }
    };

    document.body.addEventListener('mousedown', handler);

    return () => document.body.removeEventListener('mousedown', handler);
  }, []);

  return (
    <ul
      className={clsx(
        'absolute right-6 top-14 w-48 rounded-md bg-white p-2 shadow-lg',
        isHeaderMenuOpen ? 'block' : 'hidden'
      )}
    >
      <NavMenuItem url="/" title="Beranda" icon="home" />
      {menus.map((menu, index) => (
        <NavMenuItem
          key={index}
          url={menu.url}
          title={menu.title}
          icon={menu.icon}
        />
      ))}
    </ul>
  );
};

export default NavMenu;
