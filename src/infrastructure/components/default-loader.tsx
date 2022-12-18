import { BounceLoader } from "react-spinners"

const DefaultLoader = () => {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <BounceLoader color="#36d7b7"/>
    </div>
  );
}

export default DefaultLoader
