import Link from 'next/link';

import { customButtonTeal } from '@/components/button';

export interface IMenuItem {
  url: string;
  title: string;
  icon: JSX.Element;
}

interface MenuItemProps extends IMenuItem {}

const MenuItem = ({ url, title, icon }: MenuItemProps) => {
  return (
    <li className="w-full">
      <Link href={url}>
        <button className={customButtonTeal}>
          {icon}
          <span className="ml-2">{title}</span>
        </button>
      </Link>
    </li>
  );
};

export default MenuItem;
