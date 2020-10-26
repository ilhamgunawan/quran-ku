import Link from 'next/link';
import { customButtonTeal } from '../button';

const MenuListItem = ({ navigateLink, buttonName }) => {
  return (
    <li className='w-full'>
      <Link href={navigateLink}>
        <button className={customButtonTeal}>{buttonName}</button>
      </Link>
    </li>
  );
};

export default MenuListItem;