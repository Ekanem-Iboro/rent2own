// Slider Component

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useCarStore from "@/store/ProductStore";
// import Autoplay from "embla-carousel-autoplay";

function Slider() {
  const { currentCar } = useCarStore();
  // const port = window.location.port;
  // const hostname = window.location.hostname;

  // const portServer = () => {
  //   if (port && hostname === "localhost") {
  //     return "https://rent2ownauto.com.au/";
  //   }
  //   return "../";
  // };

  return (
    <div className="w-full bg-gray-50 overflow-hidden   px-2 rounded-sm">
      <Carousel
        opts={{
          loop: true,
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 9000,
        //   }),
        // ]}
        className="w-full md:max-w-[100%] md:h-full  h-[343px] relative rounded-lg overflow-hidden"
      >
        <CarouselContent className="lg:h-[830px] md:h-[1300px]  h-[343px] ">
          {currentCar?.images?.map((img, index) => (
            <CarouselItem
              key={index}
              className="lg:h-[830px] md:h-[1300px]  h-[343px] "
            >
              <div className=" ">
                <img
                  src={`../${img}`}
                  alt=""
                  className="lg:h-[830px] md:h-[1300px] h-[343px] w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-[50%]  text-secondary bg-[#ffffff] border border-white rounded-full " />
        <CarouselNext className="absolute right-2 top-[50%]   text-secondary bg-[#ffffff] border border-white rounded-full " />
      </Carousel>
    </div>
  );
}

export default Slider;
