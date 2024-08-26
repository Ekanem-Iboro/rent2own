import icon1 from "../assets/images/flexible.png";
import icon2 from "../assets/images/lowre.png";
import icon3 from "../assets/images/inno.png";
import { BorderBeam } from "./magicui/border-beam";

const CardSection = () => {
  return (
    <div className="flex  flex-col justify-center items-center bg-[#fff] w-full py-[4rem] ">
      <div className="md:w-[454px]  w-full text-center firstpara-ad ">
        {/* <h1 className="text-secondary-light text-[16px] mb-3">ADVANTAGES</h1> */}
        <p className=" w-full  md:text-[37px] text-[25px] text-[#2B2928] text-wrap leading-[43.2px] font-[600] px-8">
          Why You Should Choose Rent To Own
        </p>
      </div>
      <div className="mt-5 md:flex block gap-7 md:px-0 px-6 ">
        <div className="relative md:w-[252px] w-[100%] border-2 border-t-gray-300 text-center flex flex-col  items-center py-6 px-2 rounded-[7px] md:mb-0 mb-6   shadow-md">
          <img src={icon1} alt="" className="w-[75px]" />
          <h1 className="mt-4 font-[600] text-[18px] text-[#433F3E]">
            Flexible Approval
          </h1>
          <p className="text-[14px] font-[400] lg:px-[10px] md:px-[5%] sm:px-[3%] px-[5px] leading-[16.8px] mt-4">
            Easier approval for individuals with poor credit or no credit
            history.
          </p>
          <BorderBeam size={50} duration={8} delay={4} />
        </div>
        {/*  */}
        <div className=" relative md:w-[252px] w-[100%] border-2 border-t-gray-300 text-center flex flex-col  items-center py-6 px-2 rounded-[7px] md:mb-0 mb-6  shadow-md">
          <img src={icon2} alt="" className="w-[75px]" />
          <h1 className="mt-4 font-[600] text-[18px] text-[#433F3E]">
            Lower Initial Cost
          </h1>
          <p className="text-[14px] font-[400] lg:px-[10px] md:px-[5%] sm:px-[3%] px-[5px] leading-[16.8px] mt-4">
            Lower upfront costs compared to traditional car loans.
          </p>
          <BorderBeam size={50} duration={6} delay={4} />
        </div>
        {/*  */}
        <div className=" relative md:w-[252px] w-[100%] border-2 border-t-gray-300 text-center flex flex-col  items-center py-6 px-2 rounded-[7px] md:mb-0 mb-6 shadow-md">
          <img src={icon3} alt="" className="w-[75px]" />
          <h1 className="mt-4 font-[600] text-[18px] text-[#433F3E]">
            Ownership Path
          </h1>
          <p className="text-[14px] font-[400] lg:px-[10px] md:px-[5%] sm:px-[3%] px-[5px] leading-[16.8px] mt-4">
            A clear path to ownership without needing immediate large financing.
          </p>
          <BorderBeam size={50} duration={4} delay={4} />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
