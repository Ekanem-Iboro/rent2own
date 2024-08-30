import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import { Dot } from "lucide-react";
import { YearFilters } from "@/api/types";

interface FilterSearchCarsProps {
  onFilterChange: (filters: YearFilters) => void;
}

const SearchCarsByYear: React.FC<FilterSearchCarsProps> = ({
  onFilterChange,
}) => {
  const { register, reset, getValues, setValue } = useForm({
    defaultValues: {
      minYear: "",
      maxYear: "",
      from2020to2024: false,
      from2015to2019: false,
      from2010to2014: false,
      from2005to2015: false,
    },
  });

  const handleApply = () => {
    const filters = getValues();
    onFilterChange(filters);
  };

  const handleClear = () => {
    reset();
    setValue("minYear", "");
    setValue("maxYear", "");
    setValue("from2020to2024", false);
    setValue("from2015to2019", false);
    setValue("from2010to2014", false);
    setValue("from2005to2015", false);
    onFilterChange({}); // Reset filters to default state
  };

  const handleCheckboxChange = (filter: keyof YearFilters) => {
    // Uncheck all checkboxes
    setValue("from2020to2024", false);
    setValue("from2015to2019", false);
    setValue("from2010to2014", false);
    setValue("from2005to2015", false);

    // Check the selected checkbox
    setValue(filter, true);
  };

  return (
    <Accordion sx={{ boxShadow: "none" }} className="md:mt-[3%]">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{ width: "100%", flexShrink: 0, fontWeight: 600 }}
          className="text-[#191919] text-[14px] leading-[16.8px] font-[500]"
        >
          Year of manufacture
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="w-full flex space-x-4">
          <div className="relative flex-1">
            <label htmlFor="minYear" className="block font-[300]">
              Min value:
            </label>
            <input
              type="number"
              id="minYear"
              {...register("minYear")}
              placeholder="e.g 2000"
              className="w-full px-2 border border-[#B7B7B7] rounded-md p-1 outline-none focus:border-[#B7B7B7] bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            />
          </div>
          <div className="relative flex-1">
            <label htmlFor="maxYear" className="block font-[300]">
              Max value:
            </label>
            <input
              type="number"
              id="maxYear"
              {...register("maxYear")}
              placeholder="e.g 2012"
              className="w-full px-2 border border-[#B7B7B7] rounded-md p-1 outline-none focus:border-[#B7B7B7] bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="from2020to2024"
                {...register("from2020to2024")}
                onChange={() => handleCheckboxChange("from2020to2024")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="from2020to2024" className="block text-[#2B2928]">
                2020 - 2024
              </label>
            </div>
            <p className="flex items-center">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>{" "}
              10 ads
            </p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="from2015to2019"
                {...register("from2015to2019")}
                onChange={() => handleCheckboxChange("from2015to2019")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="from2015to2019" className="block text-[#2B2928]">
                2015 - 2019
              </label>
            </div>
            <p className="flex items-center">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>{" "}
              15 ads
            </p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="from2010to2014"
                {...register("from2010to2014")}
                onChange={() => handleCheckboxChange("from2010to2014")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="from2010to2014" className="block text-[#2B2928]">
                2010 - 2014
              </label>
            </div>
            <p className="flex items-center">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>{" "}
              20 ads
            </p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="from2005to2015"
                {...register("from2005to2015")}
                onChange={() => handleCheckboxChange("from2005to2015")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="from2005to2015" className="block text-[#2B2928]">
                2005 - 2015
              </label>
            </div>
            <p className="flex items-center">
              <span className="text-[16px]">
                <Dot size={35} />
              </span>{" "}
              30 ads
            </p>
          </div>
        </div>
        <div className="flex justify-between px-3 items-center mt-6">
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

export default SearchCarsByYear;
