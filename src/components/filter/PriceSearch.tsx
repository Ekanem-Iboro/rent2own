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
      searchAbove50K: false,
      between10Kand50K: false,
      between1Kand30K: false,
      lessthan30K: false,
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
    setValue("searchAbove50K", false);
    setValue("between10Kand50K", false);
    setValue("between1Kand30K", false);
    setValue("lessthan30K", false);
    onFilterChange({}); // Reset filters to default state
  };

  const handleCheckboxChange = (filter: keyof PriceFilter) => {
    // Uncheck all checkboxes
    setValue("searchAbove50K", false);
    setValue("between10Kand50K", false);
    setValue("between1Kand30K", false);
    setValue("lessthan30K", false);

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
              placeholder="e.g 10,000"
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
              placeholder="e.g 50,000"
              className="w-full pl-8 border border-[#B7B7B7] rounded-md p-1 outline-none focus:border-[#B7B7B7] bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            />
            <span className="absolute top-7 left-2">A$</span>
          </div>
        </div>
        <div>
          {/* search by clicking on the checkbox */}
          <div className="flex items-center justify-between mt-[10%]">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="searchAbove50K"
                {...register("searchAbove50K")}
                onChange={() => handleCheckboxChange("searchAbove50K")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="searchAbove50K" className="block text-[#2B2928]">
                Above 50K
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
                id="between10Kand50K"
                {...register("between10Kand50K")}
                onChange={() => handleCheckboxChange("between10Kand50K")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label
                htmlFor="between10Kand50K"
                className="block text-[#2B2928]"
              >
                10k - 50k
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
                id="between1Kand30K"
                {...register("between1Kand30K")}
                onChange={() => handleCheckboxChange("between1Kand30K")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="between1Kand30K" className="block text-[#2B2928]">
                1k - 30k
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
                id="lessthan30K"
                {...register("lessthan30K")}
                onChange={() => handleCheckboxChange("lessthan30K")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="lessthan30K" className="block text-[#2B2928]">
                Less than 30k
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
