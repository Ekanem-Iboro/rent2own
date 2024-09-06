import TextFeildCalculate from "../components/reuseable/TextFieldCalculate";
import CurrencyFormatter from "./reuseable/currencyFormat";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import RangeSlider from "./reuseable/RangeSlider";
import useCarStore from "@/store/ProductStore";

const calculateSchema = z.object({
  amount: z.string().min(1, "Car amount is required"),
  initialpayment: z.string().min(1, "Initial payment cannot be negative"),
  weeklypayment: z.string().min(1, "Weekly payment is required"),
  range: z.string().optional(),
});

// type definition for login form
export type claculatePaymet = z.TypeOf<typeof calculateSchema>;
const CarPaymentCalculator = () => {
  const methods = useForm<claculatePaymet>({
    resolver: zodResolver(calculateSchema),
  });

  const sessionToken = localStorage.getItem("session_token");
  // useForm() destructuring or methods destructuring. Here methods = useForm()
  const { handleSubmit, setValue, reset } = methods;
  const { currentCar } = useCarStore();

  const Calculate = (data: claculatePaymet) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="   md:w-[420px]  bg-white rounded-[10px] overflow-hidden lg:block hidden p-7">
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
        {/*  */}

        <div className="w-full text-center px-7">
          <Link to="/orders">
            <button className="bg-primary text-[#fff] font-[600] leading-[21.6px] text-[18px] py-3 px-10  rounded-md  w-full">
              I want this car
            </button>
          </Link>
        </div>
        <p
          className={` text-[#5A5555] text-[14px] font-[400] leading-[16px] w-full text-center my-7  ${
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
      {/* Calculator */}
      <div className="relative  md:w-[420px] md:min-h-[522px] bg-primary rounded-[10px] mt-[5rem] p-5">
        <h1 className="text-[#FAFAFA] font-[500] text-[24px] leading-[28.8px]">
          Car Payment Calculator
        </h1>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(Calculate)}>
            <div className=" mt-4 ">
              <p className="text-[14px] leading-[16.8px] text-[#ffffff] font-[500]">
                Months
              </p>
              <RangeSlider
                name="range"
                onChange={(value) => setValue("range", value.toString())}
              />
            </div>
            <div className="mt-4">
              <TextFeildCalculate
                name="amount"
                label="Car amount"
                placeholder="$4050"
              />
            </div>
            <div className="mt-4">
              <TextFeildCalculate
                name="initialpayment"
                label="Initial payment"
                placeholder="$500"
              />
            </div>
            <div className="mt-4">
              <TextFeildCalculate
                name="weeklypayment"
                label="Weekly payment"
                placeholder=" $600"
              />
            </div>

            <button className="w-full bg-secondary py-2 px-[4rem] rounded-[6px] text-white mt-6">
              Calculate
            </button>
            <p className="text-[#E3E3E3] text-[14px] w-full  mt6.84 font-[300] ">
              This repayment calculator only gives you an estimate of what your
              weekly repayments could be. This is to be used as a guide only and
              does not constitute a quote, pre-qualification, or approval.
            </p>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default CarPaymentCalculator;
