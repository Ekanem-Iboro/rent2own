import { Trash2 } from "lucide-react";
import React from "react";

// Define the interface for the KYCAfterReg props
interface KYCAfterRegProps {
  file: File | null;
  isUploading: number;
  setReUpload: React.Dispatch<React.SetStateAction<number>>;
  uploaded: string;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpload: (file: File) => void;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setIsUploading: React.Dispatch<React.SetStateAction<number>>;
  setUploaded: React.Dispatch<React.SetStateAction<string>>;
}

const KYCAfterReg: React.FC<KYCAfterRegProps> = ({
  file,
  isUploading,
  uploaded,
  handleFileChange,
  handleUpload,
  setFile,
  setIsUploading,
  setUploaded,
  setReUpload,
}) => {
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      handleUpload(selectedFile);
    }
  };

  const handleClearUpload = () => {
    setFile(null);
    setIsUploading(0);
    setReUpload(1);
    setUploaded("false");
  };

  return (
    <div
      className={`${
        uploaded === "true" ? "border-[#5FC381]" : "border-gray-300"
      } border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center w-full min-h-64 bg-[#FFFFFF] mb-[15%]`}
    >
      {uploaded === "false" && isUploading > 0 && (
        <UploadLoading uploadProgress={isUploading} />
      )}

      {uploaded === "true" && file && (
        <UploadSuccess handleClearUpload={handleClearUpload} file={file!} />
      )}

      {!file && uploaded === "false" && (
        <UploadFile
          handleFileChange={handleFileChange}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      )}
    </div>
  );
};
export default KYCAfterReg;

interface UploadSuccessProps {
  handleClearUpload: () => void;
  file: File;
}

function UploadSuccess({ handleClearUpload, file }: UploadSuccessProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-[50px] h-[50px] bg-green-100 flex justify-center items-center rounded-full mb-4">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 31.125C25.2487 31.125 31.125 25.2487 31.125 18C31.125 10.7513 25.2487 4.875 18 4.875C10.7513 4.875 4.875 10.7513 4.875 18C4.875 25.2487 10.7513 31.125 18 31.125ZM23.36 16.1588C23.9539 15.6148 23.9944 14.6923 23.4505 14.0984C22.9065 13.5044 21.984 13.4639 21.39 14.0079L16.0058 18.9391L14.61 17.6608C14.016 17.1168 13.0935 17.1573 12.5496 17.7513C12.0056 18.3452 12.0461 19.2677 12.64 19.8117L15.0208 21.9921C15.5782 22.5026 16.4333 22.5026 16.9907 21.9921L23.36 16.1588Z"
            fill="#0F973D"
          />
        </svg>
      </div>
      <p className="text-[#1D2739] text-[16px] leading-[19.2px] font-[600] mb-2">
        Uploading Complete
      </p>
      {file && <p className="text-sm text-gray-700">{file.name}</p>}
      <button
        onClick={handleClearUpload}
        className="mt-4 text-gray-500 text-sm underline flex items-center gap-2"
      >
        <Trash2 />
        Clear Upload
      </button>
    </div>
  );
}

