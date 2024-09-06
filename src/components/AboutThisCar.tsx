import useCarStore from "@/store/ProductStore";
import { useState } from "react";

const AboutThisCar = () => {
  const { currentCar } = useCarStore();
  const [isExpanded, setIsExpanded] = useState(false);

  // Safely access the description, defaulting to an empty string if currentCar or description is undefined
  const description = currentCar?.description || "";
  const limit = 40;
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  // Split the description based on the word limit
  const limitedText = description.split(" ").slice(0, limit).join(" ");
  const remainingText = description.split(" ").slice(limit).join(" ");
  return (
    <div className=" my-[3rem] rounded-md">
      <h1 className="text-[#191919] text-[20px] leading-[24px] font-[500]">
        About this car
      </h1>
      <p className="text-[#191919] text-[14px] leading-[16.8px] font-[400] mt-5">
        {limitedText}
        {isExpanded && <span> {remainingText}</span>}
        <button
          onClick={toggleText}
          className="text-[#6FC200] cursor-pointer underline block mt-2"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </p>
      <p className="text-[#2B2928] text-[14px] leading-[16.8px] mt-5"></p>
    </div>
  );
};

export default AboutThisCar;
