//  <div className="md:flex block lg:mt-0 mt-[10%]">
//    <div className=" mb-[5%] md:fixed lg:w-[20%] w-[28%] md:block hidden text-white md:h-screen md:overflow-y-auto no-scrollbar">
//      <h1 className="my-4 px-2 text-[#151413] text-[18px] leading-[19.2px] font-semibold">
//        Advanced search
//      </h1>
//      <div className="md:mb-[7rem]">
//        <SearchCarsByPrice onFilterChange={handleFilterChange} />
//        <BrandSearch onFilterChange={handleFilterChange} />
//        <SearchCarsByYear onFilterChange={handleFilterChange} />
//        <ColorSearch onFilterChange={handleFilterChange} />
//        <FuelSearch onFilterChange={handleFilterChange} />
//      </div>
//    </div>

//    <div className="w-full grid grid-cols-2 homeprod gap-3 gap-y-10 md:mr-2 md:mt-[3%] lg:ml-[27%] ml-[36%]">
//      {filteredCars.length === 0 ? (
//        <div className="col-span-2 text-center text-[#151413] text-[18px] font-semibold">
//          Search not found
//        </div>
//      ) : (
//        filteredCars.map((item, index) => (
//          <BlurFade key={item.id} delay={0.02} duration={0.5} inView>
//            <div
//              className={`lg:w-[96%] w-full min-h-[480px] bg-white rounded-[12px] overflow-hidden product-box`}
//              key={item.id}
//            >
//              <div className="w-full h-[245px] overflow-hidden flex justify-center">
//                <img
//                  src={item.image}
//                  alt=""
//                  className="w-full h-[245px] object-cover cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.1]"
//                />
//              </div>
//              <h1 className="my-4 px-2 text-[#151413] text-[18px] h-[70px]">
//                {item.name}
//              </h1>
//              <div className="px-2">
//                <div className="w-full flex items-center justify-between mb-4">
//                  <div className="flex items-center gap-2">
//                    <img src={model} alt="" />
//                    <p className="text-[#898483] font-light text-[10px]">
//                      Model
//                    </p>
//                  </div>
//                  <p className="text-[#151413] text-[12px]">{item.model}</p>
//                </div>
//                <div className="w-full flex items-center justify-between mb-4">
//                  <div className="flex items-center gap-2">
//                    <img src={engine} alt="" />
//                    <p className="text-[#898483] font-light text-[10px]">
//                      Engine type
//                    </p>
//                  </div>
//                  <p className="text-[#151413] text-[12px]">{item.engine}</p>
//                </div>
//                <div className="w-full flex items-center justify-between mb-4">
//                  <div className="flex items-center gap-2">
//                    <img src={passangers} alt="" />
//                    <p className="text-[#898483] font-light text-[10px]">
//                      Passengers
//                    </p>
//                  </div>
//                  <p className="text-[#151413] text-[12px]">{item.passengers}</p>
//                </div>
//                <div className="w-full flex items-center justify-between mb-4">
//                  <div className="flex items-center gap-2">
//                    <img src={max_power} alt="" />
//                    <p className="text-[#898483] font-light text-[10px]">
//                      Max power
//                    </p>
//                  </div>
//                  <p className="text-[#151413] text-[12px]">
//                    {item.max_power}HP
//                  </p>
//                </div>
//                <div className="w-full flex items-center justify-between mb-4">
//                  <div className="flex items-center gap-2">
//                    <img src={location} alt="" />
//                    <p className="text-[#898483] font-light text-[10px]">
//                      Location
//                    </p>
//                  </div>
//                  <p className="text-[#151413] text-[12px]">{item.location}</p>
//                </div>
//              </div>
//              <div className="md:flex block text-center justify-between items-center px-2 pb-4">
//                <p className="text-secondary-light text-[18px] font-semibold">
//                  <CurrencyFormatter amount={item.price} />
//                </p>
//                <button
//                  className="border border-[#D8E6FA] text-[14px] text-secondary-light px-3 py-1 rounded-[10px] transition-all duration-500 ease-out hover:opacity-70"
//                  onClick={() => handleProductClick(item)}
//                >
//                  <Link to={`/products/:${item.name}&:${item.id}`}>
//                    More details
//                  </Link>
//                </button>
//              </div>
//              <BorderBeam size={150} duration={6} delay={4 + index * 2} />
//            </div>
//          </BlurFade>
//        ))
//      )}
//    </div>
//  </div>;

