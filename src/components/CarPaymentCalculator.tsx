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
      <div className=" md:mt-[5rem] m-auto md:w-[420px] py-[25px] bg-white rounded-[10px] overflow-hidden     md:block hidden">
        <div className="text-[36px] font-[700] leading-[42.2px] font-[#191919] text-center flex items-center gap-2 mb-4  p-5 px-7">
          <s className="font-[500] text-[#565656] text-[16px] leading-[19.2px]">
            AU$ 4,800
          </s>{" "}
          AU
          <CurrencyFormatter amount={parseFloat(currentCar?.price || "0")} />
        </div>

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
      <div className="relative m-auto md:w-[420px] md:min-h-[522px] bg-primary rounded-[10px] mt-[5rem] p-5">
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
                placeholder=" $400"
              />
            </div>

            <button className="w-full bg-secondary py-2 px-[4rem] rounded-[6px] text-white mt-6">
              Calculate
            </button>
            <p className="text-[#E3E3E3] text-[12px] w-full  mt-4 font-[300] ">
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
