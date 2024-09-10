export const ContactAdressPhone = () => {
  return (
    <div className="bg-[#ffffff] md:py-10 py-4  p-8">
      <div className="w-full md:flex block md:justify-between  contact-add   ">
        <div className="md:text-center w-full">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3 ">
            Email
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Our friendly team is here to help.
          </p>
          <p className="md:text-[14px]  text-primary md:font-[600] md:leading-[16.8px] text-[16px] font-[700] leading-[19.8px]  md:mt-5 mt-2">
            hi@renttoown.com.au
          </p>
        </div>

        <div className="md:text-center w-full md:mt-0 mt-8">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3">
            Office
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Come say hello at our office HQ.
          </p>
          <p className="md:text-[14px] text-primary md:font-[600] md:leading-[16.8px] text-[16px] font-[700] leading-[19.8px]   md:mt-5 mt-2 lg:px-[30%] md:px-[20%] md:w-auto w-[40%]">
            100 Smith Street Collingwood VIC 3066 AU
          </p>
        </div>

        <div className="md:text-center w-full md:mt-0 mt-8">
          <p className="text-[18px] text-[#191919] font-[600] leading-[21.6px] my-3">
            Phone
          </p>
          <p className="text-[14px] text-[#2D2D2D] font-[500] leading-[16.8px]">
            Mon-Fri from 8am to 5pm.
          </p>
          <p className="md:text-[14px] text-primary md:font-[600] md:leading-[16.8px] text-[16px] font-[700] leading-[19.8px]  md:mt-5 mt-2">
            +1 (555) 000-0000
          </p>
        </div>
        {/* <ul className="flex gap-5 items-center my-8 ">
          {contactLink?.map((item) => (
            <li key={item.id} className="">
              <Link to={item.path} className="underline">
                <img src={item.icon} alt="" className="text-[#191919] font-[600]" />
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