// const [filteredCars, setFilteredCars] = useState(carsData);

// const handleProductClick = (product: productType) => {
//   setCurrentCar(product);
// };

// const handleFilterChange = (filters: any) => {
//   let filteredData = carsData;

//   // Apply min and max price filters
//   if (filters.priceMin) {
//     filteredData = filteredData.filter(
//       (car) => car.price >= parseInt(filters.priceMin)
//     );
//   }
//   if (filters.priceMax) {
//     filteredData = filteredData.filter(
//       (car) => car.price <= parseInt(filters.priceMax)
//     );
//   }

//   // Apply checkbox filters
//   if (filters.searchAbove2M) {
//     filteredData = filteredData.filter((car) => car.price > 2000000);
//   }
//   if (filters.between1Mand2M) {
//     filteredData = filteredData.filter(
//       (car) => car.price >= 1000000 && car.price <= 2000000
//     );
//   }
//   if (filters.between500Kand999K) {
//     filteredData = filteredData.filter(
//       (car) => car.price >= 500000 && car.price <= 999999
//     );
//   }
//   if (filters.lessthan500K) {
//     filteredData = filteredData.filter((car) => car.price < 500000);
//   }
//   //search by brand
//   if (filters.brand) {
//     const brandFilter = filters.brand.toLowerCase();
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith(brandFilter)
//     );
//   }

//   if (filters.ford) {
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith("ford")
//     );
//   }
//   if (filters.dongfang) {
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith("dongfeng")
//     );
//   }
//   if (filters.geely) {
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith("geely")
//     );
//   }
//   if (filters.toyota) {
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith("toyota")
//     );
//   }
//   // Apply year filters  BY YEAR
//   if (filters.minYear) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= parseInt(filters.minYear)
//     );
//   }
//   if (filters.maxYear) {
//     filteredData = filteredData.filter(
//       (car) => car.year <= parseInt(filters.maxYear)
//     );
//   }
//   if (filters.from2020to2024) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= 2020 && car.year <= 2024
//     );
//   }
//   if (filters.from2015to2019) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= 2015 && car.year <= 2019
//     );
//   }
//   if (filters.from2010to2014) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= 2010 && car.year <= 2014
//     );
//   }
//   if (filters.from2005to2015) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= 2005 && car.year <= 2015
//     );
//   }

//   //search by color
//   if (filters.color) {
//     const colorFilter = filters.color.toLowerCase();
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith(colorFilter)
//     );
//   }

//   if (filters.black) {
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith("black")
//     );
//   }
//   if (filters.blue) {
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith("blue")
//     );
//   }
//   if (filters.silver) {
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith("silver")
//     );
//   }
//   if (filters.white) {
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith("white")
//     );
//   }

//   //search by fuel
//   if (filters.fuel) {
//     const fuelFilter = filters.fuel.toLowerCase();
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith(fuelFilter)
//     );
//   }

//   if (filters.petrol) {
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith("petrol")
//     );
//   }
//   if (filters.hybrid) {
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith("hybrid")
//     );
//   }
//   if (filters.electric) {
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith("electric")
//     );
//   }
//   if (filters.diesel) {
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith("diesel")
//     );
//   }
//   setFilteredCars(filteredData);
// };

// const handleFilterChange = (newFilters: any) => {
//   // Merge new filters with existing filters
//   const updatedFilters = { ...appliedFilters, ...newFilters };
//   setAppliedFilters(updatedFilters);

