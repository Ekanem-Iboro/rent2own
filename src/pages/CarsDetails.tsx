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

const CarsDetails = () => {
  const { currentCar } = useCarStore();
  return (
    <section className=" px-7 md:px-0">
      <NavBar />
      <BreadcrumbComp item={currentCar?.model} />
      <Slider />
      <MultiSlides />

      <div
        className="lg:flex  block w-full  lg:px-[7%] md:px-[8%] py-[4%] "
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
      <div className="w-full md:flex block md:justify-between mx-7 contact-add  md:mt-0 mt-10">
        <div className="md:text-center w-full">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3 ">
            Email
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Our friendly team is here to help.
          </p>
          <p className="md:text-[14px]  text-primary md:font-[600] md:leading-[16.8px] text-[16px] font-[700] leading-[19.8px]  md:mt-5 mt-2">
            hi@renttoown.com.au
          </p>
        </div>

        <div className="md:text-center w-full md:mt-0 mt-8">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3">
            Office
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Come say hello at our office HQ.
          </p>
          <p className="md:text-[14px] text-primary md:font-[600] md:leading-[16.8px] text-[16px] font-[700] leading-[19.8px]   md:mt-5 mt-2 lg:px-[30%] md:px-[20%] md:w-auto w-[40%]">
            100 Smith Street Collingwood VIC 3066 AU
          </p>
        </div>

        <div className="md:text-center w-full md:mt-0 mt-8">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3">
            Phone
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Mon-Fri from 8am to 5pm.
          </p>
          <p className="md:text-[14px] text-primary md:font-[600] md:leading-[16.8px] text-[16px] font-[700] leading-[19.8px]  md:mt-5 mt-2">
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
      <Footer />
    </section>
  );
};

export default CarsDetails;
