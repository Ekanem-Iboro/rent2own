import banner_img from "../assets/images/banner_img.png";
import cost from "../assets/icons/cost.svg";
import contract from "../assets/icons/contract.svg";
import mentainance from "../assets/icons/mentainance.svg";
const Banner = () => {
  return (
    <section className="relative bg-gray-50 w-full  lg:px-[13%]  lg:pt-[1rem] lg:pb-3 py-10 md:flex justify-between block gap-11 mb-[5%] px-4 banner ">
      <div className="lg:pl-[10%]  pl-0 lg:mt-[2rem] lg:basis-1/2 min-h-[500px] banner-div">
        <h1 className="lg:text-[36px] text-[24px] lg:leading-[43.2px] leading-[28.8px] text-[#2B2928] font-[600]">
          What You Need to Consider Before Choosing Rent-To-Own
        </h1>
        <div className="">
          <img src={cost} alt="" className="mt-6" />
          <p className="text-[18px] text-[#191919} leading-[21.6px] my-3  font-[600]">
            Cost
          </p>
          <p className="text-[14px] text-[#5A5555] leading-[16.8px] pr-[25px] font-[400] lg:pr-[13%]">
            Rent-to-own agreements can be more expensive over time compared to
            outright purchase due to higher overall interest rates.
          </p>
        </div>
        <div className="">
          <img src={contract} alt="" className="mt-6" />
          <p className="text-[18px] text-{#191919] leading-[21.6px] my-3 font-[600]">
            Contract Terms
          </p>
          <p className="text-[14px] text-[#5A5555] leading-[16.8px] pr-[25px] font-[400] lg:pr-[13%]">
            It's important to fully understand the terms of the agreement,
            including any penalties for early termination or failure to make
            payments.
          </p>
        </div>
        <div className="">
          <img src={mentainance} alt="" className="mt-6" />
          <p className="text-[18px] text-{#191919] leading-[21.6px] my-3 font-[600]">
            Maintenance
          </p>
          <p className="text-[14px] text-[#5A5555] leading-[16.8px] pr-[25px] lg:pr-[13%] font-[400]">
            The lessee is typically responsible for maintaining the vehicle in
            good condition during the lease period.
          </p>
        </div>
      </div>
      <div className=" lg:basis-1/2 w-full   flex items-end mt-20">
        <img src={banner_img} alt="" className="scale-x-[-1] " />
      </div>
    </section>
  );
};

export default Banner;
