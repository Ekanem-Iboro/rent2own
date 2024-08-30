import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import { Dot } from "lucide-react";
import { PriceFilter } from "@/api/types";

interface FilterSearchCarsProps {
  onFilterChange: (filters: PriceFilter) => void;
}

const SearchCarsByPrice: React.FC<FilterSearchCarsProps> = ({
  onFilterChange,
}) => {
  const { register, reset, getValues, setValue } = useForm({
    defaultValues: {
      priceMin: "",
      priceMax: "",
      searchAbove2M: false,
      between1Mand2M: false,
      between500Kand999K: false,
      lessthan500K: false,
    },
  });

  const handleApply = () => {
    const filters = getValues();
    onFilterChange(filters);
  };

  const handleClear = () => {
    reset();
    setValue("priceMin", "");
    setValue("priceMax", "");
    setValue("searchAbove2M", false); // Reset selected filter
    setValue("between1Mand2M", false);
    setValue("between500Kand999K", false);
    setValue("lessthan500K", false);
    onFilterChange({}); // Reset filters to default state
  };
  const handleCheckboxChange = (filter: keyof PriceFilter) => {
    // Uncheck all checkboxes
    setValue("searchAbove2M", false);
    setValue("between1Mand2M", false);
    setValue("between500Kand999K", false);
    setValue("lessthan500K", false);

    // Check the selected checkbox
    setValue(filter, true);
  };
  return (
    <Accordion defaultExpanded sx={{ boxShadow: "none", width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{ width: "100%", flexShrink: 0, fontWeight: 600 }}
          className="text-[#191919] text-[14px] leading-[16.8px] font-[500]"
        >
          Price (A$)
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="w-full flex space-x-4">
          {/* filter by inserting min and max value */}
          <div className="relative flex-1">
            <label htmlFor="priceMin" className="block font-[300]">
              Min value:
            </label>
            <input
              type="number"
              id="priceMin"
              {...register("priceMin")}
              placeholder="e.g 1,000"
              className="w-full pl-8 border border-[#B7B7B7] rounded-md p-1 outline-none focus:border-[#B7B7B7] bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            />
            <span className="absolute top-7 left-2">A$</span>
          </div>
          <div className="relative flex-1">
            <label htmlFor="priceMax" className="block font-[300]">
              Max value:
            </label>
            <input
              type="number"
              id="priceMax"
              {...register("priceMax")}
              placeholder="e.g 10,000"
              className="w-full pl-8 border border-[#B7B7B7] rounded-md p-1 outline-none focus:border-[#B7B7B7] bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            />
            <span className="absolute top-7 left-2">A$</span>
          </div>
        </div>
        <div>
          {/* search by clicking on the checkbox */}
          {/*  */}
          <div className="flex items-center justify-between  mt-[10%]">
            <div className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                id="searchAbove2M"
                {...register("searchAbove2M")}
                onChange={() => handleCheckboxChange("searchAbove2M")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="searchAbove2M" className="block text-[#2B2928]">
                Above 2M
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
                id="between1Mand2M"
                {...register("between1Mand2M")}
                onChange={() => handleCheckboxChange("between1Mand2M")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="between1Mand2M" className="block text-[#2B2928]">
                1M - 2M
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
                id="between500Kand999K"
                {...register("between500Kand999K")}
                onChange={() => handleCheckboxChange("between500Kand999K")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label
                htmlFor="between500Kand999K"
                className="block text-[#2B2928]"
              >
                500k - 999k
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
                id="lessthan500K"
                {...register("lessthan500K")}
                onChange={() => handleCheckboxChange("lessthan500K")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="lessthan500K" className="block text-[#2B2928]">
                Less than 500k
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
          <button
            className="text-primary-light text-[14px] font-semibold underline"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
export default SearchCarsByPrice;
