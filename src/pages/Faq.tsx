import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import line from "../assets/images/lines.png";
import NavBar from "@/components/reuseable/NavBar";
import { BreadcrumbComp } from "@/components/reuseable/BreadCrumbs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useGetFaq } from "@/hooks/query";
// import { IFaq } from "@/api/types";

export default function Faq() {
  // State to manage which accordion is currently expanded
  const [expanded, setExpanded] = useState<number | false>(0);

  const { data: faqData } = useGetFaq();

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <NavBar />
      <div className="px-5">
        <header className="md:bg-[url('assets/images/carbg.jpg')] bg-[url('assets/images/mobilecarbg.jpg')] bg-no-repeat bg-cover w-full h-[550px] flex flex-col items-center justify-center mb-[7rem]">
          <p className="md:text-[60px] text-[24px] md:leading-[72px] leading-[28.8px] font-[600] text-[#FFFFFF]">
            Frequently Asked Questions
          </p>
          <BreadcrumbComp
            item="faq"
            color="#ffffff"
            path="/"
            sepCol="#ffffff"
          />
        </header>
      </div>
      <section
        className="bg-primary w-full md:flex flex-col block justify-center p-[8%] items-center relative lg:my-[15%] md:my-[20%] my-[30%] top-"
        id="faq"
      >
        <h1 className="w-full text-center md:text-[36px] text-[24px] text-[#ffffff] leading-[43.2px] font-[600] mb-8 relative z-50">
          Frequently Asked Questions
        </h1>
        <div className="lg:w-[50%] md:w-[60%] w-full relative z-50">
          {faqData?.map(
            (
              faqs: any, // eslint-disable-line @typescript-eslint/no-explicit-any
              index: number
            ) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  boxShadow: "none",
                  backgroundColor: "#016AB3",
                  "&:not(:last-child)": {
                    borderBottom: "1px solid white",
                  },
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "white",
                        marginBottom: "30px",
                      }}
                    />
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
                    color: "white",
                    paddingLeft: "0",
                    paddingTop: "30px",
                    "& .MuiAccordionSummary-content": {
                      margin: "0",
                      marginBottom: "30px",
                    },
                  }}
                  className="text-[18px] font-[500] leading-[21.8px]"
                >
                  {faqs.faq_title}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#016AB3",
                    color: "white",
                    paddingLeft: "0",
                    marginTop: "10px",
                    paddingRight: "40px",
                  }}
                  className="text-[16px] font-[400] leading-[17.8px]"
                >
                  {faqs.faq_content}
                </AccordionDetails>
              </Accordion>
            )
          )}
        </div>
        <img
          src={line}
          alt="lines"
          className=" absolute md:-bottom-[14%] lg:right-[10%] md:right-[6%] md:w-auto w-[300px] -bottom-[6.5%]"
        />
        <img
          src={line}
          alt="lines"
          className=" absolute md:-top-[12%] lg:left-[10%] md:left-[6%]  md:w-auto w-[300px] -top-[6.5%]"
        />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

//FAQ
