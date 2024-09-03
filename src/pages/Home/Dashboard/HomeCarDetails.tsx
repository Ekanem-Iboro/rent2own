import CarInformation from "@/components/CarInformation";
import CarPaymentCalculator from "@/components/CarPaymentCalculator";
import CarSummary from "@/components/CarSummary";
import DetailsBanner from "@/components/DetailsBanner";
import FindSimilarCars from "@/components/FindSimilarCars";
import MobileSquareDetails from "@/components/reuseable/MobileSquareDetails";
import { MultiSlides } from "@/components/reuseable/MultiSlides";
import Slider from "@/components/reuseable/Slider";
import useCarStore from "@/store/ProductStore";
import { useState } from "react";

const HomeCarDetails = () => {
  const { currentCar } = useCarStore();
  const [isExpanded, setIsExpanded] = useState(false);

  // Safely access the description, defaulting to an empty string if currentCar or description is undefined
  const description = currentCar?.description || "";
  const limit = 40;
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  // Split the description based on the word limit
  const limitedText = description.split(" ").slice(0, limit).join(" ");
  const remainingText = description.split(" ").slice(limit).join(" ");

  return (
    <section>
      <Slider />
      <MultiSlides />

      <div
        className="md:flex  block w-full md:pl-[8%] pl-0 md:mr-[8%] px-3  py-[3%] "
        key={currentCar?.id}
      >
        <div className="flex-[40%] md:hidden ">
          <MobileSquareDetails />
        </div>

        <div className="lg:flex-[20%] md:flex-[45%] px-6">
          <p className=" w-full md:text-[30px] text-[25px] text-[#2B2928] text-wrap leading-[36px] font-[600] mb-9">
            {currentCar?.model}
          </p>

          <CarSummary />
          <hr className=" bg-gray-400 w-full" />

          <div className=" my-[3rem] rounded-md">
            <h1 className="text-[#191919] text-[20px] leading-[24px] font-[500]">
              Genenral Information
            </h1>
            <p className="text-[#191919] text-[14px] leading-[16.8px] font-[400] mt-5">
              {limitedText}
              {isExpanded && <span> {remainingText}</span>}
              <button
                onClick={toggleText}
                className="text-[#6FC200] cursor-pointer underline block mt-2"
              >
                {isExpanded ? "Read less" : "Read more"}
              </button>
            </p>
            <p className="text-[#2B2928] text-[14px] leading-[16.8px] mt-5"></p>
          </div>
          {/*  */}
          <hr className=" bg-gray-400 w-full" />

          <CarInformation />
        </div>
        <div className="md:flex-[45%] px-6  ">{<CarPaymentCalculator />}</div>
      </div>
      <div className="px-6">
        <FindSimilarCars />
        <DetailsBanner />
      </div>

      <div className="w-full md:flex block justify-between  py-9 md:px-[10%] px-3 bg-[#ffffff]">
        <div className="text-center w-full">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3 ">
            Email
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Our friendly team is here to help.
          </p>
          <p className="text-[14px] text-primary font-[600] leading-[16.8px] mt-5">
            hi@renttoown.com.au
          </p>
        </div>

        <div className="text-center w-full">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3">
            Office
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Come say hello at our office HQ.
          </p>
          <p className="text-[14px] text-primary font-[600] leading-[16.8px]  mt-5 lg:px-[30%] md:px-[20%]">
            100 Smith Street Collingwood VIC 3066 AU
          </p>
        </div>

        <div className="text-center w-full">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3">
            Phone
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Mon-Fri from 8am to 5pm.
          </p>
          <p className="text-[14px] text-primary font-[600] leading-[16.8px] mt-5">
            +1 (555) 000-0000
          </p>
        </div>
        {/* <ul className="flex gap-5 items-center my-8 ">
          {contactLink?.map((item) => (
            <li key={item.id} className="">
              <Link to={item.path} className="underline">
                <img src={item.icon} alt="" className="text-[#191919] font-[600]" />
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};

export default HomeCarDetails;