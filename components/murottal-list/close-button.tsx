import ExpandLessIcon from "../../assets/icons/expand-less-icon";

const CloseButton = ({ clickEvent }) => {
  return (
    <button
      aria-label="Tutup expand"
      className="focus:outline-none hover:bg-blue-100 rounded-full p-1"
      onClick={clickEvent}
      style={{
        position: "absolute",
        bottom: "0.5rem",
        right: "0.5rem",
        zIndex: "10",
      }}
    >
      <ExpandLessIcon />
    </button>
  );
};

export default CloseButton;
