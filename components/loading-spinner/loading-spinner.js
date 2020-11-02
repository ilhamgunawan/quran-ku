import Loader from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div
      style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}
      className="flex flex-col justify-center items-center"
    >
      <Loader type="Oval" color="#a0aec0" height={60} width={60} />
    </div>
  );
};

export default LoadingSpinner;
