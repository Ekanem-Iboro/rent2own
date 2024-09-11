import useCarStore from "@/store/ProductStore";

const CarSummary = () => {
  const { currentCar } = useCarStore();

  return (
    <div className=" md:mt-[4rem] mt-[3rem]  rounded-md">
      <h1 className="text-[#191919] text-[20px] leading-[24px] font-[500]">
        Vehicle Details
      </h1>
      <div className=" md:grid block grid-cols-3 items-center justify-start gap-3 product-box mt-4">
        {/*  */}
        <div className="w-full   mb-4">
          {/*  */}
          <div className="  items-center mr-2 ">
            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
              Color
            </p>
          </div>
          <p className="text-[#2D2D2D] font-[400] leading-[16.8px] text-[14px] mt-2">
            {currentCar?.color}
          </p>
        </div>
        {/*  */}
        <div className="w-full  mb-4">
          {/*  */}
          <div className="  items-center mr-2 ">
            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
              Transmission
            </p>
          </div>
          <p className="text-[#2D2D2D] font-[400] leading-[16.8px] text-[14px] mt-2">
            {currentCar?.transmition}
          </p>
        </div>
        {/*  */}
        <div className="w-full   mb-4">
          {/*  */}
          <div className="  items-center mr-2 ">
            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
              Model
            </p>
          </div>
          <p className="text-[#2D2D2D] font-[400] leading-[16.8px] text-[14px] mt-2">
            {currentCar?.model}
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className="w-full  mb-4">
          <div className="  items-center mr-2 ">
            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
              Year
            </p>
          </div>
          <p className="text-[#2D2D2D] font-[400] leading-[16.8px] text-[14px] mt-2">
            {currentCar?.year}
          </p>
        </div>
        {/*  */}
        <div className="w-full   mb-4">
          {/*  */}
          <div className="  items-center mr-2 ">
            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
              Engine
            </p>
          </div>
          <p className="text-[#2D2D2D] font-[400] leading-[16.8px] text-[14px] mt-2">
            {currentCar?.engine}
          </p>
        </div>
        {/*  */}
        <div className="w-full   mb-4">
          {/*  */}
          <div className="  items-center mr-2 ">
            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
              Fuel Type
            </p>
          </div>
          <p className="text-[#2D2D2D] font-[400] leading-[16.8px] text-[14px] mt-2">
            {currentCar?.fuel}
          </p>
        </div>
        {/*  */}
      </div>

      {/*  */}
    </div>
  );
};

export default CarSummary;
