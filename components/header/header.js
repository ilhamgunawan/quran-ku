import { useContext } from "react";
import { Context } from "../../state/store";

import LeftButton from "./left-button";
import RightButton from "./right-button";
import NavMenu from "../nav-menu/nav-menu";

const Header = ({ pageTitle }) => {
  const [state, dispatch] = useContext(Context);
  const { isNavOpen } = state;

  return (
    <header
      style={{ zIndex: "100" }}
      className="fixed top-0 inset-x-0 shadow-xl bg-teal-400 py-1 px-2"
    >
      <nav className="relative header-nav flex justify-between items-center">
        <LeftButton pageTitle={pageTitle} />
        <h1 className="font-bold text-xl py-2 text-white text-center">
          {pageTitle}
        </h1>
        <RightButton />
        {isNavOpen ? <NavMenu /> : null}
      </nav>
    </header>
  );
};

export default Header;
