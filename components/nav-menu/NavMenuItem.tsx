import Link from "next/link";
import { useContext } from "react";
import { DispatchContext } from "../../state/Store";
import { toggleNav } from "../../state/actions";

const NavMenuItem = ({ navUrl, buttonName, icon }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <li>
      <Link href={navUrl}>
        <a
          onClick={() => dispatch(toggleNav())}
          className="flex items-center w-full p-3"
        >
          {icon}
          <span className="leading-none text-lg ml-2">{buttonName}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavMenuItem;
