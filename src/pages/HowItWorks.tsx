import AboutSection from "@/components/AboutSection";
import NavBar from "@/components/reuseable/NavBar";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div>
      <NavBar />
      <AboutSection />
      <section
        className="w-full bg-gray-50  px-3 lg:py-[4rem] py-10 how-it-works mb-[5%] "
        id="howitworks"
      >
        <div className=" w-full lg:grid grid-cols-2  block gap-10 ">
          {/*  */}
          <div className="    w-full lg:h-[400px] h-[200px] lg:px-[17%]  pl-5 pr-7 py-[20px] rounded-md lg:mb-0 mb-6  flex  items-center justify-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-[32px] text-[#2D2D2D] font-[600] leading-[43.2px]">
                5 Effective Steps To Use Car Rent-To-Own
              </h1>
              <p className="text-[18px] text-[#2D2D2D] font-[400] my-1 leading-[21.6px]">
                Here are 5 easy steps to use rent-to-own platform.
              </p>
              <Link to="/sign-up">
                <button className="text-[18px] text-primary border border-primary rounded-lg font-[600] leading-[21.6px] p-3 md:w-[60%] w-full">
                  Join us today!
                </button>
              </Link>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="bg-[#ffffff]  w-full lg:h-[400px] h-[200px] lg:px-[17%]   pl-5 pr-7 py-[20px] rounded-md lg:mb-0 mb-6    flex  items-center justify-center">
            {/* <h1
            className="lg:flex-[25%] text-center lg:text-[128px] text-[40px]  mr-4"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px #B1CEF5",
            }}
          >
            1
          </h1> */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[30px] leading-[36px] font-[600] text-[#191919] ">
                Choose a Vehicle
              </h1>
              <p className="text-[18px] text-[#191919] leading-[21.6px] font-[500] my-1">
                Selection
              </p>
              <p className="text-[14px] text-[#2D2D2D] font-[400] leading-[16.8px]">
                Customers select a vehicle from the dealership's inventory. This
                can include a variety of makes and models to suit different
                needs and preferences.
              </p>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="  bg-[#ffffff]  w-full  lg:h-[400px] h-[297px] lg:px-[17%]   pl-5 pr-5 lg:mb-0 mb-6 py-[20px] rounded-md   flex  items-center justify-center">
            {/* <h1
            className="lg:flex-[25%] text-center lg:text-[128px] text-[40px]  mr-4"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px #ADF5D6",
            }}
          >
            2
          </h1> */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[30px] leading-[36px] font-[600] text-[#191919] ">
                Agree on Terms
              </h1>
              <p className="text-[18px] text-[#191919] leading-[21.6px] font-[500] my-1">
                Contract
              </p>
              <p className="text-[14px] text-[#2D2D2D] font-[400] leading-[16.8px]">
                A rent-to-own agreement is signed, outlining the terms of the
                lease and the purchase option. This includes the duration of the
                lease, the weekly or monthly payment amount, the total cost of
                the vehicle, and any additional fees.
              </p>
              {/*  */}

              <p className="text-[18px] text-[#191919] leading-[21.6px] font-[500] my-1">
                Payments
              </p>
              <p className="text-[14px] text-[#2D2D2D] font-[400] leading-[16.8px]">
                The agreement specifies the initial payment (usually a bond and
                deposit) and the ongoing weekly or monthly payments.
              </p>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="   bg-[#ffffff]  w-full  lg:h-[400px] h-[297px] lg:px-[17%]   pl-5 pr-5 lg:mb-0 mb-6 py-[20px] rounded-md    flex  items-center justify-center">
            {/* <h1
            className="lg:flex-[25%] text-center lg:text-[128px] text-[40px]  mr-4"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px #F4C790",
            }}
          >
            3
          </h1> */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[30px] leading-[36px] font-[600] text-[#191919] ">
                Make Regular Payments
              </h1>
              <p className="text-[18px] text-[#191919] font-[500] leading-[21.6px] my-1">
                Lease Payments
              </p>
              <p className="text-[14px] text-[#2D2D2D] font-[400] leading-[16.8px]">
                Customers make regular lease payments over the agreed period.
                These payments typically cover the rental of the vehicle and
                contribute towards the eventual purchase price.
              </p>
              {/*  */}

              <p className="text-[18px] text-[#191919] font-[500] leading-[21.6px] my-1">
                Responsibility
              </p>
              <p className="text-[14px] text-[#2D2D2D] font-[400] leading-[16.8px]">
                The lessee is responsible for insurance, maintenance, and
                registration of the vehicle during the lease period.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="   bg-[#ffffff]   w-full lg:h-[400px] h-[200px] lg:px-[17%]   pl-5 pr-5 lg:mb-0 mb-6 py-[20px] rounded-md   flex  items-center justify-center ">
            {/* <h1
            className="lg:flex-[25%] text-center lg:text-[128px] text-[40px]  mr-4 "
            style={{
              color: "transparent",
              WebkitTextStroke: "1px #CCCBCB",
            }}
          >
            4
          </h1> */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[30px] leading-[36px] font-[600] text-[#191919] ">
                Build Equity
              </h1>
              <p className="text-[14px] text-[#191919] font-[500] my-1 leading-[21.6px]">
                Equity Accumulation
              </p>
              <p className="text-[14px] text-[#2D2D2D] font-[400] leading-[16.8px]">
                As the lessee makes payments, a portion of each payment goes
                towards the equity in the vehicle. This means that over time,
                the lessee is building ownership in the car.
              </p>
              {/*  */}
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="   bg-[#ffffff]   w-full lg:h-[400px] h-[297px] lg:px-[17%]   pl-5 pr-5 lg:mb-0 mb-6 py-[20px] rounded-md   flex  items-center justify-center">
            {/* <h1
            className="lg:flex-[25%] text-center lg:text-[128px] text-[40px]  mr-4 "
            style={{
              color: "transparent",
              WebkitTextStroke: "1px #F5B2B9",
            }}
          >
            5
          </h1> */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[30px] leading-[36px] font-[600] text-[#191919] ">
                Make Regular Payments
              </h1>
              <p className="text-[14px] text-[#191919] font-[500] my-1 leading-[21.6px]">
                Lease Payments
              </p>
              <p className="text-[14px] text-[#2D2D2D] font-[400] leading-[16.8px]">
                Customers make regular lease payments over the agreed period.
                These payments typically cover the rental of the vehicle and
                contribute towards the eventual purchase price.
              </p>
              {/*  */}

              <p className="text-[14px] text-[#191919] font-[500] my-1 leading-[21.6px]">
                Responsibility
              </p>
              <p className="text-[14px] text-[#2D2D2D] font-[400] leading-[16.8px]">
                The lessee is responsible for insurance, maintenance, and
                registration of the vehicle during the lease period.
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
