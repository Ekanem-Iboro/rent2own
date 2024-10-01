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
      className="w-full  pl-2 mt-5  "
    >
      <CarouselContent className=" w-full ">
        {currentCar?.images?.map((img, index) => (
          <CarouselItem
            key={index}
            className=" w-full md:basis-1/5 basis-1/3 rounded-md overflow-hidden"
          >
            <div className="">
              <img
                src={`../${img}`}
                alt=""
                className=" md:h-[200px] md:w-[450px] w-[250px] h-[80px]  object-cover "
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
