import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { ChevronLeft } from "lucide-react";
import KYCAfterReg from "@/components/KYCAterRegister";
import { useEffect, useState } from "react";
// import UploadCarMentainance from "@/components/UploadCarMentainance";

// Assuming you're using react-hot-toast

const UploadKYC = () => {
  const [uploaded, setUploaded] = useState<string | null>("");

  useEffect(() => {
    const uploadedtr = localStorage.getItem("uploaded");
    setUploaded(uploadedtr);
  }, [uploaded]); // Add 'uploaded' as a dependency

  useEffect(() => {
    if (uploaded === "true") {
      // Set localStorage to true after successful upload
      localStorage.setItem("uploaded", "true");
    }
  }, [uploaded]);
  console.log(uploaded);
  return (
    <div className="bg-gray-50 w-full px-4 min-h-screen">
      <div className="w-full rounded-[18px] flex flex-col lg:px-[20%] md:px-[9%] px-3 md:pt-[2%] pt-[5%]">
        <Link to="/" className="md:block hidden mt-[3rem]">
          <ChevronLeft
            size={30}
            className="text-[#655F5F] border border-[#655F5F] w-[30px] h-[30px] rounded-lg"
          />
        </Link>
        <div className="lg:w-[40%] md:w-[70%] w-full mx-auto">
          <div className="w-full flex justify-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="My Balance Logo"
                className="cursor-pointer w-[150px] h-[80px]"
              />
            </Link>
          </div>
          <h1 className="md:text-[30px] text-[24px] font-[700] leading-[36px] text-[#0A0B0A] w-full text-center">
            Upload Driver’s License
          </h1>
          <p className="text-[#0A0B0A] text-[14px] font-[500] w-full text-center leading-[16.8px] mt-2 mb-10">
            We want to be sure it’s you.
          </p>
        </div>
        <div className="lg:w-[50%] md:w-[70%] w-full m-auto">
          <KYCAfterReg />
          {uploaded == "false" && (
            <Link
              to={"/sign-in"}
              className="flex items-center justify-center border border-[#D1D1D1] font-[600] text-[18px] leading-[21.6px] text-[#191919] rounded-xl w-fit py-2 px-5 mx-auto mt-4"
            >
              Skip
            </Link>
          )}
          {uploaded == "true" && (
            <Link
              to={"/sign-in"}
              className="flex items-center justify-center border bg-primary border-[#D1D1D1] font-[600] text-[18px] leading-[21.6px] text-[#FAFAFA] rounded-xl w-full py-2 px-5 mx-auto mt-4"
            >
              Continue
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadKYC;
