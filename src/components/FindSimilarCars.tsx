import model from "../assets/icons/model.svg";
import { Link } from "react-router-dom";
import CurrencyFormatter from "../components/reuseable/currencyFormat";
import engine from "../assets/icons/engine.svg";
import passangers from "../assets/icons/passangers.svg";
import max_power from "../assets/icons/max_power.svg";
import location from "../assets/icons/location.svg";

import useCarStore from "@/store/ProductStore";
import { Car } from "@/api/types";
import { useCars } from "@/hooks/query";

const FindSimilarCars = () => {
  const { setCurrentCar, currentCar } = useCarStore();
  const { data } = useCars();

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
      <section className="w-full bg-gray-50  md:py-[1rem] py-10 my-[7rem] md:pl-[8%] md:pr-[14%]  pl-0 ">
        <p className=" w-full md:text-[36px] text-[25px] text-[#2B2928] font-[600] text-wrap leading-[43.2px]  mb-9">
          Find Similar Cars
        </p>
        <div className="w-full md:overflow-x-auto no-scrollbar">
          {similarCars?.length === 0 ? (
            <div className="w-full text-center text-[20px] font-bold text-red-300 my-7">
              No Similar Cars Found
            </div>
          ) : (
            <div className="md:flex md:space-x-4 grid grid-cols-2 gap-1 items-center">
              {similarCars?.map((item) => (
                <Link
                  to={`/products/${item.model}`}
                  // state={{ productData: item }}
                >
                  <div
                    className={`lg:w-[25%] md:w-[35%] w-full min-h-[380px] bg-white rounded-[12px] overflow-hidden md:flex-shrink-0 md:mb-10 md:mt-0 mt-5${
                      item.id > 8 ? "hidden " : ""
                    }   md:mb-0 mb-4`}
                    key={item.id}
                    onClick={() => handleProductClick(item)}
                  >
                    <div className="w-full h-[245px] flex justify-center">
                      <img
                        src={`https://rent2ownauto.com.au/${item.image_path}`}
                        alt=""
                        className="w-full h-[245px] object-cover cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.1]"
                      />
                    </div>
                    <h1 className="my-4 px-2 md:px-5 text-[#151413] text-[14px] h-[40px] lg:h-[30px] font-[600] leading-[19.8px]">
                      {item.model} {item.year}
                    </h1>
                    <div className="md:px-5 px-2 ">
                      <div className=" md:grid grid-cols-[25%_55%_15%] block items-center justify-start gap-3 product-box">
                        {/*  */}
                        <div className="w-full flex items-center  mb-4">
                          {/*  */}
                          <div className="flex  items-center mr-2 ">
                            <img
                              src={model}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                            {/* <p className="text-[#898483] font-light text-[10px]">
                        Make
                      </p> */}
                          </div>
                          <p className="text-[#151413] text-[12px]">
                            {item.make}
                          </p>
                        </div>
                        {/*  */}
                        <div className="w-full flex items-center  mb-4 ">
                          {/*  */}
                          <div className="flex  items-center mr-2">
                            <img
                              src={engine}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                            {/* <p className="text-[#898483] font-light text-[10px]">
                        Engine type
                      </p> */}
                          </div>
                          <p className="text-[#151413] text-[12px]">
                            {item.engine}
                          </p>
                        </div>
                        {/*  */}
                        <div className="w-full flex items-center  mb-4">
                          {/*  */}
                          <div className="flex  items-center mr-2">
                            <img
                              src={passangers}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                            {/* <p className="text-[#898483] font-light text-[10px]">
                        Passangers
                      </p> */}
                          </div>
                          <p className="text-[#151413] text-[12px]">
                            {item.seating}
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className=" product-box md:grid grid-cols-[60%_30%] block items-center gap-3">
                        <div className="w-full flex items-center  mb-4">
                          {/*  */}
                          <div className="flex  items-center mr-2 col-span-2">
                            <img
                              src={max_power}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                            {/* <p className="text-[#898483] font-light text-[10px]">
                        Max power
                      </p> */}
                          </div>
                          <p className="text-[#151413] text-[12px]">
                            {item.maxpower}HP
                          </p>
                        </div>
                        {/*  */}
                        <div className="w-full flex items-center  mb-4">
                          {/*  */}
                          <div className="flex  items-center mr-2">
                            <img
                              src={location}
                              alt=""
                              className="w-[20px] h-[20px]"
                            />
                            {/* <p className="text-[#898483] font-light text-[10px]">
                        Location
                      </p> */}
                          </div>
                          <p className="text-[#151413] text-[12px]">
                            {item.location}
                          </p>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                    <div className="flex justify-between items-center md:px-5 px-2 pb-4">
                      <p className="text-secondary-light text-[18px] font-[600] leading-[19.2px]">
                        AU <CurrencyFormatter amount={parseFloat(item.price)} />
                      </p>
                      <button className=" text-[16px] text-primary px-3 py-1 rounded-[10px]   font-[400] transition-all duration-500 ease-out hover:opacity-70">
                        View more
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* <Link to={"/home"}>
          <div className="w-full text-center mt-5">
            <button
              className="bg-[#86E900] text-[#fff] text-[12px] py-3 px-10  rounded-md transition-all duration-500 ease-out  hover:bg-primary-light"
              // disabled={similarCars.length === 0}
            >
              Load more
            </button>
          </div>
        </Link> */}
      </section>
    </div>
  );
};

export default FindSimilarCars;
