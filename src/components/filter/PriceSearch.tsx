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
      above500: false,
      between250and500: false,
      between120and250: false,
      lessthan120: false,
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
    setValue("above500", false);
    setValue("between250and500", false);
    setValue("between120and250", false);
    setValue("lessthan120", false);
    onFilterChange({}); // Reset filters to default state
  };

  const handleCheckboxChange = (filter: keyof PriceFilter) => {
    // Uncheck all checkboxes
    setValue("above500", false);
    setValue("between250and500", false);
    setValue("between120and250", false);
    setValue("lessthan120", false);

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
          {/* Filter by inserting min and max value */}
          <div className="relative flex-1">
            <label htmlFor="priceMin" className="block font-[300]">
              Min value:
            </label>
            <input
              type="number"
              id="priceMin"
              {...register("priceMin")}
              placeholder="e.g 500"
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
              placeholder="e.g 100"
              className="w-full pl-8 border border-[#B7B7B7] rounded-md p-1 outline-none focus:border-[#B7B7B7] bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            />
            <span className="absolute top-7 left-2">A$</span>
          </div>
        </div>

        {/* Search by clicking on the checkbox */}
        <div>
          <div className="flex items-center justify-between mt-[10%]">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="above500"
                {...register("above500")}
                onChange={() => handleCheckboxChange("above500")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="above500" className="block text-[#2B2928]">
                Above 500
              </label>
            </div>
            <p className="flex items-center">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>
              10 ads
            </p>
          </div>
          <div className="flex items-center justify-between mt-[3%]">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="between250and500"
                {...register("between250and500")}
                onChange={() => handleCheckboxChange("between250and500")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label
                htmlFor="between250and500"
                className="block text-[#2B2928]"
              >
                250 - 500
              </label>
            </div>
            <p className="flex items-center">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>
              15 ads
            </p>
          </div>
          <div className="flex items-center justify-between mt-[3%]">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="between120and250"
                {...register("between120and250")}
                onChange={() => handleCheckboxChange("between120and250")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label
                htmlFor="between120and250"
                className="block text-[#2B2928]"
              >
                120 - 250
              </label>
            </div>
            <p className="flex items-center">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>
              20 ads
            </p>
          </div>
          <div className="flex items-center justify-between mt-[3%]">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="lessthan120"
                {...register("lessthan120")}
                onChange={() => handleCheckboxChange("lessthan120")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="lessthan120" className="block text-[#2B2928]">
                Less than 120
              </label>
            </div>
            <p className="flex items-center">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>
              30 ads
            </p>
          </div>
        </div>

        <div className="flex justify-between px-3 items-center mt-[10%]">
          <button
            className="text-[14px] text-red-500 font-semibold underline"
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
