import CarInformation from "@/components/CarInformation";
import CarPaymentCalculator from "@/components/CarPaymentCalculator";
import CarSummary from "@/components/CarSummary";
import FindSimilarCars from "@/components/FindSimilarCars";
import MobileSquareDetails from "@/components/reuseable/MobileSquareDetails";
import { MultiSlides } from "@/components/reuseable/MultiSlides";
import Slider from "@/components/reuseable/Slider";
import useCarStore from "@/store/ProductStore";
// import { useState } from "react";
import location from "@/assets/icons/location.svg";
import AboutThisCar from "@/components/AboutThisCar";
import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";

const HomeCarDetails = () => {
  const { currentCar } = useCarStore();
  return (
    <section className=" px-7 md:px-[1%]">
      <BreadcrumbComp
        item={currentCar?.model}
        path="/home"
        sepCol=""
        color="#191919"
      />
      <Slider />
      <MultiSlides />

      <div className="lg:flex  block w-full    py-[4%] " key={currentCar?.id}>
        <div className="block lg:hidden w-full px-5">
          <p className=" w-full md:text-[30px] text-[25px] text-[#2B2928] text-wrap leading-[36px] font-[600] mb-9 ">
            {currentCar?.year} {currentCar?.make}
            <br />
            <span className="flex items-center gap-2 text-[14px] font-[400] leading-[16.8px] mt-3">
              <img src={location} alt="" /> {currentCar?.location}
            </span>
          </p>
        </div>

        <div className=" w-full lg:hidden ">
          <MobileSquareDetails />
        </div>

        <div className="   lg:w-[40%] w-full md:px-[10%] lg:px-0 px-5">
          <p className=" w-full md:text-[30px] text-[25px] text-[#2B2928] text-wrap leading-[36px] font-[600] mb-9 lg:block hidden">
            {currentCar?.year} {currentCar?.make}
            <br />
            <span className="flex items-center gap-2 text-[14px] font-[400] leading-[16.8px] mt-3">
              <img src={location} alt="" /> {currentCar?.location}
            </span>
          </p>

          <CarSummary />
          <AboutThisCar />
          {/*  */}
          <CarInformation />
        </div>
        <div className=" lg:w-[60%] w-full  md:px-[10%] lg:px-0 px-5 flex flex-col lg:items-end items-center md:mt-[4rem] lg:mt-0 mt-0">
          {<CarPaymentCalculator />}
        </div>
      </div>
      <div className="">
        <FindSimilarCars />
      </div>
    </section>
  );
};

export default HomeCarDetails;
