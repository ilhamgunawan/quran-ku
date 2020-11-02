import { useContext } from "react";
import { Context } from "../../state/store";
import { toggleNav } from "../../state/actions";

import MenuIcon from "../../assets/icons/menu-icon";

const RightButton = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <button
      onClick={() => dispatch(toggleNav())}
      className="focus:outline-none h-10 w-10 pl-2 rounded-full leading-none"
      aria-label="Menu"
    >
      <MenuIcon />
    </button>
  );
};

export default RightButton;
