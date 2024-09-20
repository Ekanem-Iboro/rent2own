import CurrencyFormatter from "../reuseable/currencyFormat";
import useCarStore from "@/store/ProductStore";

const MobileSquareDetails = () => {
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
          4 weeks
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
          1 week
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
          104 weeks
        </p>
      </div>
      <div className="w-full text-center ">
        <button className="bg-primary text-[#fff] font-[600] leading-[21.6px] text-[18px] py-3 px-10  rounded-md  w-full">
          <a href="/terms_conditions">I want this car</a>
        </button>
      </div>
    </div>
  );
};

export default MobileSquareDetails;
