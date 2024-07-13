import { RingLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <RingLoader
        color="#368ed6"
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </div>
  );
};

export default Spinner;
