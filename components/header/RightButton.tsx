import { useContext } from 'react';

import MenuIcon from '../../assets/icons/menu-icon';
import { toggleNav } from '../../state/actions';
import { DispatchContext } from '../../state/Store';

export default function RightButton() {
  const dispatch = useContext(DispatchContext);

  return (
    <button
      onClick={() => dispatch(toggleNav())}
      className="h-10 w-10 rounded-full pl-2 leading-none focus:outline-none"
      aria-label="Menu"
    >
      <MenuIcon />
    </button>
  );
}