//   // Apply all filters
//   let filteredData = carsData;

//   // Apply min and max price filters
//   if (updatedFilters.priceMin) {
//     filteredData = filteredData.filter(
//       (car) => car.price >= parseInt(updatedFilters.priceMin)
//     );
//   }
//   if (updatedFilters.priceMax) {
//     filteredData = filteredData.filter(
//       (car) => car.price <= parseInt(updatedFilters.priceMax)
//     );
//   }

//   // Apply checkbox filters
//   if (updatedFilters.searchAbove2M) {
//     filteredData = filteredData.filter((car) => car.price > 2000000);
//   }
//   if (updatedFilters.between1Mand2M) {
//     filteredData = filteredData.filter(
//       (car) => car.price >= 1000000 && car.price <= 2000000
//     );
//   }
//   if (updatedFilters.between500Kand999K) {
//     filteredData = filteredData.filter(
//       (car) => car.price >= 500000 && car.price <= 999999
//     );
//   }
//   if (updatedFilters.lessthan500K) {
//     filteredData = filteredData.filter((car) => car.price < 500000);
//   }
//   // Search by brand
//   if (updatedFilters.brand) {
//     const brandFilter = updatedFilters.brand.toLowerCase();
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith(brandFilter)
//     );
//   }

//   if (updatedFilters.ford) {
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith("ford")
//     );
//   }
//   if (updatedFilters.dongfang) {
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith("dongfeng")
//     );
//   }
//   if (updatedFilters.geely) {
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith("geely")
//     );
//   }
//   if (updatedFilters.toyota) {
//     filteredData = filteredData.filter((car) =>
//       car.name.toLowerCase().startsWith("toyota")
//     );
//   }
//   // Apply year filters BY YEAR
//   if (updatedFilters.minYear) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= parseInt(updatedFilters.minYear)
//     );
//   }
//   if (updatedFilters.maxYear) {
//     filteredData = filteredData.filter(
//       (car) => car.year <= parseInt(updatedFilters.maxYear)
//     );
//   }
//   if (updatedFilters.from2020to2024) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= 2020 && car.year <= 2024
//     );
//   }
//   if (updatedFilters.from2015to2019) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= 2015 && car.year <= 2019
//     );
//   }
//   if (updatedFilters.from2010to2014) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= 2010 && car.year <= 2014
//     );
//   }
//   if (updatedFilters.from2005to2015) {
//     filteredData = filteredData.filter(
//       (car) => car.year >= 2005 && car.year <= 2015
//     );
//   }

//   // Search by color
//   if (updatedFilters.color) {
//     const colorFilter = updatedFilters.color.toLowerCase();
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith(colorFilter)
//     );
//   }

//   if (updatedFilters.black) {
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith("black")
//     );
//   }
//   if (updatedFilters.blue) {
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith("blue")
//     );
//   }
//   if (updatedFilters.silver) {
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith("silver")
//     );
//   }
//   if (updatedFilters.white) {
//     filteredData = filteredData.filter((car) =>
//       car.color.toLowerCase().startsWith("white")
//     );
//   }

//   // Search by fuel
//   if (updatedFilters.fuel) {
//     const fuelFilter = updatedFilters.fuel.toLowerCase();
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith(fuelFilter)
//     );
//   }

//   if (updatedFilters.petrol) {
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith("petrol")
//     );
//   }
//   if (updatedFilters.hybrid) {
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith("hybrid")
//     );
//   }
//   if (updatedFilters.electric) {
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith("electric")
//     );
//   }
//   if (updatedFilters.diesel) {
//     filteredData = filteredData.filter((car) =>
//       car.fuel.toLowerCase().startsWith("diesel")
//     );
//   }
//   setFilteredCars(filteredData);
// };

