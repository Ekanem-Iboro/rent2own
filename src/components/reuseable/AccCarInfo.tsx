import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import useCarStore from "@/store/ProductStore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

interface CarInformationProps {
  title: string; // The title must be a string
  information: string | null; // The information can be a string or null
}
const AccCarinfo = ({ title, information }: CarInformationProps) => {
  // const { currentCar } = useCarStore();

  return (
    <Accordion sx={{ boxShadow: "none" }} className="md:mt-[1%]">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{ width: "100%", flexShrink: 0, fontWeight: 600 }}
          className="text-[#2D2D2D] text-[16px] leading-[19.2px] font-[500]"
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{information}</AccordionDetails>
    </Accordion>
  );
};

export default AccCarinfo;
