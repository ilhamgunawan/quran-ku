import Link from "next/link";
import { customButtonTeal } from "../button";

const MenuListItem = ({ navigateLink, buttonName, icon }) => {
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
