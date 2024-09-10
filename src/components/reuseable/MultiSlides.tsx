import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// import { Bbutton } from "./Button";
import useCarStore from "@/store/ProductStore";

export function MultiSlides() {
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
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full  px-2 mt-10  "
    >
      <CarouselContent className=" w-full ">
        {currentCar?.images?.map((img, index) => (
          <CarouselItem
            key={index}
            className=" w-full md:basis-1/4 rounded-md overflow-hidden"
          >
            <div className="">
              <img
                src={`https://rent2ownauto.com.au/${img}`}
                alt=""
                className=" md:h-[200px] md:w-[450px] h-[250px] w-full object-cover "
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
