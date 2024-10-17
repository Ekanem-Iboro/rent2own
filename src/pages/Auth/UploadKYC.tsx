import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { ChevronLeft } from "lucide-react";
import KYCAfterReg from "@/components/KYCAterRegister"; // Ensure the path is correct
import { useState } from "react";
import axios from "axios"; // Ensure axios is installed
import { toast } from "react-toastify"; // Ensure react-toastify is installed
import { useGetUserProfile } from "@/hooks/query";

const UploadKYC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<number>(0); // Upload progress
  const [uploaded, setUploaded] = useState<string>("false");
  const [reUpload, setReUpload] = useState<number>(0);

  const userId = localStorage.getItem("user_id"); // Assuming you're getting the userId from localStorage

  const { refetch: reFetchProfile } = useGetUserProfile(Number(userId));
  const handleUpload = async (file: File) => {
    const uploadKYCURL = "https://www.rent2ownauto.com.au/api/update_kyc.php";
    const updateKYCIdURL =
      "https://www.rent2ownauto.com.au/api/update_kyc_id.php";

    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Only PDF files are allowed.");
        return;
      }
      setUploaded("false");

      const fd = new FormData();
      fd.append("file", file);

      axios
        .post(uploadKYCURL, fd, {
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            if (total) {
              const progress = Math.round((loaded / total) * 100);
              setIsUploading(progress);
            }
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          const uploadedFilename = res.data.filename;

          setUploaded("true");

          axios
            .post(updateKYCIdURL, {
              user_id: userId,
              filename: uploadedFilename,
              doc_type: "Drivers License",
              kyc_order: reUpload,
            })
            .then(() => {
              toast.success("KYC document uploaded successfully!");
              reFetchProfile();
            })
            .catch((error) => {
              toast.error(
                error.response?.data.message || "Error updating KYC."
              );
            });

          setIsUploading(0);
        })
        .catch(() => {
          toast.error("Error uploading profile picture.");
          setIsUploading(0);
        });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      handleUpload(selectedFile);
    }
  };
  // const handleClearUpload = () => {
  //   setFile(null);
  //   setIsUploading(0);
  // };
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
          <KYCAfterReg
            file={file}
            isUploading={isUploading}
            uploaded={uploaded}
            handleFileChange={handleFileChange}
            handleUpload={handleUpload}
            setFile={setFile}
            setIsUploading={setIsUploading}
            setUploaded={setUploaded}
            setReUpload={setReUpload}
          />
          {uploaded === "false" && (
            <Link
              to={"/sign-in"}
              className="flex items-center justify-center border border-[#D1D1D1] font-[600] text-[18px] leading-[21.6px] text-[#191919] rounded-xl w-fit py-2 px-5 mx-auto mt-4"
            >
              Skip
            </Link>
          )}
          {uploaded === "true" && (
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
