import modelicon from "../assets/icons/model.svg";
import engine from "../assets/icons/engine.svg";
import passangers from "../assets/icons/passangers.svg";
import coloricon from "../assets/icons/coloricon.svg";
import conditionicon from "../assets/icons/conditionicon.svg";
import yearicon from "../assets/icons/yearicon.svg";
import transmission from "../assets/icons/transmission.svg";
import fuel from "../assets/icons/fuel.svg";
import gearbox from "../assets/icons/gearbox.svg";
import useCarStore from "@/store/ProductStore";

const CarInformation = () => {
  const { currentCar } = useCarStore();

  return (
    <div className=" md:mt-[2rem] mt-[4rem]   rounded-md">
      <h1 className="text-[#191919] text-[20px] leading-[24px] font-[500]">
        Car Information
      </h1>
      <div className=" w-full max-h[480px]  rounded-[12px] overflow-hidden mt-10 mb-3">
        <div className="px-2">
          <div className="w-full flex items-center justify-between mb-6">
            {/*  */}
            {/*  */}
            <div className="flex  items-center gap-2">
              <img src={yearicon} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Year
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {currentCar?.year}
            </p>
          </div>
          {/*  */}
          {/*  */}

          <div className="w-full flex items-center justify-between mb-6">
            <div className="flex  items-center gap-2">
              <img src={engine} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Engine type
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {currentCar?.engine}
            </p>
          </div>

          {/*  */}
          <div className="w-full flex items-center justify-between mb-6">
            {/*  */}
            <div className="flex  items-center gap-2">
              <img src={modelicon} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Make
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {currentCar?.make}
            </p>
          </div>
          {/*  */}

          <div className="w-full flex items-center justify-between mb-6">
            {/*  */}
            <div className="flex  items-center gap-2">
              <img src={transmission} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Transmission
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {currentCar?.transmition}
            </p>
          </div>
          {/*  */}

          <div className="w-full flex items-center justify-between mb-6">
            <div className="flex  items-center gap-2">
              <img src={coloricon} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Color
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {currentCar?.color}
            </p>
          </div>

          {/*  */}
          {/*  */}

          <div className="w-full flex items-center justify-between mb-6">
            <div className="flex  items-center gap-2">
              <img src={fuel} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Fuel type
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {currentCar?.fuel}
            </p>
          </div>

          {/*  */}
          {/*  */}

          <div className="w-full flex items-center justify-between mb-6">
            <div className="flex  items-center gap-2">
              <img src={fuel} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Fuel consumption
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {/* {currentCar?.consumption} */}
            </p>
          </div>

          {/*  */}
          {/*  */}

          <div className="w-full flex items-center justify-between mb-6">
            <div className="flex  items-center gap-2">
              <img src={fuel} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Fuel tank capacity
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {/* {currentCar?.tank} */}
            </p>
          </div>

          {/*  */}

          <div className="w-full flex items-center justify-between mb-6">
            {/*  */}
            <div className="flex  items-center gap-2">
              <img src={passangers} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Passangers
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {currentCar?.seating}
            </p>
          </div>
          {/*  */}
          {/*  */}

          <div className="w-full flex items-center justify-between mb-6">
            {/*  */}
            <div className="flex  items-center gap-2">
              <img src={gearbox} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Gear box
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {/* {currentCar?.gear} */}
            </p>
          </div>
          {/*  */}

          {/*  */}

          <div className="w-full flex items-center justify-between mb-6">
            {/*  */}
            <div className="flex  items-center gap-2">
              <img src={conditionicon} alt="" />
              <p className="text-[#2D2D2D]  text-[14px] font-[400] leading-[16.8px]">
                Condition icon
              </p>
            </div>
            <p className="text-[#2D2D2D] font-[500] leading-[19.2px] text-[16px]">
              {currentCar?.condition}
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default CarInformation;
