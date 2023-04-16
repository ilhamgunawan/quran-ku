import ExpandLessIcon from '../../assets/icons/expand-less-icon';

interface CloseButtonProps {
  clickEvent: any;
}

const CloseButton = ({ clickEvent }: CloseButtonProps) => {
  return (
    <button
      aria-label="Tutup expand"
      className="rounded-full p-1 hover:bg-blue-100 focus:outline-none"
      onClick={clickEvent}
      style={{
        position: 'absolute',
        bottom: '0.5rem',
        right: '0.5rem',
        zIndex: '10',
      }}
    >
      <ExpandLessIcon />
    </button>
  );
};

export default CloseButton;
