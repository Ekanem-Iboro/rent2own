import { Link } from "react-router-dom";
import successIcon from "@/assets/Icons/celebrationicon.svg";
import shake from "@/assets/Icons/shake.svg";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen">
      <div className="flex-[0.6] text-center md:text-left p-5 lg:p-0 flex items-center justify-center">
        <div className="max-w-lg shadow-xl p-5 bg-slate-100">
          <img src={successIcon} className="mx-auto" alt="" />
          <h2 className="text-3xl md:text-5xl font-bold">
            Payment Successful!
          </h2>
          <p className="md:text-lg mt-2 text-center">
            <strong>Great news! </strong>Your recent transaction of{" "}
            <strong>AU $200</strong> has been successful.
          </p>

          <div className="shadow-md text-center mt-9 rounded-md p-6 bg-primary ">
            <Link
              to="/home"
              className="font-medium text-lg text-[#ffffff] underline"
            >
              Return to dashboard
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary flex items-center justify-center flex-[0.4]">
        <img src={shake} className="w-full object-fit" alt="" />
      </div>
    </div>
  );
};

export default PaymentSuccess;
