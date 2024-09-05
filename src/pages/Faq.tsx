import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import line from "../assets/images/lines.png";
import NavBar from "@/components/reuseable/NavBar";

export default function Faq() {
  // State to manage which accordion is currently expanded
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <NavBar />
      <section
        className="bg-primary w-full md:flex flex-col block justify-center p-[8%] items-center md:relative my-[13%]"
        id="faq"
      >
        <h1 className="w-full text-center md:text-[36px] text-[24px] text-[#ffffff] leading-[43.2px] font-[600] mb-8">
          Frequently Asked Questions
        </h1>
        <div className="lg:w-[50%] md:w-[60%] w-full">
          {faqData?.map((faqs, index) => (
            <Accordion
              key={faqs.id}
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
                aria-controls={`panel${faqs.id}-content`}
                id={`panel${faqs.id}-header`}
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
                {faqs.question}
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
                {faqs.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <img
          src={line}
          alt="lines"
          className=" absolute -bottom-[14%] right-[10%] md:block hidden"
        />
        <img
          src={line}
          alt="lines"
          className=" absolute -top-[14%] left-[10%] md:block hidden"
        />
      </section>
    </div>
  );
}

//FAQ
const faqData = [
  {
    id: 1,
    question: "What is rent-to-own?",
    answer:
      "Rent-to-own is a type of agreement where you rent a car with the option to purchase it at the end of the lease period. This allows you to try out the vehicle before committing to buying it.",
  },
  {
    id: 2,
    question: "What are the benefits of rent-to-own?",
    answer:
      "Benefits of rent-to-own include flexible payment terms, the ability to build credit, and the option to purchase the car at the end of the lease period.",
  },
  {
    id: 3,
    question: "Are there any downsides to rent-to-own?",
    answer:
      "Potential downsides include higher overall costs compared to buying outright, the possibility of losing money if you decide not to purchase the car, and being responsible for maintenance and repairs.",
  },
  {
    id: 4,
    question: "What should I consider before choosing rent-to-own?",
    answer:
      "Consider the total cost over time, the terms of the agreement, including any penalties for early termination, and your ability to maintain the vehicle in good condition.",
  },
  {
    id: 5,
    question: "What is a trade-in?",
    answer:
      "A trade-in involves exchanging your current vehicle for credit towards the purchase of a new one. The trade-in value is subtracted from the price of the new car.",
  },
  {
    id: 6,
    question: "How is the trade-in value determined?",
    answer:
      "The trade-in value is typically determined by the car's condition, age, mileage, and market demand. Dealerships will appraise the vehicle to offer a trade-in value.",
  },
  {
    id: 7,
    question: "Can I negotiate the trade-in value?",
    answer:
      "Yes, you can negotiate the trade-in value. It's a good idea to research your car's value beforehand and be prepared to negotiate with the dealership.",
  },
  {
    id: 8,
    question: "What are the benefits of trading in my car?",
    answer:
      "Trading in your car can simplify the buying process, reduce the amount you need to finance for a new car, and potentially offer tax savings in some states.",
  },
  {
    id: 9,
    question: "Are there any downsides to trading in my car?",
    answer:
      "Potential downsides include receiving less money than selling the car privately, the possibility of the dealership undervaluing your car, and the lack of flexibility in choosing the buyer.",
  },
  {
    id: 10,
    question: "What documents do I need for a trade-in?",
    answer:
      "You'll typically need the car's title, registration, any loan payoff information, a valid ID, and the car's service records to complete a trade-in.",
  },
];
