import carR from "../assets/images/carR.png";
import NavBar from "./reuseable/NavBar";
import google from "../assets/icons/get-it-on-google-play.svg";
import apple from "../assets/icons/download-on-the-app-store-apple.svg";

const Header = () => {
  return (
    <>
      <div className="">
        <NavBar />
      </div>
      {/*  */}
      <header className="  bg-[url('assets/images/net.png')] md:min-h-[700px] w-full min-h-[333px] lg:pb-0 pb-[1rem] mb-[3rem]">
        <div className="lg:flex block items-center   md:px-[2%]  pl-0 px-4 w-full md:min-h-[700px] header-div">
          <div className=" min-h-full pt-3 flex-[56%] lg:flex-[45%] mb-[2rem] headertxt px-9 header-text">
            <div className=" md:text-start text-center ">
              <p className="text-[12px] text-primary leading-[14.4px] font-[500]">
                Trusted by over 50k users in Australia
              </p>
              <h1 className="md:text-[60px] md:leading-[72px] leading-[57.6px] text-[48px] text-[#191919] mb-0  font-[600]">
                If You Can
                <span className="text-secondary"> Rent It</span>, You Can
                <span className="text-secondary"> Own It</span>
              </h1>
              <div className="md:w-[80%] my-5 font-[400] md:px-0 sm:px-[3rem] px-[0.2rem]">
                <p className="text-wrap text-[#2D2D2D] md:text-[14px] leading-[16.8px] text-[12px] mt-2">
                  Rent-to-own (RTO) is a flexible option that allows individuals
                  to lease a vehicle with the option to purchase it after a
                  certain period.
                </p>
              </div>
              <p className="text-[12px] text-[#191919]  leading-[14.4px] font-[400]">
                Coming soon to
              </p>
              <div className="flex items-center md:justify-start justify-center gap-4 mt-3">
                <img src={apple} alt="" />
                <img src={google} alt="" />
              </div>
            </div>
          </div>
          <div className="flex-[70%]">
            <img src={carR} alt="" className="  md:w-[80%] mx-auto w-full" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
