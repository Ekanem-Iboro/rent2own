import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const fadeIn = {
  hide: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={dropIn}
      onClick={onClose}
    >
      <motion.div
        className="lg:w-[35%] md:w-[50%] w-full bg-white h-auto rounded-lg shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={30} color="red" />
        </button>
        <h2 className="text-[2rem] font-bold my-8 text-center text-slate-800 ">
          Required Documents
        </h2>
        <p className=" text-[14px] leading-[17.4px] mb-4 text-[#A8A8A8]">
          Kindly scan all your document into 1 pdf not more than 5MB
        </p>
        {
          uploadRequirement.map((item, idx) => (
            <motion.div
              variants={fadeIn}
              initial="hide"
              animate="show"
              exit="hide"
              transition={{ duration: 0.2 * idx }}
              key={item.id}
              className="w-full bg-slate-200 p-4 mb-4 rounded-md"
            >
              <p className="text-[18px] text-slate-700 font-medium">
                {item?.requirement}
              </p>
            </motion.div>
          ))

          // Add your code here to render the required documents.
        }
        <Link to="/upload" onClick={() => {}}>
          <button className="bg-primary text-[#fff] font-[600] leading-[21.6px] text-[16px] py-3 px-10 mt-7  rounded-md  w-full">
            Continue to upload
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

const uploadRequirement = [
  {
    id: 1,
    requirement: " QLD license / international license and passport",
    type: "document",
  },
  { id: 2, requirement: " 4 x payment slip (1 months) ", type: "document" },
  { id: 3, requirement: "Bank statement (1 months)", type: "document" },
  {
    id: 4,
    requirement:
      "Current Proof of address- ( Utility Bills e.g - Electric Bill etc...)",
    type: "document",
  },
];
// const uploadRequirement = [
//   { id: 1, requirement: " Employment Status", type: "document" },
//   {
//     id: 2,
//     requirement:
//       "Proof of address- ( Utility Bills e.g - Electric Bill etc...)",
//     type: "document",
//   },
//   { id: 3, requirement: " Payslip Bank Statement", type: "document" },
//   { id: 4, requirement: " Current valid license", type: "document" },
//   { id: 5, requirement: "Insurance Policy", type: "document" },
// ];
