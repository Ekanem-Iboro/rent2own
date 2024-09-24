import { Link } from "react-router-dom";
import failedpayment from "@/assets/icons/paymentfail.svg";

const PaymentFailed = () => {
  return (
    <div className="flex justify-center h-screen lg:w-[25%] md:w-[35%] w-full m-auto ">
      <div className=" lg:py-11 lg:px-[1rem] md:px-[2rem] px-4 py-6 rounded-2xl mt-[5rem] ">
        <div className="flex flex-col items-center justify-center gap-2  mt-10">
          <img src={failedpayment} alt="" />
          <p className="text-[30px] leading-[36px] font-[700] text-[#DD1D30]">
            Payment Error
          </p>{" "}
        </div>
        <p className="text-[#0A0B0A] text-[16px]  px-11 rounded-2xl  font-[500] w-full text-center leading-[16.8px] my-4">
          Unfortunately, we are not able to process your payment right now.
        </p>
        <Link to={"/home"} className=" w-full bg-[#016AB3] rounded-2xl">
          <button
            className="p-3 w-full bg-[#016AB3]  rounded-2xl text-[#FAFAFA] text-[16px] leading-[19.2px] font-[700] text-center "
            onClick={() => {
              localStorage.removeItem("car-store");
            }}
          >
            Try again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentFailed;
