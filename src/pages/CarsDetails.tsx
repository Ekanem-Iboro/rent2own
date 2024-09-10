import CarPaymentCalculator from "../components/CarPaymentCalculator";
// import MobileSquareDetails from "../components/MobileSquareDetails";
import location from "@/assets/icons/location.svg";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
import useCarStore from "@/store/ProductStore";
// import FindSimilarCars from "@/components/FindSimilarCars";
import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";
import { MultiSlides } from "@/components/reuseable/MultiSlides";
import NavBar from "@/components/reuseable/NavBar";
import Slider from "@/components/reuseable/Slider";
import MobileSquareDetails from "@/components/reuseable/MobileSquareDetails";
import CarSummary from "@/components/CarSummary";
import CarInformation from "@/components/CarInformation";
import FindSimilarCars from "@/components/FindSimilarCars";
import DetailsBanner from "@/components/DetailsBanner";
import Footer from "@/components/Footer";
import AboutThisCar from "@/components/AboutThisCar";
import { ContactAdressPhone } from "@/components/reuseable/ContactAdressPhone";

const CarsDetails = () => {
  const { currentCar } = useCarStore();
  return (
    <section>
      <NavBar />
      <div className=" px-7 md:px-[5%]">
        <BreadcrumbComp item={currentCar?.model} color="#191919" />
        <Slider />
        <MultiSlides />
      </div>

      <div
        className="lg:flex  block w-full px-7 md:px-[5%]  py-[4%] "
        key={currentCar?.id}
      >
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
        <DetailsBanner />
      </div>
      <ContactAdressPhone />

      <Footer />
    </section>
  );
};

export default CarsDetails;
