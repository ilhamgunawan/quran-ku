import MenuIcon from '@/components/MenuIcon';
import { useMenuStore } from '@/stores/menu';

export default function RightButton() {
  const toggleHeaderMenu = useMenuStore((state) => state.toggleHeaderMenu);

  return (
    <button
      onClick={() => toggleHeaderMenu()}
      className="h-10 w-10 rounded-full pl-2 leading-none focus:outline-none"
      aria-label="Menu"
    >
      <MenuIcon />
    </button>
  );
}
