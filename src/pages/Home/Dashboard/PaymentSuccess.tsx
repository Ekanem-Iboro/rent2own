import { Link } from "react-router-dom";
import confetti from "@/assets/images/confetti.png";

const PaymentSuccess = () => {
  return (
    <div className="flex justify-center h-screen lg:w-[25%] md:w-[35%] w-full m-auto ">
      <div className=" lg:py-11 lg:px-[1rem] md:px-[2rem] px-4 py-6 rounded-2xl mt-[5rem] ">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <img src={confetti} alt="" width={80} />
          <p className="text-[30px] leading-[36px] font-[700] text-[#19D282]">
            Payment Successful
          </p>{" "}
        </div>
        <p className="text-[#0A0B0A] text-[16px]  p-1 rounded-2xl  font-[500] w-full text-center leading-[16.8px] my-4">
          Weldone! Your payment of $280.00 was successful.
        </p>
        <Link to={"/orders"} className=" w-full bg-[#016AB3] rounded-2xl">
          <button className="p-3 w-full bg-[#016AB3]  rounded-2xl text-[#FAFAFA] text-[16px] leading-[19.2px] font-[700] text-center ">
            Return to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
