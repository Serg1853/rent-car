import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => (
  <div>
    <ThreeCircles
      height="150"
      width="150"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </div>
);
