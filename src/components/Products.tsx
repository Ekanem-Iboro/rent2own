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
    <section className="w-full bg-gray-50  px-3 lg:py-[6rem] py-10 product overflow-hidden ">
      <p className=" w-full md:text-[36px] text-[25px] text-[#2B2928] text-wrap leading-[43.2px] font-[600] mb-9  px-9">
        Explore
      </p>
      {isLoading ? (
        <div className=" w-full px-9">
          {" "}
          <h1>
            <Skeleton width={"100%"} height={500} />
          </h1>
        </div>
      ) : (
        <div className=" w-full md:grid lg:grid-cols-3 md:grid-cols-2 block gap-x-8 gap-y-10  px-9 ">
          {data?.map((item: Car, index: number) => (
            <BlurFade key={item.id} delay={0.02} duration={0.5} inView>
              <Link
                to={`/products/${item?.model}`}
                // state={{ productData: item }}
              >
                <div
                  className={` w-full min-h-[380px]  rounded-[9px] overflow-hidden border border-[#E6E6E6] ${
                    item.id > 8 ? "hidden " : ""
                  }   md:mb-0 mb-4`}
                  key={item.id}
                  onClick={() => handleProductClick(item)}
                >
                  <div className="w-full h-[220px] flex justify-center">
                    <img
                      src={`https://rent2ownauto.com.au/${item.image_path}`}
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
                  <BorderBeam
                    size={200}
                    duration={6}
                    delay={4 + index * 2}
                    className=""
                  />
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      )}

      <Link to={"/carlisting"}>
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
