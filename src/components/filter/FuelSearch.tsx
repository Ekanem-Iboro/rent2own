import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useForm } from "react-hook-form";
import { Dot } from "lucide-react";
import { FuelFilters } from "@/api/types";

interface FilterSearchCarsProps {
  onFilterChange: (filters: FuelFilters) => void;
}

const FuelSearch: React.FC<FilterSearchCarsProps> = ({ onFilterChange }) => {
  const { register, reset, watch, setValue } = useForm({
    defaultValues: {
      petrol: false,
      hybrid: false,
      electric: false,
      diesel: false,
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

    setValue("petrol", false); // Reset selected filter
    setValue("hybrid", false);
    setValue("electric", false);
    setValue("diesel", false);
    onFilterChange({}); // Reset filters to default state
  };
  const handleCheckboxChange = (filter: keyof FuelFilters) => {
    // Uncheck all checkboxes
    setValue("petrol", false);
    setValue("hybrid", false);
    setValue("electric", false);
    setValue("diesel", false);

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
          Fuel
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {/* search by clicking on the checkbox */}
          {/*  */}
          <div className="flex items-center justify-between  mt-[3%]">
            <div className="flex items-center space-x-2 ">
              <input
                type="checkbox"
                id="petrol"
                {...register("petrol")}
                onChange={() => handleCheckboxChange("petrol")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="petrol" className="block text-[#2B2928]">
                Petrol
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
                id="hybrid"
                {...register("hybrid")}
                onChange={() => handleCheckboxChange("hybrid")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="hybrid" className="block text-[#2B2928]">
                Hybrid
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
                id="electric"
                {...register("electric")}
                onChange={() => handleCheckboxChange("electric")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="electric" className="block text-[#2B2928]">
                Electric
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
                id="diesel"
                {...register("diesel")}
                onChange={() => handleCheckboxChange("diesel")}
                className="h-[20px] w-[20px] rounded-[25px] border-1 font text-[#B7B7B7] border-[#B7B7B7] focus:outline-none focus:border-[#B7B7B7]"
              />
              <label htmlFor="diesel" className="block text-[#2B2928]">
                Diesel
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

export default FuelSearch;
