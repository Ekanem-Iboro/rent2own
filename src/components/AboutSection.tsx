import about from "../assets/images/about.png";
const AboutSection = () => {
  return (
    <div className="md:flex blog justify-center items-center w-full gap-11 my-[8%] px-[2%]">
      <div className="lg:w-[30%] md:w-[45%]">
        <h2 className="text-[16px] leading-[19.2px] font-[500] text-primary h-[19px]">
          WHAT IS RENT-TO-OWN?
        </h2>
        <p className="text-[24px] text-[#2D2D2D] font-[500]">
          Rent-to-own (RTO) is a flexible option that allows individuals to
          lease a vehicle with the option to purchase it after a certain period.
          This method is beneficial for those who may not qualify for
          traditional financing or who prefer not to commit to a long-term
          purchase immediately.
        </p>
      </div>
      <img
        src={about}
        alt=""
        className="md:w-[50%] w-full  leading-[28.8px] tracking-[-2] text-[#2D2D2D]  mt-8 md:mt-0"
      />
    </div>
  );
};

export default AboutSection;
