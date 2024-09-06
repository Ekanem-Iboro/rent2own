// import modelicon from "../assets/icons/model.svg";
// import engine from "../assets/icons/engine.svg";
// import passangers from "../assets/icons/passangers.svg";
// import coloricon from "../assets/icons/coloricon.svg";
// import conditionicon from "../assets/icons/conditionicon.svg";
// import yearicon from "../assets/icons/yearicon.svg";
// import transmission from "../assets/icons/transmission.svg";
// import fuel from "../assets/icons/fuel.svg";
// import gearbox from "../assets/icons/gearbox.svg";

import AccCarinfo from "./reuseable/AccCarInfo";

const CarInformation = () => {
  // const { currentCar } = useCarStore();

  return (
    <div className=" md:mt-[2rem] mt-[4rem]  rounded-md">
      <h1 className="text-[#191919] text-[20px] leading-[24px] font-[500] mb-4">
        Specifications
      </h1>
      <AccCarinfo title="Performance" information="" />
      <AccCarinfo title="Fuel Efficiency" information="" />
      <AccCarinfo title="Dimensions" information="" />
      <AccCarinfo title="Interior Features" information="" />
      <AccCarinfo title="Technology" information="" />
      <AccCarinfo title="Safety Features" information="" />
      <AccCarinfo title="Exterior Features" information="" />
      <AccCarinfo title="Storage and Cargo" information="" />
    </div>
  );
};

export default CarInformation;
