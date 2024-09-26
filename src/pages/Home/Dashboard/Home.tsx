// import model from "../../../assets/icons/model.svg";
// import engine from "../../../assets/icons/engine.svg";
// import passangers from "../../../assets/icons/passangers.svg";
// import max_power from "../../../assets/icons/max_power.svg";
// import location from "../../../assets/icons/location.svg";
import { Link } from "react-router-dom";
import BlurFade from "@/components/magicui/blur-fade";
import CurrencyFormatter from "@/components/reuseable/currencyFormat";
import { BorderBeam } from "@/components/magicui/border-beam";
import useCarStore from "@/store/ProductStore";
import SearchCarsByPrice from "@/components/filter/PriceSearch";
import { useEffect, useState } from "react";
import BrandSearch from "@/components/filter/BrandSearch";
import SearchCarsByYear from "@/components/filter/YearSearch";
import ColorSearch from "@/components/filter/ColorSearch";
import FuelSearch from "@/components/filter/FuelSearch";
import { useCars } from "@/hooks/query";
// import { useForm } from "react-hook-form";
import { Car, Filters } from "@/api/types";
// import { Search } from "lucide-react";
import { PaginationCar } from "@/components/reuseable/CarPegnation";
import SpinnerOverlay from "@/components/reuseable/OverlayLoader";

