import Link from 'next/link';
import { useContext } from 'react';

import { toggleNav } from '../../state/actions';
import { DispatchContext } from '../../state/Store';

interface NavMenuItemProps {
  navUrl: any;
  buttonName: any;
  icon: any;
}

const NavMenuItem = ({ navUrl, buttonName, icon }: NavMenuItemProps) => {
  const dispatch = useContext(DispatchContext);

  return (
    <li>
      <Link href={navUrl}>
        <a
          onClick={() => dispatch(toggleNav())}
          className="flex w-full items-center p-3"
        >
          {icon}
          <span className="ml-2 text-lg leading-none">{buttonName}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavMenuItem;
