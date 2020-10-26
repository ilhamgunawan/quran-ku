import MenuIcon from '../../assets/icons/menu-icon';

const RightButton = () => {
  return (
    <button className='focus:outline-none h-10 w-10 pl-2 rounded-full leading-none'>
      <MenuIcon />
    </button>
  );
};

export default RightButton;