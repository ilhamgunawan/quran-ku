import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import NavMenu from "../nav-menu/NavMenu";
import { useContext } from "react";
import { GlobalContext } from "../../state/Store";

export type Props = {
  pageTitle: string;
};

export default function Header({ pageTitle }: Props) {
  const { isNavOpen } = useContext(GlobalContext);

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
}
