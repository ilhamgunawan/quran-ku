import clsx from 'clsx';

interface MenuIconProps extends React.SVGAttributes<SVGAElement> {}

const MenuIcon = (props: MenuIconProps) => {
  return (
    <>
      <svg
        className={clsx(
          'h-6 w-6 fill-current text-white',
          props.className || ''
        )}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="92px"
        height="92px"
        viewBox="0 0 92 92"
        enableBackground="new 0 0 92 92"
        xmlSpace="preserve"
      >
        <path
          id="XMLID_101_"
          d="M78,23.5H14c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5h64c3.6,0,6.5,2.9,6.5,6.5S81.6,23.5,78,23.5z M84.5,46
				c0-3.6-2.9-6.5-6.5-6.5H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,52.5,84.5,49.6,84.5,46z M84.5,75c0-3.6-2.9-6.5-6.5-6.5
				H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,81.5,84.5,78.6,84.5,75z"
        />
      </svg>
    </>
  );
};

export default MenuIcon;
