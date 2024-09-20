import { Link } from "react-router-dom";
import CurrencyFormatter from "../reuseable/currencyFormat";
import useCarStore from "@/store/ProductStore";

const MobileSquareDetails = () => {
  const sessionToken = localStorage.getItem("session_token");

  const { currentCar } = useCarStore();

  return (
    <div className=" m-auto px-9 h-auto bg-white rounded-[10px] py-7  mb-[3rem] w-full mt-8">
      {/*  */}
      <h1 className="text-[#191919] text-[20px] leading-[24px] font-[500] mb-5">
        Payment Structure
      </h1>
      <div className="w-full  flex justify-between items-center mb-4">
        {/*  */}
        <div className="  items-center mr-2 ">
          <p className="text-[#7F7F7F] font-[500] text-[14px] leading-[16.8px]">
            Weekly rent
          </p>
        </div>
        <p className="text-[#2D2D2D] font-[600] leading-[21.6px] text-[18px] mt-2">
          AU{" "}
          <CurrencyFormatter amount={parseFloat(currentCar?.weekly || "0")} />
        </p>
      </div>
      {/*  */}
      <div className="w-full flex justify-between items-center mb-4">
        {/*  */}
        <div className="  items-center mr-2 ">
          <p className="text-[#7F7F7F] font-[500] text-[14px] leading-[16.8px]">
            Bond
          </p>
        </div>
        <p className="text-[#2D2D2D] font-[600] leading-[21.6px] text-[18px] mt-2">
          {currentCar?.bond} weeks
        </p>
      </div>
      {/*  */}
      <div className="w-full  flex justify-between items-center mb-4">
        {/*  */}
        <div className="  items-center mr-2 ">
          <p className="text-[#7F7F7F] font-[500] text-[14px] leading-[16.8px]">
            Deposit
          </p>
        </div>
        <p className="text-[#2D2D2D] font-[600] leading-[21.6px] text-[18px] mt-2">
          {currentCar?.deposit}
        </p>
      </div>
      {/*  */}
      <div className="w-full flex justify-between items-center mb-4">
        <div className="  items-center mr-2 ">
          <p className="text-[#7F7F7F] font-[500] text-[14px] leading-[16.8px]">
            Duration
          </p>
        </div>
        <p className="text-[#2D2D2D] font-[600] leading-[21.6px] text-[18px] mt-2">
          {currentCar?.duration} weeks
        </p>
      </div>
      <div className="w-full text-center ">
        <button className="bg-primary text-[#fff] font-[600] leading-[21.6px] text-[18px] py-3 px-10  rounded-md  w-full">
          <a href="/terms_conditions">I want this car</a>
        </button>
      </div>
      <p
        className={` text-[#5A5555] text-[14px] font-[400] leading-[16px] w-full text-center my-4  ${
          sessionToken ? "hidden" : "block"
        } `}
      >
        <Link to="/sign-up" className="text-primary">
          {" "}
          create an account now{" "}
        </Link>
        in order to rent this car.
      </p>
    </div>
  );
};

export default MobileSquareDetails;