const UploadLoading = ({ uploadProgress }: { uploadProgress: number }) => {
  return (
    <div className="rounded-lg p-6 flex flex-col items-center justify-center w-full bg-[#FFFFFF]">
      <div className="flex flex-col items-center text-center">
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_663_4069)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.93189 0.599609C5.05047 0.599609 4.33594 1.31414 4.33594 2.19556V43.8037C4.33594 44.6851 5.05047 45.3996 5.93189 45.3996H40.0733C40.9547 45.3996 41.6693 44.6851 41.6693 43.8037V8.06493L34.204 0.599609H5.93189Z"
              fill="#E4E7EC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.6684 8.06492V8.06628H34.2031V0.599609L41.6684 8.06492Z"
              fill="#98A2B3"
            />
            <rect
              x="2.46484"
              y="19.2666"
              width="41.0667"
              height="18.6667"
              rx="1.59595"
              fill="#014676"
            />
            <path
              d="M11.2891 33.2426V23.957H14.7711C15.4845 23.957 16.083 24.09 16.5666 24.356C17.0532 24.622 17.4205 24.9878 17.6683 25.4532C17.9192 25.9157 18.0447 26.4416 18.0447 27.0311C18.0447 27.6265 17.9192 28.1555 17.6683 28.6179C17.4175 29.0804 17.0472 29.4446 16.5575 29.7106C16.0679 29.9736 15.4648 30.1051 14.7485 30.1051H12.4407V28.7222H14.5218C14.9389 28.7222 15.2805 28.6497 15.5464 28.5046C15.8124 28.3595 16.0089 28.16 16.1359 27.9061C16.2658 27.6522 16.3308 27.3605 16.3308 27.0311C16.3308 26.7016 16.2658 26.4114 16.1359 26.1605C16.0089 25.9097 15.8109 25.7147 15.5419 25.5757C15.2759 25.4336 14.9329 25.3626 14.5127 25.3626H12.9712V33.2426H11.2891Z"
              fill="white"
            />
            <path
              d="M22.6523 33.2426H19.5057V23.957H22.7158C23.6377 23.957 24.4296 24.1429 25.0916 24.5147C25.7565 24.8835 26.2674 25.4139 26.624 26.1061C26.9807 26.7983 27.1591 27.6265 27.1591 28.5907C27.1591 29.558 26.9792 30.3892 26.6195 31.0844C26.2628 31.7796 25.7475 32.3131 25.0734 32.6849C24.4024 33.0567 23.5954 33.2426 22.6523 33.2426ZM21.1878 31.7872H22.5707C23.2175 31.7872 23.7571 31.6693 24.1893 31.4335C24.6215 31.1947 24.9465 30.8396 25.1641 30.368C25.3817 29.8935 25.4906 29.3011 25.4906 28.5907C25.4906 27.8804 25.3817 27.291 25.1641 26.8225C24.9465 26.351 24.6246 25.9988 24.1984 25.7661C23.7752 25.5303 23.2493 25.4124 22.6206 25.4124H21.1878V31.7872Z"
              fill="white"
            />
            <path
              d="M28.7573 33.2426V23.957H34.7058V25.3671H30.4394V27.888H34.2978V29.298H30.4394V33.2426H28.7573Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_663_4069">
              <rect
                width="44.8"
                height="44.8"
                fill="white"
                transform="translate(0.601562 0.599609)"
              />
            </clipPath>
          </defs>
        </svg>

        <p className="text-gray-600 mb-2">Uploading file...</p>
        <div className="w-full flex items-center justify-center">
          <span className="text-[16px] leading-[19.2px] font-[700] text-gray-700 my-2">
            {uploadProgress}%
          </span>
        </div>
      </div>
      <div className="lg:w-[30%] md:w-[50%] w-full mx-auto">
        <div className="h-2 bg-gray-200 rounded-[30px] overflow-hidden">
          <div
            className="h-full bg-[#016AB3] transition-all duration-200 delay-100 ease-in-out"
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

interface Uploaffunctons {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}

const UploadFile: React.FC<Uploaffunctons> = ({
  handleFileChange,
  handleDrop,
  handleDragOver,
}) => {
  return (
    <div
      className="  rounded-lg p-6 flex flex-col items-center justify-center w-full  bg-[#FFFFFF] "
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
            <span className="font-[600] text-[#016AB3] cursor-pointer">
              Click to Upload{" "}
            </span>{" "}
            or drag and drop
          </label>
          <p className="text-[12px] leading-[14.4px] text-[#A8A8A8]">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
          <input
            id="file-upload"
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="mt-6 w-full flex items-center">
        <hr className="h-[2px] bg-[#F0F2F5] w-full" />
        <span className="mx-4 font-[500] text-[12px] leading-[14.4px] text-[#A8A8A8]">
          OR
        </span>
        <hr className="h-[12x] bg-[#F0F2F5] w-full" />
      </div>

      <label
        htmlFor="file-upload"
        className="mt-6 bg-[#016AB3] text-[#FFFFFF] rounded-[6px] text-[14px] font-[400] leading-[16.8px] p-2 w-fit cursor-pointer"
      >
        Browse Files
      </label>
    </div>
  );
};