//  <div className="md:grid grid-cols-[30%,70%] gap-6">
//   {/* ist part */}
//   <div className="  text-white md:block hidden ">
//     <h1 className="my-4 px-2 text-[#151413] text-[18px] leading-[19.2px] font-semibold">
//       Advanced search
//     </h1>
//     <div className="">
//       <SearchCarsByPrice onFilterChange={handleFilterChange} />
//       <BrandSearch onFilterChange={handleFilterChange} />
//       <SearchCarsByYear onFilterChange={handleFilterChange} />
//       <ColorSearch onFilterChange={handleFilterChange} />
//       <FuelSearch onFilterChange={handleFilterChange} />
//     </div>
//   </div>

//   {/* 2ndt part */}
//   <div className="w-full mt-[7%]">
//     <div className=" grid grid-cols-2 gap-3 homeprod">
//       {filteredCars.length === 0 ? (
//         <div className="col-span-2 text-center text-[#151413] text-[18px] font-semibold">
//           Search not found
//         </div>
//       ) : (
//         filteredCars.map((item, index) => (
//           <BlurFade key={item.id} delay={0.02} duration={0.5} inView>
//             <div
//               className={`lg:w-[96%] w-full min-h-[480px] bg-white rounded-[12px] overflow-hidden product-box`}
//               key={item.id}
//             >
//               <div className="w-full h-[245px] overflow-hidden flex justify-center">
//                 <img
//                   src={item.image}
//                   alt=""
//                   className="w-full h-[245px] object-cover cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.1]"
//                 />
//               </div>
//               <h1 className="my-4 px-2 text-[#151413] text-[18px] h-[70px]">
//                 {item.name}
//               </h1>
//               <div className="px-2">
//                 <div className="w-full flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-2">
//                     <img src={model} alt="" />
//                     <p className="text-[#898483] font-light text-[10px]">
//                       Model
//                     </p>
//                   </div>
//                   <p className="text-[#151413] text-[12px]">{item.model}</p>
//                 </div>
//                 <div className="w-full flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-2">
//                     <img src={engine} alt="" />
//                     <p className="text-[#898483] font-light text-[10px]">
//                       Engine type
//                     </p>
//                   </div>
//                   <p className="text-[#151413] text-[12px]">{item.engine}</p>
//                 </div>
//                 <div className="w-full flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-2">
//                     <img src={passangers} alt="" />
//                     <p className="text-[#898483] font-light text-[10px]">
//                       Passengers
//                     </p>
//                   </div>
//                   <p className="text-[#151413] text-[12px]">
//                     {item.passengers}
//                   </p>
//                 </div>
//                 <div className="w-full flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-2">
//                     <img src={max_power} alt="" />
//                     <p className="text-[#898483] font-light text-[10px]">
//                       Max power
//                     </p>
//                   </div>
//                   <p className="text-[#151413] text-[12px]">
//                     {item.max_power}HP
//                   </p>
//                 </div>
//                 <div className="w-full flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-2">
//                     <img src={location} alt="" />
//                     <p className="text-[#898483] font-light text-[10px]">
//                       Location
//                     </p>
//                   </div>
//                   <p className="text-[#151413] text-[12px]">{item.location}</p>
//                 </div>
//               </div>
//               <div className="md:flex block text-center justify-between items-center px-2 pb-4">
//                 <p className="text-secondary-light text-[18px] font-semibold">
//                   <CurrencyFormatter amount={item.price} />
//                 </p>
//                 <button
//                   className="border border-[#D8E6FA] text-[14px] text-secondary-light px-3 py-1 rounded-[10px] transition-all duration-500 ease-out hover:opacity-70"
//                   onClick={() => handleProductClick(item)}
//                 >
//                   <Link to={`/products/:${item.name}&:${item.id}`}>
//                     More details
//                   </Link>
//                 </button>
//               </div>
//               <BorderBeam size={150} duration={6} delay={4 + index * 2} />
//             </div>
//           </BlurFade>
//         ))
//       )}
//     </div>
//   </div>
// </div>;

