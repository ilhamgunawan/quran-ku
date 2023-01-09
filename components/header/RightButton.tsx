import MenuIcon from "../../assets/icons/menu-icon";
import { useContext } from "react";
import { DispatchContext } from "../../state/Store";
import { toggleNav } from "../../state/actions";

export default function RightButton() {
	const dispatch = useContext(DispatchContext);

  return (
    <button
      onClick={() => dispatch(toggleNav())}
      className="focus:outline-none h-10 w-10 pl-2 rounded-full leading-none"
      aria-label="Menu"
    >
      <MenuIcon />
    </button>
  );
}
