import { Link } from "react-router-dom";

const DetailsBanner = () => {
  return (
    <section className="bg-[#014676] bg-[url('assets/images/lines.png')] bg-no-repeat bg-center py-11  md:my-[9rem]  m-[1rem] md:rounded-2xl rounded-lg banner-par">
      <div className="banner-text  w-full md:h-auto h-[485px] text-center m-auto flex items-center justify-center flex-col">
        <p className="font-[600] md:text-[48px] md:leading-[57.6px] text-[24px] leading-[28.8px] text-[#FFFFFF]">
          Join over 50k people who are renting and owning vehicles on
          Rent-to-own
        </p>
        <Link to={"/sign-up"}>
          <button className=" w-full bg-[#ffffff] rounded-lg py-4 px-7 mt-4 font-[600] text-[18px] leading-[21.6px] text-primary">
            Create free account
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DetailsBanner;