// working home

//   return (
//     <div className="md:grid grid-cols-[30%,65%] gap-6 block mt-[5%] ">
//       <div className=" md:block hidden text-white ">
//         <h1 className="my-4 px-2 text-[#151413] text-[18px] leading-[19.2px] font-semibold">
//           Advanced search
//         </h1>
//         <div className="">
//           <SearchCarsByPrice onFilterChange={handleFilterChange} />
//           <BrandSearch onFilterChange={handleFilterChange} />
//           <SearchCarsByYear onFilterChange={handleFilterChange} />
//           <ColorSearch onFilterChange={handleFilterChange} />
//           <FuelSearch onFilterChange={handleFilterChange} />
//         </div>
//       </div>
//       <div>
//         <div className=" grid grid-cols-2 homeprod gap-3  px-6 mt-[3%]">
//           {filteredCars.length === 0 ? (
//             <div className="text-center text-[#151413] text-[18px] font-semibold">
//               Search not found
//             </div>
//           ) : (
//             filteredCars.map((item, index) => (
//               <BlurFade key={item.id} delay={0.02} duration={0.5} inView>
//                 <div
//                   className={` w-full min-h-[480px] bg-white rounded-[12px] overflow-hidden product-box`}
//                   key={item.id}
//                 >
//                   <div className="w-full h-[245px] overflow-hidden flex justify-center">
//                     <img
//                       src={item.image}
//                       alt=""
//                       className="w-full h-[245px] object-cover cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.1]"
//                     />
//                   </div>
//                   <h1 className="my-4 px-2 text-[#151413] text-[18px] h-[70px]">
//                     {item.name}
//                   </h1>
//                   <div className="px-2">
//                     <div className="w-full flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-2">
//                         <img src={model} alt="" />
//                         <p className="text-[#898483] font-light text-[10px]">
//                           Model
//                         </p>
//                       </div>
//                       <p className="text-[#151413] text-[12px]">{item.model}</p>
//                     </div>
//                     <div className="w-full flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-2">
//                         <img src={engine} alt="" />
//                         <p className="text-[#898483] font-light text-[10px]">
//                           Engine type
//                         </p>
//                       </div>
//                       <p className="text-[#151413] text-[12px]">
//                         {item.engine}
//                       </p>
//                     </div>
//                     <div className="w-full flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-2">
//                         <img src={passangers} alt="" />
//                         <p className="text-[#898483] font-light text-[10px]">
//                           Passengers
//                         </p>
//                       </div>
//                       <p className="text-[#151413] text-[12px]">
//                         {item.passengers}
//                       </p>
//                     </div>
//                     <div className="w-full flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-2">
//                         <img src={max_power} alt="" />
//                         <p className="text-[#898483] font-light text-[10px]">
//                           Max power
//                         </p>
//                       </div>
//                       <p className="text-[#151413] text-[12px]">
//                         {item.max_power}HP
//                       </p>
//                     </div>
//                     <div className="w-full flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-2">
//                         <img src={location} alt="" />
//                         <p className="text-[#898483] font-light text-[10px]">
//                           Location
//                         </p>
//                       </div>
//                       <p className="text-[#151413] text-[12px]">
//                         {item.location}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="md:flex block text-center justify-between items-center px-2 pb-4">
//                     <p className="text-secondary-light text-[18px] font-semibold">
//                       <CurrencyFormatter amount={item.price} />
//                     </p>
//                     <button
//                       className="border border-[#D8E6FA] text-[14px] text-secondary-light px-3 py-1 rounded-[10px] transition-all duration-500 ease-out hover:opacity-70"
//                       onClick={() => handleProductClick(item)}
//                     >
//                       <Link to={`/products/:${item.name}&:${item.id}`}>
//                         More details
//                       </Link>
//                     </button>
//                   </div>
//                   <BorderBeam size={150} duration={6} delay={4 + index * 2} />
//                 </div>
//               </BlurFade>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
