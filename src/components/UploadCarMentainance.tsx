import { useGetUserProfile } from "@/hooks/query";
import React, { useEffect, useState } from "react";
// import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import SpinnerOverlay from "./reuseable/OverlayLoader";
import { useRentCar, useUpdateKYCId, useUploadKYC } from "@/hooks/mutation";
import useCarStore from "@/store/ProductStore";
import { upLoadState } from "@/api/types";
import { useNavigate } from "react-router-dom";

const CarMentainanceCetificate = () => {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState<number>(0);
  const [reUpload, setReUpload] = useState<number>(0);

  const [preViewCertificate, setPreViewCertificate] = useState<string | null>(
    null
  );
  const { currentCar } = useCarStore();
  const { mutate: rentCarMutation, isPending } = useRentCar();
  const paymentStructure = Number(localStorage.getItem("payment_structure"));

  const [filePreview, setFilePreview] = useState<string | null>(null);
  const userId = Number(localStorage.getItem("user_id")); // Retrieve the user ID from local storage

  // Retrieve the user profile
  const {
    data: userProfile,
    refetch: reFetchProfile,
    isLoading: userProfileLoading,
  } = useGetUserProfile(userId);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const findKYCDoc = userProfile?.docs.filter((item: any) =>
    item.kyc_doc.startsWith("uploads/users_kyc/")
  );

  const getCLIDoc = findKYCDoc?.find(
    (item: any) => item.doc_type === "CIC" || null
  );

  useEffect(() => {
    if (getCLIDoc) {
      setFilePreview(getCLIDoc);
    }
  }, [getCLIDoc]);

  const {
    mutate: UploadKYCMutation,
    isPending: uploadkycPending,
    isSuccess: uploadkycSuccess,
  } = useUploadKYC();

  const { mutate: updateKYCMutation } = useUpdateKYCId();

  // Start custom progress simulation
  const startCustomProgress = () => {
    setIsUploading(0); // Reset progress

    const progressInterval = setInterval(() => {
      setIsUploading((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 20; // Increment progress by 5% every 100ms
        } else {
          clearInterval(progressInterval); // Stop incrementing once it reaches 95%
          return prevProgress;
        }
      });
    }, 100); // Simulate 100ms interval for progress
  };

  const handleFileChange = (file: File) => {
    startCustomProgress(); // Start the progress simulation
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Only PDF files are allowed.");
        return;
      }

      setFilePreview(file?.name);

      const fd = new FormData();
      fd.append("file", file);

      UploadKYCMutation(fd, {
        onSuccess: (data) => {
          const uploadedFilename = data?.filename;
          // Do something with the uploadedFilename
          // Stop progress simulation and set to 100% once upload is complete
          setIsUploading(100);
          updateKYCMutation(
            {
              user_id: userId, // Pass the user ID
              filename: uploadedFilename, // Pass the uploaded filename
              doc_type: "CIC", // Specify the document type
              kyc_order: reUpload,
            },
            {
              onSuccess: () => {
                // Handle success, such as updating the UI or showing a message
                reFetchProfile();
                //
                if (currentCar) {
                  const submissionData: upLoadState = {
                    car_id: currentCar.id,
                    // duration: currentCar.duration,
                    // total_price: currentCar.price,
                    // deposit: currentCar.deposit,
                    // weekly: currentCar.weekly,
                    payment_structure: paymentStructure,
                    user_id: userId,
                    // user_email: profile.email,
                  };

                  rentCarMutation(submissionData, {
                    onSuccess: (response) => {
                      setTimeout(() => {
                        navigate("/orders");
                      }, 1500);
                      // Destructure the response
                      if (response) {
                        // console.log(response);
                        // Send the entire response data to the userAgreement mutation
                        // window.open(response.payment_url, "_self");
                      }
                    },
                    //
                    onError: (error) => {
                      toast.error(
                        "Car is currently reserved, contact our support for more details"
                      );
                      return error;
                    },
                  });
                }
              },
            }
          );
        },
      });
    }
  };

  useEffect(() => {
    const filePath = `https://www.rent2ownauto.com.au/${getCLIDoc?.kyc_doc}`;
    setPreViewCertificate(filePath);
  }, [getCLIDoc?.kyc_doc]);

  const handlePreviewPdf = () => {
    if (preViewCertificate) {
      window.open(preViewCertificate, "_blank");
    }
  };

  const kycPendingStatus = userProfile?.doc?.status;

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent default to allow drop
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent default behavior (Prevent file from being opened)
    const selectedFile = event.dataTransfer.files?.[0];
    if (selectedFile) {
      handleFileChange(selectedFile); // Call handleFileChange with the dropped file
    }
  };
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0]; // Access the file from input
    if (selectedFile) {
      handleFileChange(selectedFile); // Handle the file
    }
  };

  return (
    <>
      {isPending && <SpinnerOverlay />}

      <div
        className={`${
          userProfileLoading ? "hidden" : ""
        } sm:w-[800px] w-full md:h-[300px] h-[284px] flex flex-col items-center justify-center gap-5 border-2 border-dashed rounded-[10px]  border-[${
          getCLIDoc?.status == "Approved" ? "#5FC381" : "#D6EEFF"
        }] mt-7 mb-[7rem]`}
      >
        {userProfileLoading && <SpinnerOverlay />}
        <div className="w-full">
          {filePreview ? (
            <PreviewSVG />
          ) : (
            <>
              <UploadComp
                // handleFileChange={handleFileChange}
                handleFileUpload={handleFileInputChange}
                handleDrop={handleDrop}
                handleDragOver={handleDragOver}
                isUploading={isUploading}
              />
            </>
          )}
          {uploadkycPending && isUploading > 0 && (
            <div className="w-full">
              <div className="w-full flex items-center justify-center">
                <span className="text-[16px] leading-[19.2px]  font-[700] text-gray-700 my-2">
                  {isUploading}%
                </span>
              </div>

              <div className="w-[80%]  mx-auto">
                <div className="h-2 bg-gray-200 rounded-[30px] overflow-hidden">
                  <div
                    className="h-full bg-[#016AB3] transition-all duration-500 delay-500 ease-in-out"
                    style={{ width: `${isUploading}%` }}
                  />
                </div>
              </div>
            </div>
          )}
          {uploadkycSuccess ||
            (filePreview && (
              <>
                <IfFileisLoaded
                  filePreview={getCLIDoc}
                  kycPendingStatus={kycPendingStatus}
                />
                {getCLIDoc?.status === "pending" ? (
                  <div className="flex items-center justify-center gap-9">
                    <p className="text-[14px] leading-[14.4px] text-[#ffffff] bg-[#f7d493] p-1.5 w-fit rounded-3xl mb-1 cursor-pointer">
                      Pending
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-9">
                    <p className="text-[14px] leading-[14.4px] text-[#027A48] bg-[#ECFDF3]  p-1.5 w-fit rounded-3xl mb-1 cursor-pointer">
                      Approved
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-center gap-9">
                  {/* {kycPendingStatus !== "pending" && ( */}
                  <p
                    className="text-[14px] leading-[14.4px] text-[#A8A8A8] my-2 cursor-pointer"
                    onClick={handlePreviewPdf}
                  >
                    Click to Preview{" "}
                  </p>
                  {/* )} */}
                  {/* <label htmlFor="kyc-input"> */}
                  <div
                    className="text-[14px] leading-[14.4px] text-[#016AB3] my-2 cursor-pointer"
                    onClick={() => {
                      setFilePreview(null);
                      setIsUploading(0);
                      setReUpload(1);
                    }}
                  >
                    {/* <input
                    type="file"
                    id="kyc-input"
                    name="file"
                    className="hidden"
                    accept="application/pdf" // Only allow PDF files
                    onChange={handleFileChange}
                  /> */}
                    Upload Again{" "}
                  </div>{" "}
                  {/* </label> */}
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default CarMentainanceCetificate;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const IfFileisLoaded = ({ filePreview }: any) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-[14px] font-[600] leading-[16.8px] text-[#424242] w-full mt-2 text-center mb-2">
        {filePreview && <p>{filePreview?.doc_type}</p>}
      </p>
      {filePreview?.status !== "pending" && (
        <div className="w-[50px] h-[50px] bg-green-100 flex justify-center items-center rounded-full mb-4">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 31.125C25.2487 31.125 31.125 25.2487 31.125 18C31.125 10.7513 25.2487 4.875 18 4.875C10.7513 4.875 4.875 10.7513 4.875 18C4.875 25.2487 10.7513 31.125 18 31.125ZM23.36 16.1588C23.9539 15.6148 23.9944 14.6923 23.4505 14.0984C22.9065 13.5044 21.984 13.4639 21.39 14.0079L16.0058 18.9391L14.61 17.6608C14.016 17.1168 13.0935 17.1573 12.5496 17.7513C12.0056 18.3452 12.0461 19.2677 12.64 19.8117L15.0208 21.9921C15.5782 22.5026 16.4333 22.5026 16.9907 21.9921L23.36 16.1588Z"
              fill="#0F973D"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

const PreviewSVG = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width="46"
        height="45"
        viewBox="0 0 46 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_529_7882)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.92994 0.0996094C5.04852 0.0996094 4.33398 0.814143 4.33398 1.69556V43.3037C4.33398 44.1851 5.04852 44.8996 5.92994 44.8996H40.0714C40.9528 44.8996 41.6673 44.1851 41.6673 43.3037V7.56493L34.202 0.0996094H5.92994Z"
            fill="#E4E7EC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.6665 7.56492V7.56628H34.2012V0.0996094L41.6665 7.56492Z"
            fill="#98A2B3"
          />
          <rect
            x="2.46289"
            y="18.7666"
            width="41.0667"
            height="18.6667"
            rx="1.59595"
            fill="#014676"
          />
          <path
            d="M11.2871 32.7426V23.457H14.7692C15.4825 23.457 16.081 23.59 16.5646 23.856C17.0513 24.122 17.4185 24.4878 17.6664 24.9532C17.9173 25.4157 18.0427 25.9416 18.0427 26.5311C18.0427 27.1265 17.9173 27.6555 17.6664 28.1179C17.4155 28.5804 17.0452 28.9446 16.5556 29.2106C16.0659 29.4736 15.4629 29.6051 14.7465 29.6051H12.4387V28.2222H14.5198C14.9369 28.2222 15.2785 28.1497 15.5445 28.0046C15.8105 27.8595 16.007 27.66 16.1339 27.4061C16.2639 27.1522 16.3289 26.8605 16.3289 26.5311C16.3289 26.2016 16.2639 25.9114 16.1339 25.6605C16.007 25.4097 15.809 25.2147 15.54 25.0757C15.274 24.9336 14.9309 24.8626 14.5108 24.8626H12.9692V32.7426H11.2871Z"
            fill="white"
          />
          <path
            d="M22.6503 32.7426H19.5038V23.457H22.7138C23.6357 23.457 24.4277 23.6429 25.0896 24.0147C25.7546 24.3835 26.2654 24.9139 26.6221 25.6061C26.9788 26.2983 27.1571 27.1265 27.1571 28.0907C27.1571 29.058 26.9773 29.8892 26.6176 30.5844C26.2609 31.2796 25.7455 31.8131 25.0715 32.1849C24.4004 32.5567 23.5934 32.7426 22.6503 32.7426ZM21.1859 31.2872H22.5687C23.2156 31.2872 23.7551 31.1693 24.1874 30.9335C24.6196 30.6947 24.9445 30.3396 25.1622 29.868C25.3798 29.3935 25.4886 28.8011 25.4886 28.0907C25.4886 27.3804 25.3798 26.791 25.1622 26.3225C24.9445 25.851 24.6226 25.4988 24.1964 25.2661C23.7733 25.0303 23.2473 24.9124 22.6186 24.9124H21.1859V31.2872Z"
            fill="white"
          />
          <path
            d="M28.7553 32.7426V23.457H34.7039V24.8671H30.4374V27.388H34.2958V28.798H30.4374V32.7426H28.7553Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_529_7882">
            <rect
              width="44.8"
              height="44.8"
              fill="white"
              transform="translate(0.599609 0.0996094)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const UploadComp = ({
  isUploading,
  // handleFileChange,
  handleFileUpload,
  handleDrop,
  handleDragOver,
}: any) => {
  return (
    <div
      className="  rounded-lg p-6 flex flex-col items-center justify-center w-full   "
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[50px] h-[50px] bg-[#D0D5DD] flex justify-center items-center rounded-full mb-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0013 11.083C7.0013 7.53918 9.87414 4.66634 13.418 4.66634C16.5571 4.66634 19.172 6.92172 19.7262 9.9008C19.8039 10.3186 20.1026 10.661 20.5059 10.7948C22.8285 11.5651 24.5013 13.7552 24.5013 16.333C24.5013 19.5547 21.8896 22.1663 18.668 22.1663C18.0236 22.1663 17.5013 22.6887 17.5013 23.333C17.5013 23.9773 18.0236 24.4997 18.668 24.4997C23.1783 24.4997 26.8346 20.8433 26.8346 16.333C26.8346 12.9585 24.7886 10.0645 21.872 8.81918C20.874 5.08401 17.4683 2.33301 13.418 2.33301C8.58548 2.33301 4.66797 6.25052 4.66797 11.083C4.66797 11.2 4.67027 11.3165 4.67484 11.4325C2.58019 12.641 1.16797 14.9043 1.16797 17.4997C1.16797 21.3657 4.30198 24.4997 8.16797 24.4997C8.8123 24.4997 9.33464 23.9773 9.33464 23.333C9.33464 22.6887 8.8123 22.1663 8.16797 22.1663C5.59064 22.1663 3.5013 20.077 3.5013 17.4997C3.5013 15.5661 4.67751 13.9046 6.35806 13.1966C6.84437 12.9918 7.13263 12.486 7.06103 11.9632C7.0217 11.676 7.0013 11.3822 7.0013 11.083Z"
                fill="#475367"
              />
              <path
                d="M13.2262 16.6277C13.6682 16.2348 14.3344 16.2348 14.7764 16.6277L16.5264 18.1833C17.008 18.6113 17.0514 19.3487 16.6233 19.8303C16.2488 20.2516 15.6376 20.3376 15.168 20.0659V25.6663C15.168 26.3107 14.6456 26.833 14.0013 26.833C13.357 26.833 12.8346 26.3107 12.8346 25.6663V20.0659C12.3651 20.3376 11.7538 20.2516 11.3793 19.8303C10.9513 19.3487 10.9946 18.6113 11.4762 18.1833L13.2262 16.6277Z"
                fill="#475367"
              />
            </svg>
          </div>
          <label
            htmlFor="file-upload"
            className="text-[14px] font-[400] leading-[16.8px] text-gray-600 mb-2"
          >
            <div className={`text-center ${isUploading > 0 ? "hidden" : ""}`}>
              <span className="font-[600] text-[#016AB3] cursor-pointer">
                Click to Upload{" "}
              </span>{" "}
              or drag and drop
              <p className=" text-[12px] leading-[14.4px] text-[#A8A8A8] my-2">
                Upload your Documents
              </p>
              {/* <p className=" text-[12px] leading-[14.4px] text-[#A8A8A8] my-2">
                Upload your (Comprehensive Insurance Certificates)
              </p> */}
              {/* <p className=" text-[12px] leading-[14.4px] text-[#A8A8A8] my-2">
                Required documents ( Employment Status, Payslip Bank Statement,
                Current valid license, Proof of address- ( Utility Bills e.g -
                Electric Bill etc...))
              </p> */}
              <p className=" text-[12px] leading-[14.4px] text-[#A8A8A8]">
                Kindly scan all your document into 1 pdf not more than 5MB
              </p>
            </div>
          </label>

          <input
            id="file-upload"
            type="file"
            accept="application/pdf"
            className="hidden"
            multiple
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
      </div>
      <div className="mt-6 w-full  flex items-center">
        <hr className="h-[2px] bg-[#F0F2F5] w-full" />
        <span className="mx-4 font-[500] text-[12px] leading-[14.4px] text-[#A8A8A8]">
          OR
        </span>
        <hr className="h-[12x] bg-[#F0F2F5]  w-full" />
      </div>

      <label
        htmlFor="file-upload"
        className="mt-6  bg-[#016AB3] text-[#FFFFFF] rounded-[6px] text-[14px] font-[400] leading-[16.8px] p-2 w-fit cursor-pointer "
      >
        {" "}
        Browse Files
      </label>
    </div>
  );
};
