import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const KYC: React.FC<{ name: string }> = ({ name }) => {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFilePreview(file.name); // Display the file name for PDFs
    }
  };

  const { register } = useFormContext(); // Get access to form context

  return (
    <div className="w-full md:h-[300px] h-[284px] flex items-center justify-center gap-5 border-2 border-dashed rounded-[10px] border-[#D6EEFF] mt-7 mb-[7rem]">
      <label htmlFor="kyc-input" className="cursor-pointer">
        <div className="w-full">
          {/* Conditionally render the SVG icon and either the file name or default text */}
          <div className="flex flex-col items-center">
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

            {/* Render the file name if a PDF is uploaded, otherwise show default text */}
            <p className="text-[14px] font-[600] leading-[16.8px] text-[#424242] w-full mt-2">
              {filePreview ? filePreview : "Driver’s License"}
            </p>
          </div>
        </div>
        <input
          type="file"
          id="kyc-input"
          {...register(name)}
          className="hidden"
          accept="application/pdf" // Only allow PDF files
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default KYC;
