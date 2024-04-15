import spinner from "../assets/Spinner-3.gif";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-6">
      <img src={spinner} alt="loading..." className="w-24" />
    </div>
  );
};

export default Spinner;
