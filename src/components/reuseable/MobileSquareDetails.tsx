import CurrencyFormatter from "../reuseable/currencyFormat";
import { Link } from "react-router-dom";
import useCarStore from "@/store/ProductStore";

const MobileSquareDetails = () => {
  const { currentCar } = useCarStore();

  return (
    <div className=" m-auto  md:min-h-[350px] bg-white rounded-[10px]  mb-[3rem] w-full mt-8">
      <div className="text-[24px] font-[700] leading-[42.2px] font-[#191919]  flex items-center justify-center gap-2 mb-4  p-5 ">
        <s className="font-[500] text-[#565656] text-[16px] leading-[19.2px]">
          AU$ 4,800
        </s>{" "}
        AU
        <CurrencyFormatter amount={parseFloat(currentCar?.price || "0")} />
      </div>

      <div className="w-full text-center px-7">
        <button className="bg-primary text-[#fff] font-[600] leading-[21.6px] text-[18px] py-3 px-10  rounded-md  w-full">
          <a href="/">I want this car</a>
        </button>
      </div>
      <p className="text-[#5A5555] text-[14px] font-[400] leading-[16px] w-full text-center my-7  ">
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
