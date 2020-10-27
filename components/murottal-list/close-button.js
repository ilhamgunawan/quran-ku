import ExpandLessIcon from '../../assets/icons/expand-less-icon';

const CloseButton = ({ clickEvent }) => {
  return (
    <button
      className='focus:outline-none'
      onClick={clickEvent}
      style={{
        position: 'absolute',
        bottom: '0.5rem',
        right: '0.5rem',
        zIndex: '10'
      }}
    >
      <ExpandLessIcon />
    </button>
  );
};

export default CloseButton;