import { Link } from "react-router-dom";

const DetailsBanner = () => {
  return (
    <section className="bg-[#014676] bg-[url('assets/images/lines.png')] bg-no-repeat bg-center py-9 p-[2%]  md:m-[7rem] rounded-2xl  ">
      <div className="lg:w-[38%] md:w-[50%] w-full text-center m-auto">
        <p className="font-[400] text-[48px] leading-[57.6px] text-[#FFFFFF]">
          Join over 50k people who are renting and owning vehicles on
          Rent-to-own
        </p>
        <Link to={"/sign-up"}>
          <button className="w-full bg-[#ffffff] rounded-lg p-2 mt-4 font-[600] text-[18px] leading-[21.6px] text-primary">
            Create free account
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DetailsBanner;
