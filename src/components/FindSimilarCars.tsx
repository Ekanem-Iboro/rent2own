// import model from "../assets/icons/model.svg";
import { Link } from "react-router-dom";
import CurrencyFormatter from "../components/reuseable/currencyFormat";
// import engine from "../assets/icons/engine.svg";
// import passangers from "../assets/icons/passangers.svg";
// import max_power from "../assets/icons/max_power.svg";
// import location from "../assets/icons/location.svg";

import useCarStore from "@/store/ProductStore";
import { Car } from "@/api/types";
import { useCars } from "@/hooks/query";

const FindSimilarCars = () => {
  const { setCurrentCar, currentCar } = useCarStore();
  const { data } = useCars();

  const session_token = localStorage.getItem("session_token");
  const handleProductClick = (product: Car) => {
    setCurrentCar(product);
  };
  // Find similar cars based on the make
  const getSimilarCars = () => {
    if (!currentCar || !data) return [];
    return data.filter(
      (item) => item.make === currentCar.make && item.id !== currentCar.id
    );
  };
  const similarCars = getSimilarCars();

  // const port = window.location.port;
  // const hostname = window.location.hostname;

  // const portServer = () => {
  //   if (port && hostname === "localhost") {
  //     return "https://rent2ownauto.com.au/";
  //   }
  //   return "../";
  // };
  return (
    <div>
      <section className="w-full bg-gray-50 md:py-[1rem] py-10 my-[4rem] md:pl-[9%] lg:pr-[20%] md:pr-[15%]   p-5 ">
        <p className=" w-full md:text-[36px] text-[25px] text-[#2B2928] font-[600] text-wrap leading-[43.2px]  mb-9">
          Find Similar Cars
        </p>
        <div className="w-full lg:overflow-x-auto no-scrollbar">
          {similarCars?.length === 0 ? (
            <div className="w-full text-center text-[20px] font-bold text-red-300 my-7">
              No Similar Cars Found
            </div>
          ) : (
            <div className="lg:flex md:space-x-4 md:grid grid-cols-2 block  items-center">
              {similarCars?.map((item, index) => (
                <Link
                  to={`/products/${item.model}`}
                  // state={{ productData: item }}
                >
                  <div
                    className={`lg:w-[350px] md:w-[300px] w-full min-h-[380px] bg-white rounded-[12px] overflow-hidden md:flex-shrink-0 md:mb-10 md:mt-0 mt-5${
                      index > 8 ? "hidden " : ""
                    }   md:mb-0 mb-4`}
                    key={item.id}
                    onClick={() => handleProductClick(item)}
                  >
                    <div className="w-full h-[220px] flex justify-center">
                      <img
                        src={`../${item.image_path}`}
                        alt=""
                        className="w-full h-[220px] object-cover cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.1]"
                      />
                    </div>
                    <h1 className="my-4 px-2 md:px-5 text-[#151413] text-[14px] h-[40px] lg:h-[30px] font-[600] leading-[19.8px]">
                      {item.model} {item.year}
                    </h1>

                    <hr className=" border border-[#E6E6E6] mx-2 md:mx-5 my-4 " />
                    <div className="md:px-5 px-2 ">
                      <div className=" grid grid-cols-3 items-center justify-start gap-3 product-box  ">
                        {/*  */}
                        <div className="w-full   mb-1">
                          {/*  */}
                          <div className="  items-center mr-2 ">
                            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
                              Color
                            </p>
                          </div>
                          <p className="text-[#424242] font-[400] leading-[16.8px] text-[14px] mt-2">
                            {item.color}
                          </p>
                        </div>
                        {/*  */}
                        <div className="w-full   mb-1">
                          {/*  */}
                          <div className="  items-center mr-2 ">
                            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
                              Make
                            </p>
                          </div>
                          <p className="text-[#424242] font-[400] leading-[16.8px] text-[14px] mt-2">
                            {item.make}
                          </p>
                        </div>
                        {/*  */}
                        <div className="w-full   mb-1">
                          {/*  */}
                          <div className="  items-center mr-2 ">
                            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
                              Fuel Type
                            </p>
                          </div>
                          <p className="text-[#424242] font-[400] leading-[16.8px] text-[14px] mt-2">
                            {item.fuel}
                          </p>
                        </div>

                        {/*  */}

                        <div className="w-full   mb-1">
                          {/*  */}
                          <div className="  items-center mr-2 ">
                            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
                              Engine
                            </p>
                          </div>
                          <p className="text-[#424242] font-[400] leading-[16.8px] text-[14px] mt-2">
                            {item.engine}
                          </p>
                        </div>
                        {/*  */}
                        <div className="w-full  mb-1">
                          {/*  */}
                          <div className="  items-center mr-2 ">
                            <p className="text-[#7F7F7F] font-[500] text-[12px] leading-[12px]">
                              Transmission
                            </p>
                          </div>
                          <p className="text-[#424242] font-[400] leading-[16.8px] text-[14px] mt-2">
                            {item.transmission}
                          </p>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                    <hr className=" border border-[#E6E6E6] mx-2 md:mx-5 my-4 " />

                    <div className="flex justify-between items-center md:px-5 px-2 pb-4">
                      <div className="flex items-center">
                        <p className="font-[500] text-[12px] leading-[14.4px] mr-1">
                          From
                        </p>
                        <p className="text-secondary-light text-[18px] font-[600] leading-[19.2px]">
                          AU{" "}
                          <CurrencyFormatter amount={parseFloat(item.weekly)} />
                        </p>
                      </div>
                      {/* <button className=" text-[16px] text-primary px-3 py-1 rounded-[10px]   font-[400] transition-all duration-500 ease-out hover:opacity-70">
                      View more
                    </button> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        {session_token && (
          <Link to={"/home"}>
            <div className="w-full text-center mt-5">
              <button
                className="bg-primary text-[#fff] text-[18px] leading-[21.6px] font-[600] py-3 px-10  rounded-md transition-all duration-500 ease-out  hover:bg-primary-light"
                // disabled={similarCars.length === 0}
              >
                View more cars
              </button>
            </div>
          </Link>
        )}
        {!session_token && (
          <Link to={"/carlisting"}>
            <div className="w-full text-center mt-5">
              <button
                className="bg-primary text-[#fff] text-[18px] leading-[21.6px] font-[600] py-3 px-10  rounded-md transition-all duration-500 ease-out  hover:bg-primary-light"
                // disabled={similarCars.length === 0}
              >
                View more cars
              </button>
            </div>
          </Link>
        )}
      </section>
    </div>
  );
};

export default FindSimilarCars;
