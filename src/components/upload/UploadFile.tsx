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
      className="  border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center w-full min-h-64 bg-[#FFFFFF] mb-[15%]"
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
          <p className=" text-[12px] leading-[14.4px] text-[#A8A8A8]">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
          <input
            id="file-upload"
            type="file"
            accept=".svg, .png, .jpg, .gif"
            className="hidden"
            onChange={handleFileChange}
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

export default UploadFile;
