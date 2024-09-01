import model from "../assets/icons/model.svg";
import engine from "../assets/icons/engine.svg";
import passangers from "../assets/icons/passangers.svg";
import max_power from "../assets/icons/max_power.svg";
import location from "../assets/icons/location.svg";
import { Link } from "react-router-dom";
// import { carsData } from "./resueable/HomeDatas";
import CurrencyFormatter from "./reuseable/currencyFormat";
import BlurFade from "./magicui/blur-fade";
import useCarStore from "@/store/ProductStore";
import { BorderBeam } from "./magicui/border-beam";
import { useCars } from "@/hooks/query";
import { Car } from "@/api/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import { Car } from "@/api/types";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useCars } from "@/hooks/query";

const Products = () => {
  const { setCurrentCar } = useCarStore();

  const { data, isLoading } = useCars();

  const handleProductClick = (product: Car) => {
    setCurrentCar(product);
  };

  // const port = window.location.port;
  // const hostname = window.location.hostname;

  // const portServer = () => {
  //   if (port && hostname === "localhost") {
  //     return "https://rent2ownauto.com.au/";
  //   }
  //   return "";
  // };

  return (
    <section className="w-full bg-gray-50  px-3 lg:py-[6rem] py-10 product overflow-hidden">
      <p className=" w-full md:text-[36px] text-[25px] text-[#2B2928] text-wrap leading-[43.2px] font-[600] mb-9">
        Explore
      </p>
      {isLoading ? (
        <div className=" w-full">
          {" "}
          <h1>
            <Skeleton width={"100%"} height={500} />
          </h1>
        </div>
      ) : (
        <div className=" w-full md:grid lg:grid-cols-4 md:grid-cols-3 block gap-3 gap-y-10 ">
          {data?.map((item: Car, index: number) => (
            <BlurFade key={item.id} delay={0.02} duration={0.5} inView>
              <Link
                to={`/products/${item?.model}`}
                // state={{ productData: item }}
              >
                <div
                  className={`lg:w-[96%] w-full min-h-[380px] bg-white rounded-[12px] overflow-hidden ${
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
                  <BorderBeam
                    size={200}
                    duration={6}
                    delay={4 + index * 2}
                    className="lg:mr-2"
                  />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      )}

      <Link to={"/home"}>
        <div className="w-full text-center mt-8">
          <button className="bg-primary font-[600] text-[#fff] text-[16px] py-3 px-10  rounded-md transition-all duration-500 ease-out  hover:bg-primary-light">
            View more cars
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Products;
