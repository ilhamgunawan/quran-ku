import Link from 'next/link';

import { customButtonTeal } from '../button';

interface MenuListItemProps {
  navigateLink: any;
  buttonName: any;
  icon: any;
}

const MenuListItem = ({
  navigateLink,
  buttonName,
  icon,
}: MenuListItemProps) => {
  return (
    <li className="w-full">
      <Link href={navigateLink}>
        <button className={customButtonTeal}>
          {icon}
          <span className="ml-2">{buttonName}</span>
        </button>
      </Link>
    </li>
  );
};

export default MenuListItem;
