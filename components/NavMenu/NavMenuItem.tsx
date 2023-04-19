import Link from 'next/link';

import { useMenuStore } from '@/stores/menu';
import type { IMenu } from '@/types/menu';

import Icon from '../Icon';

interface NavMenuItemProps extends IMenu {}

const NavMenuItem = ({ url, title, icon }: NavMenuItemProps) => {
  const setIsHeaderMenuOpen = useMenuStore(
    (state) => state.setIsHeaderMenuOpen
  );

  return (
    <li>
      <Link href={url}>
        <a
          onClick={() => setIsHeaderMenuOpen(false)}
          className="flex w-full items-center rounded-md p-3 hover:bg-neutral-100"
        >
          <Icon icon={icon} fillColor="black" />
          <span className="ml-2 text-lg leading-none">{title}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavMenuItem;