const Home = () => {
  const { setCurrentCar } = useCarStore();
  const { data, isLoading: isCarLoading } = useCars();

  const [activeButton, setActiveButton] = useState("highest");

  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [isFiltering, setIsFiltering] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(9);

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentCars = filteredCars?.slice(firstItemIndex, lastItemIndex);
  //   const { register, watch } = useForm();
  //   const searchQuery = watch("search", ""); // Watch the search input field

  useEffect(() => {
    if (data && !isCarLoading) {
      if (activeButton === "highest") {
        const sortedData = [...data];
        const Hsort = sortedData.sort(
          (a, b) => Number(b.weekly) - Number(a.weekly)
        );
        setFilteredCars(Hsort);
      }
      setIsFiltering(false);
    }
  }, [data, isCarLoading, activeButton]);

  //   useEffect(() => {
  //     if (searchQuery && data) {
  //       const lowercasedQuery = searchQuery.toLowerCase();
  //       const filteredData = data.filter((car) =>
  //         [
  //           car.make,
  //           car.model,
  //           car.color,
  //           car.fuel,
  //           car.year.toString(),
  //           car.price.toString(),
  //         ]
  //           .map((field) => field.toLowerCase())
  //           .some((field) => field.includes(lowercasedQuery))
  //       );
  //       setFilteredCars(filteredData);
  //     } else if (data) {
  //       setFilteredCars(data);
  //     }
  //   }, [searchQuery, data]);

  const handleProductClick = (product: Car) => {
    setCurrentCar(product);
  };

  const handleFilterChange = (filters: Filters) => {
    let filteredData = data || [];

    // Apply min and max price filters
    if (filters.priceMin) {
      filteredData = filteredData.filter(
        (car) => parseFloat(car.price) >= parseInt(filters.priceMin!)
      );
    }
    if (filters.priceMax) {
      filteredData = filteredData.filter(
        (car) => parseFloat(car.price) <= parseInt(filters.priceMax!)
      );
    }

    // Apply checkbox filters
    if (filters.searchAbove2M) {
      filteredData = filteredData.filter(
        (car) => parseFloat(car.price) > 2000000
      );
    }
    if (filters.between1Mand2M) {
      filteredData = filteredData.filter(
        (car) =>
          parseFloat(car.price) >= 1000000 && parseFloat(car.price) <= 2000000
      );
    }
    if (filters.between500Kand999K) {
      filteredData = filteredData.filter(
        (car) =>
          parseFloat(car.price) >= 500000 && parseFloat(car.price) <= 999999
      );
    }
    if (filters.lessthan500K) {
      filteredData = filteredData.filter(
        (car) => parseFloat(car.price) < 500000
      );
    }

    //search by brand
    if (filters.brand) {
      const brandFilter = filters.brand.toLowerCase();
      filteredData = filteredData.filter((car) =>
        car.make.toLowerCase().startsWith(brandFilter)
      );
    }

    if (filters.honda) {
      filteredData = filteredData.filter((car) =>
        car.make.toLowerCase().startsWith("honda")
      );
    }
    if (filters.mazda) {
      filteredData = filteredData.filter((car) =>
        car.make.toLowerCase().startsWith("mazda")
      );
    }
    if (filters.hyundai) {
      filteredData = filteredData.filter((car) =>
        car.make.toLowerCase().startsWith("hyundai")
      );
    }
    if (filters.mitsubishi) {
      filteredData = filteredData.filter((car) =>
        car.make.toLowerCase().startsWith("mitsubishi")
      );
    }
    // Apply year filters  BY YEAR
    if (filters.minYear) {
      filteredData = filteredData.filter(
        (car) => car.year >= parseInt(filters.minYear!)
      );
    }
    if (filters.maxYear) {
      filteredData = filteredData.filter(
        (car) => car.year <= parseInt(filters.maxYear!)
      );
    }
    if (filters.from2020to2024) {
      filteredData = filteredData.filter(
        (car) => car.year >= 2020 && car.year <= 2024
      );
    }
    if (filters.from2015to2019) {
      filteredData = filteredData.filter(
        (car) => car.year >= 2015 && car.year <= 2019
      );
    }
    if (filters.from2010to2014) {
      filteredData = filteredData.filter(
        (car) => car.year >= 2010 && car.year <= 2014
      );
    }
    if (filters.from2005to2015) {
      filteredData = filteredData.filter(
        (car) => car.year >= 2005 && car.year <= 2015
      );
    }

    //search by color
    if (filters.color) {
      const colorFilter = filters.color.toLowerCase();
      filteredData = filteredData.filter((car) =>
        car.color.toLowerCase().startsWith(colorFilter)
      );
    }

    if (filters.black) {
      filteredData = filteredData.filter((car) =>
        car.color.toLowerCase().startsWith("black")
      );
    }
    if (filters.blue) {
      filteredData = filteredData.filter((car) =>
        car.color.toLowerCase().startsWith("blue")
      );
    }
    if (filters.silver) {
      filteredData = filteredData.filter((car) =>
        car.color.toLowerCase().startsWith("silver")
      );
    }
    if (filters.white) {
      filteredData = filteredData.filter((car) =>
        car.color.toLowerCase().startsWith("white")
      );
    }

    //search by fuel
    if (filters.fuel) {
      const fuelFilter = filters.fuel.toLowerCase();
      filteredData = filteredData.filter((car) =>
        car.fuel.toLowerCase().startsWith(fuelFilter)
      );
    }

    if (filters.petrol) {
      filteredData = filteredData.filter((car) =>
        car.fuel.toLowerCase().startsWith("petrol")
      );
    }
    if (filters.hybrid) {
      filteredData = filteredData.filter((car) =>
        car.fuel.toLowerCase().startsWith("hybrid")
      );
    }
    if (filters.electric) {
      filteredData = filteredData.filter((car) =>
        car.fuel.toLowerCase().startsWith("electric")
      );
    }
    if (filters.diesel) {
      filteredData = filteredData.filter((car) =>
        car.fuel.toLowerCase().startsWith("diesel")
      );
    }
    setFilteredCars(filteredData);
  };

  const handleButtonClick = (sortBy: string) => {
    setActiveButton(sortBy);
    const sortedData = [...filteredCars]; // Create a copy to sort

    switch (sortBy) {
      case "highest":
        sortedData.sort((a, b) => Number(b.weekly) - Number(a.weekly));
        break;
      case "lowest":
        sortedData.sort((a, b) => Number(a.weekly) - Number(b.weekly));
        break;
      case "latest":
        sortedData.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        break;
      default:
        break;
    }

    setFilteredCars(sortedData); // Update the filteredCars state
  };

  // Sync filteredData with filteredCars on initial load

  // const port = window.location.port;
  // const hostname = window.location.hostname;

  // const portServer = () => {
  //   if (port && hostname === "localhost") {
  //     return "https://rent2ownauto.com.au/";
  //   }
  //   return "../";
  // };

  return (
    <>
      {isCarLoading && <SpinnerOverlay />}

      <div className="md:flex block gap-x-8 md:my-0 md:px-0 px-[3%] overflow-hidden mb-[5rem]">
        <div className=" text-white lg:flex-[30%] md:flex-[50%] md:w-auto w-full lg:mt-0  mt-[2rem]">
          <h1 className="mt-2 mb-7 px-2 text-[#151413] text-[20px] font-[500] leading-[24px] ">
            Advanced search
          </h1>
          <div>
            <SearchCarsByPrice onFilterChange={handleFilterChange} />
            <BrandSearch onFilterChange={handleFilterChange} />
            <SearchCarsByYear onFilterChange={handleFilterChange} />
            <ColorSearch onFilterChange={handleFilterChange} />
            <FuelSearch onFilterChange={handleFilterChange} />
          </div>
        </div>

        <div className=" w-full lg:mt-0 mt-[5rem]">
          <div className="md:flex  block tems-center justify-between gap-8 mt-2 mb-9 md:px-8 ">
            <h1 className="px-2 text-[#151413] text-[20px] font-[500] leading-[24px]  ">
              Car Listing
            </h1>
            <div className=" mt-6 md:mt-auto px-2">
              <span className="text-[14px] font-[400] leading-[16.8px] mr-5">
                Sort by:
              </span>
              <button
                className={`text-[14px] font-[400] leading-[16.8px] p-[8px] ${
                  activeButton === "highest"
                    ? "text-white bg-[#016AB3] rounded-lg"
                    : "text-black"
                }`}
                onClick={() => handleButtonClick("highest")}
              >
                Highest price
              </button>

              <button
                className={`text-[14px] font-[400] leading-[16.8px] p-[8px] ${
                  activeButton === "lowest"
                    ? "text-white bg-[#016AB3]  rounded-lg"
                    : "text-black"
                }`}
                onClick={() => handleButtonClick("lowest")}
              >
                Lowest price
              </button>

              <button
                className={`text-[14px] font-[400] leading-[16.8px] p-[8px] ${
                  activeButton === "latest"
                    ? "text-white bg-[#016AB3]  rounded-lg"
                    : "text-black"
                }`}
                onClick={() => handleButtonClick("latest")}
              >
                Latest
              </button>
              {/* <input
                type="text"
                {...register("search")}
                placeholder="Search here...."
                className=" w-full  p-1 outline-none  bg-slate-50 focus:outline-none  pl-[2.5rem]"
              />
              <Search className="text-[#BDBDBD] absolute left-3 top-2" /> */}
            </div>
          </div>
          <div className="bg-[#ffffff] py-[1rem] rounded-[30px]">
            <h1 className="font-[500] text-[18px] leadind-[21.6px] md:ml-11  my-9 w-full text-center md:text-start">
              {filteredCars?.length} Cars available
            </h1>
            <hr className=" border border-[#E6E6E6]  my-6 " />

            {isCarLoading ? (
              <div className="w-full text-center">Loading...</div>
            ) : isFiltering ? (
              <div className="w-full text-center"></div>
            ) : filteredCars.length === 0 ? (
              <div className="text-center text-[#151413] text-[18px] font-semibold">
                Search not found
              </div>
            ) : (
              <div className="grid grid-cols-2 homeprod gap-8 w-full">
                {currentCars.map((item, index) => (
                  <BlurFade key={item.id} delay={0.02} duration={0.5} inView>
                    <Link
                      to={`/home_products/${item?.model}`}
                      // state={{ productData: item }}
                    >
                      <div
                        className={` w-full min-h-[400px]  rounded-[9px] overflow-hidden border border-[#E6E6E6] ${
                          index > 8 ? "hidden " : ""
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
                          <div className=" grid grid-cols-3 items-center justify-start gap-3 product-box ">
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
                              <CurrencyFormatter
                                amount={parseFloat(item.weekly)}
                              />
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
            <hr className=" border border-[#E6E6E6]  my-6 " />

            <div className="mt-11">
              <PaginationCar
                totalItems={filteredCars.length}
                itemPerPage={itemPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
