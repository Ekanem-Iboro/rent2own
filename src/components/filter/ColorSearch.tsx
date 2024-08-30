import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import { Dot, Search } from "lucide-react";
import { ColorFilters } from "@/api/types";

interface FilterSearchCarsProps {
  onFilterChange: (filters: ColorFilters) => void;
}

const ColorSearch: React.FC<FilterSearchCarsProps> = ({ onFilterChange }) => {
  const { register, reset, watch, setValue } = useForm({
    defaultValues: {
      color: "",
      black: false,
      blue: false,
      silver: false,
      white: false,
    },
  });

  //   const handleApply = () => {
  //     const filters = getValues();
  //     onFilterChange(filters);
  //     reset();
  //   };
  React.useEffect(() => {
    const subscribtion = watch((value) => {
      // const filters = getValues();
      onFilterChange(value);
    });

    return () => subscribtion.unsubscribe();
  });

  const handleClear = () => {
    reset();

    setValue("color", "");
    setValue("black", false); // Reset selected filter
    setValue("blue", false);
    setValue("silver", false);
    setValue("white", false);
    onFilterChange({}); // Reset filters to default state
  };
  const handleCheckboxChange = (filter: keyof ColorFilters) => {
    // Uncheck all checkboxes
    setValue("black", false);
    setValue("blue", false);
    setValue("silver", false);
    setValue("white", false);

    // Check the selected checkbox
    setValue(filter, true);
  };
  return (
    <Accordion
      
      sx={{ boxShadow: "none" }}
      className="md:mt-[3%]"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{ width: "100%", flexShrink: 0, fontWeight: 600 }}
          className="text-[#191919] text-[14px] leading-[16.8px] font-[500]"
        >
          Color
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="w-full flex space-x-4">
          {/* filter by inserting min and max value */}
          <div className="relative flex-1">
            <label htmlFor="color" className="block font-[300]">
              Color
            </label>
            <input
              type="text"
              id="color"
              {...register("color")}
              placeholder="e.g black"
              className="w-full pl-8 border border-[#B7B7B7] rounded-md p-1 outline-none focus:border-[#B7B7B7] bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            />
            <span className="absolute top-7 left-2">
              <Search color="#B7B7B7" />
            </span>
          </div>
        </div>
        <div>
          {/* search by clicking on the checkbox */}
          {/*  */}
          <div className="flex items-center justify-between  mt-[10%]">
            <div className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                id="black"
                {...register("black")}
                onChange={() => handleCheckboxChange("black")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="black" className="block text-[#2B2928]">
                Black
              </label>
            </div>
            <p className="flex items-center ">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>{" "}
              10 ads
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex items-center justify-between  mt-[3%]">
            <div className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                id="blue"
                {...register("blue")}
                onChange={() => handleCheckboxChange("blue")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="blue" className="block text-[#2B2928]">
                Blue
              </label>
            </div>
            <p className="flex items-center ">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>{" "}
              15 ads
            </p>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex items-center justify-between  mt-[3%]">
            <div className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                id="silver"
                {...register("silver")}
                onChange={() => handleCheckboxChange("silver")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="silver" className="block text-[#2B2928]">
                Silver
              </label>
            </div>
            <p className="flex items-center ">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>{" "}
              20 ads
            </p>
          </div>
          {/*  */}

          {/*  */}
          {/*  */}
          <div className="flex items-center justify-between  mt-[3%]">
            <div className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                id="white"
                {...register("white")}
                onChange={() => handleCheckboxChange("white")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="white" className="block text-[#2B2928]">
                White
              </label>
            </div>
            <p className="flex items-center ">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>{" "}
              30 ads
            </p>
          </div>
          {/*  */}
        </div>
        <div className="flex justify-between px-3 items-center mt-[10%]">
          <button
            className=" text-[14px] text-red-500 font-semibold underline"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default ColorSearch;
